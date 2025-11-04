import e,{useContext as r}from"react";import o,{css as a}from"styled-components";import"../../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as t}from"../../../../atoms/OakBox/OakBox.js";import"../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as s}from"../../../../atoms/OakFlex/OakFlex.js";import"../../../../atoms/OakForm/OakForm.js";import"../../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../../atoms/OakGrid/OakGrid.js";import"../../../../atoms/OakGridArea/OakGridArea.js";import"../../../../atoms/OakHeading/OakHeading.js";import{OakIcon as i}from"../../../../atoms/OakIcon/OakIcon.js";import"../../../../atoms/OakImage/OakImage.js";import"../../../../atoms/OakSpan/OakSpan.js";import"../../../../atoms/OakLI/OakLI.js";import"../../../../atoms/OakLabel/OakLabel.js";import"../../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../../atoms/OakOL/OakOL.js";import"../../../../atoms/OakFieldset/OakFieldset.js";import"../../../../atoms/OakP/OakP.js";import"../../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../../atoms/OakTypography/OakTypography.js";import"../../../../atoms/OakUL/OakUL.js";import"../../../../atoms/OakSvg/OakSvg.js";import{OakRadioButton as l}from"../../../../molecules/OakRadioButton/OakRadioButton.js";import{parseDropShadow as c}from"../../../../../styles/helpers/parseDropShadow.js";import{parseBorder as n}from"../../../../../styles/helpers/parseBorder.js";import{parseColor as m}from"../../../../../styles/helpers/parseColor.js";import{parseBorderRadius as d}from"../../../../../styles/helpers/parseBorderRadius.js";import{RadioContext as p}from"../../../../molecules/OakRadioGroup/OakRadioGroup.js";const k=o(s)`
  &:not(:focus-within) {
    ${e=>!!e.$outlineColor&&a`
        outline: ${n("border-solid-xl")}
          ${m(e.$outlineColor)};
      `}
  }

  &:hover {
    cursor: ${e=>e.$disabled?"default":"pointer"};
  }

  &:focus-within {
    box-shadow: ${c("drop-shadow-centered-lemon")},
      ${c("drop-shadow-centered-grey")};
  }

  ${e=>!e.$disabled&&a`
      &:hover {
        background-color: ${m("bg-decorative1-subdued")};
        text-decoration: underline;
      }
    `}

  ${e=>!e.$disabled&&!e.$checked&&a`
      &:hover:not(:focus-within)::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: 0;
        border-radius: ${d("border-radius-m2")};
        border-bottom: ${n("border-solid-l")} ${m("grey60")};
      }
    `}
`,O=o=>{const{value:a,feedback:c,image:n,disabled:m,isHighlighted:d,label:O,...b}=o,u=!!c,g=r(p).currentValue===a;let $,j,h="bg-primary",f=null,y="bg-primary";switch(!0){case m&&!u:h="bg-neutral-stronger";break;case"correct"===c&&g:$="border-success",h="bg-correct",f="tick",j="Correct";break;case"incorrect"===c&&g:$="border-error",h="bg-incorrect",f="cross",j="Incorrect";break;case"incorrect"===c&&!g:f="tick",j="Unselected correct choice";break;case d:y="bg-decorative5-main",$="border-decorative5-stronger";break;case g&&!m:$="border-primary"}return e.createElement(k,{$pa:"inner-padding-l",$borderRadius:"border-radius-m2",$justifyContent:"space-between",$position:"relative",$alignContent:"center",onClick:e=>{e.currentTarget.querySelector("input")?.click()},$disabled:m||u,$checked:g,$outlineColor:$,$background:h},e.createElement(l,{value:a,disabled:m||u,$labelGap:"space-between-s",disableFocusRing:!0,radioInnerSize:"all-spacing-6",radioOuterSize:"all-spacing-7",radioBackground:y,checkedRadioBorderWidth:"border-solid-l",label:n?e.createElement(s,{$flexDirection:"column",$minWidth:"all-spacing-20",$gap:"space-between-s"},e.createElement(t,null,n),O):O,...b}),u&&f&&e.createElement(s,{$alignSelf:"flex-end"},e.createElement(i,{iconName:f,$colorFilter:"tick"===f?"icon-success":"icon-error",alt:j})))};export{O as OakQuizRadioButton};
//# sourceMappingURL=OakQuizRadioButton.js.map
