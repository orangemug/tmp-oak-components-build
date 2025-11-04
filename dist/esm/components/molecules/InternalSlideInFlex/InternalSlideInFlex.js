import e,{forwardRef as t}from"react";import a from"styled-components";import{OakFlex as n}from"../../atoms/OakFlex/OakFlex.js";import{parseSpacing as i}from"../../../styles/helpers/parseSpacing.js";const r=a(n)`
  max-width: ${({isLeftHandSide:e})=>e?`calc(100vw - ${i("inner-padding-l")})`:"100vw"};
  transform: ${({$state:e,isLeftHandSide:t})=>{switch(e){case"entered":case"entering":return"translateX(0)";default:return t?"translateX(-100%)":"translateX(100%)"}}};
  ${({isLeftHandSide:e})=>!e&&"\n      @media (min-width: 768px) {\n        max-width: 600px;\n      }\n    "}
`,s=t(((t,a)=>{const{finalZIndex:n,state:i,isLeftHandSide:s,children:l,...d}=t;return e.createElement(r,{ref:a,$background:"bg-primary",$right:s?null:"all-spacing-0",$left:s?"all-spacing-0":null,$position:"fixed",$bottom:"all-spacing-0",$width:["all-spacing-22"],$top:"all-spacing-0",$transition:"standard-ease",$zIndex:n,$flexDirection:"column",$state:i,$color:"text-primary",role:"dialog",isLeftHandSide:s,...d},l)}));export{s as default};
//# sourceMappingURL=InternalSlideInFlex.js.map
