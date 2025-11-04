import a from"react";import r from"styled-components";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as o}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseColor as e}from"../../../styles/helpers/parseColor.js";import{parseSpacing as s}from"../../../styles/helpers/parseSpacing.js";import{parseBorderRadius as m}from"../../../styles/helpers/parseBorderRadius.js";const i=r(o)`
  &::-webkit-scrollbar-thumb {
    border-radius: ${m("border-radius-m")};
    background-color: ${e("grey50")};
  }
  &::-webkit-scrollbar-track {
    border-radius: ${m("border-radius-m")};
    background-color: ${e("white")};
  }
  &::-webkit-scrollbar {
    width: ${s("all-spacing-3")};
    height: ${s("all-spacing-3")};
    border-radius: ${m("border-radius-m")};
  }
`,p=({isOpen:r,children:e,id:s,...m})=>a.createElement(o,{$display:r?"block":"none",id:s},a.createElement(t,{$background:"bg-neutral-stronger",$ph:"inner-padding-m",$pv:"inner-padding-xl",$borderRadius:"border-radius-m",...m},a.createElement(i,{$overflow:"auto",$maxHeight:"100%",$width:"100%",$pr:"inner-padding-m"},e)));export{p as OakCollapsibleContent};
//# sourceMappingURL=OakCollapsibleContent.js.map
