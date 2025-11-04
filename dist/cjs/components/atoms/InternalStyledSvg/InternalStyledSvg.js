"use strict";var e=require("styled-components"),r=require("../../../styles/utils/responsiveStyle.js"),s=require("../../../styles/helpers/parseColor.js"),t=require("../../../styles/helpers/parseBorderWidth.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=l(e);const i=e.css`
  ${r.responsiveStyle("fill",(e=>e.$fill),s.parseColor)}
`,p=o.default.svg`
  ${i}
  ${r.responsiveStyle("stroke",(e=>e.$stroke),s.parseColor)}
    ${r.responsiveStyle("stroke-width",(e=>e.$strokeWidth),t.parseBorderWidth)}
`;exports.InternalStyledSvg=p,exports.colorFillStyle=i;
//# sourceMappingURL=InternalStyledSvg.js.map
