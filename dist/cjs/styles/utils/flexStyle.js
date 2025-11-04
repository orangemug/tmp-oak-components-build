"use strict";var e=require("styled-components"),s=require("./responsiveStyle.js"),r=require("../helpers/parseSpacing.js");const i=e.css`
  ${s.responsiveStyle("display",(e=>e.$display??"flex"))}
  ${s.responsiveStyle("flex-direction",(e=>e.$flexDirection))}
  ${s.responsiveStyle("flex-wrap",(e=>e.$flexWrap))}
  ${s.responsiveStyle("align-items",(e=>e.$alignItems))}
  ${s.responsiveStyle("align-content",(e=>e.$alignContent))}
  ${s.responsiveStyle("justify-content",(e=>e.$justifyContent))}
  ${s.responsiveStyle("align-self",(e=>e.$alignSelf))}
  ${s.responsiveStyle("order",(e=>e.$order))}
  ${s.responsiveStyle("flex-grow",(e=>e.$flexGrow))}
  ${s.responsiveStyle("flex-shrink",(e=>e.$flexShrink))}
  ${s.responsiveStyle("flex-basis",(e=>e.$flexBasis),r.parseSpacing)}
  ${s.responsiveStyle("gap",(e=>e.$gap),r.parseSpacing)}
  ${s.responsiveStyle("column-gap",(e=>e.$columnGap),r.parseSpacing)}
  ${s.responsiveStyle("row-gap",(e=>e.$rowGap),r.parseSpacing)}
`;exports.flexStyle=i;
//# sourceMappingURL=flexStyle.js.map
