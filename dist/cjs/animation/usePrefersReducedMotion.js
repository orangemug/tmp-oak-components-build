"use strict";var e=require("react");exports.usePrefersReducedMotion=function(){const[t,r]=e.useState(!1);return e.useEffect((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");r(e.matches)}),[]),t};
//# sourceMappingURL=usePrefersReducedMotion.js.map
