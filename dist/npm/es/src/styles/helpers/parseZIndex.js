import { oakZIndexTokens } from '../theme/zIndex.js';

var parseZIndex = function (value) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (typeof value === "number") {
        return value;
    }
    return oakZIndexTokens[value];
};

export { parseZIndex };
