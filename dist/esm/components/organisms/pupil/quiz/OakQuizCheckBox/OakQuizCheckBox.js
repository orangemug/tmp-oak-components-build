import e,{useRef as r}from"react";import o,{css as a}from"styled-components";import"../../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as t}from"../../../../atoms/OakBox/OakBox.js";import"../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as i}from"../../../../atoms/OakFlex/OakFlex.js";import"../../../../atoms/OakForm/OakForm.js";import"../../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../../atoms/OakGrid/OakGrid.js";import"../../../../atoms/OakGridArea/OakGridArea.js";import"../../../../atoms/OakHeading/OakHeading.js";import{OakIcon as s}from"../../../../atoms/OakIcon/OakIcon.js";import"../../../../atoms/OakImage/OakImage.js";import"../../../../atoms/OakSpan/OakSpan.js";import"../../../../atoms/OakLI/OakLI.js";import"../../../../atoms/OakLabel/OakLabel.js";import"../../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../../atoms/OakOL/OakOL.js";import"../../../../atoms/OakFieldset/OakFieldset.js";import"../../../../atoms/OakP/OakP.js";import"../../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../../atoms/OakTypography/OakTypography.js";import"../../../../atoms/OakUL/OakUL.js";import"../../../../atoms/OakSvg/OakSvg.js";import{InternalCheckBoxWrapper as d}from"../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js";import{InternalCheckBoxLabelHoverDecor as n}from"../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js";import{InternalCheckBox as l}from"../../../../atoms/InternalCheckBox/InternalCheckBox.js";import{parseColor as c}from"../../../../../styles/helpers/parseColor.js";import{parseBorder as m}from"../../../../../styles/helpers/parseBorder.js";import{parseBorderRadius as p}from"../../../../../styles/helpers/parseBorderRadius.js";import{parseDropShadow as b}from"../../../../../styles/helpers/parseDropShadow.js";const k=o(l)`
  &:checked:not(:disabled) {
    border: ${m("border-solid-l")};
    border-color: ${c("border-primary")};
  }

  &:checked:disabled {
    border: ${m("border-solid-l")};
    border-color: ${c("text-disabled")};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${c("bg-primary")};
    }
  }
`,h=o(i)`
  &:not(:focus-within) {
    ${e=>!!e.$outlineColor&&a`
        outline: ${m("border-solid-xl")}
          ${c(e.$outlineColor)};
      `}
  }

  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:focus-within {
    box-shadow: ${b("drop-shadow-centered-lemon")},
      ${b("drop-shadow-centered-grey")};
  }

  @media (hover: hover) {
    &:hover:has(input:not(:disabled)) {
      background-color: ${c("bg-decorative1-subdued")};
    }

    &:hover input:not(:disabled) {
      background: ${c("bg-primary")};
    }

    &:hover:has(input:not(:disabled)) ${n} {
      text-decoration: underline;
    }

    &:hover:has(
        ${n}
          input:not(:focus-visible):not(:checked):not(:disabled)
      )::after {
      content: "";
      inset: 0;
      pointer-events: none;
      position: absolute;
      border-bottom: ${m("border-solid-xl")};
      border-radius: ${p("border-radius-m2")};
    }

    &:focus-within {
      box-shadow: ${b("drop-shadow-centered-lemon")},
        ${b("drop-shadow-centered-grey")};
    }

    &:has(input:checked:not(:disabled)) {
      outline: ${m("border-solid-xl")};
    }

    &:has(input:checked:disabled) {
      outline-color: ${e=>a`
        ${c(e.$overlayBorderColor)}
      `};
    }

    &:has(input:disabled:not(:checked)) {
      ${e=>e.$feedbackBgColor?a`
              background-color: ${e.$feedbackBgColor};
            `:void 0}
    }

    &:has(input:disabled:checked) {
      ${e=>a`
        background-color: ${c(e.$feedbackBgColor)};
      `};
    }
  }
`,$=o=>{const{id:a,value:l,feedback:c,image:m,disabled:p,innerRef:b,displayValue:$,isHighlighted:u,...g}=o,O=!!c,f=r(null),x=b??f,j="correct"===c&&x.current?.checked||"incorrect"===c&&!x.current?.checked,y="incorrect"===c&&x.current?.checked,v=e.createElement(i,{$flexDirection:"column",$minWidth:"all-spacing-20",$gap:"space-between-s"},e.createElement(t,null,m),$),C=j?"bg-correct":"bg-incorrect",w=j?"border-success":"border-error",I=e.createElement(h,{$pa:"inner-padding-l",$borderRadius:"border-radius-m2",$borderColor:u?"border-decorative5-stronger":"border-primary",$background:p&&!O?"bg-neutral-stronger":"bg-primary",$flexGrow:1,onClick:e=>{e.target.id!==a&&x.current?.click()},$overlayBorderColor:O?w:"text-disabled",$feedbackBgColor:O?C:void 0,$outlineColor:u?"border-decorative5-stronger":"transparent"},e.createElement(n,{pointerEvents:"none",htmlFor:a,labelGap:"space-between-s",labelAlignItems:"center",$color:p&&!O?"text-disabled":"text-primary",$font:"body-1",disabled:p},e.createElement(d,{size:"all-spacing-7",iconPadding:"inner-padding-ssx",checkedIcon:e.createElement(t,{$width:"100%",$height:"100%",$background:p||O?"text-disabled":"text-primary"},e.createElement(t,{$ba:"border-solid-m",$borderColor:"white",$width:"100%",$height:"100%"})),internalCheckbox:e.createElement(k,{id:a,value:l,disabled:p||O,...g,$width:"all-spacing-7",$height:"all-spacing-7",$ba:"border-solid-m",$borderColor:"border-neutral",$borderRadius:"border-radius-s",$background:u?"bg-decorative5-main":"bg-primary",$checkedBackground:null,ref:x})}),m?v:$),O&&(j||y)&&e.createElement(i,{className:"feedbackIconWrapper",$flexGrow:1,$justifyContent:"flex-end",$alignItems:"flex-end",$height:"100%"},j&&e.createElement(s,{iconName:"tick",$colorFilter:"icon-success",alt:"correct"===c?"Correct":"Unselected correct choice"}),y&&e.createElement(s,{iconName:"cross",$colorFilter:"icon-error",alt:"Incorrect"})));return e.createElement(i,{$width:"100%",$position:"relative"},I)};export{$ as OakQuizCheckBox};
//# sourceMappingURL=OakQuizCheckBox.js.map
