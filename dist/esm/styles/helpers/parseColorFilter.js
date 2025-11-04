import{oakColorFilterTokens as o,oakUiRoleTokens as i}from"../theme/color.js";function n(n){if(null!=n)return n in o?o[n]:i.includes(n)?({theme:i})=>{const r=i.uiColors[n];if(r&&r in o)return o[r]}:void 0}export{n as parseColorFilter};
//# sourceMappingURL=parseColorFilter.js.map
