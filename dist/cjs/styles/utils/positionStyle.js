"use strict";var e=require("styled-components"),s=require("./responsiveStyle.js"),i=require("../helpers/parseSpacing.js");const t=e.css`
  ${s.responsiveStyle("position",(e=>e.$position))}
  ${s.responsiveStyle("top",(e=>e.$top),i.parseSpacing)} 
  ${s.responsiveStyle("right",(e=>e.$right),i.parseSpacing)} 
  ${s.responsiveStyle("bottom",(e=>e.$bottom),i.parseSpacing)} 
  ${s.responsiveStyle("left",(e=>e.$left),i.parseSpacing)} 
  ${s.responsiveStyle("inset",(e=>e.$inset),i.parseSpacing)} 
  ${s.responsiveStyle("overflow",(e=>e.$overflow))}
  ${s.responsiveStyle("overflow-x",(e=>e.$overflowX))}
  ${s.responsiveStyle("overflow-y",(e=>e.$overflowY))}
  ${s.responsiveStyle("object-fit",(e=>e.$objectFit))}
  ${s.responsiveStyle("pointer-events",(e=>e.$pointerEvents))}
  ${s.responsiveStyle("visibility",(e=>e.$visibility))}
  ${s.responsiveStyle("vertical-align",(e=>e.$verticalAlign))}
`;exports.positionStyle=t;
//# sourceMappingURL=positionStyle.js.map
