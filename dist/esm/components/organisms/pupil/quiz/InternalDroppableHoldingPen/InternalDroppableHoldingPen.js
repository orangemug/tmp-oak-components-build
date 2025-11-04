import a,{forwardRef as o,useState as r,useLayoutEffect as e}from"react";import t from"styled-components";import"../../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as s}from"../../../../atoms/OakBox/OakBox.js";import"../../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as m}from"../../../../atoms/OakFlex/OakFlex.js";import"../../../../atoms/OakForm/OakForm.js";import"../../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../../atoms/OakGrid/OakGrid.js";import"../../../../atoms/OakGridArea/OakGridArea.js";import"../../../../atoms/OakHeading/OakHeading.js";import"../../../../atoms/OakImage/OakImage.js";import"../../../../atoms/OakSpan/OakSpan.js";import"../../../../atoms/OakLI/OakLI.js";import"../../../../atoms/OakLabel/OakLabel.js";import"../../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../../atoms/OakOL/OakOL.js";import"../../../../atoms/OakFieldset/OakFieldset.js";import"../../../../atoms/OakP/OakP.js";import"../../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../../atoms/OakTypography/OakTypography.js";import"../../../../atoms/OakUL/OakUL.js";import"../../../../atoms/OakSvg/OakSvg.js";import{parseColor as i}from"../../../../../styles/helpers/parseColor.js";const n=t(s)`
  background-color: ${i("grey20")};
  background-color: color-mix(in lch, ${i("black")} 5%, transparent);

  &[data-over="true"] {
    background-color: ${i("white")};
    background-color: color-mix(
      in lch,
      ${i("white")} 60%,
      transparent
    );
  }
`,k=o((({isOver:o,children:t,...s},i)=>{const[k,O]=r(null),[p,l]=r(0);return e((()=>{if(!k)return;const a=new ResizeObserver((a=>{for(const o of a)l((a=>Math.max(o.borderBoxSize[0]?.blockSize??0,a)))}));function o(){l(0)}return a.observe(k),window.addEventListener("resize",o),()=>{a.disconnect(),window.removeEventListener("resize",o)}}),[k]),a.createElement(n,{ref:i,$mb:"space-between-m2",$borderRadius:"border-radius-l","data-over":o,style:{minHeight:0===p?"auto":p},...s},a.createElement(m,{$alignItems:"flex-start",$minHeight:"all-spacing-13",$pa:"inner-padding-s",$gap:"space-between-xs",$flexWrap:"wrap",ref:O},t))}));export{k as InternalDroppableHoldingPen};
//# sourceMappingURL=InternalDroppableHoldingPen.js.map
