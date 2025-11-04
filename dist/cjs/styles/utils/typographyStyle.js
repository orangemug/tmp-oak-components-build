"use strict";var e=require("styled-components"),t=require("../helpers/parseTypography.js"),s=require("./responsiveStyle.js");const o=e.css`
  font-family: --var(google-font), Lexend, sans-serif; //  FIXME: this should be a css variable ?
  ${s.responsiveStyle("font-weight",(e=>e.$font),t.parseFontWeight)}
  ${s.responsiveStyle("font-size",(e=>e.$font),t.parseFontSize)}
  ${s.responsiveStyle("line-height",(e=>e.$font),t.parseLineHeight)}
  ${s.responsiveStyle("letter-spacing",(e=>e.$font),t.parseLetterSpacing)}
  ${s.responsiveStyle("text-align",(e=>e.$textAlign))}
  ${s.responsiveStyle("text-decoration",(e=>e.$textDecoration))}
  ${s.responsiveStyle("white-space",(e=>e.$whiteSpace))}
  ${s.responsiveStyle("word-wrap",(e=>e.$wordWrap))}
  ${s.responsiveStyle("text-overflow",(e=>e.$textOverflow))}
  ${s.responsiveStyle("overflow",(e=>e.$overflow))}
`;exports.typographyStyle=o;
//# sourceMappingURL=typographyStyle.js.map
