"use strict";var e=require("react"),r=require("styled-components");require("../../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../../atoms/OakAspectRatio/OakAspectRatio.js");var a=require("../../../../atoms/OakBox/OakBox.js");require("../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../../../atoms/OakFlex/OakFlex.js");require("../../../../atoms/OakForm/OakForm.js"),require("../../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../../atoms/OakGrid/OakGrid.js"),require("../../../../atoms/OakGridArea/OakGridArea.js"),require("../../../../atoms/OakHeading/OakHeading.js");var t=require("../../../../atoms/OakIcon/OakIcon.js");require("../../../../atoms/OakImage/OakImage.js"),require("../../../../atoms/OakSpan/OakSpan.js"),require("../../../../atoms/OakLI/OakLI.js"),require("../../../../atoms/OakLabel/OakLabel.js"),require("../../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../../atoms/OakOL/OakOL.js"),require("../../../../atoms/OakFieldset/OakFieldset.js"),require("../../../../atoms/OakP/OakP.js"),require("../../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../../atoms/OakTypography/OakTypography.js"),require("../../../../atoms/OakUL/OakUL.js"),require("../../../../atoms/OakSvg/OakSvg.js");var s=require("../../../../atoms/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js"),d=require("../../../../atoms/InternalCheckBoxLabel/InternalCheckBoxLabel.js"),l=require("../../../../atoms/InternalCheckBox/InternalCheckBox.js"),i=require("../../../../../styles/helpers/parseColor.js"),n=require("../../../../../styles/helpers/parseBorder.js"),c=require("../../../../../styles/helpers/parseBorderRadius.js"),u=require("../../../../../styles/helpers/parseDropShadow.js");function k(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var b=k(e),p=k(r);const h=p.default(l.InternalCheckBox)`
  &:checked:not(:disabled) {
    border: ${n.parseBorder("border-solid-l")};
    border-color: ${i.parseColor("border-primary")};
  }

  &:checked:disabled {
    border: ${n.parseBorder("border-solid-l")};
    border-color: ${i.parseColor("text-disabled")};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${i.parseColor("bg-primary")};
    }
  }
`,m=p.default(o.OakFlex)`
  &:not(:focus-within) {
    ${e=>!!e.$outlineColor&&r.css`
        outline: ${n.parseBorder("border-solid-xl")}
          ${i.parseColor(e.$outlineColor)};
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
    box-shadow: ${u.parseDropShadow("drop-shadow-centered-lemon")},
      ${u.parseDropShadow("drop-shadow-centered-grey")};
  }

  @media (hover: hover) {
    &:hover:has(input:not(:disabled)) {
      background-color: ${i.parseColor("bg-decorative1-subdued")};
    }

    &:hover input:not(:disabled) {
      background: ${i.parseColor("bg-primary")};
    }

    &:hover:has(input:not(:disabled)) ${d.InternalCheckBoxLabelHoverDecor} {
      text-decoration: underline;
    }

    &:hover:has(
        ${d.InternalCheckBoxLabelHoverDecor}
          input:not(:focus-visible):not(:checked):not(:disabled)
      )::after {
      content: "";
      inset: 0;
      pointer-events: none;
      position: absolute;
      border-bottom: ${n.parseBorder("border-solid-xl")};
      border-radius: ${c.parseBorderRadius("border-radius-m2")};
    }

    &:focus-within {
      box-shadow: ${u.parseDropShadow("drop-shadow-centered-lemon")},
        ${u.parseDropShadow("drop-shadow-centered-grey")};
    }

    &:has(input:checked:not(:disabled)) {
      outline: ${n.parseBorder("border-solid-xl")};
    }

    &:has(input:checked:disabled) {
      outline-color: ${e=>r.css`
        ${i.parseColor(e.$overlayBorderColor)}
      `};
    }

    &:has(input:disabled:not(:checked)) {
      ${e=>e.$feedbackBgColor?r.css`
              background-color: ${e.$feedbackBgColor};
            `:void 0}
    }

    &:has(input:disabled:checked) {
      ${e=>r.css`
        background-color: ${i.parseColor(e.$feedbackBgColor)};
      `};
    }
  }
`;exports.OakQuizCheckBox=r=>{const{id:l,value:i,feedback:n,image:c,disabled:u,innerRef:k,displayValue:p,isHighlighted:$,...O}=r,g=!!n,x=e.useRef(null),f=k??x,C="correct"===n&&f.current?.checked||"incorrect"===n&&!f.current?.checked,v="incorrect"===n&&f.current?.checked,j=b.default.createElement(o.OakFlex,{$flexDirection:"column",$minWidth:"all-spacing-20",$gap:"space-between-s"},b.default.createElement(a.OakBox,null,c),p),q=C?"bg-correct":"bg-incorrect",B=C?"border-success":"border-error",y=b.default.createElement(m,{$pa:"inner-padding-l",$borderRadius:"border-radius-m2",$borderColor:$?"border-decorative5-stronger":"border-primary",$background:u&&!g?"bg-neutral-stronger":"bg-primary",$flexGrow:1,onClick:e=>{e.target.id!==l&&f.current?.click()},$overlayBorderColor:g?B:"text-disabled",$feedbackBgColor:g?q:void 0,$outlineColor:$?"border-decorative5-stronger":"transparent"},b.default.createElement(d.InternalCheckBoxLabelHoverDecor,{pointerEvents:"none",htmlFor:l,labelGap:"space-between-s",labelAlignItems:"center",$color:u&&!g?"text-disabled":"text-primary",$font:"body-1",disabled:u},b.default.createElement(s.InternalCheckBoxWrapper,{size:"all-spacing-7",iconPadding:"inner-padding-ssx",checkedIcon:b.default.createElement(a.OakBox,{$width:"100%",$height:"100%",$background:u||g?"text-disabled":"text-primary"},b.default.createElement(a.OakBox,{$ba:"border-solid-m",$borderColor:"white",$width:"100%",$height:"100%"})),internalCheckbox:b.default.createElement(h,{id:l,value:i,disabled:u||g,...O,$width:"all-spacing-7",$height:"all-spacing-7",$ba:"border-solid-m",$borderColor:"border-neutral",$borderRadius:"border-radius-s",$background:$?"bg-decorative5-main":"bg-primary",$checkedBackground:null,ref:f})}),c?j:p),g&&(C||v)&&b.default.createElement(o.OakFlex,{className:"feedbackIconWrapper",$flexGrow:1,$justifyContent:"flex-end",$alignItems:"flex-end",$height:"100%"},C&&b.default.createElement(t.OakIcon,{iconName:"tick",$colorFilter:"icon-success",alt:"correct"===n?"Correct":"Unselected correct choice"}),v&&b.default.createElement(t.OakIcon,{iconName:"cross",$colorFilter:"icon-error",alt:"Incorrect"})));return b.default.createElement(o.OakFlex,{$width:"100%",$position:"relative"},y)};
//# sourceMappingURL=OakQuizCheckBox.js.map
