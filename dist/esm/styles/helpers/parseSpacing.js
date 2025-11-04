import r from"./pxToRem.js";import{oakAllSpacingTokens as n,oakInnerPaddingTokens as e,oakSpaceBetweenTokens as i}from"../theme/spacing.js";function t(t){if(null!=t){if(t in n)return`${r(n[t])}rem`;if(t in e){const i=e[t];return`${r(n[i])}rem`}if(t in i){const e=i[t];return`${r(n[e])}rem`}return t}}export{t as parseSpacing};
//# sourceMappingURL=parseSpacing.js.map
