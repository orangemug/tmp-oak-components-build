"use strict";var e=require("styled-components"),s=require("../OakFlex/OakFlex.js"),t=require("../OakBox/OakBox.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const o=a(e).default.ul`
  ${s=>s.$reset&&e.css`
      list-style: none;
      padding: 0;
    `}
  margin: 0;
  display: block;
  ${t.oakBoxCss}
  ${e=>e.$display&&s.oakFlexCss}
`;exports.OakUL=o;
//# sourceMappingURL=OakUL.js.map
