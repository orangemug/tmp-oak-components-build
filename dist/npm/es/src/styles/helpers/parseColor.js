import { oakColorTokens, oakUiRoleTokens } from '../theme/color.js';

function parseColor(value) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (value in oakColorTokens) {
        return oakColorTokens[value];
    }
    if (oakUiRoleTokens.includes(value)) {
        return function (_a) {
            var theme = _a.theme;
            var c = theme.uiColors[value];
            return oakColorTokens[c];
        };
    }
}

export { parseColor };
