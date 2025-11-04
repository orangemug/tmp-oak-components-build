import a from"react";import o from"styled-components";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as t}from"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import"../../../atoms/OakHeading/OakHeading.js";import"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{parseColor as r}from"../../../../styles/helpers/parseColor.js";const e=o(t)`
  direction: rtl;

  & > * {
    direction: ltr;
  }

  scrollbar-color: ${()=>r("bg-decorative2-main")} #fff;

  a{
    color: ${()=>r("navy")};  
    text-decoration: underline;
  }

  a::active {
    color: ${()=>r("text-link-active")};
  }

  a::hover {
    color: ${()=>r("text-link-hover")};
  }

  a::visited {
    color: ${()=>r("text-link-visited")};
  }

  a::pressed {
    color: ${()=>r("text-link-pressed")};
  }

}

`,i=({sanitizedHtml:o})=>{const r=o??"";return a.createElement(t,{$pv:"inner-padding-xl",$pr:"inner-padding-xl",$ba:"border-solid-m",$borderColor:"bg-decorative2-main",$borderRadius:"border-radius-l","data-testid":"oak-teacher-notes-inline"},a.createElement(e,{$overflow:"scroll",$pl:"inner-padding-xl",$height:"all-spacing-12",dangerouslySetInnerHTML:{__html:r}}))};export{i as OakTeacherNotesInline};
//# sourceMappingURL=OakTeacherNotesInline.js.map
