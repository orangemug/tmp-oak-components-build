"use strict";var e=require("react"),t=require("styled-components"),r=require("../../../styles/utils/colorStyle.js"),a=require("../../../styles/utils/spacingStyle.js"),i=require("../../../styles/utils/opacityStyle.js"),l=require("../../../styles/utils/typographyStyle.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=s(e);const y=["div","h1","h2","h3","h4","h5","h6"],n=e=>{const{tag:t,ariaLabel:r,ariaHidden:a,...i}=e,l=t;return o.default.createElement(l,{...i,"aria-label":r,"aria-hidden":a})},u=s(t).default(n)`
  ${l.typographyStyle}
  ${a.marginStyle}
  ${r.colorStyle}
  ${i.opacityStyle}
`;exports.HeadingTagComponent=n,exports.OakHeading=u,exports.oakHeadingTags=y;
//# sourceMappingURL=OakHeading.js.map
