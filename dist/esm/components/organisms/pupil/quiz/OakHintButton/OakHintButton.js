import o from"react";import e from"styled-components";import{InternalShadowRoundButton as a}from"../../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import{parseDropShadow as t}from"../../../../../styles/helpers/parseDropShadow.js";const r=e(a)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${t("drop-shadow-lemon")},
      ${t("drop-shadow-grey")} !important;
  }
`,n=e=>{const{isOpen:a,disabled:t,buttonProps:n}=e;return o.createElement(r,{iconName:a&&!t?"lightbulb-yellow":"lightbulb",defaultIconBackground:a?"black":"bg-decorative5-main",hoverIconBackground:a?"black":"bg-decorative5-main",defaultTextColor:"text-primary",hoverTextColor:"text-primary",disabledIconBackground:"bg-btn-primary-disabled",disabledTextColor:"text-disabled",disabledIconColor:"white",onClick:e.onClick,isLoading:e.isLoading,disabled:e.disabled,iconBackgroundSize:"all-spacing-8",iconSize:"all-spacing-6","data-rac":!0,...n},a?"Close hint":"Need a hint?")};export{n as OakHintButton};
//# sourceMappingURL=OakHintButton.js.map
