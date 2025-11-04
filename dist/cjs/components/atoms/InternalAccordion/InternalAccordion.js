"use strict";var e=require("react"),n=require("styled-components"),r=require("./useAccordionContext.js"),t=require("../OakFlex/OakFlex.js"),o=require("../OakBox/OakBox.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(e),l=a(n);const c=l.default(t.OakFlex)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;
  outline: none;
  padding: 0;
`,d=l.default((e=>{const{children:n,id:t,...o}=e,{isOpen:a,setOpen:l}=r();return i.default.createElement(c,{as:"button",type:"button",onClick:()=>l(!a),$flexGrow:1,"aria-expanded":a,id:t,...o},n)}))``;exports.InternalAccordionButton=d,exports.InternalAccordionContent=({children:e,onScroll:n,ref:t,...a})=>{const{isOpen:l}=r();return i.default.createElement(o.OakBox,{hidden:!l,role:"region",...a,onScroll:n,ref:t},e)};
//# sourceMappingURL=InternalAccordion.js.map
