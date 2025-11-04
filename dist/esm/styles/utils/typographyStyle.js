import{css as e}from"styled-components";import{parseFontWeight as t,parseFontSize as o,parseLineHeight as r,parseLetterSpacing as n}from"../helpers/parseTypography.js";import{responsiveStyle as $}from"./responsiveStyle.js";const i=e`
  font-family: --var(google-font), Lexend, sans-serif; //  FIXME: this should be a css variable ?
  ${$("font-weight",(e=>e.$font),t)}
  ${$("font-size",(e=>e.$font),o)}
  ${$("line-height",(e=>e.$font),r)}
  ${$("letter-spacing",(e=>e.$font),n)}
  ${$("text-align",(e=>e.$textAlign))}
  ${$("text-decoration",(e=>e.$textDecoration))}
  ${$("white-space",(e=>e.$whiteSpace))}
  ${$("word-wrap",(e=>e.$wordWrap))}
  ${$("text-overflow",(e=>e.$textOverflow))}
  ${$("overflow",(e=>e.$overflow))}
`;export{i as typographyStyle};
//# sourceMappingURL=typographyStyle.js.map
