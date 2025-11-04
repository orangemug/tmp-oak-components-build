import e from"react";import{FocusOn as t}from"react-focus-on";import{Transition as n}from"react-transition-group";import r from"styled-components";import o from"../InternalSlideInFlex/InternalSlideInFlex.js";import{OakBox as a}from"../../atoms/OakBox/OakBox.js";import{parseOpacity as i}from"../../../styles/helpers/parseOpacity.js";const s=r(a)`
  opacity: ${({$state:e})=>{switch(e){case"entered":case"entering":return i("semi-transparent");default:return i("transparent")}}};
  background-color: black;
  position: fixed;
  inset: 0;
  transition: ease;
`,c=({children:r,isOpen:a,transitionRef:i,onClose:c,finalZIndex:d,isLeftHandSide:m,...l})=>e.createElement(n,{in:a,nodeRef:i,addEndListener:e=>{i.current?.addEventListener("transitionend",e)},timeout:500,mountOnEnter:!0,unmountOnExit:!0},(n=>e.createElement(t,{onEscapeKey:c,returnFocus:!0,autoFocus:!0},e.createElement(s,{$zIndex:d,$state:n,onClick:m?void 0:c}),e.createElement(o,{isLeftHandSide:m,ref:i,$zIndex:d,$state:n,...l},r))));export{c as default};
//# sourceMappingURL=InternalModalTransition.js.map
