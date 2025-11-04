import e from"react";import a,{css as o}from"styled-components";import"../../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as r}from"../../../../atoms/OakBox/OakBox.js";import"../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../../../atoms/OakFlex/OakFlex.js";import"../../../../atoms/OakForm/OakForm.js";import"../../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../../atoms/OakGrid/OakGrid.js";import"../../../../atoms/OakGridArea/OakGridArea.js";import"../../../../atoms/OakHeading/OakHeading.js";import{OakIcon as n}from"../../../../atoms/OakIcon/OakIcon.js";import"../../../../atoms/OakImage/OakImage.js";import{OakSpan as s}from"../../../../atoms/OakSpan/OakSpan.js";import"../../../../atoms/OakLI/OakLI.js";import"../../../../atoms/OakLabel/OakLabel.js";import"../../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../../atoms/OakOL/OakOL.js";import"../../../../atoms/OakFieldset/OakFieldset.js";import"../../../../atoms/OakP/OakP.js";import"../../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../../atoms/OakTypography/OakTypography.js";import"../../../../atoms/OakUL/OakUL.js";import"../../../../atoms/OakSvg/OakSvg.js";import{parseColor as i}from"../../../../../styles/helpers/parseColor.js";import"../../../../molecules/OakAccordion/OakAccordion.js";import"../../../../molecules/OakBackLink/OakBackLink.js";import"../../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js";import"../../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js";import"../../../../atoms/InternalStyledSvg/InternalStyledSvg.js";import"../../../../atoms/InternalCheckBox/InternalCheckBox.js";import"../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import"../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js";import"../../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js";import"../../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js";import"../../../../molecules/OakDraggable/OakDraggable.js";import"../../../../molecules/OakDroppable/OakDroppable.js";import"../../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js";import"../../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js";import"../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import"../../../../molecules/OakLink/OakLink.js";import"../../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js";import"../../../../molecules/OakModal/OakModal.js";import"../../../../molecules/OakModalCenter/OakModalCenter.js";import"../../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js";import"../../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js";import"../../../../molecules/OakPromoTag/OakPromoTag.js";import"../../../../molecules/OakRadioButton/OakRadioButton.js";import"../../../../molecules/OakRadioGroup/OakRadioGroup.js";import"../../../../molecules/OakRadioTile/OakRadioTile.js";import{OakRoundIcon as l}from"../../../../molecules/OakRoundIcon/OakRoundIcon.js";import"../../../../molecules/OakSecondaryLink/OakSecondaryLink.js";import"../../../../molecules/OakFilterDrawer/OakFilterDrawer.js";import"../../../../molecules/OakTextInput/OakTextInput.js";import"react-dom";import"../../../../atoms/InternalTooltip/InternalTooltip.js";import{parseSpacing as m}from"../../../../../styles/helpers/parseSpacing.js";import"../../../../molecules/OakTimer/OakTimer.js";import"../../../../molecules/OakCodeRenderer/OakCodeRenderer.js";import{parseColorFilter as c}from"../../../../../styles/helpers/parseColorFilter.js";import{parseDropShadow as d}from"../../../../../styles/helpers/parseDropShadow.js";const p=a(r)``,u=a(l)`
  width: ${m("all-spacing-8")};
  height: ${m("all-spacing-8")};
  padding: 0;

  background: transparent;

  img {
    filter: ${e=>c(e.$disabled?"icon-disabled":"icon-inverted")};
  }
`,k=o`
  ${u} {
    background: ${i("bg-btn-primary")};

    img {
      filter: ${c("icon-main")};
    }
  }
`,O=a(t)`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${d("drop-shadow-centered-lemon")},
      ${d("drop-shadow-centered-grey")};
  }

  ${e=>e.$disabled&&"cursor: default"}

  ${e=>!e.$disabled&&o`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          ${p} {
            text-decoration: underline;
          }

          ${k}
        }
      }

      &:active {
        box-shadow: ${d("drop-shadow-lemon")},
          ${d("drop-shadow-grey")};
        ${k}
      }
    `}
`,g=a(r)`
  flex: 1;
`,h=a=>{const{as:o,lessonSectionName:i,progress:l,disabled:m,href:c,onClick:d,...k}=a,[h,b,$]=function(e){switch(e){case"intro":return["bg-decorative2-very-subdued","bg-decorative2-main","border-decorative2-stronger"];case"starter-quiz":return["bg-decorative1-very-subdued","bg-decorative1-main","border-decorative1-stronger"];case"video":return["bg-decorative4-very-subdued","bg-decorative4-main","border-decorative4-stronger"];case"exit-quiz":return["bg-decorative5-very-subdued","bg-decorative5-main","border-decorative5-stronger"]}}(i);return e.createElement(O,{as:m?"div":o??"a",$gap:"space-between-m",$alignItems:"center",$background:"not-started"===l?h:b,$ph:["inner-padding-m","inner-padding-xl"],$pv:"inner-padding-l",$borderRadius:"border-radius-l",$borderColor:$,$ba:"border-solid-l",$disabled:m,$color:"text-primary",href:m?void 0:c,onClick:m?void 0:d,...k},e.createElement(t,{$width:"all-spacing-13",$justifyContent:"center"},e.createElement(n,{iconName:j(i),$width:"all-spacing-10",$height:"all-spacing-10"})),e.createElement(g,null,e.createElement(p,{as:"strong",$font:["heading-6","heading-5"],$color:m?"text-disabled":"text-primary"},function(e){switch(e){case"intro":return"Introduction";case"starter-quiz":return"Starter quiz";case"video":return"Lesson video";case"exit-quiz":return"Exit quiz"}}(i)),e.createElement(r,{$font:["body-2","body-1"]},function(a){switch(a.progress){case"not-started":return function(e){switch(e.lessonSectionName){case"intro":return"Prepare";case"starter-quiz":return`Activate - ${e.numQuestions} Questions`;case"exit-quiz":return`Check - ${e.numQuestions} questions`;case"video":return"Learn"}}(a);case"in-progress":return"In progress...";case"complete":return e.createElement(t,{$gap:"space-between-sssx",$alignItems:"center"},e.createElement(n,{iconName:"tick",$width:"all-spacing-6",$height:"all-spacing-6"}),function(a){switch(a.lessonSectionName){case"intro":case"video":return"Completed";case"starter-quiz":case"exit-quiz":return e.createElement(e.Fragment,null,e.createElement(r,{$display:["none","block"]},"Completed"),e.createElement(r,{$display:["block","none"]},a.grade,"/",a.numQuestions," correct"))}}(a))}}(a))),function(a){if("complete"!==a.progress)return null;switch(a.lessonSectionName){case"exit-quiz":case"starter-quiz":return e.createElement(r,{$display:["none","block"],$mr:"space-between-m"},e.createElement(s,{$font:"heading-4"},a.grade),e.createElement(s,{$font:"heading-6"}," / ",a.numQuestions));default:return null}}(a),e.createElement(u,{iconName:"chevron-right",$disabled:m}))};function j(e){switch(e){case"intro":return"intro";case"starter-quiz":case"exit-quiz":return"quiz";case"video":return"video"}}export{h as OakLessonNavItem};
//# sourceMappingURL=OakLessonNavItem.js.map
