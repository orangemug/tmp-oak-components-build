import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { InternalTextInput } from '../../internal-components/InternalTextInput/InternalTextInput.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';

var StyledTextInputWrapper = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &:hover {\n    cursor: text;\n  }\n\n  &:focus-within {\n    box-shadow: ", ";\n  }\n\n  background: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  &:hover {\n    cursor: text;\n  }\n\n  &:focus-within {\n    box-shadow: ", ";\n  }\n\n  background: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
    return props.$focusRingDropShadows
        .map(function (dropShadow) { return parseDropShadow(dropShadow); })
        .join(",");
}, function (props) { return parseColor(props.$background); }, function (props) {
    return !props.$readOnly && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media (hover: hover) {\n        &:hover:not(:focus-within) {\n          background: ", ";\n        }\n      }\n    "], ["\n      @media (hover: hover) {\n        &:hover:not(:focus-within) {\n          background: ", ";\n        }\n      }\n    "])), parseColor(props.$hoverBackground));
}, function (props) {
    return props.$readOnly && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      border-color: ", ";\n      color: ", ";\n    "], ["\n      border-color: ", ";\n      color: ", ";\n    "])), parseColor(props.$readOnlyBorderColor), parseColor(props.$readOnlyColor));
}, function (props) {
    return props.$disabled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n      &:hover {\n        cursor: not-allowed;\n      }\n    "], ["\n      background: ", ";\n      color: ", ";\n      &:hover {\n        cursor: not-allowed;\n      }\n    "])), parseColor(props.$disabledBackgroundColor), parseColor(props.$disabledColor));
});
/**
 * Default input which can be extended to create specialised inputs.
 */
var OakTextInput = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.borderColor, borderColor = _c === void 0 ? "border-primary" : _c, _d = _a.readOnlyBorderColor, readOnlyBorderColor = _d === void 0 ? "border-neutral" : _d, _e = _a.focusRingDropShadows, focusRingDropShadows = _e === void 0 ? [
        "drop-shadow-centered-lemon",
        "drop-shadow-centered-grey",
    ] : _e, _f = _a.background, background = _f === void 0 ? "bg-primary" : _f, _g = _a.hoverBackground, hoverBackground = _g === void 0 ? "bg-neutral" : _g, _h = _a.disabledBackgroundColor, disabledBackgroundColor = _h === void 0 ? "bg-neutral" : _h, _j = _a.highlightBackgroundColor, highlightBackgroundColor = _j === void 0 ? "bg-decorative5-main" : _j, _k = _a.color, color = _k === void 0 ? "text-primary" : _k, _l = _a.disabledColor, disabledColor = _l === void 0 ? "text-disabled" : _l, _m = _a.readOnlyColor, readOnlyColor = _m === void 0 ? "text-subdued" : _m, validity = _a.validity, _o = _a.iconColor, iconColor = _o === void 0 ? "icon-primary" : _o, _p = _a.validBorderColor, validBorderColor = _p === void 0 ? "border-success" : _p, _q = _a.invalidBorderColor, invalidBorderColor = _q === void 0 ? "border-error" : _q, _r = _a.validIconColor, validIconColor = _r === void 0 ? "icon-success" : _r, _s = _a.invalidIconColor, invalidIconColor = _s === void 0 ? "border-error" : _s, iconName = _a.iconName, iconAlt = _a.iconAlt, _t = _a.isTrailingIcon, isTrailingIcon = _t === void 0 ? false : _t, _u = _a.isHighlighted, isHighlighted = _u === void 0 ? false : _u, wrapperWidth = _a.wrapperWidth, wrapperMaxWidth = _a.wrapperMaxWidth, props = __rest(_a, ["type", "borderColor", "readOnlyBorderColor", "focusRingDropShadows", "background", "hoverBackground", "disabledBackgroundColor", "highlightBackgroundColor", "color", "disabledColor", "readOnlyColor", "validity", "iconColor", "validBorderColor", "invalidBorderColor", "validIconColor", "invalidIconColor", "iconName", "iconAlt", "isTrailingIcon", "isHighlighted", "wrapperWidth", "wrapperMaxWidth"]);
    var finalBackgroundColor = background;
    var finalBorderColor = borderColor;
    var finalIconColor = iconColor;
    var finalReadOnlyBorderColor = readOnlyBorderColor;
    switch (true) {
        case validity === "valid":
            finalBorderColor = validBorderColor;
            finalIconColor = validIconColor;
            finalReadOnlyBorderColor = validBorderColor;
            break;
        case validity === "invalid":
            finalBorderColor = invalidBorderColor;
            finalIconColor = invalidIconColor;
            finalReadOnlyBorderColor = invalidBorderColor;
            break;
        case isHighlighted:
            finalBackgroundColor = highlightBackgroundColor;
            break;
    }
    return (React__default.createElement(StyledTextInputWrapper, { "$height": "fit-content", "$width": wrapperWidth, "$maxWidth": wrapperMaxWidth, "$borderRadius": "border-radius-s", "$ba": "border-solid-m", "$borderColor": finalBorderColor, "$focusRingDropShadows": focusRingDropShadows, "$background": finalBackgroundColor, "$hoverBackground": hoverBackground, "$disabledBackgroundColor": disabledBackgroundColor, "$readOnlyBorderColor": finalReadOnlyBorderColor, "$disabledColor": disabledColor, "$readOnlyColor": readOnlyColor, "$color": color, "$alignItems": "center", "$position": "relative", "$gap": "spacing-16", "$ph": "spacing-20", "$disabled": !!props.disabled, "$readOnly": !!props.readOnly, onClick: function (event) {
            var _a;
            (_a = event.currentTarget.querySelector("input")) === null || _a === void 0 ? void 0 : _a.focus();
        } },
        !isTrailingIcon && iconName && (React__default.createElement(OakIcon, { iconName: iconName, "$colorFilter": finalIconColor, "$pointerEvents": "none", "$width": "spacing-32", alt: iconAlt })),
        React__default.createElement(OakFlex, { "$flexGrow": 1 },
            React__default.createElement(InternalTextInput, __assign({ type: type, "$width": "100%", "$pv": "spacing-20", "$height": "spacing-72" }, props))),
        isTrailingIcon && iconName && (React__default.createElement(OakIcon, { iconName: iconName, "$colorFilter": finalIconColor, "$pointerEvents": "none", "$width": "spacing-32", alt: iconAlt }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { OakTextInput };
