import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { InternalTextInput } from '../../internal-components/InternalTextInput/InternalTextInput.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var StyledTextInputWrapper = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:hover {\n    cursor: text;\n  }\n\n  background: ", ";\n\n  &:focus-within {\n    border-color: ", ";\n    background: ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  &:hover {\n    cursor: text;\n  }\n\n  background: ", ";\n\n  &:focus-within {\n    border-color: ", ";\n    background: ", ";\n  }\n\n  ", "\n\n  ", "\n"])), function (props) { return parseColor(props.$background); }, function (props) { return parseColor(props.$focusBorderColor); }, function (props) { return parseColor(props.$focusBackgroundColor); }, function (props) {
    return !props.$disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (hover: hover) {\n        &:hover:not(:focus-within) {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n    "], ["\n      @media (hover: hover) {\n        &:hover:not(:focus-within) {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n    "])), parseColor(props.$hoverBackground), parseColor(props.$hoverBorderColor));
}, function (props) {
    return props.$disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      &:hover {\n        cursor: not-allowed;\n      }\n    "], ["\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      &:hover {\n        cursor: not-allowed;\n      }\n    "])), parseColor(props.$disabledBackgroundColor), parseColor(props.$disabledBorderColor), parseColor(props.$disabledColor));
});
/**
 * Default input which can be extended to create specialised inputs.
 */
var OakFormInput = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.borderColor, borderColor = _c === void 0 ? "border-neutral-lighter" : _c, _d = _a.focusBorderColor, focusBorderColor = _d === void 0 ? "border-primary" : _d, _e = _a.focusBackgroundColor, focusBackgroundColor = _e === void 0 ? "bg-primary" : _e, _f = _a.background, background = _f === void 0 ? "bg-primary" : _f, _g = _a.hoverBackground, hoverBackground = _g === void 0 ? "bg-neutral" : _g, _h = _a.hoverBorderColor, hoverBorderColor = _h === void 0 ? "border-neutral" : _h, _j = _a.disabledBackgroundColor, disabledBackgroundColor = _j === void 0 ? "bg-neutral" : _j, _k = _a.color, color = _k === void 0 ? "text-primary" : _k, _l = _a.disabledBorderColor, disabledBorderColor = _l === void 0 ? "border-neutral-lighter" : _l, _m = _a.disabledColor, disabledColor = _m === void 0 ? "text-disabled" : _m, _o = _a.invalid, invalid = _o === void 0 ? false : _o, _p = _a.invalidBorderColor, invalidBorderColor = _p === void 0 ? "border-error" : _p, wrapperWidth = _a.wrapperWidth, wrapperMaxWidth = _a.wrapperMaxWidth, props = __rest(_a, ["type", "borderColor", "focusBorderColor", "focusBackgroundColor", "background", "hoverBackground", "hoverBorderColor", "disabledBackgroundColor", "color", "disabledBorderColor", "disabledColor", "invalid", "invalidBorderColor", "wrapperWidth", "wrapperMaxWidth"]);
    return (React__default.createElement(StyledTextInputWrapper, { "$height": "fit-content", "$width": wrapperWidth, "$maxWidth": wrapperMaxWidth, "$borderRadius": "border-radius-m", "$ba": "border-solid-m", "$alignItems": "center", "$position": "relative", "$pa": "spacing-8", "$font": "body-2", "$color": color, "$borderColor": invalid ? invalidBorderColor : borderColor, "$background": background, "$hoverBackground": hoverBackground, "$hoverBorderColor": hoverBorderColor, "$disabledColor": disabledColor, "$disabledBackgroundColor": disabledBackgroundColor, "$disabledBorderColor": disabledBorderColor, "$focusBorderColor": focusBorderColor, "$focusBackgroundColor": focusBackgroundColor, "$disabled": !!props.disabled, onClick: function (event) {
            var _a;
            (_a = event.currentTarget.querySelector("input")) === null || _a === void 0 ? void 0 : _a.focus();
        } },
        React__default.createElement(InternalTextInput, __assign({ type: type, "$width": "100%", "aria-invalid": invalid }, props))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { OakFormInput };
