import a from"react";import e from"styled-components";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as o}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as r}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseDropShadow as n}from"../../../styles/helpers/parseDropShadow.js";import{InternalAccordionButton as m,InternalAccordionContent as s}from"../../atoms/InternalAccordion/InternalAccordion.js";import i from"../../atoms/InternalAccordion/useAccordionContext.js";import{InternalAccordionProvider as p}from"../../atoms/InternalAccordion/InternalAccordionProvider.js";const l=e(m)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;

  outline: none;

  &:focus-visible {
    box-shadow: ${n("drop-shadow-centered-lemon")},
      ${n("drop-shadow-centered-grey")};
  }
`,d=({header:e,headerAfterSlot:n,children:m,id:p})=>{const{isOpen:d}=i();return a.createElement(o,{id:p,$borderColor:"border-neutral-lighter",$ba:"border-solid-s",$pa:"inner-padding-m",$background:d?"bg-neutral":"bg-primary"},a.createElement(t,{as:"h3",$font:"heading-light-7",$textDecoration:d?"underline":"none"},a.createElement(l,{$alignItems:"center",$pa:"inner-padding-m",id:p},a.createElement(r,{iconName:"chevron-down",$mr:"space-between-s",$width:"all-spacing-6",$height:"all-spacing-6",alt:"",style:{transform:d?"rotate(180deg)":"none"}}),e),n&&a.createElement(t,{$ml:"space-between-m"},n)),a.createElement(s,{"aria-labelledby":p,$ml:"space-between-m",$pl:"inner-padding-m",$mt:"space-between-sssx",$font:"body-3"},m))},c=e=>{const{initialOpen:o=!1,...t}=e;return a.createElement(p,{isInitialOpen:o},a.createElement(d,{...t}))};export{c as OakAccordion};
//# sourceMappingURL=OakAccordion.js.map
