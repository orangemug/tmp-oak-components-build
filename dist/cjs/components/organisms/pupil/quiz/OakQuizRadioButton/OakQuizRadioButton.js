"use strict";var e=require("react"),r=require("styled-components");require("../../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../../atoms/OakAspectRatio/OakAspectRatio.js");var a=require("../../../../atoms/OakBox/OakBox.js");require("../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../../../atoms/OakFlex/OakFlex.js");require("../../../../atoms/OakForm/OakForm.js"),require("../../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../../atoms/OakGrid/OakGrid.js"),require("../../../../atoms/OakGridArea/OakGridArea.js"),require("../../../../atoms/OakHeading/OakHeading.js");var s=require("../../../../atoms/OakIcon/OakIcon.js");require("../../../../atoms/OakImage/OakImage.js"),require("../../../../atoms/OakSpan/OakSpan.js"),require("../../../../atoms/OakLI/OakLI.js"),require("../../../../atoms/OakLabel/OakLabel.js"),require("../../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../../atoms/OakOL/OakOL.js"),require("../../../../atoms/OakFieldset/OakFieldset.js"),require("../../../../atoms/OakP/OakP.js"),require("../../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../../atoms/OakTypography/OakTypography.js"),require("../../../../atoms/OakUL/OakUL.js"),require("../../../../atoms/OakSvg/OakSvg.js");var t=require("../../../../molecules/OakRadioButton/OakRadioButton.js"),i=require("../../../../../styles/helpers/parseDropShadow.js"),l=require("../../../../../styles/helpers/parseBorder.js"),d=require("../../../../../styles/helpers/parseColor.js"),n=require("../../../../../styles/helpers/parseBorderRadius.js"),c=require("../../../../molecules/OakRadioGroup/OakRadioGroup.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var k=u(e);const O=u(r).default(o.OakFlex)`
  &:not(:focus-within) {
    ${e=>!!e.$outlineColor&&r.css`
        outline: ${l.parseBorder("border-solid-xl")}
          ${d.parseColor(e.$outlineColor)};
      `}
  }

  &:hover {
    cursor: ${e=>e.$disabled?"default":"pointer"};
  }

  &:focus-within {
    box-shadow: ${i.parseDropShadow("drop-shadow-centered-lemon")},
      ${i.parseDropShadow("drop-shadow-centered-grey")};
  }

  ${e=>!e.$disabled&&r.css`
      &:hover {
        background-color: ${d.parseColor("bg-decorative1-subdued")};
        text-decoration: underline;
      }
    `}

  ${e=>!e.$disabled&&!e.$checked&&r.css`
      &:hover:not(:focus-within)::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: 0;
        border-radius: ${n.parseBorderRadius("border-radius-m2")};
        border-bottom: ${l.parseBorder("border-solid-l")} ${d.parseColor("grey60")};
      }
    `}
`;exports.OakQuizRadioButton=r=>{const{value:i,feedback:l,image:d,disabled:n,isHighlighted:u,label:p,...m}=r,b=!!l,g=e.useContext(c.RadioContext).currentValue===i;let $,q,h="bg-primary",j=null,f="bg-primary";switch(!0){case n&&!b:h="bg-neutral-stronger";break;case"correct"===l&&g:$="border-success",h="bg-correct",j="tick",q="Correct";break;case"incorrect"===l&&g:$="border-error",h="bg-incorrect",j="cross",q="Incorrect";break;case"incorrect"===l&&!g:j="tick",q="Unselected correct choice";break;case u:f="bg-decorative5-main",$="border-decorative5-stronger";break;case g&&!n:$="border-primary"}return k.default.createElement(O,{$pa:"inner-padding-l",$borderRadius:"border-radius-m2",$justifyContent:"space-between",$position:"relative",$alignContent:"center",onClick:e=>{e.currentTarget.querySelector("input")?.click()},$disabled:n||b,$checked:g,$outlineColor:$,$background:h},k.default.createElement(t.OakRadioButton,{value:i,disabled:n||b,$labelGap:"space-between-s",disableFocusRing:!0,radioInnerSize:"all-spacing-6",radioOuterSize:"all-spacing-7",radioBackground:f,checkedRadioBorderWidth:"border-solid-l",label:d?k.default.createElement(o.OakFlex,{$flexDirection:"column",$minWidth:"all-spacing-20",$gap:"space-between-s"},k.default.createElement(a.OakBox,null,d),p):p,...m}),b&&j&&k.default.createElement(o.OakFlex,{$alignSelf:"flex-end"},k.default.createElement(s.OakIcon,{iconName:j,$colorFilter:"tick"===j?"icon-success":"icon-error",alt:q})))};
//# sourceMappingURL=OakQuizRadioButton.js.map
