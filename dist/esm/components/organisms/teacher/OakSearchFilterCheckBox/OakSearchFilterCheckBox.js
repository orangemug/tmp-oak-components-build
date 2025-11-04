import e,{useRef as o}from"react";import a from"styled-components";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as r}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as t}from"../../../atoms/OakIcon/OakIcon.js";import"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{InternalCheckBoxLabelHoverDecor as s}from"../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import{InternalCheckBox as i}from"../../../atoms/InternalCheckBox/InternalCheckBox.js";import{parseColor as n}from"../../../../styles/helpers/parseColor.js";import{parseBorder as d}from"../../../../styles/helpers/parseBorder.js";import{parseDropShadow as m}from"../../../../styles/helpers/parseDropShadow.js";import{parseColorFilter as l}from"../../../../styles/helpers/parseColorFilter.js";const p=a(t)``,k=a(i)`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${p} {
    filter: ${e=>e.keepIconColor?"none":l("white")};
  }

  &:checked:not(:disabled) {
    border: ${d("border-solid-l")};
    border-color: ${n("border-primary")};
  }

  &:checked:disabled {
    border: ${d("border-solid-l")};
    border-color: ${n("text-disabled")};
  }

  &:hover:not(:disabled) {
    background: ${n("bg-primary")};
  }
`,c=a(r)`
  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:hover:has(input:not(:disabled)) ${s} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${n("bg-neutral")};
  }

  &:focus-within {
    box-shadow: ${m("drop-shadow-centered-lemon")},
      ${m("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${n("black")};
    color: ${n("white")};
  }
`,O=a=>{const{id:t,value:i,disabled:n,innerRef:d,displayValue:m,icon:l,...O}=a,b=o(null),h=d??b;return e.createElement(r,{$minHeight:"all-spacing-8",$position:"relative"},e.createElement(c,{$borderRadius:"border-radius-s",$borderColor:"border-neutral-lighter",$ba:"border-solid-s",$background:"white",onClick:e=>{e.target.id!==t&&h.current?.click()},$ph:"inner-padding-s",$pv:"inner-padding-ssx",$gap:"space-between-sssx"},e.createElement(k,{id:t,value:i,disabled:n,ref:h,...O}),l&&e.createElement(p,{alt:"",iconName:l}),e.createElement(s,{pointerEvents:"none",htmlFor:t,$font:"heading-7",disabled:n},m)))};export{O as OakSearchFilterCheckBox};
//# sourceMappingURL=OakSearchFilterCheckBox.js.map
