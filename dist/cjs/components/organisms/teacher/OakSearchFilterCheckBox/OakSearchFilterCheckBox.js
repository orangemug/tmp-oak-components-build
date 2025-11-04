"use strict";var e=require("react"),r=require("styled-components");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../../atoms/OakBox/OakBox.js"),require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var a=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js"),require("../../../atoms/OakHeading/OakHeading.js");var o=require("../../../atoms/OakIcon/OakIcon.js");require("../../../atoms/OakImage/OakImage.js"),require("../../../atoms/OakSpan/OakSpan.js"),require("../../../atoms/OakLI/OakLI.js"),require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var s=require("../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),t=require("../../../atoms/InternalCheckBox/InternalCheckBox.js"),i=require("../../../../styles/helpers/parseColor.js"),l=require("../../../../styles/helpers/parseBorder.js"),n=require("../../../../styles/helpers/parseDropShadow.js"),d=require("../../../../styles/helpers/parseColorFilter.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var k=u(e),c=u(r);const p=c.default(o.OakIcon)``,O=c.default(t.InternalCheckBox)`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${p} {
    filter: ${e=>e.keepIconColor?"none":d.parseColorFilter("white")};
  }

  &:checked:not(:disabled) {
    border: ${l.parseBorder("border-solid-l")};
    border-color: ${i.parseColor("border-primary")};
  }

  &:checked:disabled {
    border: ${l.parseBorder("border-solid-l")};
    border-color: ${i.parseColor("text-disabled")};
  }

  &:hover:not(:disabled) {
    background: ${i.parseColor("bg-primary")};
  }
`,h=c.default(a.OakFlex)`
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
    box-shadow: ${n.parseDropShadow("drop-shadow-centered-lemon")},
      ${n.parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${i.parseColor("black")};
    color: ${i.parseColor("white")};
  }
`;exports.OakSearchFilterCheckBox=r=>{const{id:o,value:t,disabled:i,innerRef:l,displayValue:n,icon:d,...u}=r,c=e.useRef(null),b=l??c;return k.default.createElement(a.OakFlex,{$minHeight:"all-spacing-8",$position:"relative"},k.default.createElement(h,{$borderRadius:"border-radius-s",$borderColor:"border-neutral-lighter",$ba:"border-solid-s",$background:"white",onClick:e=>{e.target.id!==o&&b.current?.click()},$ph:"inner-padding-s",$pv:"inner-padding-ssx",$gap:"space-between-sssx"},k.default.createElement(O,{id:o,value:t,disabled:i,ref:b,...u}),d&&k.default.createElement(p,{alt:"",iconName:d}),k.default.createElement(s.InternalCheckBoxLabelHoverDecor,{pointerEvents:"none",htmlFor:o,$font:"heading-7",disabled:i},n)))};
//# sourceMappingURL=OakSearchFilterCheckBox.js.map
