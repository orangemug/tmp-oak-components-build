import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { NativeOptGroup } from './NativeOptGroup.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { paddingStyle } from '../../../styles/utils/spacingStyle.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { parseFontSize, parseFontWeight } from '../../../styles/helpers/parseTypography.js';
import { colorStyle } from '../../../styles/utils/colorStyle.js';

var NativeOption = styled("option")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  border: none;\n  color: ", ";\n  outline: none;\n  font: ", ";\n  font-weight: ", ";\n  border-radius: ", ";\n\n  &:focus {\n    box-shadow: ", ";\n  }\n\n  &:disabled {\n    background: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:active:not(:disabled) {\n    background: initial;\n  }\n\n  &::checkmark {\n    display: none;\n  }\n\n  ", " & {\n    padding-left: ", ";\n  }\n\n  ", ";\n  ", ";\n"], ["\n  cursor: pointer;\n  border: none;\n  color: ", ";\n  outline: none;\n  font: ", ";\n  font-weight: ", ";\n  border-radius: ", ";\n\n  &:focus {\n    box-shadow: ", ";\n  }\n\n  &:disabled {\n    background: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:active:not(:disabled) {\n    background: initial;\n  }\n\n  &::checkmark {\n    display: none;\n  }\n\n  ", " & {\n    padding-left: ", ";\n  }\n\n  ", ";\n  ", ";\n"])), parseColor("text-primary"), function (props) {
    return parseFontSize(props.$asDefault ? "body-2" : "body-2-bold");
}, function (props) {
    return parseFontWeight(props.$asDefault ? "body-2" : "body-2-bold");
}, parseBorderRadius("border-radius-xs"), function (props) {
    var _a, _b;
    return (_b = (_a = props.$focusRingDropShadows) === null || _a === void 0 ? void 0 : _a.map(function (dropShadow) { return parseDropShadow(dropShadow); }).join(",")) !== null && _b !== void 0 ? _b : "none";
}, parseColor("bg-neutral-stronger"), parseColor("text-subdued"), NativeOptGroup, parseSpacing("spacing-32"), paddingStyle, colorStyle);
var templateObject_1;

export { NativeOption };
