"use strict";var e=require("react"),a=require("styled-components"),r=require("../OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js");require("../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../atoms/OakAspectRatio/OakAspectRatio.js");var t=require("../../atoms/OakBox/OakBox.js");require("../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../atoms/OakFlex/OakFlex.js");require("../../atoms/OakForm/OakForm.js"),require("../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../atoms/OakGrid/OakGrid.js"),require("../../atoms/OakGridArea/OakGridArea.js"),require("../../atoms/OakHeading/OakHeading.js");var s=require("../../atoms/OakIcon/OakIcon.js");require("../../atoms/OakImage/OakImage.js"),require("../../atoms/OakSpan/OakSpan.js"),require("../../atoms/OakLI/OakLI.js"),require("../../atoms/OakLabel/OakLabel.js"),require("../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../atoms/OakOL/OakOL.js"),require("../../atoms/OakFieldset/OakFieldset.js"),require("../../atoms/OakP/OakP.js"),require("../../atoms/OakScreenReader/OakScreenReader.js"),require("../../atoms/OakTypography/OakTypography.js"),require("../../atoms/OakUL/OakUL.js"),require("../../atoms/OakSvg/OakSvg.js");var i=require("../../../styles/helpers/parseDropShadow.js"),n=require("../../atoms/InternalAccordion/InternalAccordion.js"),l=require("../../atoms/InternalAccordion/useAccordionContext.js"),d=require("../../atoms/InternalAccordion/InternalAccordionProvider.js"),c=require("../../../styles/utils/flexStyle.js"),u=require("../../../styles/helpers/parseSpacing.js"),p=require("../../../styles/helpers/parseOpacity.js");function O(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var k=O(e),m=O(a);const h=m.default(r.OakHandDrawnFocusUnderline)`
  position: absolute;
  width: 100%;
  bottom: -${u.parseSpacing("all-spacing-1")};
`,x=m.default(n.InternalAccordionButton)`
  ${c.flexStyle}
  ${t.oakBoxCss}
  position: relative;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    .shadow {
      box-shadow: ${i.parseDropShadow("drop-shadow-centered-lemon")},
        ${i.parseDropShadow("drop-shadow-centered-grey")};
    }
  }
`,g=m.default(o.OakFlex)`
  ${h} {
    visibility: hidden;
  }
  ${x}:focus-visible ~ ${h} {
    visibility: visible;
  }
  ${t.oakBoxCss}
  ${c.flexStyle}
`,f=m.default(t.OakBox)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  opacity: ${e=>e.shouldDisplayShadow?p.parseOpacity("opaque"):p.parseOpacity("transparent")};
  z-index: 100;
  -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  padding: 2px;
`,q=({header:a,children:r,id:o,...i})=>{const[d,c]=e.useState(!1),u=e.useRef(null);e.useEffect((()=>{const e=u.current?.scrollHeight,a=u.current?.clientHeight;c(!!(e&&a&&e>a))}),[]);const{isOpen:p}=l();return k.default.createElement(g,{$position:"relative",$pv:"inner-padding-s",$flexDirection:"column",$gap:"all-spacing-1",...i},k.default.createElement(x,{id:o,$width:"100%",$justifyContent:"space-between",$alignItems:"center"},a,k.default.createElement(t.OakBox,{$position:"relative",$mr:"space-between-xs"},k.default.createElement(t.OakBox,{className:"shadow",$position:"absolute",$borderRadius:"border-radius-s",$width:"100%",$height:"100%",$top:"all-spacing-0"}),k.default.createElement(s.OakIcon,{iconName:"chevron-down",$width:"all-spacing-7",$height:"all-spacing-7",alt:"An arrow to indicate whether the item is open or closed",style:{transform:p?"rotate(180deg)":"none",transition:"all 0.3s ease 0s"}}))),k.default.createElement(t.OakBox,{ref:u,$position:"relative",$overflow:"scroll",onScroll:()=>{const e=u.current?.scrollHeight,a=u.current?.scrollTop,r=u.current?.clientHeight;if(e&&a){c(!(e-a===r))}},"data-testid":"scrollable-content"},k.default.createElement(n.InternalAccordionContent,{"aria-labelledby":o},r)),k.default.createElement(h,{$fill:"border-decorative5-stronger"}),p&&k.default.createElement(f,{shouldDisplayShadow:d,"data-testid":"bottom-box-shadow"}))};exports.BottomBoxShadow=f,exports.InternalChevronAccordion=({initialOpen:e=!1,...a})=>k.default.createElement(d.InternalAccordionProvider,{isInitialOpen:e},k.default.createElement(q,{initialOpen:!0,...a})),exports.StyledAccordionButton=x;
//# sourceMappingURL=InternalChevronAccordion.js.map
