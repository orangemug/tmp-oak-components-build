"use strict";var e=require("react"),o=require("styled-components"),a=require("../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js"),t=require("../../../../../styles/helpers/parseDropShadow.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e);const d=r(o).default(a.InternalShadowRoundButton)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${t.parseDropShadow("drop-shadow-lemon")},
      ${t.parseDropShadow("drop-shadow-grey")} !important;
  }
`;exports.OakHintButton=e=>{const{isOpen:o,disabled:a,buttonProps:t}=e;return n.default.createElement(d,{iconName:o&&!a?"lightbulb-yellow":"lightbulb",defaultIconBackground:o?"black":"bg-decorative5-main",hoverIconBackground:o?"black":"bg-decorative5-main",defaultTextColor:"text-primary",hoverTextColor:"text-primary",disabledIconBackground:"bg-btn-primary-disabled",disabledTextColor:"text-disabled",disabledIconColor:"white",onClick:e.onClick,isLoading:e.isLoading,disabled:e.disabled,iconBackgroundSize:"all-spacing-8",iconSize:"all-spacing-6","data-rac":!0,...t},o?"Close hint":"Need a hint?")};
//# sourceMappingURL=OakHintButton.js.map
