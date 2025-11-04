import e from"react";import o from"styled-components";import n from"./useAccordionContext.js";import{OakFlex as r}from"../OakFlex/OakFlex.js";import{OakBox as t}from"../OakBox/OakBox.js";const i=o(r)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;
  outline: none;
  padding: 0;
`,c=({children:o,onScroll:r,ref:i,...c})=>{const{isOpen:a}=n();return e.createElement(t,{hidden:!a,role:"region",...c,onScroll:r,ref:i},o)},a=o((o=>{const{children:r,id:t,...c}=o,{isOpen:a,setOpen:l}=n();return e.createElement(i,{as:"button",type:"button",onClick:()=>l(!a),$flexGrow:1,"aria-expanded":a,id:t,...c},r)}))``;export{a as InternalAccordionButton,c as InternalAccordionContent};
//# sourceMappingURL=InternalAccordion.js.map
