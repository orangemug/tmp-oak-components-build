"use strict";const e=require("styled-components").css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: __Lexend_866216, __Lexend_Fallback_866216, Lexend, sans-serif;
    font-weight: 300;
    line-height: 1.4;
  }

  /* stylelint-disable */
  body,
  #__next {
    /* stylelint-enable */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: inherit;

    /*
     * Remove grey background on tap on ios
     */
    -webkit-tap-highlight-color: transparent;
  }

  button {
    /*
     * some browsers have a small margin by default
     * @see https://github.com/oaknational/Oak-Web-Application/issues/709
     */
    margin: 0;

    /*
     * Remove grey background on tap on ios
     */
    -webkit-tap-highlight-color: transparent;
  }

  /*
  * Inline styling for mathjax equations
  */
  mjx-container {
    display: inline-grid !important;
    margin: 0 !important;
  }
`;exports.oakGlobalCss=e;
//# sourceMappingURL=oak.styles.js.map
