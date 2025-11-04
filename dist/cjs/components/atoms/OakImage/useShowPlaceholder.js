"use strict";var e=require("react");exports.useShowPlaceholder=function(){const[t,r]=e.useState(!1);return{showPlaceholder:t,setImg:e.useCallback((e=>{e&&r(!e.complete)}),[]),handleComplete:e=>t=>{e&&e(t),r(!1)}}};
//# sourceMappingURL=useShowPlaceholder.js.map
