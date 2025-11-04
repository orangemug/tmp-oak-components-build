"use strict";var e=require("react"),r=require("styled-components"),a=require("../../../styles/helpers/parseColor.js"),o=require("../../atoms/InternalTextInput/InternalTextInput.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../atoms/OakBox/OakBox.js"),require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var s=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var i=require("../../../styles/helpers/parseDropShadow.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=l(e);const n=l(r).default(t.OakFlex)`
  &:hover {
    cursor: text;
  }

  &:focus-within {
    box-shadow: ${e=>e.$focusRingDropShadows.map((e=>i.parseDropShadow(e))).join(",")};
  }

  background: ${e=>a.parseColor(e.$background)};

  ${e=>!e.$readOnly&&r.css`
      @media (hover: hover) {
        &:hover:not(:focus-within) {
          background: ${a.parseColor(e.$hoverBackground)};
        }
      }
    `}

  ${e=>e.$readOnly&&r.css`
      border-color: ${a.parseColor(e.$readOnlyBorderColor)};
      color: ${a.parseColor(e.$readOnlyColor)};
    `}

  ${e=>e.$disabled&&r.css`
      background: ${a.parseColor(e.$disabledBackgroundColor)};
      color: ${a.parseColor(e.$disabledColor)};
      &:hover {
        cursor: not-allowed;
      }
    `}
`;exports.OakTextInput=({type:e="text",borderColor:r="border-primary",readOnlyBorderColor:a="border-neutral",focusRingDropShadows:i=["drop-shadow-centered-lemon","drop-shadow-centered-grey"],background:l="bg-primary",hoverBackground:c="bg-neutral",disabledBackgroundColor:u="bg-neutral",highlightBackgroundColor:k="bg-decorative5-main",color:O="text-primary",disabledColor:p="text-disabled",readOnlyColor:$="text-subdued",validity:m,iconColor:g="icon-inverted",validBorderColor:h="border-success",invalidBorderColor:b="border-error",validIconColor:y="icon-success",invalidIconColor:C="border-error",iconName:q,iconAlt:j,isTrailingIcon:v=!1,isHighlighted:x=!1,wrapperWidth:I,wrapperMaxWidth:w,...f})=>{let B=l,S=r,F=g,T=a;switch(!0){case"valid"===m:S=h,F=y,T=h;break;case"invalid"===m:S=b,F=C,T=b;break;case x:B=k}return d.default.createElement(n,{$height:"fit-content",$width:I,$maxWidth:w,$borderRadius:"border-radius-s",$ba:"border-solid-m",$borderColor:S,$focusRingDropShadows:i,$background:B,$hoverBackground:c,$disabledBackgroundColor:u,$readOnlyBorderColor:T,$disabledColor:p,$readOnlyColor:$,$color:O,$alignItems:"center",$position:"relative",$gap:"space-between-s",$ph:"inner-padding-l",$disabled:!!f.disabled,$readOnly:!!f.readOnly,onClick:e=>{e.currentTarget.querySelector("input")?.focus()}},!v&&q&&d.default.createElement(s.OakIcon,{iconName:q,$colorFilter:F,$pointerEvents:"none",$width:"all-spacing-7",alt:j}),d.default.createElement(t.OakFlex,{$flexGrow:1},d.default.createElement(o.InternalTextInput,{type:e,...f,$width:"100%",$pv:"inner-padding-l",$height:"all-spacing-12"})),v&&q&&d.default.createElement(s.OakIcon,{iconName:q,$colorFilter:F,$pointerEvents:"none",$width:"all-spacing-7",alt:j}))};
//# sourceMappingURL=OakTextInput.js.map
