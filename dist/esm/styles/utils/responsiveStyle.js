import{css as t}from"styled-components";import{truthy as i}from"../helpers/truthy.js";const e={small:750,large:1280},r=Object.values(e).sort(((t,i)=>t>i?1:-1)),l=t=>e[t],o={mobile:`(max-width: ${l("small")-1}px)`,tablet:`(min-width: ${l("small")}px and max-width: ${l("large")-1}px)`,desktop:`(min-width: ${l("large")}px)`},m=t=>o[t],a=(e,l,o=(t=>t))=>m=>{const a=i=>void 0===i?void 0:t`
            ${e}: ${o(i)};
          `,s=l(m);if(void 0!==s)return Array.isArray(s)?0===s.length?[]:[t`
        ${a(s[0])}
      `,...r.slice(0,s.length).map(((i,e)=>{const r=s[e+1];if(void 0!==r)return t`
            @media (min-width: ${i}px) {
              ${t`
                ${a(r)}
              `}
            }
          `})).filter(i)]:t`
        ${a(s)}
      `};export{r as breakpoints,l as getBreakpoint,m as getMediaQuery,a as responsiveStyle};
//# sourceMappingURL=responsiveStyle.js.map
