import t from"react";import o from"styled-components";import{responsiveStyle as e}from"../../../styles/utils/responsiveStyle.js";const i={"16:9":56.25,"3:2":66.66,"1:1":100,"2:3":150,"7:8":114},r=o.div`
  width: 100%;
  height: 0;
  position: relative;
  ${e("padding-top",(t=>t.ratio),(t=>t?`${i[t]}%`:void 0))}
`,l=o.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
`,s=o=>{const{children:e,ratio:i,...s}=o;return t.createElement(r,{ratio:i,...s},t.createElement(l,null,e))};export{s as OakAspectRatio};
//# sourceMappingURL=OakAspectRatio.js.map
