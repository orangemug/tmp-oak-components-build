import e from"react";import o,{css as a}from"styled-components";import{OakFlex as t}from"../../../atoms/OakFlex/OakFlex.js";import{StyledButtonWrapper as r}from"../../../molecules/InternalShadowRectButton/InternalShadowRectButton.js";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as l}from"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import{OakHeading as i}from"../../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../../atoms/OakIcon/OakIcon.js";import{OakImage as n,placeholderStyles as d,oakPlaceholder as m}from"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import{OakLI as c}from"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import{OakP as p}from"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";import{InternalButton as k}from"../../../atoms/InternalButton/InternalButton.js";import{sizeStyle as u}from"../../../../styles/utils/sizeStyle.js";import{positionStyle as O}from"../../../../styles/utils/positionStyle.js";import{parseColor as b}from"../../../../styles/helpers/parseColor.js";import"../../../molecules/OakAccordion/OakAccordion.js";import"../../../molecules/OakBackLink/OakBackLink.js";import"../../../molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js";import"../../../atoms/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement.js";import"../../../atoms/InternalStyledSvg/InternalStyledSvg.js";import"../../../atoms/InternalCheckBox/InternalCheckBox.js";import"../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import"../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js";import"../../../molecules/OakCollapsibleContent/OakCollapsibleContent.js";import"../../../molecules/OakDragAndDropInstructions/OakDragAndDropInstructions.js";import"../../../molecules/OakDraggable/OakDraggable.js";import"../../../molecules/OakDroppable/OakDroppable.js";import"../../../molecules/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js";import"../../../molecules/OakHandDrawnHR/OakHandDrawnHR.js";import"../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import"../../../molecules/OakLink/OakLink.js";import"../../../molecules/OakLoadingSpinner/OakLoadingSpinner.js";import"../../../molecules/OakModal/OakModal.js";import"../../../molecules/OakModalCenter/OakModalCenter.js";import"../../../molecules/OakOutlineAccordion/OakOutlineAccordion.js";import"../../../molecules/OakPromoTag/OakPromoTag.js";import"../../../molecules/OakRadioButton/OakRadioButton.js";import"../../../molecules/OakRadioGroup/OakRadioGroup.js";import"../../../molecules/OakRadioTile/OakRadioTile.js";import"../../../molecules/OakSecondaryLink/OakSecondaryLink.js";import"../../../molecules/OakFilterDrawer/OakFilterDrawer.js";import"../../../molecules/OakTextInput/OakTextInput.js";import"react-dom";import"../../../atoms/InternalTooltip/InternalTooltip.js";import{OakTagFunctional as g}from"../../../molecules/OakTagFunctional/OakTagFunctional.js";import{OakTimer as $}from"../../../molecules/OakTimer/OakTimer.js";import"../../../molecules/OakCodeRenderer/OakCodeRenderer.js";const h=o(r)`
  min-height: 72px;
  width: 100%;
`,x=o(n)`
  ${d}
`,j=o(t)`
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${e=>e.disabled&&a`
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
`,f=o(t)`
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
`,y=o(k)`
  ${O}
  ${u}
  display: inline-block;
  transition: opacity 300ms ease-out;
  ${e=>a`
    &:hover {
      h4 {
        text-decoration: ${"standard"===e.muxPlayingState?"underline":"none"};
      }
      color: ${b(e.$hoverTextColor)};
      background: ${b(e.$hoverBackground)};
      border-color: ${b(e.$hoverBorderColor)};
    }
    &:active {
      background: ${b(e.$defaultBackground)};
      border-color: ${b(e.$defaultBorderColor)};
      color: ${b(e.$defaultTextColor)};
    }
    &:disabled {
      background: ${b(e.$disabledBackground)};
      border-color: ${b(e.$disabledBorderColor)};
      color: ${b(e.$disabledTextColor)};
    }
  `}
`,w=({thumbnailImage:o,timeCode:a,clipName:r,learningCycle:n,muxPlayingState:d,onClick:k,disabled:u,imageAltText:O,isAudioClip:b,element:w="button"})=>{const C=(e=>{switch(e){case"standard":return{defaultBackground:"bg-primary",defaultTextColor:"text-inverted",hoverBackground:"bg-btn-secondary-hover",hoverTextColor:"text-primary",clipNameTitle:"text-primary"};case"playing":return{defaultBackground:"bg-decorative1-subdued",defaultTextColor:"text-primary",hoverBackground:"bg-decorative1-main",hoverTextColor:"text-primary",clipNameTitle:"text-primary"};case"played":return{defaultBackground:"bg-primary",defaultTextColor:"text-subdued",hoverBackground:"bg-btn-secondary-hover",hoverTextColor:"text-primary",clipNameTitle:"text-subdued"}}})(d);return e.createElement(c,{$mb:"space-between-ssx"},e.createElement(h,{$position:"relative",$borderRadius:"border-radius-s"},e.createElement(l,{className:"grey-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),e.createElement(l,{className:"yellow-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),e.createElement(y,{element:w,tabIndex:0,className:"internal-button",$width:"100%",$height:"100%",$background:C.defaultBackground,$borderColor:"transparent",$borderRadius:"border-radius-s",$position:"relative",disabled:u,defaultBorderColor:"transparent",$color:C.defaultTextColor,$hoverBackground:C.hoverBackground,$hoverBorderColor:"transparent",$hoverTextColor:"text-primary",$disabledBackground:"bg-btn-secondary-disabled",$disabledBorderColor:"text-disabled",$disabledTextColor:"text-disabled",justifyContent:"flex-start",onClick:k,$pa:"inner-padding-xs",muxPlayingState:d},e.createElement(t,{$flexDirection:"row",$alignItems:"center",$width:"100%"},e.createElement(e.Fragment,null,e.createElement(j,{$height:"all-spacing-10",$width:"all-spacing-15",$borderRadius:"border-radius-xs",$mr:"space-between-s",$position:"relative",disabled:u,$flexShrink:0},!b&&o?e.createElement(x,{fill:!0,$height:"100%",$width:"100%",src:o??m,alt:O,$showOakPlaceholder:!o,$borderRadius:"border-radius-xs"}):e.createElement(s,{fill:!0,$height:"100%",$width:"100%",iconName:"audio-clip-small",alt:O,$borderRadius:"border-radius-xs"}),e.createElement($,{timeCode:a,$position:"absolute",$bottom:"space-between-sssx",$right:"space-between-sssx"})),e.createElement(f,{$width:"100%",$flexDirection:"column",$gap:"space-between-sssx"},e.createElement(i,{$textOverflow:"ellipsis",tag:"h4",$font:"heading-7",$color:u?"text-disabled":C.clipNameTitle},r),n&&e.createElement(p,{$color:u?"text-disabled":"text-subdued",$font:"body-3",$textOverflow:"ellipsis",$overflow:"hidden",$whiteSpace:"nowrap"},n))),"played"===d&&!u&&e.createElement(t,{$flexGrow:1},e.createElement(g,{label:"Played",$background:"bg-neutral"}))))))};export{w as OakMediaClip,x as StyledMediaClipImage};
//# sourceMappingURL=OakMediaClip.js.map
