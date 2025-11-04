import o from"react";import e,{css as a}from"styled-components";import{parseColorFilter as t}from"../../../styles/helpers/parseColorFilter.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as r}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as i}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import{OakSpan as n}from"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{InternalButton as l}from"../../atoms/InternalButton/InternalButton.js";import{OakLoadingSpinner as d}from"../OakLoadingSpinner/OakLoadingSpinner.js";import{parseDropShadow as c}from"../../../styles/helpers/parseDropShadow.js";import{positionStyle as m}from"../../../styles/utils/positionStyle.js";import{parseColor as p}from"../../../styles/helpers/parseColor.js";import{sizeStyle as k}from"../../../styles/utils/sizeStyle.js";const h=e(l)`
  display: inline-block;
  ${m}
  ${k}
  ${o=>a`
    &:hover {
      text-decoration: underline;
      color: ${p(o.$hoverTextColor)};

      &:not(:active) [data-icon-for="button"] img {
        filter: ${o.$hoverIconColor?t(o.$hoverIconColor):void 0};
      }
    }
    &:active {
      color: ${p(o.$defaultTextColor)};
    }
    &:disabled {
      color: ${p(o.$disabledTextColor)};
    }
  `}
`,$=e(i)`
  > :first-child:focus-visible .shadow {
    box-shadow: ${c("drop-shadow-centered-lemon")},
      ${c("drop-shadow-centered-grey")};
  }
  > :first-child:hover .shadow {
    box-shadow: ${c("drop-shadow-lemon")};
  }
  > :first-child:active .shadow {
    box-shadow: ${c("drop-shadow-lemon")},
      ${c("drop-shadow-grey")};
  }
  ${o=>a`
    > :first-child:disabled .icon-container {
      background: ${p(o.$disabledIconBackground)};
    }
    > :first-child:hover .icon-container {
      background: ${p(o.$hoverIconBackground)};
    }
    > :first-child:active .icon-container {
      background: ${p(o.$defaultIconBackground)};
    }
  `}
`,O=e=>{const{element:a="button",children:t,iconName:l,isTrailingIcon:c,isLoading:m,disabled:p,width:k="max-content",maxWidth:O,iconBackgroundSize:u,iconSize:g,disabledIconBackground:b,hoverIconColor:f,disabledTextColor:j,defaultIconColor:I,hoverIconBackground:x,defaultIconBackground:v,disabledIconColor:w,defaultTextColor:C,hoverTextColor:y,className:B,...S}=e,T=l&&o.createElement(s,{iconName:l,$width:g,$height:g,$colorFilter:e.disabled?w:I||null,"data-icon-for":"button"}),L=o.createElement(r,{$width:g,$height:g},o.createElement(d,{$width:g,loaderColor:"white"})),E=(m||T)&&o.createElement(i,{className:"icon-container",$background:e.defaultIconBackground,$color:e.defaultTextColor,$borderRadius:"border-radius-circle",$position:"relative",$width:u,$height:u,$alignItems:"center",$justifyContent:"center",$minWidth:u},o.createElement(r,{className:"shadow",$position:"absolute",$borderRadius:"border-radius-circle",$width:"100%",$height:"100%",$top:"all-spacing-0"}),m&&!p?L:T);return o.createElement($,{className:B,$position:"relative",$width:k,$maxWidth:O,$disabledIconBackground:b,$hoverIconBackground:x,$defaultIconBackground:v},o.createElement(h,{element:a??"button",...S,$hoverTextColor:y,$hoverIconColor:f,$defaultTextColor:C,$disabledTextColor:j,$color:C,$position:"relative",disabled:p||m},o.createElement(i,{$flexDirection:"row",$alignItems:"center",$gap:t?"space-between-xs":"space-between-none",$justifyContent:"center"},!c&&E,o.createElement(n,{$font:"heading-7"},t),c&&E)))};export{O as InternalShadowRoundButton};
//# sourceMappingURL=InternalShadowRoundButton.js.map
