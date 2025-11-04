import o from"react";import a from"styled-components";import{InternalShadowRoundButton as e}from"../../../molecules/InternalShadowRoundButton/InternalShadowRoundButton.js";import{parseDropShadow as r}from"../../../../styles/helpers/parseDropShadow.js";const t=a(e)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${r("drop-shadow-lemon")},
      ${r("drop-shadow-grey")} !important;
  }
`,n=a=>{const{isLoading:e,disabled:r,onClick:n,isOpen:d,buttonProps:i}=a;return o.createElement(t,{iconName:d&&!r?"cross":"info",defaultIconBackground:d?"black":"bg-decorative5-main",defaultIconColor:d?"white":"black",hoverIconBackground:d?"black":"bg-decorative5-main",defaultTextColor:"text-primary",hoverTextColor:"text-primary",disabledIconBackground:"bg-btn-primary-disabled",disabledTextColor:"text-disabled",disabledIconColor:"white",isLoading:e,disabled:a.disabled,iconBackgroundSize:"all-spacing-8",iconSize:"all-spacing-7",onClick:n,"data-rac":!0,...i})};export{n as OakInfoButton};
//# sourceMappingURL=OakInfoButton.js.map
