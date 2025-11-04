import e,{useState as o}from"react";import a from"styled-components";import{InternalLink as t}from"../../../molecules/InternalLink/InternalLink.js";import{parseColor as r}from"../../../../styles/helpers/parseColor.js";import{parseDropShadow as i}from"../../../../styles/helpers/parseDropShadow.js";import{OakLI as n}from"../../../atoms/OakLI/OakLI.js";import{parseSpacing as s}from"../../../../styles/helpers/parseSpacing.js";import{OakAnchorTarget as m}from"../../../atoms/OakAnchorTarget/OakAnchorTarget.js";import"../../../atoms/OakAspectRatio/OakAspectRatio.js";import{OakBox as l}from"../../../atoms/OakBox/OakBox.js";import"../../../atoms/OakCloudinaryImage/OakCloudinaryImage.js";import"../../../atoms/OakFlex/OakFlex.js";import"../../../atoms/OakForm/OakForm.js";import"../../../atoms/OakGlobalStyle/OakGlobalStyle.js";import"../../../atoms/OakGrid/OakGrid.js";import"../../../atoms/OakGridArea/OakGridArea.js";import"../../../atoms/OakHeading/OakHeading.js";import"../../../atoms/OakImage/OakImage.js";import{OakSpan as p}from"../../../atoms/OakSpan/OakSpan.js";import"../../../atoms/OakLabel/OakLabel.js";import"../../../atoms/OakMaxWidth/OakMaxWidth.js";import"../../../atoms/OakOL/OakOL.js";import"../../../atoms/OakFieldset/OakFieldset.js";import"../../../atoms/OakP/OakP.js";import"../../../atoms/OakScreenReader/OakScreenReader.js";import"../../../atoms/OakTypography/OakTypography.js";import"../../../atoms/OakUL/OakUL.js";import"../../../atoms/OakSvg/OakSvg.js";const c=a.nav`
  outline: none;
`,k=a(t)`
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
    background-color: ${r("black")};
    color: ${r("white")};
    text-align: center;
    line-height: 32px;
    margin-right: ${s("space-between-xs")};
    text-decoration: none;
  }
  &:hover::before {
    background-color: ${r("bg-btn-primary-hover")};
    box-shadow: ${i("drop-shadow-lemon")};
    text-decoration: none;
  }

  &:focus-within::before {
    box-shadow: ${i("drop-shadow-centered-lemon")},
      ${i("drop-shadow-centered-grey")};
    text-decoration: none;
  }
  &:active {
    color: ${r("black")};
  }
  &:active::before {
    box-shadow: ${i("drop-shadow-lemon")},
      ${i("drop-shadow-grey")};
    background-color: ${r("black")};
  }
`,d=a.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
`,h=a(n)`
  position: relative;
  counter-increment: list-counter;
  display: flex;
  align-items: center;
  margin-bottom: ${s("space-between-xs")};
  min-height: 40px;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
    color: ${r("bg-btn-primary-hover")};
  }
`,O=({items:a,ariaLabel:t,title:r,anchorTarget:i,onClick:n,...s})=>{const[O,g]=o(null),b=e=>{e.key&&"Tab"!==e.key&&g(e.currentTarget.hash)};return e.createElement(c,{"aria-label":t,...s},i&&e.createElement(m,{id:i}),r&&e.createElement(l,{$mb:"space-between-m"},e.createElement(p,{$font:"heading-light-7"},r)),e.createElement(d,{role:"list"},a.map(((o,a)=>e.createElement(h,{$font:"heading-7",key:a},e.createElement(k,{onClick:n,href:o.href,"aria-current":o.href===O?"true":void 0,onKeyDown:b},o.title))))))};export{O as OakTertiaryOLNav};
//# sourceMappingURL=OakTertiaryOLNav.js.map
