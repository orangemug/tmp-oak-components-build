"use strict";var e=require("styled-components"),t=require("../OakBox/OakBox.js"),l=require("../../../styles/utils/displayStyle.js"),s=require("../../../styles/utils/listStyle.js"),i=require("../../../styles/utils/typographyStyle.js"),r=require("../../../styles/utils/flexStyle.js");function y(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const o=y(e).default.li`
  ${t.oakBoxCss}
  ${i.typographyStyle}
  ${s.listStyle}
  ${l.displayStyle}
  // FIXME - Flex props will only work when display is set to flex, can we conditionally apply this + props above ? 
  ${r.flexStyle}
`;o.defaultProps={$display:"revert"},exports.OakLI=o;
//# sourceMappingURL=OakLI.js.map
