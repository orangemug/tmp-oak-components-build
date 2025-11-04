"use strict";var o=require("../theme/color.js");exports.parseColorFilter=function(e){if(null!=e)return e in o.oakColorFilterTokens?o.oakColorFilterTokens[e]:o.oakUiRoleTokens.includes(e)?({theme:r})=>{const i=r.uiColors[e];if(i&&i in o.oakColorFilterTokens)return o.oakColorFilterTokens[i]}:void 0};
//# sourceMappingURL=parseColorFilter.js.map
