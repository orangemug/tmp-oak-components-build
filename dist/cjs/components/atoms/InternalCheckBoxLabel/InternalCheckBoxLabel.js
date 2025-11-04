"use strict";var e=require("styled-components"),n=require("../OakLabel/OakLabel.js"),t=require("../../../styles/utils/responsiveStyle.js"),r=require("../../../styles/helpers/parseSpacing.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=s(e);const l=a.default(n.OakLabel)`
  display: flex;
  align-items: center;
  ${t.responsiveStyle("gap",(e=>e.labelGap),r.parseSpacing)}
  ${t.responsiveStyle("align-items",(e=>e.labelAlignItems))}
`,i=a.default(l)`
  ${e=>`\n    ${e.pointerEvents?`pointer-events: ${e.pointerEvents};`:""}\n    ${e.disabled?"pointer-events: none;":"cursor: pointer;"}\n  `}
  @media (hover: hover) {
    &:hover {
      text-decoration: ${e=>e.disabled?"none":"underline"};
    }
  }
`;exports.InternalCheckBoxLabel=l,exports.InternalCheckBoxLabelHoverDecor=i;
//# sourceMappingURL=InternalCheckBoxLabel.js.map
