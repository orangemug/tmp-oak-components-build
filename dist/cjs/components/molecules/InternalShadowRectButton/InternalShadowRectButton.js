"use strict";var e=require("react"),a=require("styled-components");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var t=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js");var s=require("../../atoms/OakSpan/OakSpan.js");require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var l=require("../../atoms/InternalButton/InternalButton.js"),d=require("../OakLoadingSpinner/OakLoadingSpinner.js"),i=require("../../../styles/helpers/parseDropShadow.js"),n=require("../../../styles/utils/positionStyle.js"),u=require("../../../styles/helpers/parseColor.js"),h=require("../../../styles/utils/sizeStyle.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=c(e),$=c(a);const k=$.default(l.InternalButton)`
  ${n.positionStyle}
  ${h.sizeStyle}
  display: inline-block;
  ${e=>a.css`
    &:hover {
      text-decoration: underline;
      color: ${u.parseColor(e.$hoverTextColor)};
      background: ${u.parseColor(e.$hoverBackground)};
      border-color: ${u.parseColor(e.$hoverBorderColor)};
    }
    &:active {
      background: ${u.parseColor(e.$defaultBackground)};
      border-color: ${u.parseColor(e.$defaultBorderColor)};
      color: ${u.parseColor(e.$defaultTextColor)};
    }
    &:disabled {
      background: ${u.parseColor(e.$disabledBackground)};
      border-color: ${u.parseColor(e.$disabledBorderColor)};
      color: ${u.parseColor(e.$disabledTextColor)};
    }
  `}
`,m=$.default(r.OakBox)`
  .grey-shadow:has(+ * + .internal-button:focus-visible) {
    box-shadow: ${i.parseDropShadow("drop-shadow-centered-grey")};
  }
  .yellow-shadow:has(+ .internal-button:focus-visible) {
    box-shadow: ${i.parseDropShadow("drop-shadow-centered-lemon")};
  }
  .yellow-shadow:has(+ .internal-button:hover),
  .yellow-shadow:has(+ .internal-button:hover:not(:focus-visible, :active)) {
    box-shadow: ${e=>i.parseDropShadow(e.$hoverShadow)};
  }
  .grey-shadow:has(+ * + .internal-button:hover) {
    box-shadow: none;
  }
  .grey-shadow:has(+ * + .internal-button:active) {
    box-shadow: ${i.parseDropShadow("drop-shadow-grey")};
  }
  .yellow-shadow:has(+ .internal-button:active) {
    box-shadow: ${i.parseDropShadow("drop-shadow-lemon")};
  }
`;exports.InternalShadowRectButton=e=>{const{element:a="button",children:l,iconName:i,iconAriaHidden:n,isTrailingIcon:u,isLoading:h,disabled:c,width:$="max-content",maxWidth:O,innerWidth:b,defaultBackground:g,defaultBorderColor:w,defaultTextColor:v,disabledTextColor:f,hoverTextColor:x,hoverBackground:y,hoverBorderColor:C,disabledBackground:j,disabledBorderColor:q,className:B,hoverShadow:S="drop-shadow-lemon",pv:I="inner-padding-s",ph:T="inner-padding-m",pt:L,pb:E,iconLayout:F="row",iconGap:A="space-between-ssx",iconOverride:R,font:D="heading-7",textAlign:G="left",loadingSpinnerSize:N="all-spacing-6",...W}=e,z=R??p.default.createElement(p.default.Fragment,null,i&&p.default.createElement(t.OakIcon,{iconName:i,$width:"all-spacing-6",$height:"all-spacing-6",$colorFilter:e.disabled?f:v,"aria-hidden":n})),H=p.default.createElement(r.OakBox,{$width:N,$height:N},p.default.createElement(d.OakLoadingSpinner,{$width:N})),M=p.default.createElement(p.default.Fragment,null,h&&!c?H:z);return p.default.createElement(m,{className:B,$position:"relative",$width:$,$maxWidth:O,$hoverShadow:S},p.default.createElement(r.OakBox,{className:"grey-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),p.default.createElement(r.OakBox,{className:"yellow-shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),p.default.createElement(k,{element:a,className:"internal-button",$ba:"border-solid-m",$background:g,$borderColor:w,$color:v,$pv:I,$ph:T,$pt:L,$pb:E,$borderRadius:"border-radius-s",$position:"relative",disabled:c||h,$width:"100%",$height:"100%",$hoverTextColor:x,$hoverBackground:y,$hoverBorderColor:C,$defaultTextColor:v,$defaultBackground:g,$defaultBorderColor:w,$disabledTextColor:f,$disabledBackground:j,$disabledBorderColor:q,...W},p.default.createElement(o.OakFlex,{$flexDirection:F,$alignItems:"center",$gap:A,$justifyContent:"center",$width:b},!u&&M,p.default.createElement(s.OakSpan,{$font:D,$textAlign:G},l),u&&M)))},exports.StyledButtonWrapper=m;
//# sourceMappingURL=InternalShadowRectButton.js.map
