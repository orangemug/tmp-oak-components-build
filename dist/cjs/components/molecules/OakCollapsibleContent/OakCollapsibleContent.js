"use strict";var e=require("react"),r=require("styled-components");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var a=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var s=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js"),require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var i=require("../../../styles/helpers/parseColor.js"),o=require("../../../styles/helpers/parseSpacing.js"),t=require("../../../styles/helpers/parseBorderRadius.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var k=d(e);const u=d(r).default(a.OakBox)`
  &::-webkit-scrollbar-thumb {
    border-radius: ${t.parseBorderRadius("border-radius-m")};
    background-color: ${i.parseColor("grey50")};
  }
  &::-webkit-scrollbar-track {
    border-radius: ${t.parseBorderRadius("border-radius-m")};
    background-color: ${i.parseColor("white")};
  }
  &::-webkit-scrollbar {
    width: ${o.parseSpacing("all-spacing-3")};
    height: ${o.parseSpacing("all-spacing-3")};
    border-radius: ${t.parseBorderRadius("border-radius-m")};
  }
`;exports.OakCollapsibleContent=({isOpen:e,children:r,id:i,...o})=>k.default.createElement(a.OakBox,{$display:e?"block":"none",id:i},k.default.createElement(s.OakFlex,{$background:"bg-neutral-stronger",$ph:"inner-padding-m",$pv:"inner-padding-xl",$borderRadius:"border-radius-m",...o},k.default.createElement(u,{$overflow:"auto",$maxHeight:"100%",$width:"100%",$pr:"inner-padding-m"},r)));
//# sourceMappingURL=OakCollapsibleContent.js.map
