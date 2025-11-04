import e from"react";import t,{css as a}from"styled-components";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as o}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import{OakHeading as r}from"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as i}from"../../../atoms/OakIcon/OakIcon.js";import"../../../atoms/OakImage/OakImage.js";import{OakSpan as n}from"../../../atoms/OakSpan/OakSpan.js";import{OakLI as s}from"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import{OakP as m}from"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{parseColor as l}from"../../../../styles/helpers/parseColor.js";import{parseDropShadow as d}from"../../../../styles/helpers/parseDropShadow.js";const p=t(o)`
  min-width: 260px;

  @media (max-width: 650px) {
    min-width: 100%;
  }

  @media (max-width: 370px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,c=t(o)`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:focus-visible {
    box-shadow: ${d("drop-shadow-centered-lemon")},
      ${d("drop-shadow-centered-grey")};
  }
  ${e=>!e.$disabled&&a`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${k} {
        background: ${l("lavender110")};
      }
      background: ${l("bg-decorative3-subdued")};
    }
  }
      }
    `}

  ${e=>e.$disabled&&a`
      cursor: not-allowed;
      background: ${l("bg-neutral")};
    `}
`,k=t(o)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  @media (hover: hover) {
    &:hover {
      background: ${l("lavender110")};
    }
  }
`,$=t=>{const{lessonCount:a,expiredLessonCount:l,href:d,unavailable:$,onClick:g,index:O,isLegacy:h,firstItemRef:u,...f}=t;let b;if(a){const e=l&&a?a-l:null;b=null!==e?`${e}/${a} ${a>1?"lessons":"lesson"}`:`${a} ${a>1?"lessons":"lesson"}`,l&&l>a&&(b="0 lessons")}return e.createElement(s,{$listStyle:"none",$width:"100%"},e.createElement(c,{$alignItems:"center",$background:$?"bg-neutral":"bg-primary",$borderRadius:"border-radius-m",$disabled:$,href:$?void 0:d,onClick:$?void 0:g,ref:u,as:"a",...f},e.createElement(k,{$alignSelf:"stretch",$background:$?"bg-neutral-stronger":h?"lavender50":"lavender",$minWidth:"all-spacing-11",$justifyContent:"center",$alignItems:"center"},e.createElement(r,{tag:"h3",$font:"heading-5",$color:$?"text-disabled":"text-primary"},O)),e.createElement(o,{$width:"100%",$height:"100%",$justifyContent:"space-between",$alignItems:"left",$flexDirection:["column","row"],$pa:["inner-padding-l"],$gap:"space-between-s"},e.createElement(o,{$alignItems:["center"],$maxWidth:["100%"]},e.createElement(m,{$font:"heading-7",$color:$?"text-disabled":"text-primary"},t.title)),e.createElement(p,{$alignItems:["center"],$minWidth:"all-spacing-13",$width:["100%","auto"],$justifyContent:"space-between",$whiteSpace:"nowrap"},e.createElement(o,{$justifyContent:["flex-start","flex-end"]},e.createElement(m,{$font:"heading-light-7",$color:$?"text-disabled":"text-primary"},t.yearTitle)),e.createElement(o,{$alignItems:"center"},e.createElement(n,{$font:"heading-light-7",$color:$?"text-disabled":"text-primary"},b),e.createElement(i,{$colorFilter:$?"text-disabled":"text-primary",iconName:"chevron-right"}))))))};export{$ as OakUnitListItem};
//# sourceMappingURL=OakUnitListItem.js.map
