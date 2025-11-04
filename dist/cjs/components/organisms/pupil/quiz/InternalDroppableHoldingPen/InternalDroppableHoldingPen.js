"use strict";var e=require("react"),a=require("styled-components");require("../../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../../../atoms/OakBox/OakBox.js");require("../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var o=require("../../../../atoms/OakFlex/OakFlex.js");require("../../../../atoms/OakForm/OakForm.js"),require("../../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../../atoms/OakGrid/OakGrid.js"),require("../../../../atoms/OakGridArea/OakGridArea.js"),require("../../../../atoms/OakHeading/OakHeading.js"),require("../../../../atoms/OakImage/OakImage.js"),require("../../../../atoms/OakSpan/OakSpan.js"),require("../../../../atoms/OakLI/OakLI.js"),require("../../../../atoms/OakLabel/OakLabel.js"),require("../../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../../atoms/OakOL/OakOL.js"),require("../../../../atoms/OakFieldset/OakFieldset.js"),require("../../../../atoms/OakP/OakP.js"),require("../../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../../atoms/OakTypography/OakTypography.js"),require("../../../../atoms/OakUL/OakUL.js"),require("../../../../atoms/OakSvg/OakSvg.js");var t=require("../../../../../styles/helpers/parseColor.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=s(e);const n=s(a).default(r.OakBox)`
  background-color: ${t.parseColor("grey20")};
  background-color: color-mix(in lch, ${t.parseColor("black")} 5%, transparent);

  &[data-over="true"] {
    background-color: ${t.parseColor("white")};
    background-color: color-mix(
      in lch,
      ${t.parseColor("white")} 60%,
      transparent
    );
  }
`,l=e.forwardRef((({isOver:a,children:r,...t},s)=>{const[l,k]=e.useState(null),[u,O]=e.useState(0);return e.useLayoutEffect((()=>{if(!l)return;const e=new ResizeObserver((e=>{for(const a of e)O((e=>Math.max(a.borderBoxSize[0]?.blockSize??0,e)))}));function a(){O(0)}return e.observe(l),window.addEventListener("resize",a),()=>{e.disconnect(),window.removeEventListener("resize",a)}}),[l]),i.default.createElement(n,{ref:s,$mb:"space-between-m2",$borderRadius:"border-radius-l","data-over":a,style:{minHeight:0===u?"auto":u},...t},i.default.createElement(o.OakFlex,{$alignItems:"flex-start",$minHeight:"all-spacing-13",$pa:"inner-padding-s",$gap:"space-between-xs",$flexWrap:"wrap",ref:k},r))}));exports.InternalDroppableHoldingPen=l;
//# sourceMappingURL=InternalDroppableHoldingPen.js.map
