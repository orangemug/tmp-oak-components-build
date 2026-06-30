import { oakUiRoleTokens, oakColorFilterTokens } from '../theme/color.js';

function parseColorFilter(value) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (oakUiRoleTokens.includes(value)) {
        return function (_a) {
            var theme = _a.theme;
            var c = theme.uiColors[value];
            if (c && c in oakColorFilterTokens) {
                return oakColorFilterTokens[c];
            }
            return undefined;
        };
    }
}

export { parseColorFilter };
