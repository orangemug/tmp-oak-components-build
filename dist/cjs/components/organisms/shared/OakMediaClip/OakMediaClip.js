"use strict";var e=require("react"),a=require("styled-components"),r=require("../../../atoms/OakFlex/OakFlex.js"),o=require("../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js");var t=require("../../../atoms/OakBox/OakBox.js");require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js"),require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js");var l=require("../../../atoms/OakHeading/OakHeading.js"),i=require("../../../atoms/OakIcon/OakIcon.js"),s=require("../../../atoms/OakImage/OakImage.js");require("../../../atoms/OakSpan/OakSpan.js");var n=require("../../../atoms/OakLI/OakLI.js");require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js");var d=require("../../../atoms/OakP/OakP.js");require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var u=require("../../../atoms/InternalButton/InternalButton.js"),c=require("../../../../styles/utils/sizeStyle.js"),k=require("../../../../styles/utils/positionStyle.js"),m=require("../../../../styles/helpers/parseColor.js");require("../../../molecules/OakAccordion/OakAccordion.js"),require("../../../molecules/OakBackLink/OakBackLink.js"),require("../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js"),require("../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js"),require("../../../atoms/InternalStyledSvg/InternalStyledSvg.js"),require("../../../atoms/InternalCheckBox/InternalCheckBox.js"),require("../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),require("../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js"),require("../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js"),require("../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js"),require("../../../molecules/OakDraggable/OakDraggable.js"),require("../../../molecules/OakDroppable/OakDroppable.js"),require("../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js"),require("../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js"),require("../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js"),require("../../../molecules/OakLink/OakLink.js"),require("../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js"),require("../../../molecules/OakModal/OakModal.js"),require("../../../molecules/OakModalCenter/OakModalCenter.js"),require("../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js"),require("../../../molecules/OakPromoTag/OakPromoTag.js"),require("../../../molecules/OakRadioButton/OakRadioButton.js"),require("../../../molecules/OakRadioGroup/OakRadioGroup.js"),require("../../../molecules/OakRadioTile/OakRadioTile.js"),require("../../../molecules/OakSecondaryLink/OakSecondaryLink.js"),require("../../../molecules/OakFilterDrawer/OakFilterDrawer.js"),require("../../../molecules/OakTextInput/OakTextInput.js"),require("react-dom"),require("../../../atoms/InternalTooltip/InternalTooltip.js");var O=require("../../../molecules/OakTagFunctional/OakTagFunctional.js"),p=require("../../../molecules/OakTimer/OakTimer.js");function b(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../../molecules/OakCodeRenderer/OakCodeRenderer.js");var g=b(e),h=b(a);const $=h.default(o.StyledButtonWrapper)`
  min-height: 72px;
  width: 100%;
`,x=h.default(s.OakImage)`
  ${s.placeholderStyles}
`,j=h.default(r.OakFlex)`
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${e=>e.disabled&&a.css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: lightgray;
        opacity: 0.5;
        border-radius: 2px;
      }
    `}
`,q=h.default(r.OakFlex)`
  position: "relative";
  overflow: hidden;
  text-overflow: ellipsis;
  h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
`,f=h.default(u.InternalButton)`
  ${k.positionStyle}
  ${c.sizeStyle}
  display: inline-block;
  transition: opacity 300ms ease-out;
  ${e=>a.css`
    &:hover {
      h4 {
        text-decoration: ${"standard"===e.muxPlayingState?"underline":"none"};
      }
      color: ${m.parseColor(e.$hoverTextColor)};
      background: ${m.parseColor(e.$hoverBackground)};
      border-color: ${m.parseColor(e.$hoverBorderColor)};
    }
    &:active {
      background: ${m.parseColor(e.$defaultBackground)};
      border-color: ${m.parseColor(e.$defaultBorderColor)};
      color: ${m.parseColor(e.$defaultTextColor)};
    }
    &:disabled {
      background: ${m.parseColor(e.$disabledBackground)};
      border-color: ${m.parseColor(e.$disabledBorderColor)};
      color: ${m.parseColor(e.$disabledTextColor)};
    }
  `}
`;exports.OakMediaClip=({thumbnailImage:e,timeCode:a,clipName:o,learningCycle:u,muxPlayingState:c,onClick:k,disabled:m,imageAltText:b,isAudioClip:h,element:C="button"})=>{const y=(e=>{switch(e){case"standard":return{defaultBackground:"bg-primary",defaultTextColor:"text-inverted",hoverBackground:"bg-btn-secondary-hover",hoverTextColor:"text-primary",clipNameTitle:"text-primary"};case"playing":return{defaultBackground:"bg-decorative1-subdued",defaultTextColor:"text-primary",hoverBackground:"bg-decorative1-main",hoverTextColor:"text-primary",clipNameTitle:"text-primary"};case"played":return{defaultBackground:"bg-primary",defaultTextColor:"text-subdued",hoverBackground:"bg-btn-secondary-hover",hoverTextColor:"text-primary",clipNameTitle:"text-subdued"}}})(c);return g.default.createElement(n.OakLI,{$mb:"space-between-ssx"},g.default.createElement($,{$position:"relative",$borderRadius:"border-radius-s"},g.default.createElement(t.OakBox,{className:"grey-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),g.default.createElement(t.OakBox,{className:"yellow-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),g.default.createElement(f,{element:C,tabIndex:0,className:"internal-button",$width:"100%",$height:"100%",$background:y.defaultBackground,$borderColor:"transparent",$borderRadius:"border-radius-s",$position:"relative",disabled:m,defaultBorderColor:"transparent",$color:y.defaultTextColor,$hoverBackground:y.hoverBackground,$hoverBorderColor:"transparent",$hoverTextColor:"text-primary",$disabledBackground:"bg-btn-secondary-disabled",$disabledBorderColor:"text-disabled",$disabledTextColor:"text-disabled",justifyContent:"flex-start",onClick:k,$pa:"inner-padding-xs",muxPlayingState:c},g.default.createElement(r.OakFlex,{$flexDirection:"row",$alignItems:"center",$width:"100%"},g.default.createElement(g.default.Fragment,null,g.default.createElement(j,{$height:"all-spacing-10",$width:"all-spacing-15",$borderRadius:"border-radius-xs",$mr:"space-between-s",$position:"relative",disabled:m,$flexShrink:0},!h&&e?g.default.createElement(x,{fill:!0,$height:"100%",$width:"100%",src:e??s.oakPlaceholder,alt:b,$showOakPlaceholder:!e,$borderRadius:"border-radius-xs"}):g.default.createElement(i.OakIcon,{fill:!0,$height:"100%",$width:"100%",iconName:"audio-clip-small",alt:b,$borderRadius:"border-radius-xs"}),g.default.createElement(p.OakTimer,{timeCode:a,$position:"absolute",$bottom:"space-between-sssx",$right:"space-between-sssx"})),g.default.createElement(q,{$width:"100%",$flexDirection:"column",$gap:"space-between-sssx"},g.default.createElement(l.OakHeading,{$textOverflow:"ellipsis",tag:"h4",$font:"heading-7",$color:m?"text-disabled":y.clipNameTitle},o),u&&g.default.createElement(d.OakP,{$color:m?"text-disabled":"text-subdued",$font:"body-3",$textOverflow:"ellipsis",$overflow:"hidden",$whiteSpace:"nowrap"},u))),"played"===c&&!m&&g.default.createElement(r.OakFlex,{$flexGrow:1},g.default.createElement(O.OakTagFunctional,{label:"Played",$background:"bg-neutral"}))))))},exports.StyledMediaClipImage=x;
//# sourceMappingURL=OakMediaClip.js.map
