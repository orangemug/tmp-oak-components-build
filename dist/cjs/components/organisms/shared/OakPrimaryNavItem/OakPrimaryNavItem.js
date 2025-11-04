"use strict";var e=require("react"),r=require("next/link"),t=require("styled-components"),a=require("../../../molecules/OakPrimaryButton/OakPrimaryButton.js"),n=require("../../../molecules/OakPrimaryInvertedButton/OakPrimaryInvertedButton.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=u(e),l=u(r);const o=u(t).default(a.OakPrimaryButton)`
  pointer-events: none;
`;exports.OakPrimaryNavItem=({href:e,isCurrent:r=!1,shallow:t=!0,children:a})=>r?i.default.createElement(o,{element:"span","aria-current":"page"},a):i.default.createElement(n.OakPrimaryInvertedButton,{element:l.default,href:e,shallow:t,isTrailingIcon:!0},a);
//# sourceMappingURL=OakPrimaryNavItem.js.map
