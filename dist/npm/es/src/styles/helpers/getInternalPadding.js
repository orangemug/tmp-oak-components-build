import { getFontSize } from './getFontSize.js';

var MAX_PADDING = 12;
/** Returns the internal padding for a textarea component based on the height and font size. */
function getInternalPadding(height) {
    if (typeof height !== "string") {
        return "".concat(MAX_PADDING, "px");
    }
    var heightNumber = parseInt(height.replace("spacing-", ""));
    var textLineHeight = Math.ceil(getFontSize("body-1") * 1.4);
    var padding = Math.max(Math.floor((heightNumber - textLineHeight) / 2) - 1, 0);
    return "".concat(Math.min(padding, MAX_PADDING), "px");
}

export { MAX_PADDING, getInternalPadding };
