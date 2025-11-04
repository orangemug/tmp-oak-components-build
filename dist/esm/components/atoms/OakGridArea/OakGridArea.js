import r,{css as t}from"styled-components";import{responsiveStyle as o}from"../../../styles/utils/responsiveStyle.js";import{OakFlex as a}from"../OakFlex/OakFlex.js";const $=(r,t)=>r?`${r}/${t}`:`${t}`,n=r=>{if(r?.includes("/")){const[t,o]=r.split("/");return`${t} / span ${o}`}return`span ${r}`},s=t`
  flex-direction: column;
  ${o("grid-column",(r=>Array.isArray(r.$colSpan)?r.$colSpan.map(((t,o)=>$(Array.isArray(r.$colStart)?r.$colStart[o]:r.$colStart,t))):$(Array.isArray(r.$colStart)?r.$colStart[0]:r.$colStart,r.$colSpan)),(r=>n(r)))};
  ${o("grid-row",(r=>Array.isArray(r.$rowSpan)?r.$rowSpan.map(((t,o)=>$(Array.isArray(r.$rowStart)?r.$rowStart[o]:r.$rowStart,t))):$(Array.isArray(r.$rowStart)?r.$rowStart[0]:r.$rowStart,r.$rowSpan)),(r=>n(r)))};
  ${o("order",(r=>r.$order),(r=>r&&`${r}`))};
  ${o("grid-row",(r=>r.$rowSpan?`span ${r.$rowSpan}`:"span 1"))};
  ${o("grid-column-start",(r=>r.$colStart))}
  ${o("grid-column-end",(r=>r.$colEnd))}
  ${o("grid-row-start",(r=>r.$rowStart))}
`,l=r(a)`
  ${s}
`;export{l as OakGridArea};
//# sourceMappingURL=OakGridArea.js.map
