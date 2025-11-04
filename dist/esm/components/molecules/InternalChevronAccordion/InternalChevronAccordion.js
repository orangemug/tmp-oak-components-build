import e,{useState as t,useRef as o,useEffect as a}from"react";import r from"styled-components";import{OakHandDrawnFocusUnderline as i}from"../OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{oakBoxCss as s,OakBox as n}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as l}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as m}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseDropShadow as p}from"../../../styles/helpers/parseDropShadow.js";import{InternalAccordionButton as c,InternalAccordionContent as d}from"../../atoms/InternalAccordion/InternalAccordion.js";import O from"../../atoms/InternalAccordion/useAccordionContext.js";import{InternalAccordionProvider as k}from"../../atoms/InternalAccordion/InternalAccordionProvider.js";import{flexStyle as h}from"../../../styles/utils/flexStyle.js";import{parseSpacing as g}from"../../../styles/helpers/parseSpacing.js";import{parseOpacity as b}from"../../../styles/helpers/parseOpacity.js";const j=r(i)`
  position: absolute;
  width: 100%;
  bottom: -${g("all-spacing-1")};
`,x=r(c)`
  ${h}
  ${s}
  position: relative;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    .shadow {
      box-shadow: ${p("drop-shadow-centered-lemon")},
        ${p("drop-shadow-centered-grey")};
    }
  }
`,$=r(l)`
  ${j} {
    visibility: hidden;
  }
  ${x}:focus-visible ~ ${j} {
    visibility: visible;
  }
  ${s}
  ${h}
`,u=r(n)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  opacity: ${e=>e.shouldDisplayShadow?b("opaque"):b("transparent")};
  z-index: 100;
  -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  padding: 2px;
`,w=({header:r,children:i,id:s,...l})=>{const[p,c]=t(!1),k=o(null);a((()=>{const e=k.current?.scrollHeight,t=k.current?.clientHeight;c(!!(e&&t&&e>t))}),[]);const{isOpen:h}=O();return e.createElement($,{$position:"relative",$pv:"inner-padding-s",$flexDirection:"column",$gap:"all-spacing-1",...l},e.createElement(x,{id:s,$width:"100%",$justifyContent:"space-between",$alignItems:"center"},r,e.createElement(n,{$position:"relative",$mr:"space-between-xs"},e.createElement(n,{className:"shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),e.createElement(m,{iconName:"chevron-down",$width:"all-spacing-7",$height:"all-spacing-7",alt:"An arrow to indicate whether the item is open or closed",style:{transform:h?"rotate(180deg)":"none",transition:"all 0.3s ease 0s"}}))),e.createElement(n,{ref:k,$position:"relative",$overflow:"scroll",onScroll:()=>{const e=k.current?.scrollHeight,t=k.current?.scrollTop,o=k.current?.clientHeight;if(e&&t){c(!(e-t===o))}},"data-testid":"scrollable-content"},e.createElement(d,{"aria-labelledby":s},i)),e.createElement(j,{$fill:"border-decorative5-stronger"}),h&&e.createElement(u,{shouldDisplayShadow:p,"data-testid":"bottom-box-shadow"}))},y=({initialOpen:t=!1,...o})=>e.createElement(k,{isInitialOpen:t},e.createElement(w,{initialOpen:!0,...o}));export{u as BottomBoxShadow,y as InternalChevronAccordion,x as StyledAccordionButton};
//# sourceMappingURL=InternalChevronAccordion.js.map
