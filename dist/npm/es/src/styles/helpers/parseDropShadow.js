import { oakDropShadowTokens } from '../theme/dropShadow.js';

var parseDropShadow = function (variant) {
    if (variant === null) {
        return "none";
    }
    if (!variant) {
        return;
    }
    if (variant in oakDropShadowTokens) {
        return oakDropShadowTokens[variant];
    }
};

export { parseDropShadow };
