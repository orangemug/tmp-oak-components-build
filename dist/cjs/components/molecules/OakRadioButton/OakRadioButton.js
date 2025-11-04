"use strict";var e=require("react"),a=require("styled-components"),r=require("../OakRadioGroup/OakRadioGroup.js"),s=require("../../../styles/helpers/parseColor.js"),i=require("../../../styles/helpers/parseSpacing.js"),o=require("../../../styles/helpers/parseBorder.js"),t=require("../../../styles/utils/responsiveStyle.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var d=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var l=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js"),require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js");var n=require("../../atoms/OakLabel/OakLabel.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var p=u(e),c=u(a);const b=c.default(n.OakLabel)`
  ${e=>!e.disabled&&a.css`
      cursor: pointer;
    `}

  display: flex;
  ${t.responsiveStyle("gap",(e=>e.$labelGap),i.parseSpacing)}
  ${t.responsiveStyle("align-items",(e=>e.$labelAlignItems))}
`,k=c.default.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  ${e=>!e.disabled&&a.css`
      cursor: pointer;
    `}
`,$=c.default(l.OakFlex)`
  border-radius: 50%;

  ${e=>!e.$disableFocusRing&&a.css`
      ${k}:focus-visible ~ &::before {
        content: "";
        height: ${i.parseSpacing("all-spacing-7")};
        width: ${i.parseSpacing("all-spacing-7")};
        background: "transparent"
        display: block;
        position: absolute;
        border-radius: 50%;
        border: ${o.parseBorder("border-solid-m")} ${s.parseColor("grey60")};
        box-shadow: ${`inset 0 0 0 0.13rem ${s.parseColor("lemon")}`};
      }`}

  ${k}:checked ~ &::after {
    content: "";
    height: ${e=>i.parseSpacing(e.$radioInnerSize)};
    width: ${e=>i.parseSpacing(e.$radioInnerSize)};
    background: ${s.parseColor("black")};
    position: absolute;
    border-radius: 50%;
    border: ${o.parseBorder("border-solid-m")} ${s.parseColor("white")};
  }
`,m=c.default($)`
  ${k}:checked ~ &::after {
    content: "";
    height: ${e=>i.parseSpacing(e.$radioInnerSize)};
    width: ${e=>i.parseSpacing(e.$radioInnerSize)};
    background: ${s.parseColor("bg-btn-primary-disabled")};
    position: absolute;
    border-radius: 50%;
    border: ${o.parseBorder("border-solid-m")} ${s.parseColor("white")};
  }
`,O=e.forwardRef(((a,s)=>{const i=e.useContext(r.RadioContext),{currentValue:o,name:t,onValueUpdated:l}=i,{id:n,label:u,value:c,tabIndex:O,disabled:g,required:h,$labelGap:q="space-between-ssx",$labelAlignItems:j="center",$font:f="body-1","data-testid":S,disableFocusRing:y=!1,radioInnerSize:x="all-spacing-4",radioOuterSize:I="all-spacing-6",radioBorderWidth:C="border-solid-m",radioBackground:R="bg-primary",checkedRadioBorderWidth:v="border-solid-m",...G}=a,w=c===o,F=g||i.disabled,B=w?v:C;return p.default.createElement(d.OakBox,{...G},p.default.createElement(b,{htmlFor:n,$labelAlignItems:j,$labelGap:q,$font:f,"data-testid":S,disabled:F},p.default.createElement(k,{name:t,id:n,value:c,onChange:l,checked:c===o,tabIndex:O,disabled:F,ref:s,required:h}),F?p.default.createElement(m,{$height:I,$width:I,$ba:B,$borderColor:"bg-btn-primary-disabled",$flexGrow:0,$flexShrink:0,$alignItems:"center",$justifyContent:"center",$background:R,$disableFocusRing:!!y,$radioInnerSize:x}):p.default.createElement($,{$height:I,$width:I,$ba:B,$borderColor:"black",$flexGrow:0,$flexShrink:0,$alignItems:"center",$justifyContent:"center",$background:R,$disableFocusRing:!!y,$radioInnerSize:x}),u))}));exports.OakRadioButton=O;
//# sourceMappingURL=OakRadioButton.js.map
