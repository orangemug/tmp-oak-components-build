"use strict";var e=require("styled-components"),t=require("../helpers/truthy.js");const s={small:750,large:1280},r=Object.values(s).sort(((e,t)=>e>t?1:-1)),i=e=>s[e],a={mobile:`(max-width: ${i("small")-1}px)`,tablet:`(min-width: ${i("small")}px and max-width: ${i("large")-1}px)`,desktop:`(min-width: ${i("large")}px)`};exports.breakpoints=r,exports.getBreakpoint=i,exports.getMediaQuery=e=>a[e],exports.responsiveStyle=(s,i,a=(e=>e))=>l=>{const o=t=>void 0===t?void 0:e.css`
            ${s}: ${a(t)};
          `,n=i(l);if(void 0!==n)return Array.isArray(n)?0===n.length?[]:[e.css`
        ${o(n[0])}
      `,...r.slice(0,n.length).map(((t,s)=>{const r=n[s+1];if(void 0!==r)return e.css`
            @media (min-width: ${t}px) {
              ${e.css`
                ${o(r)}
              `}
            }
          `})).filter(t.truthy)]:e.css`
        ${o(n)}
      `};
//# sourceMappingURL=responsiveStyle.js.map
