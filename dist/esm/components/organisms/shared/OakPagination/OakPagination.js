import e from"react";import a,{css as t}from"styled-components";import{generatePageNumbers as o}from"./utils.js";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as r}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as n}from"../../../atoms/OakIcon/OakIcon.js";import"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import{OakLI as s}from"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import{OakUL as l}from"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{InternalButton as i}from"../../../atoms/InternalButton/InternalButton.js";import{parseColorFilter as m}from"../../../../styles/helpers/parseColorFilter.js";import"../../../molecules/OakAccordion/OakAccordion.js";import"../../../molecules/OakBackLink/OakBackLink.js";import"../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js";import"../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js";import"../../../atoms/InternalStyledSvg/InternalStyledSvg.js";import"../../../atoms/InternalCheckBox/InternalCheckBox.js";import"../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import"../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js";import"../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js";import"../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js";import"../../../molecules/OakDraggable/OakDraggable.js";import"../../../molecules/OakDroppable/OakDroppable.js";import"../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js";import"../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js";import"../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import{OakLink as p}from"../../../molecules/OakLink/OakLink.js";import"../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js";import"../../../molecules/OakModal/OakModal.js";import"../../../molecules/OakModalCenter/OakModalCenter.js";import"../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js";import"../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js";import"../../../molecules/OakPromoTag/OakPromoTag.js";import"../../../molecules/OakRadioButton/OakRadioButton.js";import"../../../molecules/OakRadioGroup/OakRadioGroup.js";import"../../../molecules/OakRadioTile/OakRadioTile.js";import"../../../molecules/OakSecondaryLink/OakSecondaryLink.js";import"../../../molecules/OakFilterDrawer/OakFilterDrawer.js";import"../../../molecules/OakTextInput/OakTextInput.js";import"react-dom";import"../../../atoms/InternalTooltip/InternalTooltip.js";import"../../../molecules/OakTimer/OakTimer.js";import"../../../molecules/OakCodeRenderer/OakCodeRenderer.js";import{typographyStyle as c}from"../../../../styles/utils/typographyStyle.js";const k=a(p)`
  display: inline-block;
  ${e=>t`
    &:disabled {
      color: ${e.disabledColor};
      cursor: pointer;
    }
  `}
`,d=a(n)`
  ${e=>{if(e.disabled)return t`
        filter: ${m("grey50")};
      `}}
`,O=a(p)`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${c}
  color: black;

  ${e=>t`
    background-color: ${e.selected?"black":"white"};
  `};

  ${e=>e.selected&&t`
      color: white;
      &:visited {
        color: white;
      }
    `}

  &:hover {
    text-decoration: underline;
    ${e=>e.selected&&t`
        color: white;
        @media (hover: hover) {
    &:hover:not(:disabled) {
      color: white;
    }
      `}
  }
`,u=a(i)`
  &:disabled {
    cursor: pointer;
  }
`,g=({currentPage:a,pageNumber:t,onClick:o,href:r,pageName:n})=>{const s=a===t;return e.createElement(O,{"data-testid":"page-number-component","aria-label":`${n} page ${t}`,"aria-current":!!s&&"page",$font:"heading-7",onClick:o,selected:s,href:r},t)},j=()=>e.createElement(u,{$color:"text-primary",$font:"heading-7",$background:"white","aria-label":"Hidden page numbers",disabled:!0},"..."),b=({totalPages:a,nextHref:t,prevHref:n,paginationHref:i,pageName:m,onPageChange:p,currentPage:c})=>{const O=o(c,a),u=c<=1,b=c>=a,h=(e,a)=>{a.preventDefault();p(c+("backwards"===e?-1:1))};return 1===c&&a<2?null:e.createElement("nav",{"aria-label":"pagination","data-testid":"pagination"},e.createElement(r,{$alignItems:"center",$justifyContent:"center",$width:"100%",$gap:["space-between-ssx","space-between-s","space-between-s"]},e.createElement(k,{element:u?"button":"a",rel:"prev",href:n,"data-testid":"backwards-button",onClick:e=>{e.preventDefault(),h("backwards",e)},onKeyDown:e=>{"Enter"===e.key&&h("backwards",e)},tabIndex:u?-1:0,"aria-disabled":u,disabled:u,"aria-label":u?"No previous pages":"Go to previous page"},e.createElement(d,{disabled:u,iconName:"chevron-left"})),e.createElement(l,{$reset:!0,$display:"flex"},O.map(((a,t)=>"number"==typeof a?e.createElement(s,{key:`${a} ${t}`,$mh:["space-between-sssx","space-between-ssx","space-between-ssx"]},e.createElement(g,{pageName:m,key:a,pageNumber:a+1,currentPage:c,href:`${i}?page=${a+1}`,onClick:e=>{return t=a+1,e.preventDefault(),void p(t);var t}})):e.createElement(s,{$mh:["space-between-sssx","space-between-ssx","space-between-ssx"],key:`${a} ${t}`},e.createElement(r,{$height:"100%",$alignSelf:"center"},e.createElement(j,null)))))),e.createElement(k,{element:b?"button":"a",rel:"next",tabIndex:b?-1:0,"data-testid":"forwards-button",href:t,onClick:e=>{h("forwards",e)},onKeyDown:e=>{"Enter"===e.key&&h("forwards",e)},"aria-disabled":b,disabled:b,"aria-label":b?"No further pages":"Go to next page"},e.createElement(d,{disabled:b,iconName:"chevron-right"}))))};export{b as OakPagination};
//# sourceMappingURL=OakPagination.js.map
