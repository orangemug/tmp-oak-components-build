"use strict";var e=require("react"),t=require("styled-components"),r=require("../../../styles/utils/colorStyle.js"),n=require("../../../styles/utils/displayStyle.js"),o=require("../../../styles/utils/spacingStyle.js"),s=require("../../../styles/utils/typographyStyle.js"),l=require("../../../styles/utils/dropShadowStyle.js"),u=require("../../../styles/utils/borderStyle.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(e),y=i(t);const c=t.css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
  font-family: unset;
  outline: none;
  ${s.typographyStyle}
  ${r.colorStyle}
  ${o.spacingStyle}
  ${n.displayStyle}
  ${u.borderStyle}
  ${l.dropShadowStyle}
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`,d=y.default((t=>{const{onClick:r,onHovered:n,element:o="button",...s}=t,l=e.useRef(Date.now());return a.default.createElement(o,{...s,onClick:e=>{r&&r(e)},onMouseEnter:()=>{l.current=Date.now()},onMouseLeave:e=>{const t=Date.now()-l.current;n&&n(e,t)}})}))`
  ${c}
`;exports.InternalButton=d;
//# sourceMappingURL=InternalButton.js.map
