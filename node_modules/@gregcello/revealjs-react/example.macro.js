const { createMacro } = require('babel-plugin-macros');
const generate = require('@babel/generator').default;
const prettier = require('prettier');

const packageName = '@gregcello/revealjs-react';

function addNeededImports(state, babel) {
  const t = babel.types;
  const importsToAdd = ['Example'];

  // check if there is an existing react-i18next import
  const existingImport = state.file.path.node.body.find(
    (importNode) =>
      t.isImportDeclaration(importNode) &&
      importNode.source.value === packageName,
  );

  // append Trans to existing or add a new react-i18next import for the Trans
  if (existingImport) {
    importsToAdd.forEach((name) => {
      if (
        existingImport.specifiers.findIndex(
          (specifier) => specifier.imported && specifier.imported.name === name,
        ) === -1
      ) {
        existingImport.specifiers.push(
          t.importSpecifier(t.identifier(name), t.identifier(name)),
        );
      }
    });
  } else {
    state.file.path.node.body.unshift(
      t.importDeclaration(
        importsToAdd.map((name) =>
          t.importSpecifier(t.identifier(name), t.identifier(name)),
        ),
        t.stringLiteral(packageName),
      ),
    );
  }
}
function cloneExistingAttributes(attributes) {
  return attributes.reduce((mem, attr) => {
    mem.push(attr.node);
    return mem;
  }, []);
}

function getExampleSource(p) {
  const generatedText = generate(p.parentPath.node, {}).code;
  const formattedText = prettier
    .format(generatedText, {
      parser(text, { 'babel-ts': babel }) {
        const ast = babel(`function Thing() {
  return (
    ${text}
  );
}`);
        return ast;
      },
    })
    .replace(
      `function Thing() {
  return (
`,
      '',
    )
    .replace(
      `
  );
}`,
      '',
    )
    .replace(
      `<Example>
    `,
      '',
    )
    .replace(`</Example>`, '');
  return formattedText;
}

function addSourceString(t, state, sourceCode, sourceName) {
  state.file.ast.program.body.unshift(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(sourceName),
        t.stringLiteral(sourceCode),
      ),
    ]),
  );
}

function ExampleTransform({ references, state, babel }) {
  const t = babel.types;
  const { Example } = references;
  // assert we have the @gregcello/revealjs-react Example component imported
  addNeededImports(state, babel);

  let sourceIdx = 1;

  Example.forEach((referencePath) => {
    if (referencePath.parentPath.type === 'JSXOpeningElement') {
      const p = referencePath.parentPath;
      const sourceName = `__$$example_src_code$$__${sourceIdx++}`;
      const sourceCode = getExampleSource(p);
      const source = t.jSXAttribute(
        t.jSXIdentifier('source'),
        t.jSXExpressionContainer(t.identifier(sourceName)),
      );
      addSourceString(t, state, sourceCode, sourceName);
      const newNode = t.jSXOpeningElement(
        t.jSXIdentifier('Example'),
        cloneExistingAttributes(p.get('attributes')).concat([source]),
        false,
      );
      referencePath.parentPath.replaceWith(newNode);
    }
  });
}

module.exports = createMacro(ExampleTransform);
