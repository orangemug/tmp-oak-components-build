"use strict";var e=require("styled-components"),r=require("../../../styles/utils/responsiveStyle.js"),s=require("../OakBox/OakBox.js"),t=require("../../../styles/helpers/parseSpacing.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(e);const o=e.css`
  ${r.responsiveStyle("row-gap",(e=>e.$rg),t.parseSpacing)}
  ${r.responsiveStyle("column-gap",(e=>e.$cg),t.parseSpacing)}
  ${r.responsiveStyle("grid-auto-rows",(e=>e.$gridAutoRows))}
  ${r.responsiveStyle("grid-template-areas",(e=>e.$gridTemplateAreas))}
  ${r.responsiveStyle("grid-template-columns",(e=>e.$gridTemplateColumns))}
    ${r.responsiveStyle("grid-template-rows",(e=>e.$gridTemplateRows))}
`,p=a.default(s.OakBox)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;

  ${o};
`;exports.OakGrid=p;
//# sourceMappingURL=OakGrid.js.map
