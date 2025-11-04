import a from"styled-components";import t from"react";import"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as e}from"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import{OakFlex as o}from"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import"../../../atoms/OakHeading/OakHeading.js";import{OakImage as r}from"../../../atoms/OakImage/OakImage.js";import"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLI/OakLI.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import{OakP as m}from"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";const i=a(r)`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  img {
    border-radius: 50%;
  }
`,s=a(e)`
  letter-spacing: -0.01em;
  @media (min-width: 750px) {
    letter-spacing: -0.02em;
  }
`,l=a=>{const{quote:e,color:r="bg-decorative1-main",authorName:l,authorTitle:n,authorImageSrc:p}=a;return t.createElement(o,{$width:"100%",$maxWidth:"all-spacing-22"},t.createElement(o,{$width:"all-spacing-2",$background:r,$mr:"space-between-m",$flexShrink:0}),t.createElement(o,{$flexDirection:"column",$gap:"space-between-s"},t.createElement(m,{$font:["heading-7","heading-6"],$color:"text-primary"},t.createElement(s,null,"“",e,"”")),l?t.createElement(o,{$gap:"space-between-s",$alignItems:"center"},p?t.createElement(i,{alt:"",role:"presentation",src:p}):null,t.createElement(o,{$flexDirection:"column"},t.createElement(m,{$font:"body-2-bold",$color:"text-primary"},l),n?t.createElement(m,{$font:"body-2",$color:"text-primary"},n):null)):null))};export{l as OakQuote};
//# sourceMappingURL=OakQuote.js.map
