export default function startup(Prism: any) {
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  /**
   * Plugin name which is used as a class name for <pre> which is activating the plugin
   * @type {String}
   */
  const PLUGIN_NAME = 'line-numbers';

  /**
   * Regular expression used for determining line breaks
   * @type {RegExp}
   */
  const NEW_LINE_EXP = /\n(?!$)/g;

  /**
   * Global exports
   */
  const config = (Prism.plugins.lineNumbers = {
    /**
     * Get node for provided line number
     * @param {Element} element pre element
     * @param {Number} number line number
     * @return {Element|undefined}
     */
    getLine(element: HTMLElement, number: number) {
      if (
        element.tagName !== 'PRE' ||
        !element.classList.contains(PLUGIN_NAME)
      ) {
        return;
      }

      const lineNumberRows = element.querySelector('.line-numbers-rows');
      if (!lineNumberRows) {
        return;
      }
      const lineNumberStart =
        parseInt(element.getAttribute('data-start') || '', 10) || 1;
      const lineNumberEnd =
        lineNumberStart + (lineNumberRows.children.length - 1);

      if (number < lineNumberStart) {
        number = lineNumberStart;
      }
      if (number > lineNumberEnd) {
        number = lineNumberEnd;
      }

      const lineIndex = number - lineNumberStart;

      return lineNumberRows.children[lineIndex];
    },

    /**
     * Resizes the line numbers of the given element.
     *
     * This function will not add line numbers. It will only resize existing ones.
     * @param {HTMLElement} element A `<pre>` element with line numbers.
     * @returns {void}
     */
    resize(element: HTMLElement) {
      resizeElements([element]);
    },

    /**
     * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
     * the current viewport.
     *
     * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
     *
     * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
     *
     * @type {boolean}
     */
    assumeViewportIndependence: true,
  });

  /**
   * Resizes the given elements.
   *
   * @param {HTMLElement[]} elements
   */
  function resizeElements(elements: HTMLElement[]) {
    elements = elements.filter((e) => {
      const codeStyles = getStyles(e);
      const whiteSpace = codeStyles?.whiteSpace;
      return whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line';
    });

    if (elements.length == 0) {
      return;
    }

    interface Info {
      element: HTMLElement;
      lines: string[] | undefined;
      lineHeights: (number | undefined)[];
      oneLinerHeight: number;
      sizer: HTMLElement;
    }

    const infos: Info[] = elements
      .map((element) => {
        const codeElement = element.querySelector('code');
        const lineNumbersWrapper = element.querySelector('.line-numbers-rows');
        if (!codeElement || !lineNumbersWrapper) {
          return undefined;
        }

        /** @type {HTMLElement} */
        let lineNumberSizer: HTMLElement | null = element.querySelector(
          '.line-numbers-sizer',
        );
        const codeLines = codeElement.textContent?.split(NEW_LINE_EXP);

        if (!lineNumberSizer) {
          lineNumberSizer = document.createElement('span');
          lineNumberSizer.className = 'line-numbers-sizer';

          codeElement.appendChild(lineNumberSizer);
        }

        lineNumberSizer.innerHTML = '0';
        lineNumberSizer.style.display = 'block';

        const oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
        lineNumberSizer.innerHTML = '';

        return {
          element,
          lines: codeLines,
          lineHeights: [] as (number | undefined)[],
          oneLinerHeight,
          sizer: lineNumberSizer,
        };
      })
      .filter((a): a is Info => !!a);

    infos.forEach((info) => {
      if (!info) {
        return;
      }
      const lineNumberSizer = info.sizer;
      const { lines = [] } = info;
      const { lineHeights } = info;
      const { oneLinerHeight } = info;

      lineHeights[lines.length - 1] = undefined;
      lines.forEach((line, index) => {
        if (line && line.length > 1) {
          const e = lineNumberSizer.appendChild(document.createElement('span'));
          e.style.display = 'block';
          e.textContent = line;
        } else {
          lineHeights[index] = oneLinerHeight;
        }
      });
    });

    infos.forEach((info) => {
      const lineNumberSizer = info.sizer;
      const { lineHeights } = info;

      let childIndex = 0;
      for (let i = 0; i < lineHeights.length; i++) {
        if (lineHeights[i] === undefined) {
          lineHeights[i] = lineNumberSizer.children[
            childIndex++
          ].getBoundingClientRect().height;
        }
      }
    });

    infos.forEach((info) => {
      const lineNumberSizer = info.sizer;
      const wrapper = info.element.querySelector<HTMLElement>(
        '.line-numbers-rows',
      );

      lineNumberSizer.style.display = 'none';
      lineNumberSizer.innerHTML = '';

      info.lineHeights.forEach((height, lineNumber) => {
        if (!wrapper) {
          return;
        }
        (wrapper.children[
          lineNumber
        ] as HTMLElement).style.height = `${height}px`;
      });
    });
  }

  /**
   * Returns style declarations for the element
   * @param {Element} element
   */
  var getStyles = function (element: HTMLElement) {
    if (!element) {
      return null;
    }

    return (
      window.getComputedStyle?.(element) ||
      (element as any).currentStyle ||
      null
    );
  };

  let lastWidth: number;
  window.addEventListener('resize', () => {
    if (config.assumeViewportIndependence && lastWidth === window.innerWidth) {
      return;
    }
    lastWidth = window.innerWidth;

    resizeElements(
      Array.prototype.slice.call(
        document.querySelectorAll(`pre.${PLUGIN_NAME}`),
      ),
    );
  });

  Prism.hooks.add('complete', (env: any) => {
    if (!env.code) {
      return;
    }

    const code: Element = /** @type {Element} */ env.element;
    const pre: HTMLElement = /** @type {HTMLElement} */ code.parentNode as HTMLElement;

    // works only for <code> wrapped inside <pre> (not inline)
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Abort if line numbers already exists
    if (code.querySelector('.line-numbers-rows')) {
      return;
    }

    // only add line numbers if <code> or one of its ancestors has the `line-numbers` class
    if (!(Prism.util as any).isActive(code, PLUGIN_NAME)) {
      return;
    }

    // Remove the class 'line-numbers' from the <code>
    code.classList.remove(PLUGIN_NAME);
    // Add the class 'line-numbers' to the <pre>
    pre.classList.add(PLUGIN_NAME);

    const match = env.code.match(NEW_LINE_EXP);
    const linesNum = match ? match.length + 1 : 1;
    let lineNumbersWrapper;

    const lines = new Array(linesNum + 1).join('<span></span>');

    lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = `linenumber ${
        parseInt(pre.getAttribute('data-start') || '', 10) - 1
      }`;
    }

    env.element.appendChild(lineNumbersWrapper);

    // this breaks line numbers on smaller screen sizes, and in the speaker view
    // resizeElements([pre]);

    Prism.hooks.run('line-numbers', env);
  });

  Prism.hooks.add('line-numbers', (env: any) => {
    env.plugins = env.plugins || {};
    env.plugins.lineNumbers = true;
  });
}
