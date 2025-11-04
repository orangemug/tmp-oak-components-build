import o,{useRef as e}from"react";import t from"styled-components";import{parseColor as r}from"../../../styles/helpers/parseColor.js";import{getBreakpoint as s}from"../../../styles/utils/responsiveStyle.js";import{spacingStyle as n}from"../../../styles/utils/spacingStyle.js";import{sizeStyle as i}from"../../../styles/utils/sizeStyle.js";const a=t.input`
  appearance: none !important;
  border: 0;
  border-radius: 0;
  border-color: transparent;
  box-shadow: none;
  font-family: inherit;
  background: transparent;
  outline: none;
  color: inherit;

  @media (max-width: ${s("small")}px) {
    /* iOS zooms in on inputs with font sizes <16px on mobile */
    font-size: 16px;
  }

  ::placeholder {
    color: ${({theme:o})=>o&&o.uiColors&&r(o.uiColors["text-subdued"])};
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

  ${n}
  ${i}
`,l=t=>{const{onInitialFocus:r,onFocus:s,...n}=t,i=e(!1);return o.createElement(a,{...n,onFocus:o=>{!i.current&&t.onInitialFocus&&(t.onInitialFocus(o),i.current=!0),t.onFocus&&t.onFocus(o)}})};export{l as InternalTextInput};
//# sourceMappingURL=InternalTextInput.js.map
