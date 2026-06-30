import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import '../../../styles/theme/color.js';
import '../../../styles/theme/typography.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';

function isJSDOM() {
    var _a, _b;
    return (_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom/");
}
var activeChildren = "a:active, button:active";
var hoverChildren = "a:hover, button:hover";
var focusVisibleChildren = "\n  a".concat(isJSDOM() ? "" : ":focus-visible", ",\n  button").concat(isJSDOM() ? "" : ":focus-visible", "\n");
var focusShadow = "".concat(parseDropShadow("drop-shadow-centered-lemon"), ", ").concat(parseDropShadow("drop-shadow-centered-grey"));
var fallbackActiveShadow = "".concat(parseDropShadow("drop-shadow-lemon"), ", ").concat(parseDropShadow("drop-shadow-grey"));
/**
 * Wrap focusable components `<a/>`/`<button/>` and this will add focus styles then the inner element is focused
 */
var OakFocusIndicator = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: ", ";\n\n  &:has(", ") {\n    ", "\n    box-shadow: ", ";\n  }\n\n  &:has(", ") {\n    ", "\n    box-shadow: ", ";\n\n    & ", " {\n      outline: none;\n    }\n  }\n\n  &:has(", ") {\n    box-shadow: ", ";\n  }\n"], ["\n  box-shadow: ", ";\n\n  &:has(", ") {\n    ", "\n    box-shadow: ", ";\n  }\n\n  &:has(", ") {\n    ", "\n    box-shadow: ", ";\n\n    & ", " {\n      outline: none;\n    }\n  }\n\n  &:has(", ") {\n    box-shadow: ", ";\n  }\n"])), function (props) {
    return props.dropShadow ? parseDropShadow(props.dropShadow) : "none";
}, hoverChildren, responsiveStyle("background-color", function (props) { return props.hoverBackground; }, parseColor), function (props) {
    return props.hoverDropShadow ? parseDropShadow(props.hoverDropShadow) : "none";
}, focusVisibleChildren, responsiveStyle("border-radius", function (props) { return props.$borderRadius; }, parseBorderRadius), focusShadow, focusVisibleChildren, activeChildren, function (props) {
    return props.activeDropShadow
        ? parseDropShadow(props.activeDropShadow)
        : fallbackActiveShadow;
});
var templateObject_1;

export { OakFocusIndicator };
