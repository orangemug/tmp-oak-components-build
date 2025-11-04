"use strict";var e=require("styled-components"),r=require("../helpers/parseColor.js"),o=require("./responsiveStyle.js");const s=e.css`
  ${o.responsiveStyle("color",(e=>e.$color),r.parseColor)}
  ${o.responsiveStyle("background",(e=>e.$background),r.parseColor)}
`;exports.colorStyle=s;
//# sourceMappingURL=colorStyle.js.map
