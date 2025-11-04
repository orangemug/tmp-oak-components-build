"use strict";var e=require("styled-components"),t=require("../../../styles/utils/colorStyle.js"),i=require("../../../styles/utils/spacingStyle.js"),l=require("../../../styles/utils/typographyStyle.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const n=r(e).default.ol`
  counter-reset: item;
  padding: 0;

  li {
    display: block;
    counter-increment: item;
    margin: 0;
    padding: 0 0 0 16px;
    text-indent: -16px;
    list-style-type: none;
    line-height: 32px;

    // Portable text generates linebreaks within list items

    br {
      content: "";
      display: block;
      margin-top: 8px;
    }
  }

  & li::before {
    padding-right: 4px;
    content: counter(item) ".";
  }
  a {
    color: ${e=>e.theme&&e.theme.uiColors&&e.theme.uiColors["text-link-active"]};
  }
  ${i.marginStyle}
  ${t.colorStyle}
  ${l.typographyStyle}
`;exports.OakOL=n;
//# sourceMappingURL=OakOL.js.map
