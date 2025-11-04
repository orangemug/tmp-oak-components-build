import{css as i}from"styled-components";import{responsiveStyle as t}from"./responsiveStyle.js";import{parseSpacing as e}from"../helpers/parseSpacing.js";const h=i`
  ${t("width",(i=>i.$width),e)}
  ${t("min-width",(i=>i.$minWidth),e)}
  ${t("max-width",(i=>i.$maxWidth),e)}
  ${t("height",(i=>i.$height),e)}
  ${t("min-height",(i=>i.$minHeight),e)}
  ${t("max-height",(i=>i.$maxHeight),e)}
  ${t("aspect-ratio",(i=>i.$aspectRatio))}
  ${t("box-sizing",(i=>i.$boxSizing))}
`;export{h as sizeStyle};
//# sourceMappingURL=sizeStyle.js.map
