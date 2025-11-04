"use strict";var e=require("react"),a=require("styled-components");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../../atoms/OakBox/OakBox.js");require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js"),require("../../../atoms/OakFlex/OakFlex.js"),require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js"),require("../../../atoms/OakHeading/OakHeading.js"),require("../../../atoms/OakImage/OakImage.js"),require("../../../atoms/OakSpan/OakSpan.js"),require("../../../atoms/OakLI/OakLI.js"),require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var o=require("../../../../styles/helpers/parseColor.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=t(e);const i=t(a).default(r.OakBox)`
  direction: rtl;

  & > * {
    direction: ltr;
  }

  scrollbar-color: ${()=>o.parseColor("bg-decorative2-main")} #fff;

  a{
    color: ${()=>o.parseColor("navy")};  
    text-decoration: underline;
  }

  a::active {
    color: ${()=>o.parseColor("text-link-active")};
  }

  a::hover {
    color: ${()=>o.parseColor("text-link-hover")};
  }

  a::visited {
    color: ${()=>o.parseColor("text-link-visited")};
  }

  a::pressed {
    color: ${()=>o.parseColor("text-link-pressed")};
  }

}

`;exports.OakTeacherNotesInline=({sanitizedHtml:e})=>{const a=e??"";return s.default.createElement(r.OakBox,{$pv:"inner-padding-xl",$pr:"inner-padding-xl",$ba:"border-solid-m",$borderColor:"bg-decorative2-main",$borderRadius:"border-radius-l","data-testid":"oak-teacher-notes-inline"},s.default.createElement(i,{$overflow:"scroll",$pl:"inner-padding-xl",$height:"all-spacing-12",dangerouslySetInnerHTML:{__html:a}}))};
//# sourceMappingURL=OakTeacherNotesInline.js.map
