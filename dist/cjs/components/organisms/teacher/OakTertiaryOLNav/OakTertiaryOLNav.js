"use strict";var e=require("react"),a=require("styled-components"),r=require("../../../molecules/InternalLink/InternalLink.js"),o=require("../../../../styles/helpers/parseColor.js"),t=require("../../../../styles/helpers/parseDropShadow.js"),s=require("../../../atoms/OakLI/OakLI.js"),n=require("../../../../styles/helpers/parseSpacing.js"),i=require("../../../atoms/OakAnchorTarget/OakAnchorTarget.js");require("../../../atoms/OakAspectRatio/OakAspectRatio.js");var l=require("../../../atoms/OakBox/OakBox.js");require("../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js"),require("../../../atoms/OakFlex/OakFlex.js"),require("../../../atoms/OakForm/OakForm.js"),require("../../../atoms/OakGlobalStyle/OakGlobalStyle.js"),require("../../../atoms/OakGrid/OakGrid.js"),require("../../../atoms/OakGridArea/OakGridArea.js"),require("../../../atoms/OakHeading/OakHeading.js"),require("../../../atoms/OakImage/OakImage.js");var d=require("../../../atoms/OakSpan/OakSpan.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../../atoms/OakLabel/OakLabel.js"),require("../../../atoms/OakMaxWidth/OakMaxWidth.js"),require("../../../atoms/OakOL/OakOL.js"),require("../../../atoms/OakFieldset/OakFieldset.js"),require("../../../atoms/OakP/OakP.js"),require("../../../atoms/OakScreenReader/OakScreenReader.js"),require("../../../atoms/OakTypography/OakTypography.js"),require("../../../atoms/OakUL/OakUL.js"),require("../../../atoms/OakSvg/OakSvg.js");var u=c(e),k=c(a);const p=k.default.nav`
  outline: none;
`,m=k.default(r.InternalLink)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: Flex;
  width: 100%;
  &:focus {
    box-shadow: none;
  }

  &::before {
    content: counter(list-counter);
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${o.parseColor("black")};
    color: ${o.parseColor("white")};
    text-align: center;
    line-height: 32px;
    margin-right: ${n.parseSpacing("space-between-xs")};
    text-decoration: none;
  }
  &:hover::before {
    background-color: ${o.parseColor("bg-btn-primary-hover")};
    box-shadow: ${t.parseDropShadow("drop-shadow-lemon")};
    text-decoration: none;
  }

  &:focus-within::before {
    box-shadow: ${t.parseDropShadow("drop-shadow-centered-lemon")},
      ${t.parseDropShadow("drop-shadow-centered-grey")};
    text-decoration: none;
  }
  &:active {
    color: ${o.parseColor("black")};
  }
  &:active::before {
    box-shadow: ${t.parseDropShadow("drop-shadow-lemon")},
      ${t.parseDropShadow("drop-shadow-grey")};
    background-color: ${o.parseColor("black")};
  }
`,h=k.default.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
`,O=k.default(s.OakLI)`
  position: relative;
  counter-increment: list-counter;
  display: flex;
  align-items: center;
  margin-bottom: ${n.parseSpacing("space-between-xs")};
  min-height: 40px;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
    color: ${o.parseColor("bg-btn-primary-hover")};
  }
`;exports.OakTertiaryOLNav=({items:a,ariaLabel:r,title:o,anchorTarget:t,onClick:s,...n})=>{const[c,k]=e.useState(null),g=e=>{e.key&&"Tab"!==e.key&&k(e.currentTarget.hash)};return u.default.createElement(p,{"aria-label":r,...n},t&&u.default.createElement(i.OakAnchorTarget,{id:t}),o&&u.default.createElement(l.OakBox,{$mb:"space-between-m"},u.default.createElement(d.OakSpan,{$font:"heading-light-7"},o)),u.default.createElement(h,{role:"list"},a.map(((e,a)=>u.default.createElement(O,{$font:"heading-7",key:a},u.default.createElement(m,{onClick:s,href:e.href,"aria-current":e.href===c?"true":void 0,onKeyDown:g},e.title))))))};
//# sourceMappingURL=OakTertiaryOLNav.js.map
