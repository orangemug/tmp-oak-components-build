"use strict";var e=require("react"),a=require("styled-components"),o=require("../../../styles/helpers/parseColorFilter.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var i=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js");var s=require("../../atoms/OakSpan/OakSpan.js");require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var n=require("../../atoms/InternalButton/InternalButton.js"),l=require("../OakLoadingSpinner/OakLoadingSpinner.js"),d=require("../../../styles/helpers/parseDropShadow.js"),c=require("../../../styles/utils/positionStyle.js"),u=require("../../../styles/helpers/parseColor.js"),k=require("../../../styles/utils/sizeStyle.js");function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var $=h(e),m=h(a);const O=m.default(n.InternalButton)`
  display: inline-block;
  ${c.positionStyle}
  ${k.sizeStyle}
  ${e=>a.css`
    &:hover {
      text-decoration: underline;
      color: ${u.parseColor(e.$hoverTextColor)};

      &:not(:active) [data-icon-for="button"] img {
        filter: ${e.$hoverIconColor?o.parseColorFilter(e.$hoverIconColor):void 0};
      }
    }
    &:active {
      color: ${u.parseColor(e.$defaultTextColor)};
    }
    &:disabled {
      color: ${u.parseColor(e.$disabledTextColor)};
    }
  `}
`,p=m.default(t.OakFlex)`
  > :first-child:focus-visible .shadow {
    box-shadow: ${d.parseDropShadow("drop-shadow-centered-lemon")},
      ${d.parseDropShadow("drop-shadow-centered-grey")};
  }
  > :first-child:hover .shadow {
    box-shadow: ${d.parseDropShadow("drop-shadow-lemon")};
  }
  > :first-child:active .shadow {
    box-shadow: ${d.parseDropShadow("drop-shadow-lemon")},
      ${d.parseDropShadow("drop-shadow-grey")};
  }
  ${e=>a.css`
    > :first-child:disabled .icon-container {
      background: ${u.parseColor(e.$disabledIconBackground)};
    }
    > :first-child:hover .icon-container {
      background: ${u.parseColor(e.$hoverIconBackground)};
    }
    > :first-child:active .icon-container {
      background: ${u.parseColor(e.$defaultIconBackground)};
    }
  `}
`;exports.InternalShadowRoundButton=e=>{const{element:a="button",children:o,iconName:n,isTrailingIcon:d,isLoading:c,disabled:u,width:k="max-content",maxWidth:h,iconBackgroundSize:m,iconSize:g,disabledIconBackground:f,hoverIconColor:b,disabledTextColor:j,defaultIconColor:q,hoverIconBackground:I,defaultIconBackground:v,disabledIconColor:x,defaultTextColor:w,hoverTextColor:C,className:S,...y}=e,B=n&&$.default.createElement(i.OakIcon,{iconName:n,$width:g,$height:g,$colorFilter:e.disabled?x:q||null,"data-icon-for":"button"}),T=$.default.createElement(r.OakBox,{$width:g,$height:g},$.default.createElement(l.OakLoadingSpinner,{$width:g,loaderColor:"white"})),F=(c||B)&&$.default.createElement(t.OakFlex,{className:"icon-container",$background:e.defaultIconBackground,$color:e.defaultTextColor,$borderRadius:"border-radius-circle",$position:"relative",$width:m,$height:m,$alignItems:"center",$justifyContent:"center",$minWidth:m},$.default.createElement(r.OakBox,{className:"shadow",$position:"absolute",$borderRadius:"border-radius-circle",$width:"100%",$height:"100%",$top:"all-spacing-0"}),c&&!u?T:B);return $.default.createElement(p,{className:S,$position:"relative",$width:k,$maxWidth:h,$disabledIconBackground:f,$hoverIconBackground:I,$defaultIconBackground:v},$.default.createElement(O,{element:a??"button",...y,$hoverTextColor:C,$hoverIconColor:b,$defaultTextColor:w,$disabledTextColor:j,$color:w,$position:"relative",disabled:u||c},$.default.createElement(t.OakFlex,{$flexDirection:"row",$alignItems:"center",$gap:o?"space-between-xs":"space-between-none",$justifyContent:"center"},!d&&F,$.default.createElement(s.OakSpan,{$font:"heading-7"},o),d&&F)))};
//# sourceMappingURL=InternalShadowRoundButton.js.map
