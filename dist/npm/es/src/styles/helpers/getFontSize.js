import { oakFontTokens, oakFontSizeTokens } from '../theme/typography.js';

/** Returns the font size in pixels for a given font size token */
function getFontSize(token) {
    var fontSizeToken = oakFontTokens[token][0];
    return oakFontSizeTokens[fontSizeToken];
}

export { getFontSize };
