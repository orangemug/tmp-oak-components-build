import e from"react";import r from"next/link";import t from"styled-components";import{OakPrimaryButton as n}from"../../../molecules/OakPrimaryButton/OakPrimaryButton.js";import{OakPrimaryInvertedButton as o}from"../../../molecules/OakPrimaryInvertedButton/OakPrimaryInvertedButton.js";const m=t(n)`
  pointer-events: none;
`,a=({href:t,isCurrent:n=!1,shallow:a=!0,children:i})=>n?e.createElement(m,{element:"span","aria-current":"page"},i):e.createElement(o,{element:r,href:t,shallow:a,isTrailingIcon:!0},i);export{a as OakPrimaryNavItem};
//# sourceMappingURL=OakPrimaryNavItem.js.map
