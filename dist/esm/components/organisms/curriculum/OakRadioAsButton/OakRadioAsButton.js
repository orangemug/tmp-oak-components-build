import e,{useId as o,useContext as a,useRef as r}from"react";import t from"styled-components";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as s}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as i}from"../../../atoms/OakIcon/OakIcon.js";import"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{InternalCheckBoxLabelHoverDecor as n}from"../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import{InternalRadio as d}from"../../../atoms/InternalRadio/InternalRadio.js";import{parseColor as l}from"../../../../styles/helpers/parseColor.js";import{parseBorder as m}from"../../../../styles/helpers/parseBorder.js";import{parseDropShadow as p}from"../../../../styles/helpers/parseDropShadow.js";import{parseColorFilter as k}from"../../../../styles/helpers/parseColorFilter.js";import{RadioContext as c}from"../../../molecules/OakRadioGroup/OakRadioGroup.js";const O=t(i)``,b=t(d)`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${O} {
    filter: ${e=>e.keepIconColor?"none":k("white")};
  }

  &:checked:not(:disabled) {
    border: ${m("border-solid-l")};
    border-color: ${l("border-primary")};
  }

  &:checked:disabled {
    border: ${m("border-solid-l")};
    border-color: ${l("text-disabled")};
  }

  &:hover:not(:disabled) {
    background: ${l("bg-primary")};
  }
`,h=t(s)`
  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:hover:has(input:not(:disabled)) ${n} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${l("bg-neutral")};
  }

  &:focus-within {
    box-shadow: ${p("drop-shadow-centered-lemon")},
      ${p("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${l("black")};
    color: ${l("white")};
  }
`,u=t=>{const i=o(),{value:d,disabled:l,innerRef:m,displayValue:p,icon:k,onChange:u,...j}=t,{name:g,onValueUpdated:$,currentValue:y}=a(c),f=r(null),x=m??f,I=y===d;return e.createElement(s,{$minHeight:"all-spacing-8",$position:"relative"},e.createElement(h,{$borderRadius:"border-radius-s",$borderColor:"border-neutral-lighter",$ba:"border-solid-s",$background:"white",onClick:e=>{e.target.isEqualNode(x.current)||x.current?.click()},$ph:"inner-padding-s",$pv:"inner-padding-ssx",$gap:"space-between-sssx"},e.createElement(b,{...j,id:i,value:d,disabled:l,ref:x,onChange:e=>{$?.(e),u?.(e)},name:g,defaultChecked:I}),k&&e.createElement(O,{alt:"",iconName:k}),e.createElement(n,{pointerEvents:"none",htmlFor:i,$font:"heading-7",disabled:l},p)))};export{u as OakRadioAsButton};
//# sourceMappingURL=OakRadioAsButton.js.map
