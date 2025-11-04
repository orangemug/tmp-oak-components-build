import o from"react";import r,{css as a}from"styled-components";import{parseColor as e}from"../../../styles/helpers/parseColor.js";import{InternalTextInput as t}from"../../atoms/InternalTextInput/InternalTextInput.js";import"../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../atoms/OakAspectRatio/OakAspectRatio.js";import"../../atoms/OakBox/OakBox.js";import"../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as i}from"../../atoms/OakFlex/OakFlex.js";import"../../atoms/OakForm/OakForm.js";import"../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../atoms/OakGrid/OakGrid.js";import"../../atoms/OakGridArea/OakGridArea.js";import"../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../atoms/OakIcon/OakIcon.js";import"../../atoms/OakImage/OakImage.js";import"../../atoms/OakSpan/OakSpan.js";import"../../atoms/OakLI/OakLI.js";import"../../atoms/OakLabel/OakLabel.js";import"../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../atoms/OakOL/OakOL.js";import"../../atoms/OakFieldset/OakFieldset.js";import"../../atoms/OakP/OakP.js";import"../../atoms/OakScreenReader/OakScreenReader.js";import"../../atoms/OakTypography/OakTypography.js";import"../../atoms/OakUL/OakUL.js";import"../../atoms/OakSvg/OakSvg.js";import{parseDropShadow as d}from"../../../styles/helpers/parseDropShadow.js";const l=r(i)`
  &:hover {
    cursor: text;
  }

  &:focus-within {
    box-shadow: ${o=>o.$focusRingDropShadows.map((o=>d(o))).join(",")};
  }

  background: ${o=>e(o.$background)};

  ${o=>!o.$readOnly&&a`
      @media (hover: hover) {
        &:hover:not(:focus-within) {
          background: ${e(o.$hoverBackground)};
        }
      }
    `}

  ${o=>o.$readOnly&&a`
      border-color: ${e(o.$readOnlyBorderColor)};
      color: ${e(o.$readOnlyColor)};
    `}

  ${o=>o.$disabled&&a`
      background: ${e(o.$disabledBackgroundColor)};
      color: ${e(o.$disabledColor)};
      &:hover {
        cursor: not-allowed;
      }
    `}
`,n=({type:r="text",borderColor:a="border-primary",readOnlyBorderColor:e="border-neutral",focusRingDropShadows:d=["drop-shadow-centered-lemon","drop-shadow-centered-grey"],background:n="bg-primary",hoverBackground:m="bg-neutral",disabledBackgroundColor:c="bg-neutral",highlightBackgroundColor:p="bg-decorative5-main",color:k="text-primary",disabledColor:O="text-disabled",readOnlyColor:$="text-subdued",validity:g,iconColor:h="icon-inverted",validBorderColor:b="border-success",invalidBorderColor:u="border-error",validIconColor:y="icon-success",invalidIconColor:j="border-error",iconName:C,iconAlt:v,isTrailingIcon:w=!1,isHighlighted:x=!1,wrapperWidth:I,wrapperMaxWidth:f,...B})=>{let S=n,F=a,L=h,R=e;switch(!0){case"valid"===g:F=b,L=y,R=b;break;case"invalid"===g:F=u,L=j,R=u;break;case x:S=p}return o.createElement(l,{$height:"fit-content",$width:I,$maxWidth:f,$borderRadius:"border-radius-s",$ba:"border-solid-m",$borderColor:F,$focusRingDropShadows:d,$background:S,$hoverBackground:m,$disabledBackgroundColor:c,$readOnlyBorderColor:R,$disabledColor:O,$readOnlyColor:$,$color:k,$alignItems:"center",$position:"relative",$gap:"space-between-s",$ph:"inner-padding-l",$disabled:!!B.disabled,$readOnly:!!B.readOnly,onClick:o=>{o.currentTarget.querySelector("input")?.focus()}},!w&&C&&o.createElement(s,{iconName:C,$colorFilter:L,$pointerEvents:"none",$width:"all-spacing-7",alt:v}),o.createElement(i,{$flexGrow:1},o.createElement(t,{type:r,...B,$width:"100%",$pv:"inner-padding-l",$height:"all-spacing-12"})),w&&C&&o.createElement(s,{iconName:C,$colorFilter:L,$pointerEvents:"none",$width:"all-spacing-7",alt:v}))};export{n as OakTextInput};
//# sourceMappingURL=OakTextInput.js.map
