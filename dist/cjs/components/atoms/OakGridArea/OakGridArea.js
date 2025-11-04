"use strict";var r=require("styled-components"),t=require("../../../styles/utils/responsiveStyle.js"),e=require("../OakFlex/OakFlex.js");function a(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var o=a(r);const s=(r,t)=>r?`${r}/${t}`:`${t}`,$=r=>{if(r?.includes("/")){const[t,e]=r.split("/");return`${t} / span ${e}`}return`span ${r}`},n=r.css`
  flex-direction: column;
  ${t.responsiveStyle("grid-column",(r=>Array.isArray(r.$colSpan)?r.$colSpan.map(((t,e)=>s(Array.isArray(r.$colStart)?r.$colStart[e]:r.$colStart,t))):s(Array.isArray(r.$colStart)?r.$colStart[0]:r.$colStart,r.$colSpan)),(r=>$(r)))};
  ${t.responsiveStyle("grid-row",(r=>Array.isArray(r.$rowSpan)?r.$rowSpan.map(((t,e)=>s(Array.isArray(r.$rowStart)?r.$rowStart[e]:r.$rowStart,t))):s(Array.isArray(r.$rowStart)?r.$rowStart[0]:r.$rowStart,r.$rowSpan)),(r=>$(r)))};
  ${t.responsiveStyle("order",(r=>r.$order),(r=>r&&`${r}`))};
  ${t.responsiveStyle("grid-row",(r=>r.$rowSpan?`span ${r.$rowSpan}`:"span 1"))};
  ${t.responsiveStyle("grid-column-start",(r=>r.$colStart))}
  ${t.responsiveStyle("grid-column-end",(r=>r.$colEnd))}
  ${t.responsiveStyle("grid-row-start",(r=>r.$rowStart))}
`,l=o.default(e.OakFlex)`
  ${n}
`;exports.OakGridArea=l;
//# sourceMappingURL=OakGridArea.js.map
