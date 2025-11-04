"use strict";var o=require("../theme/color.js");exports.parseColor=function(e){if(null!=e)return e in o.oakColorTokens?o.oakColorTokens[e]:o.oakUiRoleTokens.includes(e)?({theme:r})=>{const n=r.uiColors[e];return o.oakColorTokens[n]}:void 0};
//# sourceMappingURL=parseColor.js.map
