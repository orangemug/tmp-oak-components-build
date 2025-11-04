"use strict";var e=require("react"),t=require("styled-components"),a=require("../../atoms/OakFlex/OakFlex.js"),n=require("../../../styles/helpers/parseSpacing.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(e);const l=r(t).default(a.OakFlex)`
  max-width: ${({isLeftHandSide:e})=>e?`calc(100vw - ${n.parseSpacing("inner-padding-l")})`:"100vw"};
  transform: ${({$state:e,isLeftHandSide:t})=>{switch(e){case"entered":case"entering":return"translateX(0)";default:return t?"translateX(-100%)":"translateX(100%)"}}};
  ${({isLeftHandSide:e})=>!e&&"\n      @media (min-width: 768px) {\n        max-width: 600px;\n      }\n    "}
`,s=e.forwardRef(((e,t)=>{const{finalZIndex:a,state:n,isLeftHandSide:r,children:s,...d}=e;return i.default.createElement(l,{ref:t,$background:"bg-primary",$right:r?null:"all-spacing-0",$left:r?"all-spacing-0":null,$position:"fixed",$bottom:"all-spacing-0",$width:["all-spacing-22"],$top:"all-spacing-0",$transition:"standard-ease",$zIndex:a,$flexDirection:"column",$state:n,$color:"text-primary",role:"dialog",isLeftHandSide:r,...d},s)}));module.exports=s;
//# sourceMappingURL=InternalSlideInFlex.js.map
