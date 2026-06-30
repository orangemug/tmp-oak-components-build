var BASE_FONT_SIZE_PX = 16;
var REM_DP = 3;
function pxToRem(px) {
    return Number((px / BASE_FONT_SIZE_PX).toFixed(REM_DP));
}

export { REM_DP, pxToRem as default };
