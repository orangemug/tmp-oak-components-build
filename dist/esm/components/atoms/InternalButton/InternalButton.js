import t,{useRef as o}from"react";import e,{css as r}from"styled-components";import{colorStyle as n}from"../../../styles/utils/colorStyle.js";import{displayStyle as s}from"../../../styles/utils/displayStyle.js";import{spacingStyle as l}from"../../../styles/utils/spacingStyle.js";import{typographyStyle as i}from"../../../styles/utils/typographyStyle.js";import{dropShadowStyle as m}from"../../../styles/utils/dropShadowStyle.js";import{borderStyle as p}from"../../../styles/utils/borderStyle.js";const u=r`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
  font-family: unset;
  outline: none;
  ${i}
  ${n}
  ${l}
  ${s}
  ${p}
  ${m}
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`,y=e((e=>{const{onClick:r,onHovered:n,element:s="button",...l}=e,i=o(Date.now());return t.createElement(s,{...l,onClick:t=>{r&&r(t)},onMouseEnter:()=>{i.current=Date.now()},onMouseLeave:t=>{const o=Date.now()-i.current;n&&n(t,o)}})}))`
  ${u}
`;export{y as InternalButton};
//# sourceMappingURL=InternalButton.js.map
