"use strict";var e=require("react"),a=require("styled-components");require("../../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../../../atoms/OakBox/OakBox.js");require("../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../../../atoms/OakFlex/OakFlex.js");require("../../../../atoms/OakForm/OakForm.js"),require("../../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../../atoms/OakGrid/OakGrid.js"),require("../../../../atoms/OakGridArea/OakGridArea.js"),require("../../../../atoms/OakHeading/OakHeading.js"),require("../../../../atoms/OakImage/OakImage.js"),require("../../../../atoms/OakSpan/OakSpan.js"),require("../../../../atoms/OakLI/OakLI.js"),require("../../../../atoms/OakLabel/OakLabel.js"),require("../../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../../atoms/OakOL/OakOL.js"),require("../../../../atoms/OakFieldset/OakFieldset.js"),require("../../../../atoms/OakP/OakP.js"),require("../../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../../atoms/OakTypography/OakTypography.js"),require("../../../../atoms/OakUL/OakUL.js"),require("../../../../atoms/OakSvg/OakSvg.js");var t=require("../../../../../styles/helpers/parseColor.js");require("../../../../molecules/OakAccordion/OakAccordion.js"),require("../../../../molecules/OakBackLink/OakBackLink.js"),require("../../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js");var l=require("../../../../molecules/OakCardWithHandDrawnBorder/OakCardWithHandDrawnBorder.js");require("../../../../atoms/InternalCheckBox/InternalCheckBox.js"),require("../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),require("../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js"),require("../../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js"),require("../../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js"),require("../../../../molecules/OakDraggable/OakDraggable.js"),require("../../../../molecules/OakDroppable/OakDroppable.js"),require("../../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js"),require("../../../../atoms/InternalStyledSvg/InternalStyledSvg.js"),require("../../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js"),require("../../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js"),require("../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js"),require("../../../../molecules/OakLink/OakLink.js"),require("../../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js"),require("../../../../molecules/OakModal/OakModal.js"),require("../../../../molecules/OakModalCenter/OakModalCenter.js"),require("../../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js"),require("../../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js"),require("../../../../molecules/OakPromoTag/OakPromoTag.js"),require("../../../../molecules/OakRadioButton/OakRadioButton.js"),require("../../../../molecules/OakRadioGroup/OakRadioGroup.js"),require("../../../../molecules/OakRadioTile/OakRadioTile.js");var n=require("../../../../molecules/OakRoundIcon/OakRoundIcon.js");require("../../../../molecules/OakSecondaryLink/OakSecondaryLink.js"),require("../../../../molecules/OakFilterDrawer/OakFilterDrawer.js"),require("../../../../molecules/OakTextInput/OakTextInput.js"),require("react-dom"),require("../../../../atoms/InternalTooltip/InternalTooltip.js"),require("../../../../molecules/OakTimer/OakTimer.js"),require("../../../../molecules/OakCodeRenderer/OakCodeRenderer.js");var s=require("../../../../../styles/helpers/parseDropShadow.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=i(e),d=i(a);const k=d.default(r.OakBox)``,c=d.default(o.OakFlex)`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${s.parseDropShadow("drop-shadow-centered-lemon")},
      ${s.parseDropShadow("drop-shadow-centered-grey")};
  }

  ${e=>e.$disabled&&"cursor: not-allowed"}

  ${e=>!e.$disabled&&a.css`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          background: ${t.parseColor("bg-decorative1-subdued")};
          ${k} {
            text-decoration: underline;
          }
        }
      }

      &:active {
        box-shadow: ${s.parseDropShadow("drop-shadow-lemon")},
          ${s.parseDropShadow("drop-shadow-grey")};
      }
    `}
`;exports.OakPupilJourneyOptionalityButton=e=>{const{lessonSectionName:a,progress:r,disabled:t,href:s,unavailable:i,onClick:d,numberOfLessons:O,...m}=e,p=t||i;return u.default.createElement(c,{as:p?"div":"a",$flexGrow:1,$background:i?"bg-neutral":"bg-primary",$disabled:p,$color:"text-primary",href:p?void 0:s,onClick:p?void 0:d,...m},u.default.createElement(l.OakCardWithHandDrawnBorder,{fill:i?"border-neutral-lighter":"black",stroke:i?"border-neutral-lighter":"black",strokeWidth:"border-solid-s"},u.default.createElement(o.OakFlex,{$flexDirection:"column",$gap:"all-spacing-2"},u.default.createElement(k,{$font:["heading-7","heading-6"],$color:p?"text-subdued":"text-primary"},e.title),u.default.createElement(o.OakFlex,{$alignItems:"center",$gap:"space-between-sssx"},!e.unavailable&&u.default.createElement(u.default.Fragment,null,u.default.createElement(k,{$font:"heading-light-7",$color:p?"text-subdued":"text-primary"},O," lessons"),u.default.createElement(n.OakRoundIcon,{iconName:"chevron-right",$width:"all-spacing-7",$height:"all-spacing-7",$background:"transparent",$colorFilter:p?"icon-disabled":"icon-inverted"})),e.unavailable&&u.default.createElement(k,{$font:"heading-7",$color:p?"text-subdued":"text-primary"},"Unavailable")))))};
//# sourceMappingURL=OakPupilJourneyOptionalityButton.js.map
