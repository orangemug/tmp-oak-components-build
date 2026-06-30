import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { parseColor } from '../helpers/parseColor.js';
import '../theme/color.js';
import '../theme/typography.js';

/**
 * This is our global stylesheet. It's for resets in addition to reset.styles.ts
 * which is taken from a publically available reset. We want to minimise global
 * styles where possible so if you add any styles here please comment with what
 * they are doing and why they belong here (rather than in component specific
 * styles)
 */
var oakGlobalCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html,\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: __Lexend_866216, __Lexend_Fallback_866216, Lexend, sans-serif;\n    font-weight: 300;\n    line-height: 1.4;\n  }\n\n  /* stylelint-disable */\n  body,\n  #__next {\n    /* stylelint-enable */\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    color: ", ";\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n    font-family: inherit;\n\n    /*\n     * Remove grey background on tap on ios\n     */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  button {\n    /*\n     * some browsers have a small margin by default\n     * @see https://github.com/oaknational/Oak-Web-Application/issues/709\n     */\n    margin: 0;\n\n    /*\n     * Remove grey background on tap on ios\n     */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  /*\n  * Inline styling for mathjax equations\n  */\n  mjx-container {\n    display: inline-grid !important;\n    margin: 0 !important;\n  }\n"], ["\n  html,\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: __Lexend_866216, __Lexend_Fallback_866216, Lexend, sans-serif;\n    font-weight: 300;\n    line-height: 1.4;\n  }\n\n  /* stylelint-disable */\n  body,\n  #__next {\n    /* stylelint-enable */\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    color: ", ";\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n    font-family: inherit;\n\n    /*\n     * Remove grey background on tap on ios\n     */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  button {\n    /*\n     * some browsers have a small margin by default\n     * @see https://github.com/oaknational/Oak-Web-Application/issues/709\n     */\n    margin: 0;\n\n    /*\n     * Remove grey background on tap on ios\n     */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  /*\n  * Inline styling for mathjax equations\n  */\n  mjx-container {\n    display: inline-grid !important;\n    margin: 0 !important;\n  }\n"])), parseColor("text-primary"));
var templateObject_1;

export { oakGlobalCss };
