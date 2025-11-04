"use strict";var e=require("react"),t=require("styled-components"),i=require("../../../styles/utils/responsiveStyle.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),l=r(t);const a={"16:9":56.25,"3:2":66.66,"1:1":100,"2:3":150,"7:8":114},s=l.default.div`
  width: 100%;
  height: 0;
  position: relative;
  ${i.responsiveStyle("padding-top",(e=>e.ratio),(e=>e?`${a[e]}%`:void 0))}
`,n=l.default.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
`;exports.OakAspectRatio=e=>{const{children:t,ratio:i,...r}=e;return o.default.createElement(s,{ratio:i,...r},o.default.createElement(n,null,t))};
//# sourceMappingURL=OakAspectRatio.js.map
