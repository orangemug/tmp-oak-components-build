"use strict";var e=require("react"),a=require("styled-components");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../../atoms/OakBox/OakBox.js"),require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var r=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js");var o=require("../../../atoms/OakHeading/OakHeading.js"),t=require("../../../atoms/OakIcon/OakIcon.js");require("../../../atoms/OakImage/OakImage.js");var s=require("../../../atoms/OakSpan/OakSpan.js");require("../../../atoms/OakLI/OakLI.js"),require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var i=require("../../../../styles/helpers/parseColor.js"),n=require("../../../../styles/helpers/parseDropShadow.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(e),u=l(a);const k=u.default(r.OakFlex)`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:focus-visible {
    background: ${i.parseColor("white")};
    box-shadow: ${n.parseDropShadow("drop-shadow-centered-lemon")},
      ${n.parseDropShadow("drop-shadow-centered-grey")};
  }
  ${e=>!e.$disabled&&a.css`  
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${m} {
        background: ${i.parseColor("lavender110")};
      }
      background: ${i.parseColor("bg-decorative3-main")};
    }
  }
      }
    `}

  ${e=>e.$disabled&&a.css`
      cursor: not-allowed;
      background: ${i.parseColor("bg-neutral")};
      border-color: ${i.parseColor("border-neutral-lighter")};
    `}
`,m=u.default(r.OakFlex)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  @media (hover: hover) {
    &:hover {
      background: ${i.parseColor("lavender110")};
    }
  }
`;exports.OakUnitListOptionalityItemCard=e=>{const{lessonCount:a,href:i,unavailable:n,firstItemRef:l,onClick:u,...m}=e;return d.default.createElement(r.OakFlex,{$display:"flex",$flexGrow:1},d.default.createElement(k,{$pa:"inner-padding-m",$background:"bg-decorative3-very-subdued",$borderRadius:"border-radius-m",$borderColor:"border-decorative3",$ba:"border-solid-m",$disabled:n,href:n?void 0:i,onClick:n?void 0:u,ref:l,as:"a",$flexGrow:1,...m},d.default.createElement(r.OakFlex,{$justifyContent:"space-between",$flexGrow:1,$flexDirection:"column"},d.default.createElement(o.OakHeading,{$font:"heading-7",$color:n?"text-disabled":"text-primary",tag:"h3",$mb:"space-between-xs"},e.title),d.default.createElement(r.OakFlex,{$alignItems:"center",$justifyContent:"flex-end"},d.default.createElement(s.OakSpan,{$color:n?"text-disabled":"text-primary",$font:"heading-light-7"},`${a} lessons`),d.default.createElement(t.OakIcon,{iconName:"chevron-right",$colorFilter:n?"text-disabled":"text-primary"})))))};
//# sourceMappingURL=OakUnitListOptionalityItemCard.js.map
