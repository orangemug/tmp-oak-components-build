"use strict";var e=require("react"),a=require("styled-components");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js"),require("../../../atoms/OakBox/OakBox.js"),require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js");var r=require("../../../atoms/OakHeading/OakHeading.js"),o=require("../../../atoms/OakIcon/OakIcon.js");require("../../../atoms/OakImage/OakImage.js");var i=require("../../../atoms/OakSpan/OakSpan.js"),s=require("../../../atoms/OakLI/OakLI.js");require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js");var n=require("../../../atoms/OakP/OakP.js");require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var l=require("../../../../styles/helpers/parseColor.js"),d=require("../../../../styles/helpers/parseDropShadow.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=u(e),c=u(a);const k=c.default(t.OakFlex)`
  min-width: 260px;

  @media (max-width: 650px) {
    min-width: 100%;
  }

  @media (max-width: 370px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,O=c.default(t.OakFlex)`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:focus-visible {
    box-shadow: ${d.parseDropShadow("drop-shadow-centered-lemon")},
      ${d.parseDropShadow("drop-shadow-centered-grey")};
  }
  ${e=>!e.$disabled&&a.css`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${p} {
        background: ${l.parseColor("lavender110")};
      }
      background: ${l.parseColor("bg-decorative3-subdued")};
    }
  }
      }
    `}

  ${e=>e.$disabled&&a.css`
      cursor: not-allowed;
      background: ${l.parseColor("bg-neutral")};
    `}
`,p=c.default(t.OakFlex)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  @media (hover: hover) {
    &:hover {
      background: ${l.parseColor("lavender110")};
    }
  }
`;exports.OakUnitListItem=e=>{const{lessonCount:a,expiredLessonCount:l,href:d,unavailable:u,onClick:c,index:$,isLegacy:g,firstItemRef:h,...f}=e;let x;if(a){const e=l&&a?a-l:null;x=null!==e?`${e}/${a} ${a>1?"lessons":"lesson"}`:`${a} ${a>1?"lessons":"lesson"}`,l&&l>a&&(x="0 lessons")}return m.default.createElement(s.OakLI,{$listStyle:"none",$width:"100%"},m.default.createElement(O,{$alignItems:"center",$background:u?"bg-neutral":"bg-primary",$borderRadius:"border-radius-m",$disabled:u,href:u?void 0:d,onClick:u?void 0:c,ref:h,as:"a",...f},m.default.createElement(p,{$alignSelf:"stretch",$background:u?"bg-neutral-stronger":g?"lavender50":"lavender",$minWidth:"all-spacing-11",$justifyContent:"center",$alignItems:"center"},m.default.createElement(r.OakHeading,{tag:"h3",$font:"heading-5",$color:u?"text-disabled":"text-primary"},$)),m.default.createElement(t.OakFlex,{$width:"100%",$height:"100%",$justifyContent:"space-between",$alignItems:"left",$flexDirection:["column","row"],$pa:["inner-padding-l"],$gap:"space-between-s"},m.default.createElement(t.OakFlex,{$alignItems:["center"],$maxWidth:["100%"]},m.default.createElement(n.OakP,{$font:"heading-7",$color:u?"text-disabled":"text-primary"},e.title)),m.default.createElement(k,{$alignItems:["center"],$minWidth:"all-spacing-13",$width:["100%","auto"],$justifyContent:"space-between",$whiteSpace:"nowrap"},m.default.createElement(t.OakFlex,{$justifyContent:["flex-start","flex-end"]},m.default.createElement(n.OakP,{$font:"heading-light-7",$color:u?"text-disabled":"text-primary"},e.yearTitle)),m.default.createElement(t.OakFlex,{$alignItems:"center"},m.default.createElement(i.OakSpan,{$font:"heading-light-7",$color:u?"text-disabled":"text-primary"},x),m.default.createElement(o.OakIcon,{$colorFilter:u?"text-disabled":"text-primary",iconName:"chevron-right"}))))))};
//# sourceMappingURL=OakUnitListItem.js.map
