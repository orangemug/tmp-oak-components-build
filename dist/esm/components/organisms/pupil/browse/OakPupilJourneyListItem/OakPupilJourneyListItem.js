import e from"react";import a,{css as o}from"styled-components";import"../../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as r}from"../../../../atoms/OakBox/OakBox.js";import"../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../../../atoms/OakFlex/OakFlex.js";import"../../../../atoms/OakForm/OakForm.js";import"../../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../../atoms/OakGrid/OakGrid.js";import"../../../../atoms/OakGridArea/OakGridArea.js";import"../../../../atoms/OakHeading/OakHeading.js";import"../../../../atoms/OakImage/OakImage.js";import"../../../../atoms/OakSpan/OakSpan.js";import"../../../../atoms/OakLI/OakLI.js";import"../../../../atoms/OakLabel/OakLabel.js";import"../../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../../atoms/OakOL/OakOL.js";import"../../../../atoms/OakFieldset/OakFieldset.js";import"../../../../atoms/OakP/OakP.js";import"../../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../../atoms/OakTypography/OakTypography.js";import"../../../../atoms/OakUL/OakUL.js";import"../../../../atoms/OakSvg/OakSvg.js";import{parseColor as n}from"../../../../../styles/helpers/parseColor.js";import"../../../../molecules/OakAccordion/OakAccordion.js";import"../../../../molecules/OakBackLink/OakBackLink.js";import"../../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js";import"../../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js";import"../../../../atoms/InternalStyledSvg/InternalStyledSvg.js";import"../../../../atoms/InternalCheckBox/InternalCheckBox.js";import"../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import"../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js";import"../../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js";import"../../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js";import"../../../../molecules/OakDraggable/OakDraggable.js";import"../../../../molecules/OakDroppable/OakDroppable.js";import"../../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js";import"../../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js";import"../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import"../../../../molecules/OakLink/OakLink.js";import"../../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js";import"../../../../molecules/OakModal/OakModal.js";import"../../../../molecules/OakModalCenter/OakModalCenter.js";import"../../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js";import"../../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js";import"../../../../molecules/OakPromoTag/OakPromoTag.js";import"../../../../molecules/OakRadioButton/OakRadioButton.js";import"../../../../molecules/OakRadioGroup/OakRadioGroup.js";import"../../../../molecules/OakRadioTile/OakRadioTile.js";import{OakRoundIcon as s}from"../../../../molecules/OakRoundIcon/OakRoundIcon.js";import"../../../../molecules/OakSecondaryLink/OakSecondaryLink.js";import"../../../../molecules/OakFilterDrawer/OakFilterDrawer.js";import"../../../../molecules/OakTextInput/OakTextInput.js";import"react-dom";import"../../../../atoms/InternalTooltip/InternalTooltip.js";import{parseSpacing as l}from"../../../../../styles/helpers/parseSpacing.js";import"../../../../molecules/OakTimer/OakTimer.js";import"../../../../molecules/OakCodeRenderer/OakCodeRenderer.js";import{parseColorFilter as i}from"../../../../../styles/helpers/parseColorFilter.js";import{parseDropShadow as m}from"../../../../../styles/helpers/parseDropShadow.js";const d=a(r)``,p=a(s)`
  width: ${l("all-spacing-8")};
  height: ${l("all-spacing-8")};
  padding: 0;

  background: transparent;

  img {
    filter: ${e=>i(e.$disabled?"icon-disabled":"icon-inverted")};
  }
`,c=o`
  ${p} {
    box-shadow: ${m("drop-shadow-lemon")},
      ${m("drop-shadow-grey")};
  }
`,k=o`
  ${p} {
    background: ${n("bg-btn-primary")};

    img {
      filter: ${i("icon-main")};
    }
  }
`,O=a(t)`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${m("drop-shadow-centered-lemon")},
      ${m("drop-shadow-centered-grey")};
  }

  ${e=>e.$disabled&&"cursor: not-allowed"}

  ${e=>!e.$disabled&&o`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          background: ${n("bg-decorative1-subdued")};
          ${d} {
            text-decoration: underline;
          }

          ${k}
        }
      }

      &:active {
        box-shadow: ${m("drop-shadow-lemon")},
          ${m("drop-shadow-grey")};
        ${c}
        ${k}
      }
    `}
`,u=a(r)`
  flex: 1;
`,g=a=>{const{as:o,lessonSectionName:n,progress:s,disabled:l,href:i,unavailable:m,onClick:c,...k}=a,g=l||m;return e.createElement(r,{role:"listitem"},e.createElement(O,{className:g?void 0:"pupil-journey-item",as:g?"div":o??"a",$gap:["space-between-s","space-between-m2"],$alignItems:"center",$justifyContent:"space-between",$flexWrap:"wrap",$background:m?"bg-neutral":"bg-primary",$pa:["inner-padding-l","inner-padding-xl"],$borderRadius:"border-radius-m",$ba:m?"border-solid-m":"border-solid-none",$borderColor:m?"border-neutral-lighter":"transparent",$disabled:g,$color:"text-primary",href:g?void 0:i,onClick:g?void 0:c,...k},e.createElement(t,{$alignItems:"center",$gap:["space-between-m2"]}," ",e.createElement(t,null,e.createElement(r,{$font:["heading-5","heading-4"],$color:a.unavailable?"text-subdued":"text-primary",$textDecoration:"none"},a.index)),e.createElement(u,null,e.createElement(d,{$font:["heading-6","heading-5"],$color:g?"text-subdued":"text-primary"},a.title))),e.createElement(t,{$alignItems:"center",$gap:"space-between-xs",$flexBasis:"auto",$flexGrow:1,$justifyContent:"flex-end"},void 0!==a.numberOfLessons&&!a.unavailable&&e.createElement(d,{$font:"heading-7",$color:g?"text-subdued":"text-primary"},a.numberOfLessons," lessons"),a.unavailable&&e.createElement(d,{$font:"heading-7",$color:g?"text-subdued":"text-primary"},"Unavailable"),!a.unavailable&&e.createElement(p,{iconName:"chevron-right",$disabled:g}))))};export{g as OakPupilJourneyListItem};
//# sourceMappingURL=OakPupilJourneyListItem.js.map
