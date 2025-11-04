import e from"react";import a,{css as o}from"styled-components";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import{OakHeading as r}from"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as i}from"../../../atoms/OakIcon/OakIcon.js";import"../../../atoms/OakImage/OakImage.js";import{OakSpan as s}from"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{parseColor as m}from"../../../../styles/helpers/parseColor.js";import{parseDropShadow as n}from"../../../../styles/helpers/parseDropShadow.js";const d=a(t)`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:focus-visible {
    background: ${m("white")};
    box-shadow: ${n("drop-shadow-centered-lemon")},
      ${n("drop-shadow-centered-grey")};
  }
  ${e=>!e.$disabled&&o`  
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${l} {
        background: ${m("lavender110")};
      }
      background: ${m("bg-decorative3-main")};
    }
  }
      }
    `}

  ${e=>e.$disabled&&o`
      cursor: not-allowed;
      background: ${m("bg-neutral")};
      border-color: ${m("border-neutral-lighter")};
    `}
`,l=a(t)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  @media (hover: hover) {
    &:hover {
      background: ${m("lavender110")};
    }
  }
`,p=a=>{const{lessonCount:o,href:m,unavailable:n,firstItemRef:l,onClick:p,...k}=a;return e.createElement(t,{$display:"flex",$flexGrow:1},e.createElement(d,{$pa:"inner-padding-m",$background:"bg-decorative3-very-subdued",$borderRadius:"border-radius-m",$borderColor:"border-decorative3",$ba:"border-solid-m",$disabled:n,href:n?void 0:m,onClick:n?void 0:p,ref:l,as:"a",$flexGrow:1,...k},e.createElement(t,{$justifyContent:"space-between",$flexGrow:1,$flexDirection:"column"},e.createElement(r,{$font:"heading-7",$color:n?"text-disabled":"text-primary",tag:"h3",$mb:"space-between-xs"},a.title),e.createElement(t,{$alignItems:"center",$justifyContent:"flex-end"},e.createElement(s,{$color:n?"text-disabled":"text-primary",$font:"heading-light-7"},`${o} lessons`),e.createElement(i,{iconName:"chevron-right",$colorFilter:n?"text-disabled":"text-primary"})))))};export{p as OakUnitListOptionalityItemCard};
//# sourceMappingURL=OakUnitListOptionalityItemCard.js.map
