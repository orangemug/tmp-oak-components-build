import React__default from 'react';
import { ThemeProvider } from 'styled-components';

/**
 *
 * OakThemeProvider wraps Styled Components ThemeProvider allowing the use of the custom type OakTheme.
 *
 */
var OakThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return React__default.createElement(ThemeProvider, { theme: theme }, children);
};

export { OakThemeProvider };
