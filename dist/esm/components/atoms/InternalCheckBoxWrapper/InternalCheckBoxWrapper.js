import e from"react";import t from"styled-components";import{OakBox as o}from"../OakBox/OakBox.js";import{OakIcon as i}from"../OakIcon/OakIcon.js";const n=t(o)`
  pointer-events: none;
  opacity: 0;

  input:checked + & {
    opacity: 1;
  }
`,c=t=>{const{size:c="all-spacing-6",iconPadding:a="inner-padding-none",internalCheckbox:r,checkedIcon:p=e.createElement(i,{iconName:"tick",$width:"100%",$height:"100%",$colorFilter:"white"})}=t;return e.createElement(o,{$position:"relative",$width:c,$height:c},r,e.createElement(n,{$position:"absolute",$top:"all-spacing-0",$left:"all-spacing-0",$pa:a,$width:c,$height:c},p))};export{c as InternalCheckBoxWrapper};
//# sourceMappingURL=InternalCheckBoxWrapper.js.map
