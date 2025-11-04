"use strict";var e=require("react"),a=require("styled-components");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var o=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var n=require("../../../styles/helpers/parseDropShadow.js"),i=require("../../atoms/InternalAccordion/InternalAccordion.js"),s=require("../../atoms/InternalAccordion/useAccordionContext.js"),d=require("../../atoms/InternalAccordion/InternalAccordionProvider.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=l(e);const u=l(a).default(i.InternalAccordionButton)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;

  outline: none;

  &:focus-visible {
    box-shadow: ${n.parseDropShadow("drop-shadow-centered-lemon")},
      ${n.parseDropShadow("drop-shadow-centered-grey")};
  }
`,O=({header:e,headerAfterSlot:a,children:n,id:d})=>{const{isOpen:l}=s();return c.default.createElement(r.OakBox,{id:d,$borderColor:"border-neutral-lighter",$ba:"border-solid-s",$pa:"inner-padding-m",$background:l?"bg-neutral":"bg-primary"},c.default.createElement(t.OakFlex,{as:"h3",$font:"heading-light-7",$textDecoration:l?"underline":"none"},c.default.createElement(u,{$alignItems:"center",$pa:"inner-padding-m",id:d},c.default.createElement(o.OakIcon,{iconName:"chevron-down",$mr:"space-between-s",$width:"all-spacing-6",$height:"all-spacing-6",alt:"",style:{transform:l?"rotate(180deg)":"none"}}),e),a&&c.default.createElement(t.OakFlex,{$ml:"space-between-m"},a)),c.default.createElement(i.InternalAccordionContent,{"aria-labelledby":d,$ml:"space-between-m",$pl:"inner-padding-m",$mt:"space-between-sssx",$font:"body-3"},n))};exports.OakAccordion=e=>{const{initialOpen:a=!1,...r}=e;return c.default.createElement(d.InternalAccordionProvider,{isInitialOpen:a},c.default.createElement(O,{...r}))};
//# sourceMappingURL=OakAccordion.js.map
