"use strict";var e=require("react"),t=require("react-focus-on"),n=require("react-transition-group"),r=require("styled-components"),a=require("../InternalSlideInFlex/InternalSlideInFlex.js"),i=require("../../atoms/OakBox/OakBox.js"),s=require("../../../styles/helpers/parseOpacity.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(e);const d=o(r).default(i.OakBox)`
  opacity: ${({$state:e})=>{switch(e){case"entered":case"entering":return s.parseOpacity("semi-transparent");default:return s.parseOpacity("transparent")}}};
  background-color: black;
  position: fixed;
  inset: 0;
  transition: ease;
`;module.exports=({children:e,isOpen:r,transitionRef:i,onClose:s,finalZIndex:o,isLeftHandSide:c,...l})=>u.default.createElement(n.Transition,{in:r,nodeRef:i,addEndListener:e=>{i.current?.addEventListener("transitionend",e)},timeout:500,mountOnEnter:!0,unmountOnExit:!0},(n=>u.default.createElement(t.FocusOn,{onEscapeKey:s,returnFocus:!0,autoFocus:!0},u.default.createElement(d,{$zIndex:o,$state:n,onClick:c?void 0:s}),u.default.createElement(a,{isLeftHandSide:c,ref:i,$zIndex:o,$state:n,...l},e))));
//# sourceMappingURL=InternalModalTransition.js.map
