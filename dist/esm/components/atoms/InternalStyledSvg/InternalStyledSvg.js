import s,{css as r}from"styled-components";import{responsiveStyle as e}from"../../../styles/utils/responsiveStyle.js";import{parseColor as o}from"../../../styles/helpers/parseColor.js";import{parseBorderWidth as t}from"../../../styles/helpers/parseBorderWidth.js";const l=r`
  ${e("fill",(s=>s.$fill),o)}
`,i=s.svg`
  ${l}
  ${e("stroke",(s=>s.$stroke),o)}
    ${e("stroke-width",(s=>s.$strokeWidth),t)}
`;export{i as InternalStyledSvg,l as colorFillStyle};
//# sourceMappingURL=InternalStyledSvg.js.map
