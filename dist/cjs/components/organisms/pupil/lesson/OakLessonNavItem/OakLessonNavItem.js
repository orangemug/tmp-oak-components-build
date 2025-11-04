"use strict";var e=require("react"),r=require("styled-components");require("../../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../../atoms/OakAspectRatio/OakAspectRatio.js");var a=require("../../../../atoms/OakBox/OakBox.js");require("../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../../../atoms/OakFlex/OakFlex.js");require("../../../../atoms/OakForm/OakForm.js"),require("../../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../../atoms/OakGrid/OakGrid.js"),require("../../../../atoms/OakGridArea/OakGridArea.js"),require("../../../../atoms/OakHeading/OakHeading.js");var o=require("../../../../atoms/OakIcon/OakIcon.js");require("../../../../atoms/OakImage/OakImage.js");var n=require("../../../../atoms/OakSpan/OakSpan.js");require("../../../../atoms/OakLI/OakLI.js"),require("../../../../atoms/OakLabel/OakLabel.js"),require("../../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../../atoms/OakOL/OakOL.js"),require("../../../../atoms/OakFieldset/OakFieldset.js"),require("../../../../atoms/OakP/OakP.js"),require("../../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../../atoms/OakTypography/OakTypography.js"),require("../../../../atoms/OakUL/OakUL.js"),require("../../../../atoms/OakSvg/OakSvg.js");var s=require("../../../../../styles/helpers/parseColor.js");require("../../../../molecules/OakAccordion/OakAccordion.js"),require("../../../../molecules/OakBackLink/OakBackLink.js"),require("../../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js"),require("../../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js"),require("../../../../atoms/InternalStyledSvg/InternalStyledSvg.js"),require("../../../../atoms/InternalCheckBox/InternalCheckBox.js"),require("../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),require("../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js"),require("../../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js"),require("../../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js"),require("../../../../molecules/OakDraggable/OakDraggable.js"),require("../../../../molecules/OakDroppable/OakDroppable.js"),require("../../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js"),require("../../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js"),require("../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js"),require("../../../../molecules/OakLink/OakLink.js"),require("../../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js"),require("../../../../molecules/OakModal/OakModal.js"),require("../../../../molecules/OakModalCenter/OakModalCenter.js"),require("../../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js"),require("../../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js"),require("../../../../molecules/OakPromoTag/OakPromoTag.js"),require("../../../../molecules/OakRadioButton/OakRadioButton.js"),require("../../../../molecules/OakRadioGroup/OakRadioGroup.js"),require("../../../../molecules/OakRadioTile/OakRadioTile.js");var i=require("../../../../molecules/OakRoundIcon/OakRoundIcon.js");require("../../../../molecules/OakSecondaryLink/OakSecondaryLink.js"),require("../../../../molecules/OakFilterDrawer/OakFilterDrawer.js"),require("../../../../molecules/OakTextInput/OakTextInput.js"),require("react-dom"),require("../../../../atoms/InternalTooltip/InternalTooltip.js");var l=require("../../../../../styles/helpers/parseSpacing.js");require("../../../../molecules/OakTimer/OakTimer.js"),require("../../../../molecules/OakCodeRenderer/OakCodeRenderer.js");var u=require("../../../../../styles/helpers/parseColorFilter.js"),d=require("../../../../../styles/helpers/parseDropShadow.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var k=c(e),m=c(r);const O=m.default(a.OakBox)``,p=m.default(i.OakRoundIcon)`
  width: ${l.parseSpacing("all-spacing-8")};
  height: ${l.parseSpacing("all-spacing-8")};
  padding: 0;

  background: transparent;

  img {
    filter: ${e=>u.parseColorFilter(e.$disabled?"icon-disabled":"icon-inverted")};
  }
`,g=r.css`
  ${p} {
    background: ${s.parseColor("bg-btn-primary")};

    img {
      filter: ${u.parseColorFilter("icon-main")};
    }
  }
`,q=m.default(t.OakFlex)`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${d.parseDropShadow("drop-shadow-centered-lemon")},
      ${d.parseDropShadow("drop-shadow-centered-grey")};
  }

  ${e=>e.$disabled&&"cursor: default"}

  ${e=>!e.$disabled&&r.css`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          ${O} {
            text-decoration: underline;
          }

          ${g}
        }
      }

      &:active {
        box-shadow: ${d.parseDropShadow("drop-shadow-lemon")},
          ${d.parseDropShadow("drop-shadow-grey")};
        ${g}
      }
    `}
`,h=m.default(a.OakBox)`
  flex: 1;
`;function j(e){switch(e){case"intro":return"intro";case"starter-quiz":case"exit-quiz":return"quiz";case"video":return"video"}}exports.OakLessonNavItem=e=>{const{as:r,lessonSectionName:s,progress:i,disabled:l,href:u,onClick:d,...c}=e,[m,g,b]=function(e){switch(e){case"intro":return["bg-decorative2-very-subdued","bg-decorative2-main","border-decorative2-stronger"];case"starter-quiz":return["bg-decorative1-very-subdued","bg-decorative1-main","border-decorative1-stronger"];case"video":return["bg-decorative4-very-subdued","bg-decorative4-main","border-decorative4-stronger"];case"exit-quiz":return["bg-decorative5-very-subdued","bg-decorative5-main","border-decorative5-stronger"]}}(s);return k.default.createElement(q,{as:l?"div":r??"a",$gap:"space-between-m",$alignItems:"center",$background:"not-started"===i?m:g,$ph:["inner-padding-m","inner-padding-xl"],$pv:"inner-padding-l",$borderRadius:"border-radius-l",$borderColor:b,$ba:"border-solid-l",$disabled:l,$color:"text-primary",href:l?void 0:u,onClick:l?void 0:d,...c},k.default.createElement(t.OakFlex,{$width:"all-spacing-13",$justifyContent:"center"},k.default.createElement(o.OakIcon,{iconName:j(s),$width:"all-spacing-10",$height:"all-spacing-10"})),k.default.createElement(h,null,k.default.createElement(O,{as:"strong",$font:["heading-6","heading-5"],$color:l?"text-disabled":"text-primary"},function(e){switch(e){case"intro":return"Introduction";case"starter-quiz":return"Starter quiz";case"video":return"Lesson video";case"exit-quiz":return"Exit quiz"}}(s)),k.default.createElement(a.OakBox,{$font:["body-2","body-1"]},function(e){switch(e.progress){case"not-started":return function(e){switch(e.lessonSectionName){case"intro":return"Prepare";case"starter-quiz":return`Activate - ${e.numQuestions} Questions`;case"exit-quiz":return`Check - ${e.numQuestions} questions`;case"video":return"Learn"}}(e);case"in-progress":return"In progress...";case"complete":return k.default.createElement(t.OakFlex,{$gap:"space-between-sssx",$alignItems:"center"},k.default.createElement(o.OakIcon,{iconName:"tick",$width:"all-spacing-6",$height:"all-spacing-6"}),function(e){switch(e.lessonSectionName){case"intro":case"video":return"Completed";case"starter-quiz":case"exit-quiz":return k.default.createElement(k.default.Fragment,null,k.default.createElement(a.OakBox,{$display:["none","block"]},"Completed"),k.default.createElement(a.OakBox,{$display:["block","none"]},e.grade,"/",e.numQuestions," correct"))}}(e))}}(e))),function(e){if("complete"!==e.progress)return null;switch(e.lessonSectionName){case"exit-quiz":case"starter-quiz":return k.default.createElement(a.OakBox,{$display:["none","block"],$mr:"space-between-m"},k.default.createElement(n.OakSpan,{$font:"heading-4"},e.grade),k.default.createElement(n.OakSpan,{$font:"heading-6"}," / ",e.numQuestions));default:return null}}(e),k.default.createElement(p,{iconName:"chevron-right",$disabled:l}))};
//# sourceMappingURL=OakLessonNavItem.js.map
