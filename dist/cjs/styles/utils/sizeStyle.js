"use strict";var e=require("styled-components"),i=require("./responsiveStyle.js"),s=require("../helpers/parseSpacing.js");const t=e.css`
  ${i.responsiveStyle("width",(e=>e.$width),s.parseSpacing)}
  ${i.responsiveStyle("min-width",(e=>e.$minWidth),s.parseSpacing)}
  ${i.responsiveStyle("max-width",(e=>e.$maxWidth),s.parseSpacing)}
  ${i.responsiveStyle("height",(e=>e.$height),s.parseSpacing)}
  ${i.responsiveStyle("min-height",(e=>e.$minHeight),s.parseSpacing)}
  ${i.responsiveStyle("max-height",(e=>e.$maxHeight),s.parseSpacing)}
  ${i.responsiveStyle("aspect-ratio",(e=>e.$aspectRatio))}
  ${i.responsiveStyle("box-sizing",(e=>e.$boxSizing))}
`;exports.sizeStyle=t;
//# sourceMappingURL=sizeStyle.js.map
