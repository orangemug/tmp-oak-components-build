"use strict";var e=require("react"),r=require("styled-components"),o=require("../../../styles/helpers/parseBorderRadius.js"),s=require("../../../styles/helpers/parseColor.js"),t=require("../../../styles/helpers/parseDropShadow.js"),a=require("../../../styles/utils/borderStyle.js"),d=require("../../../styles/utils/colorStyle.js"),n=require("../../../styles/utils/sizeStyle.js"),l=require("../../../styles/utils/spacingStyle.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=c(e),u=c(r);const p=e.forwardRef(((r,o)=>{const{onHovered:s,...t}=r,a=e.useRef(Date.now());return i.default.createElement("input",{ref:o,type:"checkbox",onMouseEnter:()=>{a.current=Date.now()},onMouseLeave:()=>{const e=Date.now()-a.current;s&&s(r.value,r.id,e)},name:r.id,...t})})),h=u.default(p)`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  outline: none;
  ${a.borderStyle}
  ${d.colorStyle}
  ${l.spacingStyle}
  ${n.sizeStyle}

  border-color: ${e=>s.parseColor(e.$uncheckedBorderColor)};

  &:checked {
    ${e=>r.css`
      background: ${s.parseColor(e.$checkedBackground)};
      border-color: ${s.parseColor(e.$checkedBorderColor)};
    `};
  }

  &:disabled {
    pointer-events: none;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: ${e=>s.parseColor(e.$checkedBackground)};
    }
  }
`;h.defaultProps={$borderRadius:"border-radius-xs",$ba:"border-solid-m",$borderColor:"text-primary",$checkedBackground:"text-primary"};const $=u.default(h)`
  /* @media wrapper is required to prevent hover effect on iOS Safari */

  @media (hover: hover) {
    &:hover:not(&:checked):not(&:disabled)::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      transform: translate(-50%, -50%);
      border-radius: ${e=>o.parseBorderRadius(e.$hoverBorderRadius)};
      background: ${e=>s.parseColor(e.$checkedBackground)};
    }
  }
`;$.defaultProps={$hoverBorderRadius:"border-radius-xs"};const b=r.css`
  &:focus-visible {
    box-shadow: ${t.parseDropShadow("drop-shadow-centered-lemon")};
  }
`;u.default(h)`
  ${b}
`;const f=u.default($)`
  ${b}
`;exports.InternalCheckBox=h,exports.InternalCheckBoxHover=$,exports.InternalCheckBoxHoverFocus=f;
//# sourceMappingURL=InternalCheckBox.js.map
