import a from"react";import o from"styled-components";import{parseColor as t}from"../../../styles/helpers/parseColor.js";import{parseColorFilter as e}from"../../../styles/helpers/parseColorFilter.js";import{parseDropShadow as r}from"../../../styles/helpers/parseDropShadow.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";const i=o.a`
  border-radius: 50%;
  display: flex;
  width: fit-content;
  height: fit-content;
  border: none;
  padding: 0;
  outline: none;

  img {
    pointer-events: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:active {
    box-shadow: ${r("drop-shadow-lemon")},
      ${r("drop-shadow-grey")};
  }

  &:hover,
  &:focus-visible {
    background: ${t("bg-btn-primary")};

    img {
      filter: ${e("text-inverted")};
    }
  }

  &:focus-visible {
    box-shadow: ${r("drop-shadow-centered-lemon")},
      ${r("drop-shadow-centered-grey")};
  }

  &:disabled {
    background: ${t("bg-btn-primary-disabled")};

    img {
      filter: ${e("text-inverted")};
    }
  }
`,m=({as:o,label:t="Back",...e})=>a.createElement(i,{as:o??"a","aria-label":t,...e},a.createElement(s,{alt:"",iconName:"chevron-left",$width:"all-spacing-8",$objectFit:"cover",$height:"all-spacing-8"}));export{m as OakBackLink};
//# sourceMappingURL=OakBackLink.js.map
