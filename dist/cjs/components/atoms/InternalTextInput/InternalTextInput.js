"use strict";var e=require("react"),t=require("styled-components"),o=require("../../../styles/helpers/parseColor.js"),r=require("../../../styles/utils/responsiveStyle.js"),n=require("../../../styles/utils/spacingStyle.js"),s=require("../../../styles/utils/sizeStyle.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(e);const l=i(t).default.input`
  appearance: none !important;
  border: 0;
  border-radius: 0;
  border-color: transparent;
  box-shadow: none;
  font-family: inherit;
  background: transparent;
  outline: none;
  color: inherit;

  @media (max-width: ${r.getBreakpoint("small")}px) {
    /* iOS zooms in on inputs with font sizes <16px on mobile */
    font-size: 16px;
  }

  ::placeholder {
    color: ${({theme:e})=>e&&e.uiColors&&o.parseColor(e.uiColors["text-subdued"])};
  }

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    appearance: none;
  }

  :disabled {
    cursor: not-allowed;
  }

  ${n.spacingStyle}
  ${s.sizeStyle}
`;exports.InternalTextInput=t=>{const{onInitialFocus:o,onFocus:r,...n}=t,s=e.useRef(!1);return a.default.createElement(l,{...n,onFocus:e=>{!s.current&&t.onInitialFocus&&(t.onInitialFocus(e),s.current=!0),t.onFocus&&t.onFocus(e)}})};
//# sourceMappingURL=InternalTextInput.js.map
