import o from"react";import e,{css as a}from"styled-components";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as r}from"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as t}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import{OakSpan as i}from"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{InternalButton as d}from"../../atoms/InternalButton/InternalButton.js";import{OakLoadingSpinner as l}from"../OakLoadingSpinner/OakLoadingSpinner.js";import{parseDropShadow as n}from"../../../styles/helpers/parseDropShadow.js";import{positionStyle as m}from"../../../styles/utils/positionStyle.js";import{parseColor as h}from"../../../styles/helpers/parseColor.js";import{sizeStyle as p}from"../../../styles/utils/sizeStyle.js";const c=e(d)`
  ${m}
  ${p}
  display: inline-block;
  ${o=>a`
    &:hover {
      text-decoration: underline;
      color: ${h(o.$hoverTextColor)};
      background: ${h(o.$hoverBackground)};
      border-color: ${h(o.$hoverBorderColor)};
    }
    &:active {
      background: ${h(o.$defaultBackground)};
      border-color: ${h(o.$defaultBorderColor)};
      color: ${h(o.$defaultTextColor)};
    }
    &:disabled {
      background: ${h(o.$disabledBackground)};
      border-color: ${h(o.$disabledBorderColor)};
      color: ${h(o.$disabledTextColor)};
    }
  `}
`,$=e(r)`
  .grey-shadow:has(+ * + .internal-button:focus-visible) {
    box-shadow: ${n("drop-shadow-centered-grey")};
  }
  .yellow-shadow:has(+ .internal-button:focus-visible) {
    box-shadow: ${n("drop-shadow-centered-lemon")};
  }
  .yellow-shadow:has(+ .internal-button:hover),
  .yellow-shadow:has(+ .internal-button:hover:not(:focus-visible, :active)) {
    box-shadow: ${o=>n(o.$hoverShadow)};
  }
  .grey-shadow:has(+ * + .internal-button:hover) {
    box-shadow: none;
  }
  .grey-shadow:has(+ * + .internal-button:active) {
    box-shadow: ${n("drop-shadow-grey")};
  }
  .yellow-shadow:has(+ .internal-button:active) {
    box-shadow: ${n("drop-shadow-lemon")};
  }
`,k=e=>{const{element:a="button",children:d,iconName:n,iconAriaHidden:m,isTrailingIcon:h,isLoading:p,disabled:k,width:b="max-content",maxWidth:g,innerWidth:u,defaultBackground:O,defaultBorderColor:w,defaultTextColor:j,disabledTextColor:v,hoverTextColor:x,hoverBackground:f,hoverBorderColor:y,disabledBackground:C,disabledBorderColor:B,className:S,hoverShadow:T="drop-shadow-lemon",pv:I="inner-padding-s",ph:L="inner-padding-m",pt:E,pb:A,iconLayout:F="row",iconGap:G="space-between-ssx",iconOverride:N,font:R="heading-7",textAlign:W="left",loadingSpinnerSize:H="all-spacing-6",...z}=e,D=N??o.createElement(o.Fragment,null,n&&o.createElement(s,{iconName:n,$width:"all-spacing-6",$height:"all-spacing-6",$colorFilter:e.disabled?v:j,"aria-hidden":m})),M=o.createElement(r,{$width:H,$height:H},o.createElement(l,{$width:H})),P=o.createElement(o.Fragment,null,p&&!k?M:D);return o.createElement($,{className:S,$position:"relative",$width:b,$maxWidth:g,$hoverShadow:T},o.createElement(r,{className:"grey-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),o.createElement(r,{className:"yellow-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),o.createElement(c,{element:a,className:"internal-button",$ba:"border-solid-m",$background:O,$borderColor:w,$color:j,$pv:I,$ph:L,$pt:E,$pb:A,$borderRadius:"border-radius-s",$position:"relative",disabled:k||p,$width:"100%",$height:"100%",$hoverTextColor:x,$hoverBackground:f,$hoverBorderColor:y,$defaultTextColor:j,$defaultBackground:O,$defaultBorderColor:w,$disabledTextColor:v,$disabledBackground:C,$disabledBorderColor:B,...z},o.createElement(t,{$flexDirection:F,$alignItems:"center",$gap:G,$justifyContent:"center",$width:u},!h&&P,o.createElement(i,{$font:R,$textAlign:W},d),h&&P)))};export{k as InternalShadowRectButton,$ as StyledButtonWrapper};
//# sourceMappingURL=InternalShadowRectButton.js.map
