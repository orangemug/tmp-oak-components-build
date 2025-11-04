"use strict";var e=require("react"),t=require("styled-components"),a=require("../InternalCard/InternalCard.js"),r=require("../OakBox/OakBox.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e);const l=n(t).default(r.OakBox)`
  & > * {
    width: 100%;
    height: 100%;
  }
`;exports.InternalCardWithBackgroundElement=({backgroundElement:e,children:t,...n})=>i.default.createElement(a.InternalCard,{...n},i.default.createElement(l,{$position:"absolute",$inset:"space-between-none","aria-hidden":!0},e),i.default.createElement(r.OakBox,{$position:"relative"},t));
//# sourceMappingURL=InternalCardWithBackgroundElement.js.map
