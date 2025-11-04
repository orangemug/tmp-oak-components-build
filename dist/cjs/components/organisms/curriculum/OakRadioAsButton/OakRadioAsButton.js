"use strict";var e=require("react"),r=require("styled-components");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../../atoms/OakBox/OakBox.js"),require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var a=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js"),require("../../../atoms/OakHeading/OakHeading.js");var o=require("../../../atoms/OakIcon/OakIcon.js");require("../../../atoms/OakImage/OakImage.js"),require("../../../atoms/OakSpan/OakSpan.js"),require("../../../atoms/OakLI/OakLI.js"),require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var s=require("../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),t=require("../../../atoms/InternalRadio/InternalRadio.js"),i=require("../../../../styles/helpers/parseColor.js"),n=require("../../../../styles/helpers/parseBorder.js"),l=require("../../../../styles/helpers/parseDropShadow.js"),d=require("../../../../styles/helpers/parseColorFilter.js"),u=require("../../../molecules/OakRadioGroup/OakRadioGroup.js");function k(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=k(e),p=k(r);const O=p.default(o.OakIcon)``,m=p.default(t.InternalRadio)`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${O} {
    filter: ${e=>e.keepIconColor?"none":d.parseColorFilter("white")};
  }

  &:checked:not(:disabled) {
    border: ${n.parseBorder("border-solid-l")};
    border-color: ${i.parseColor("border-primary")};
  }

  &:checked:disabled {
    border: ${n.parseBorder("border-solid-l")};
    border-color: ${i.parseColor("text-disabled")};
  }

  &:hover:not(:disabled) {
    background: ${i.parseColor("bg-primary")};
  }
`,b=p.default(a.OakFlex)`
  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:hover:has(input:not(:disabled)) ${s.InternalCheckBoxLabelHoverDecor} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${i.parseColor("bg-neutral")};
  }

  &:focus-within {
    box-shadow: ${l.parseDropShadow("drop-shadow-centered-lemon")},
      ${l.parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${i.parseColor("black")};
    color: ${i.parseColor("white")};
  }
`;exports.OakRadioAsButton=r=>{const o=e.useId(),{value:t,disabled:i,innerRef:n,displayValue:l,icon:d,onChange:k,...p}=r,{name:h,onValueUpdated:q,currentValue:j}=e.useContext(u.RadioContext),g=e.useRef(null),C=n??g,$=j===t;return c.default.createElement(a.OakFlex,{$minHeight:"all-spacing-8",$position:"relative"},c.default.createElement(b,{$borderRadius:"border-radius-s",$borderColor:"border-neutral-lighter",$ba:"border-solid-s",$background:"white",onClick:e=>{e.target.isEqualNode(C.current)||C.current?.click()},$ph:"inner-padding-s",$pv:"inner-padding-ssx",$gap:"space-between-sssx"},c.default.createElement(m,{...p,id:o,value:t,disabled:i,ref:C,onChange:e=>{q?.(e),k?.(e)},name:h,defaultChecked:$}),d&&c.default.createElement(O,{alt:"",iconName:d}),c.default.createElement(s.InternalCheckBoxLabelHoverDecor,{pointerEvents:"none",htmlFor:o,$font:"heading-7",disabled:i},l)))};
//# sourceMappingURL=OakRadioAsButton.js.map
