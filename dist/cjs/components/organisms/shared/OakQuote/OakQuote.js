"use strict";var e=require("styled-components"),a=require("react");require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js"),require("../../../atoms/OakAspectRatio/OakAspectRatio.js");var r=require("../../../atoms/OakBox/OakBox.js");require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js");var t=require("../../../atoms/OakFlex/OakFlex.js");require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js"),require("../../../atoms/OakHeading/OakHeading.js");var l=require("../../../atoms/OakImage/OakImage.js");require("../../../atoms/OakSpan/OakSpan.js"),require("../../../atoms/OakLI/OakLI.js"),require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js");var o=require("../../../atoms/OakP/OakP.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var s=i(e),k=i(a);const n=s.default(l.OakImage)`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  img {
    border-radius: 50%;
  }
`,m=s.default(r.OakBox)`
  letter-spacing: -0.01em;
  @media (min-width: 750px) {
    letter-spacing: -0.02em;
  }
`;exports.OakQuote=e=>{const{quote:a,color:r="bg-decorative1-main",authorName:l,authorTitle:i,authorImageSrc:s}=e;return k.default.createElement(t.OakFlex,{$width:"100%",$maxWidth:"all-spacing-22"},k.default.createElement(t.OakFlex,{$width:"all-spacing-2",$background:r,$mr:"space-between-m",$flexShrink:0}),k.default.createElement(t.OakFlex,{$flexDirection:"column",$gap:"space-between-s"},k.default.createElement(o.OakP,{$font:["heading-7","heading-6"],$color:"text-primary"},k.default.createElement(m,null,"“",a,"”")),l?k.default.createElement(t.OakFlex,{$gap:"space-between-s",$alignItems:"center"},s?k.default.createElement(n,{alt:"",role:"presentation",src:s}):null,k.default.createElement(t.OakFlex,{$flexDirection:"column"},k.default.createElement(o.OakP,{$font:"body-2-bold",$color:"text-primary"},l),i?k.default.createElement(o.OakP,{$font:"body-2",$color:"text-primary"},i):null)):null))};
//# sourceMappingURL=OakQuote.js.map
