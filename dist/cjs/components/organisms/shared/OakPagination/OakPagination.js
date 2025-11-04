"use strict";var e=require("react"),a=require("styled-components"),r=require("./utils.js");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../../atoms/OakBox/OakBox.js"),require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js"),require("../../../atoms/OakHeading/OakHeading.js");var o=require("../../../atoms/OakIcon/OakIcon.js");require("../../../atoms/OakImage/OakImage.js"),require("../../../atoms/OakSpan/OakSpan.js");var n=require("../../../atoms/OakLI/OakLI.js");require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js");var l=require("../../../atoms/OakUL/OakUL.js");require("../../../atoms/OakSvg/OakSvg.js");var s=require("../../../atoms/InternalButton/InternalButton.js"),i=require("../../../../styles/helpers/parseColorFilter.js");require("../../../molecules/OakAccordion/OakAccordion.js"),require("../../../molecules/OakBackLink/OakBackLink.js"),require("../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js"),require("../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js"),require("../../../atoms/InternalStyledSvg/InternalStyledSvg.js"),require("../../../atoms/InternalCheckBox/InternalCheckBox.js"),require("../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),require("../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js"),require("../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js"),require("../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js"),require("../../../molecules/OakDraggable/OakDraggable.js"),require("../../../molecules/OakDroppable/OakDroppable.js"),require("../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js"),require("../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js"),require("../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js");var u=require("../../../molecules/OakLink/OakLink.js");require("../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js"),require("../../../molecules/OakModal/OakModal.js"),require("../../../molecules/OakModalCenter/OakModalCenter.js"),require("../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js"),require("../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js"),require("../../../molecules/OakPromoTag/OakPromoTag.js"),require("../../../molecules/OakRadioButton/OakRadioButton.js"),require("../../../molecules/OakRadioGroup/OakRadioGroup.js"),require("../../../molecules/OakRadioTile/OakRadioTile.js"),require("../../../molecules/OakSecondaryLink/OakSecondaryLink.js"),require("../../../molecules/OakFilterDrawer/OakFilterDrawer.js"),require("../../../molecules/OakTextInput/OakTextInput.js"),require("react-dom"),require("../../../atoms/InternalTooltip/InternalTooltip.js"),require("../../../molecules/OakTimer/OakTimer.js"),require("../../../molecules/OakCodeRenderer/OakCodeRenderer.js");var d=require("../../../../styles/utils/typographyStyle.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var k=c(e),O=c(a);const m=O.default(u.OakLink)`
  display: inline-block;
  ${e=>a.css`
    &:disabled {
      color: ${e.disabledColor};
      cursor: pointer;
    }
  `}
`,p=O.default(o.OakIcon)`
  ${e=>{if(e.disabled)return a.css`
        filter: ${i.parseColorFilter("grey50")};
      `}}
`,g=O.default(u.OakLink)`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${d.typographyStyle}
  color: black;

  ${e=>a.css`
    background-color: ${e.selected?"black":"white"};
  `};

  ${e=>e.selected&&a.css`
      color: white;
      &:visited {
        color: white;
      }
    `}

  &:hover {
    text-decoration: underline;
    ${e=>e.selected&&a.css`
        color: white;
        @media (hover: hover) {
    &:hover:not(:disabled) {
      color: white;
    }
      `}
  }
`,b=O.default(s.InternalButton)`
  &:disabled {
    cursor: pointer;
  }
`,j=({currentPage:e,pageNumber:a,onClick:r,href:t,pageName:o})=>{const n=e===a;return k.default.createElement(g,{"data-testid":"page-number-component","aria-label":`${o} page ${a}`,"aria-current":!!n&&"page",$font:"heading-7",onClick:r,selected:n,href:t},a)},q=()=>k.default.createElement(b,{$color:"text-primary",$font:"heading-7",$background:"white","aria-label":"Hidden page numbers",disabled:!0},"...");exports.OakPagination=({totalPages:e,nextHref:a,prevHref:o,paginationHref:s,pageName:i,onPageChange:u,currentPage:d})=>{const c=r.generatePageNumbers(d,e),O=d<=1,g=d>=e,b=(e,a)=>{a.preventDefault();u(d+("backwards"===e?-1:1))};return 1===d&&e<2?null:k.default.createElement("nav",{"aria-label":"pagination","data-testid":"pagination"},k.default.createElement(t.OakFlex,{$alignItems:"center",$justifyContent:"center",$width:"100%",$gap:["space-between-ssx","space-between-s","space-between-s"]},k.default.createElement(m,{element:O?"button":"a",rel:"prev",href:o,"data-testid":"backwards-button",onClick:e=>{e.preventDefault(),b("backwards",e)},onKeyDown:e=>{"Enter"===e.key&&b("backwards",e)},tabIndex:O?-1:0,"aria-disabled":O,disabled:O,"aria-label":O?"No previous pages":"Go to previous page"},k.default.createElement(p,{disabled:O,iconName:"chevron-left"})),k.default.createElement(l.OakUL,{$reset:!0,$display:"flex"},c.map(((e,a)=>"number"==typeof e?k.default.createElement(n.OakLI,{key:`${e} ${a}`,$mh:["space-between-sssx","space-between-ssx","space-between-ssx"]},k.default.createElement(j,{pageName:i,key:e,pageNumber:e+1,currentPage:d,href:`${s}?page=${e+1}`,onClick:a=>{return r=e+1,a.preventDefault(),void u(r);var r}})):k.default.createElement(n.OakLI,{$mh:["space-between-sssx","space-between-ssx","space-between-ssx"],key:`${e} ${a}`},k.default.createElement(t.OakFlex,{$height:"100%",$alignSelf:"center"},k.default.createElement(q,null)))))),k.default.createElement(m,{element:g?"button":"a",rel:"next",tabIndex:g?-1:0,"data-testid":"forwards-button",href:a,onClick:e=>{b("forwards",e)},onKeyDown:e=>{"Enter"===e.key&&b("forwards",e)},"aria-disabled":g,disabled:g,"aria-label":g?"No further pages":"Go to next page"},k.default.createElement(p,{disabled:g,iconName:"chevron-right"}))))};
//# sourceMappingURL=OakPagination.js.map
