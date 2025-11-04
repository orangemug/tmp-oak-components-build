import e,{forwardRef as a,useContext as r}from"react";import o,{css as t}from"styled-components";import{RadioContext as i}from"../OakRadioGroup/OakRadioGroup.js";import{parseColor as s}from"../../../styles/helpers/parseColor.js";import{parseSpacing as d}from"../../../styles/helpers/parseSpacing.js";import{parseBorder as l}from"../../../styles/helpers/parseBorder.js";import{responsiveStyle as n}from"../../../styles/utils/responsiveStyle.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as m}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as p}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import{OakLabel as b}from"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";const k=o(b)`
  ${e=>!e.disabled&&t`
      cursor: pointer;
    `}

  display: flex;
  ${n("gap",(e=>e.$labelGap),d)}
  ${n("align-items",(e=>e.$labelAlignItems))}
`,$=o.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  ${e=>!e.disabled&&t`
      cursor: pointer;
    `}
`,c=o(p)`
  border-radius: 50%;

  ${e=>!e.$disableFocusRing&&t`
      ${$}:focus-visible ~ &::before {
        content: "";
        height: ${d("all-spacing-7")};
        width: ${d("all-spacing-7")};
        background: "transparent"
        display: block;
        position: absolute;
        border-radius: 50%;
        border: ${l("border-solid-m")} ${s("grey60")};
        box-shadow: ${`inset 0 0 0 0.13rem ${s("lemon")}`};
      }`}

  ${$}:checked ~ &::after {
    content: "";
    height: ${e=>d(e.$radioInnerSize)};
    width: ${e=>d(e.$radioInnerSize)};
    background: ${s("black")};
    position: absolute;
    border-radius: 50%;
    border: ${l("border-solid-m")} ${s("white")};
  }
`,O=o(c)`
  ${$}:checked ~ &::after {
    content: "";
    height: ${e=>d(e.$radioInnerSize)};
    width: ${e=>d(e.$radioInnerSize)};
    background: ${s("bg-btn-primary-disabled")};
    position: absolute;
    border-radius: 50%;
    border: ${l("border-solid-m")} ${s("white")};
  }
`,g=a(((a,o)=>{const t=r(i),{currentValue:s,name:d,onValueUpdated:l}=t,{id:n,label:p,value:b,tabIndex:g,disabled:u,required:h,$labelGap:j="space-between-ssx",$labelAlignItems:y="center",$font:f="body-1","data-testid":I,disableFocusRing:S=!1,radioInnerSize:x="all-spacing-4",radioOuterSize:G="all-spacing-6",radioBorderWidth:w="border-solid-m",radioBackground:F="bg-primary",checkedRadioBorderWidth:R="border-solid-m",...A}=a,z=b===s,C=u||t.disabled,L=z?R:w;return e.createElement(m,{...A},e.createElement(k,{htmlFor:n,$labelAlignItems:y,$labelGap:j,$font:f,"data-testid":I,disabled:C},e.createElement($,{name:d,id:n,value:b,onChange:l,checked:b===s,tabIndex:g,disabled:C,ref:o,required:h}),C?e.createElement(O,{$height:G,$width:G,$ba:L,$borderColor:"bg-btn-primary-disabled",$flexGrow:0,$flexShrink:0,$alignItems:"center",$justifyContent:"center",$background:F,$disableFocusRing:!!S,$radioInnerSize:x}):e.createElement(c,{$height:G,$width:G,$ba:L,$borderColor:"black",$flexGrow:0,$flexShrink:0,$alignItems:"center",$justifyContent:"center",$background:F,$disableFocusRing:!!S,$radioInnerSize:x}),p))}));export{g as OakRadioButton};
//# sourceMappingURL=OakRadioButton.js.map
