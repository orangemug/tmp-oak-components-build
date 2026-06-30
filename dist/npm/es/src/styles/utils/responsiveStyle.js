import { __makeTemplateObject, __spreadArray, __read } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { truthy } from '../helpers/truthy.js';

var breakpointsByName = {
    small: 750,
    large: 1280,
};
var breakpoints = Object.values(breakpointsByName).sort(function (a, b) {
    return a > b ? 1 : -1;
});
/** Get the pixel width for a breakpoint by its name. */
var getBreakpoint = function (breakpointName) {
    return breakpointsByName[breakpointName];
};
var mediaQueries = {
    mobile: "(max-width: ".concat(getBreakpoint("small") - 1, "px)"),
    tablet: "(min-width: ".concat(getBreakpoint("small"), "px) and (max-width: ").concat(getBreakpoint("large") - 1, "px)"),
    desktop: "(min-width: ".concat(getBreakpoint("large"), "px)"),
};
/**
 * Get a CSS snippet of a media query condition which matches a specific device.
 *
 * @example
 *   `@media ${getMediaQuery("mobile")} { ... }`
 */
var getMediaQuery = function (device) {
    return mediaQueries[device];
};
/**
 * Helper for a styled component's styles. Generates CSS to apply a value to a
 * specific CSS property, including media queries if the value is a responsive
 * array.
 */
var responsiveStyle = function (attr, getValues, parse) {
    if (parse === void 0) { parse = function (x) { return x; }; }
    return function (props) {
        var attrCss = function (value) {
            return typeof value === "undefined"
                ? undefined
                : css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            ", ": ", ";\n          "], ["\n            ", ": ", ";\n          "])), attr, parse(value));
        };
        var values = getValues(props);
        if (typeof values === "undefined") {
            return undefined;
        }
        if (!Array.isArray(values)) {
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        ", "\n      "], ["\n        ", "\n      "])), attrCss(values));
        }
        if (values.length === 0) {
            return [];
        }
        return __spreadArray([
            css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        ", "\n      "], ["\n        ", "\n      "])), attrCss(values[0]))
        ], __read(breakpoints
            .slice(0, values.length)
            .map(function (breakpoint, i) {
            var value = values[i + 1]; // Values are shifted relative to breakpoints
            if (value === undefined) {
                return undefined;
            }
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            @media (min-width: ", "px) {\n              ", "\n            }\n          "], ["\n            @media (min-width: ", "px) {\n              ", "\n            }\n          "])), breakpoint, css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                ", "\n              "], ["\n                ", "\n              "])), attrCss(value)));
        })
            .filter(truthy)), false);
    };
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { breakpoints, getBreakpoint, getMediaQuery, responsiveStyle };
