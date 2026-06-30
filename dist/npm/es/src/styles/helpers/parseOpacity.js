import { oakOpacityTokens } from '../theme/opacity.js';

var parseOpacity = function (variant) {
    if (!variant) {
        return;
    }
    if (variant in oakOpacityTokens) {
        return oakOpacityTokens[variant];
    }
};

export { parseOpacity };
