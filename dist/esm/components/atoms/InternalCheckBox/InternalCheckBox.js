import e,{forwardRef as r,useRef as o}from"react";import t,{css as s}from"styled-components";import{parseBorderRadius as d}from"../../../styles/helpers/parseBorderRadius.js";import{parseColor as a}from"../../../styles/helpers/parseColor.js";import{parseDropShadow as n}from"../../../styles/helpers/parseDropShadow.js";import{borderStyle as i}from"../../../styles/utils/borderStyle.js";import{colorStyle as c}from"../../../styles/utils/colorStyle.js";import{sizeStyle as l}from"../../../styles/utils/sizeStyle.js";import{spacingStyle as p}from"../../../styles/utils/spacingStyle.js";const u=t(r(((r,t)=>{const{onHovered:s,...d}=r,a=o(Date.now());return e.createElement("input",{ref:t,type:"checkbox",onMouseEnter:()=>{a.current=Date.now()},onMouseLeave:()=>{const e=Date.now()-a.current;s&&s(r.value,r.id,e)},name:r.id,...d})})))`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  outline: none;
  ${i}
  ${c}
  ${p}
  ${l}

  border-color: ${e=>a(e.$uncheckedBorderColor)};

  &:checked {
    ${e=>s`
      background: ${a(e.$checkedBackground)};
      border-color: ${a(e.$checkedBorderColor)};
    `};
  }

  &:disabled {
    pointer-events: none;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: ${e=>a(e.$checkedBackground)};
    }
  }
`;u.defaultProps={$borderRadius:"border-radius-xs",$ba:"border-solid-m",$borderColor:"text-primary",$checkedBackground:"text-primary"};const m=t(u)`
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
      border-radius: ${e=>d(e.$hoverBorderRadius)};
      background: ${e=>a(e.$checkedBackground)};
    }
  }
`;m.defaultProps={$hoverBorderRadius:"border-radius-xs"};const h=s`
  &:focus-visible {
    box-shadow: ${n("drop-shadow-centered-lemon")};
  }
`;t(u)`
  ${h}
`;const $=t(m)`
  ${h}
`;export{u as InternalCheckBox,m as InternalCheckBoxHover,$ as InternalCheckBoxHoverFocus};
//# sourceMappingURL=InternalCheckBox.js.map
