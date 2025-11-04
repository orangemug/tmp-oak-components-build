"use strict";var e=require("styled-components"),t=require("../../../styles/utils/colorStyle.js"),s=require("../../../styles/utils/positionStyle.js"),l=require("../../../styles/utils/sizeStyle.js"),r=require("../../../styles/utils/spacingStyle.js"),i=require("../../../styles/utils/borderStyle.js"),y=require("../../../styles/utils/displayStyle.js"),o=require("../../../styles/utils/dropShadowStyle.js"),u=require("../../../styles/utils/opacityStyle.js"),S=require("../../../styles/utils/transformStyle.js"),a=require("../../../styles/utils/transitionStyle.js"),n=require("../../../styles/utils/typographyStyle.js"),p=require("../../../styles/utils/zIndexStyle.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=c(e);const $=e.css`
  ${s.positionStyle}
  ${l.sizeStyle}
  ${r.spacingStyle}
  ${t.colorStyle}
  ${i.borderStyle}
  ${y.displayStyle}
  ${o.dropShadowStyle}
  ${u.opacityStyle}
  ${S.transformStyle}
  ${a.transitionStyle}
  ${n.typographyStyle}
  ${p.zIndexStyle}
  ${t=>t.onClick&&e.css`
      :hover {
        cursor: pointer;
      }
    `}
`,j=d.default.div`
  ${$}
`;exports.OakBox=j,exports.oakBoxCss=$;
//# sourceMappingURL=OakBox.js.map
