"use strict";var o=require("react"),e=require("styled-components"),a=require("../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js"),r=require("../../../../styles/helpers/parseDropShadow.js");function t(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var n=t(o);const d=t(e).default(a.InternalShadowRoundButton)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${r.parseDropShadow("drop-shadow-lemon")},
      ${r.parseDropShadow("drop-shadow-grey")} !important;
  }
`;exports.OakInfoButton=o=>{const{isLoading:e,disabled:a,onClick:r,isOpen:t,buttonProps:i}=o;return n.default.createElement(d,{iconName:t&&!a?"cross":"info",defaultIconBackground:t?"black":"bg-decorative5-main",defaultIconColor:t?"white":"black",hoverIconBackground:t?"black":"bg-decorative5-main",defaultTextColor:"text-primary",hoverTextColor:"text-primary",disabledIconBackground:"bg-btn-primary-disabled",disabledTextColor:"text-disabled",disabledIconColor:"white",isLoading:e,disabled:o.disabled,iconBackgroundSize:"all-spacing-8",iconSize:"all-spacing-7",onClick:r,"data-rac":!0,...i})};
//# sourceMappingURL=OakInfoButton.js.map
