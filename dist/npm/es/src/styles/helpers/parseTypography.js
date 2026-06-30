import { oakFontTokens, oakFontSizeTokens } from '../theme/typography.js';
import pxToRem from './pxToRem.js';

var parseFontWeight = function (font) {
    var _a;
    if (!font)
        return;
    return (_a = oakFontTokens[font]) === null || _a === void 0 ? void 0 : _a[2];
};
var parseFontSize = function (font) {
    var _a;
    if (!font)
        return;
    var fontSize = (_a = oakFontTokens[font]) === null || _a === void 0 ? void 0 : _a[0];
    if (!fontSize)
        return;
    var fontSizePx = oakFontSizeTokens[fontSize];
    return "".concat(pxToRem(fontSizePx), "rem");
};
var parseLineHeight = function (font) {
    var _a;
    if (!font)
        return;
    var lineHeight = (_a = oakFontTokens[font]) === null || _a === void 0 ? void 0 : _a[1];
    if (!lineHeight)
        return;
    return "".concat(pxToRem(lineHeight), "rem");
};
var parseLetterSpacing = function (font) {
    var _a;
    if (!font)
        return;
    return (_a = oakFontTokens[font]) === null || _a === void 0 ? void 0 : _a[3];
};

export { parseFontSize, parseFontWeight, parseLetterSpacing, parseLineHeight };
