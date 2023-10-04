import { RevealPlugin } from '../../';

export interface HighlightOptions {
  highlight?: {
    highlightOnLoad?: boolean;
    escapeHTML?: boolean;
  };
}

const HighlightPlugin: RevealPlugin<HighlightOptions>;

export default HighlightPlugin;
