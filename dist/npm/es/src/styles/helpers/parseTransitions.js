import { oakTransitionTokens } from '../theme/transitions.js';

var parseTransitions = function (variant) {
    if (!variant) {
        return;
    }
    if (variant in oakTransitionTokens) {
        return oakTransitionTokens[variant];
    }
};

export { parseTransitions };
