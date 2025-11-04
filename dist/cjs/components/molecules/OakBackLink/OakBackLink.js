"use strict";var e=require("react"),a=require("styled-components"),r=require("../../../styles/helpers/parseColor.js"),o=require("../../../styles/helpers/parseColorFilter.js"),s=require("../../../styles/helpers/parseDropShadow.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../atoms/OakBox/OakBox.js"),require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js"),require("../../atoms/OakFlex/OakFlex.js"),require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var t=require("../../atoms/OakIcon/OakIcon.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var l=i(e);const d=i(a).default.a`
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
    box-shadow: ${s.parseDropShadow("drop-shadow-lemon")},
      ${s.parseDropShadow("drop-shadow-grey")};
  }

  &:hover,
  &:focus-visible {
    background: ${r.parseColor("bg-btn-primary")};

    img {
      filter: ${o.parseColorFilter("text-inverted")};
    }
  }

  &:focus-visible {
    box-shadow: ${s.parseDropShadow("drop-shadow-centered-lemon")},
      ${s.parseDropShadow("drop-shadow-centered-grey")};
  }

  &:disabled {
    background: ${r.parseColor("bg-btn-primary-disabled")};

    img {
      filter: ${o.parseColorFilter("text-inverted")};
    }
  }
`;exports.OakBackLink=({as:e,label:a="Back",...r})=>l.default.createElement(d,{as:e??"a","aria-label":a,...r},l.default.createElement(t.OakIcon,{alt:"",iconName:"chevron-left",$width:"all-spacing-8",$objectFit:"cover",$height:"all-spacing-8"}));
//# sourceMappingURL=OakBackLink.js.map
