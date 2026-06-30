import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { borderStyle } from '../../../styles/utils/borderStyle.js';
import { paddingStyle } from '../../../styles/utils/spacingStyle.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { colorStyle } from '../../../styles/utils/colorStyle.js';

var NativeSelect = styled("select")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  outline: none;\n  width: 100%;\n\n  appearance: none;\n  appearance: base-select;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  border-radius: ", ";\n\n  &:focus {\n    box-shadow: ", ";\n  }\n\n  &::picker(select) {\n    appearance: none;\n    appearance: base-select;\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    overflow: visible;\n    ", ";\n    ", ";\n    border-top: none;\n  }\n\n  ::picker(select) {\n    top: calc(anchor(bottom) - 2px);\n    left: anchor(0);\n  }\n\n  ::picker-icon {\n    display: none;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n\n  &:open {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n\n    ::picker(select) {\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px;\n    }\n  }\n"], ["\n  border: none;\n  outline: none;\n  width: 100%;\n\n  appearance: none;\n  appearance: base-select;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  border-radius: ", ";\n\n  &:focus {\n    box-shadow: ", ";\n  }\n\n  &::picker(select) {\n    appearance: none;\n    appearance: base-select;\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    overflow: visible;\n    ", ";\n    ", ";\n    border-top: none;\n  }\n\n  ::picker(select) {\n    top: calc(anchor(bottom) - 2px);\n    left: anchor(0);\n  }\n\n  ::picker-icon {\n    display: none;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n\n  &:open {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n\n    ::picker(select) {\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px;\n    }\n  }\n"])), function (props) {
    return !props.$readOnly && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (hover: hover) {\n        &:hover:not(:focus-within) {\n          background: ", ";\n        }\n      }\n    "], ["\n      @media (hover: hover) {\n        &:hover:not(:focus-within) {\n          background: ", ";\n        }\n      }\n    "])), parseColor(props.$hoverBackground));
}, function (props) {
    return props.$readOnly && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      border-color: ", ";\n      color: ", ";\n    "], ["\n      border-color: ", ";\n      color: ", ";\n    "])), parseColor(props.$readOnlyBorderColor), parseColor(props.$readOnlyColor));
}, function (props) {
    return props.$disabled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n      &:hover {\n        cursor: not-allowed;\n      }\n    "], ["\n      background: ", ";\n      color: ", ";\n      &:hover {\n        cursor: not-allowed;\n      }\n    "])), parseColor(props.$disabledBackgroundColor), parseColor(props.$disabledColor));
}, parseBorderRadius("border-radius-s"), function (props) {
    return props.$focusRingDropShadows
        .map(function (dropShadow) { return parseDropShadow(dropShadow); })
        .join(",");
}, parseBorderRadius("border-radius-s"), parseBorderRadius("border-radius-s"), borderStyle, colorStyle, paddingStyle, borderStyle, colorStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { NativeSelect };
