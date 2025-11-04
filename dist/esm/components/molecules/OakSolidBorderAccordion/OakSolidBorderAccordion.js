import a from"react";import o from"styled-components";import{InternalChevronAccordion as t}from"../InternalChevronAccordion/InternalChevronAccordion.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as r}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as e}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";const i=o(e)`
  position: relative;
  border-width: 2px;
`,m=o(r)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
  -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
`,s=({header:o,children:r,id:e,initialOpen:s,...p})=>a.createElement(i,{$position:"relative",$flexDirection:"column",$borderStyle:"solid",$borderColor:"border-primary"},a.createElement(t,{header:o,id:e,initialOpen:s,$pv:"inner-padding-none",...p},r,a.createElement(m,null)));export{s as OakSolidBorderAccordion};
//# sourceMappingURL=OakSolidBorderAccordion.js.map
