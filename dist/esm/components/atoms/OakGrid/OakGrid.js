import r,{css as e}from"styled-components";import{responsiveStyle as t}from"../../../styles/utils/responsiveStyle.js";import{OakBox as o}from"../OakBox/OakBox.js";import{parseSpacing as s}from"../../../styles/helpers/parseSpacing.js";const p=e`
  ${t("row-gap",(r=>r.$rg),s)}
  ${t("column-gap",(r=>r.$cg),s)}
  ${t("grid-auto-rows",(r=>r.$gridAutoRows))}
  ${t("grid-template-areas",(r=>r.$gridTemplateAreas))}
  ${t("grid-template-columns",(r=>r.$gridTemplateColumns))}
    ${t("grid-template-rows",(r=>r.$gridTemplateRows))}
`,m=r(o)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;

  ${p};
`;export{m as OakGrid};
//# sourceMappingURL=OakGrid.js.map
