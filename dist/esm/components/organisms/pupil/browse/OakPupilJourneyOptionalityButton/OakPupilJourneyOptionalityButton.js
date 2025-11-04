import e from"react";import a,{css as o}from"styled-components";import"../../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as r}from"../../../../atoms/OakBox/OakBox.js";import"../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../../../atoms/OakFlex/OakFlex.js";import"../../../../atoms/OakForm/OakForm.js";import"../../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../../atoms/OakGrid/OakGrid.js";import"../../../../atoms/OakGridArea/OakGridArea.js";import"../../../../atoms/OakHeading/OakHeading.js";import"../../../../atoms/OakImage/OakImage.js";import"../../../../atoms/OakSpan/OakSpan.js";import"../../../../atoms/OakLI/OakLI.js";import"../../../../atoms/OakLabel/OakLabel.js";import"../../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../../atoms/OakOL/OakOL.js";import"../../../../atoms/OakFieldset/OakFieldset.js";import"../../../../atoms/OakP/OakP.js";import"../../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../../atoms/OakTypography/OakTypography.js";import"../../../../atoms/OakUL/OakUL.js";import"../../../../atoms/OakSvg/OakSvg.js";import{parseColor as l}from"../../../../../styles/helpers/parseColor.js";import"../../../../molecules/OakAccordion/OakAccordion.js";import"../../../../molecules/OakBackLink/OakBackLink.js";import"../../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js";import{OakCardWithHandDrawnBorder as s}from"../../../../molecules/OakCardWithHandDrawnBorder/OakCardWithHandDrawnBorder.js";import"../../../../atoms/InternalCheckBox/InternalCheckBox.js";import"../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import"../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js";import"../../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js";import"../../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js";import"../../../../molecules/OakDraggable/OakDraggable.js";import"../../../../molecules/OakDroppable/OakDroppable.js";import"../../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js";import"../../../../atoms/InternalStyledSvg/InternalStyledSvg.js";import"../../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js";import"../../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js";import"../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import"../../../../molecules/OakLink/OakLink.js";import"../../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js";import"../../../../molecules/OakModal/OakModal.js";import"../../../../molecules/OakModalCenter/OakModalCenter.js";import"../../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js";import"../../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js";import"../../../../molecules/OakPromoTag/OakPromoTag.js";import"../../../../molecules/OakRadioButton/OakRadioButton.js";import"../../../../molecules/OakRadioGroup/OakRadioGroup.js";import"../../../../molecules/OakRadioTile/OakRadioTile.js";import{OakRoundIcon as n}from"../../../../molecules/OakRoundIcon/OakRoundIcon.js";import"../../../../molecules/OakSecondaryLink/OakSecondaryLink.js";import"../../../../molecules/OakFilterDrawer/OakFilterDrawer.js";import"../../../../molecules/OakTextInput/OakTextInput.js";import"react-dom";import"../../../../atoms/InternalTooltip/InternalTooltip.js";import"../../../../molecules/OakTimer/OakTimer.js";import"../../../../molecules/OakCodeRenderer/OakCodeRenderer.js";import{parseDropShadow as i}from"../../../../../styles/helpers/parseDropShadow.js";const m=a(r)``,d=a(t)`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${i("drop-shadow-centered-lemon")},
      ${i("drop-shadow-centered-grey")};
  }

  ${e=>e.$disabled&&"cursor: not-allowed"}

  ${e=>!e.$disabled&&o`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          background: ${l("bg-decorative1-subdued")};
          ${m} {
            text-decoration: underline;
          }
        }
      }

      &:active {
        box-shadow: ${i("drop-shadow-lemon")},
          ${i("drop-shadow-grey")};
      }
    `}
`,k=a=>{const{lessonSectionName:o,progress:r,disabled:l,href:i,unavailable:k,onClick:p,numberOfLessons:c,...O}=a,u=l||k;return e.createElement(d,{as:u?"div":"a",$flexGrow:1,$background:k?"bg-neutral":"bg-primary",$disabled:u,$color:"text-primary",href:u?void 0:i,onClick:u?void 0:p,...O},e.createElement(s,{fill:k?"border-neutral-lighter":"black",stroke:k?"border-neutral-lighter":"black",strokeWidth:"border-solid-s"},e.createElement(t,{$flexDirection:"column",$gap:"all-spacing-2"},e.createElement(m,{$font:["heading-7","heading-6"],$color:u?"text-subdued":"text-primary"},a.title),e.createElement(t,{$alignItems:"center",$gap:"space-between-sssx"},!a.unavailable&&e.createElement(e.Fragment,null,e.createElement(m,{$font:"heading-light-7",$color:u?"text-subdued":"text-primary"},c," lessons"),e.createElement(n,{iconName:"chevron-right",$width:"all-spacing-7",$height:"all-spacing-7",$background:"transparent",$colorFilter:u?"icon-disabled":"icon-inverted"})),a.unavailable&&e.createElement(m,{$font:"heading-7",$color:u?"text-subdued":"text-primary"},"Unavailable")))))};export{k as OakPupilJourneyOptionalityButton};
//# sourceMappingURL=OakPupilJourneyOptionalityButton.js.map
