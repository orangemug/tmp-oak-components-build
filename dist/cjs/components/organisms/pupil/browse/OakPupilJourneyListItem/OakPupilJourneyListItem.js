"use strict";var e=require("react"),a=require("styled-components");require("../../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../../../atoms/OakBox/OakBox.js");require("../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../../../atoms/OakFlex/OakFlex.js");require("../../../../atoms/OakForm/OakForm.js"),require("../../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../../atoms/OakGrid/OakGrid.js"),require("../../../../atoms/OakGridArea/OakGridArea.js"),require("../../../../atoms/OakHeading/OakHeading.js"),require("../../../../atoms/OakImage/OakImage.js"),require("../../../../atoms/OakSpan/OakSpan.js"),require("../../../../atoms/OakLI/OakLI.js"),require("../../../../atoms/OakLabel/OakLabel.js"),require("../../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../../atoms/OakOL/OakOL.js"),require("../../../../atoms/OakFieldset/OakFieldset.js"),require("../../../../atoms/OakP/OakP.js"),require("../../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../../atoms/OakTypography/OakTypography.js"),require("../../../../atoms/OakUL/OakUL.js"),require("../../../../atoms/OakSvg/OakSvg.js");var t=require("../../../../../styles/helpers/parseColor.js");require("../../../../molecules/OakAccordion/OakAccordion.js"),require("../../../../molecules/OakBackLink/OakBackLink.js"),require("../../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js"),require("../../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js"),require("../../../../atoms/InternalStyledSvg/InternalStyledSvg.js"),require("../../../../atoms/InternalCheckBox/InternalCheckBox.js"),require("../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),require("../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js"),require("../../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js"),require("../../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js"),require("../../../../molecules/OakDraggable/OakDraggable.js"),require("../../../../molecules/OakDroppable/OakDroppable.js"),require("../../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js"),require("../../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js"),require("../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js"),require("../../../../molecules/OakLink/OakLink.js"),require("../../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js"),require("../../../../molecules/OakModal/OakModal.js"),require("../../../../molecules/OakModalCenter/OakModalCenter.js"),require("../../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js"),require("../../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js"),require("../../../../molecules/OakPromoTag/OakPromoTag.js"),require("../../../../molecules/OakRadioButton/OakRadioButton.js"),require("../../../../molecules/OakRadioGroup/OakRadioGroup.js"),require("../../../../molecules/OakRadioTile/OakRadioTile.js");var s=require("../../../../molecules/OakRoundIcon/OakRoundIcon.js");require("../../../../molecules/OakSecondaryLink/OakSecondaryLink.js"),require("../../../../molecules/OakFilterDrawer/OakFilterDrawer.js"),require("../../../../molecules/OakTextInput/OakTextInput.js"),require("react-dom"),require("../../../../atoms/InternalTooltip/InternalTooltip.js");var l=require("../../../../../styles/helpers/parseSpacing.js");require("../../../../molecules/OakTimer/OakTimer.js"),require("../../../../molecules/OakCodeRenderer/OakCodeRenderer.js");var n=require("../../../../../styles/helpers/parseColorFilter.js"),i=require("../../../../../styles/helpers/parseDropShadow.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=u(e),c=u(a);const k=c.default(r.OakBox)``,m=c.default(s.OakRoundIcon)`
  width: ${l.parseSpacing("all-spacing-8")};
  height: ${l.parseSpacing("all-spacing-8")};
  padding: 0;

  background: transparent;

  img {
    filter: ${e=>n.parseColorFilter(e.$disabled?"icon-disabled":"icon-inverted")};
  }
`,O=a.css`
  ${m} {
    box-shadow: ${i.parseDropShadow("drop-shadow-lemon")},
      ${i.parseDropShadow("drop-shadow-grey")};
  }
`,p=a.css`
  ${m} {
    background: ${t.parseColor("bg-btn-primary")};

    img {
      filter: ${n.parseColorFilter("icon-main")};
    }
  }
`,g=c.default(o.OakFlex)`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${i.parseDropShadow("drop-shadow-centered-lemon")},
      ${i.parseDropShadow("drop-shadow-centered-grey")};
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

          ${p}
        }
      }

      &:active {
        box-shadow: ${i.parseDropShadow("drop-shadow-lemon")},
          ${i.parseDropShadow("drop-shadow-grey")};
        ${O}
        ${p}
      }
    `}
`,j=c.default(r.OakBox)`
  flex: 1;
`;exports.OakPupilJourneyListItem=e=>{const{as:a,lessonSectionName:t,progress:s,disabled:l,href:n,unavailable:i,onClick:u,...c}=e,O=l||i;return d.default.createElement(r.OakBox,{role:"listitem"},d.default.createElement(g,{className:O?void 0:"pupil-journey-item",as:O?"div":a??"a",$gap:["space-between-s","space-between-m2"],$alignItems:"center",$justifyContent:"space-between",$flexWrap:"wrap",$background:i?"bg-neutral":"bg-primary",$pa:["inner-padding-l","inner-padding-xl"],$borderRadius:"border-radius-m",$ba:i?"border-solid-m":"border-solid-none",$borderColor:i?"border-neutral-lighter":"transparent",$disabled:O,$color:"text-primary",href:O?void 0:n,onClick:O?void 0:u,...c},d.default.createElement(o.OakFlex,{$alignItems:"center",$gap:["space-between-m2"]}," ",d.default.createElement(o.OakFlex,null,d.default.createElement(r.OakBox,{$font:["heading-5","heading-4"],$color:e.unavailable?"text-subdued":"text-primary",$textDecoration:"none"},e.index)),d.default.createElement(j,null,d.default.createElement(k,{$font:["heading-6","heading-5"],$color:O?"text-subdued":"text-primary"},e.title))),d.default.createElement(o.OakFlex,{$alignItems:"center",$gap:"space-between-xs",$flexBasis:"auto",$flexGrow:1,$justifyContent:"flex-end"},void 0!==e.numberOfLessons&&!e.unavailable&&d.default.createElement(k,{$font:"heading-7",$color:O?"text-subdued":"text-primary"},e.numberOfLessons," lessons"),e.unavailable&&d.default.createElement(k,{$font:"heading-7",$color:O?"text-subdued":"text-primary"},"Unavailable"),!e.unavailable&&d.default.createElement(m,{iconName:"chevron-right",$disabled:O}))))};
//# sourceMappingURL=OakPupilJourneyListItem.js.map
