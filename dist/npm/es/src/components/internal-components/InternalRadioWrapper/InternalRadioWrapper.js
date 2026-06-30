import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { InternalRadio } from '../InternalRadio/InternalRadio.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { parseBorder } from '../../../styles/helpers/parseBorder.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';

// Extracted from <./src/components/molecules/OakRadioButton/OakRadioButton.tsx>
var VisibleRadioButtonInput = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 50%;\n\n  ", "\n\n  ", ":checked ~ &::after {\n    content: \"\";\n    height: ", ";\n    width: ", ";\n    background: ", ";\n    position: absolute;\n    border-radius: 50%;\n    border: ", " ", ";\n  }\n"], ["\n  border-radius: 50%;\n\n  ", "\n\n  ", ":checked ~ &::after {\n    content: \"\";\n    height: ", ";\n    width: ", ";\n    background: ", ";\n    position: absolute;\n    border-radius: 50%;\n    border: ", " ", ";\n  }\n"])), function (props) {
    return !props.$disableFocusRing && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", ":focus-visible ~ &::before {\n        content: \"\";\n        height: ", ";\n        width: ", ";\n        background: transparent;\n        display: block;\n        position: absolute;\n        border-radius: 50%;\n        border: ", "\n          ", ";\n        box-shadow: inset 0 0 0 0.13rem ", ";\n      }\n    "], ["\n      ", ":focus-visible ~ &::before {\n        content: \"\";\n        height: ", ";\n        width: ", ";\n        background: transparent;\n        display: block;\n        position: absolute;\n        border-radius: 50%;\n        border: ", "\n          ", ";\n        box-shadow: inset 0 0 0 0.13rem ", ";\n      }\n    "])), InternalRadio, parseSpacing("spacing-32"), parseSpacing("spacing-32"), parseBorder("border-solid-m"), parseColor("border-neutral-stronger"), parseColor("bg-decorative5-main"));
}, InternalRadio, function (props) { return parseSpacing(props.$radioInnerSize); }, function (props) { return parseSpacing(props.$radioInnerSize); }, parseColor("bg-inverted"), parseBorder("border-solid-m"), parseColor("border-inverted"));
// Extracted from <./src/components/molecules/OakRadioButton/OakRadioButton.tsx>
// This is a hack to force React to rerender when the disabled prop is changed. Otherwise the pseudo element is not updated.
var DisabledVisibleRadioButtonInput = styled(VisibleRadioButtonInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ":checked ~ &::after {\n    content: \"\";\n    height: ", ";\n    width: ", ";\n    background: ", ";\n    position: absolute;\n    border-radius: 50%;\n    border: ", " ", ";\n  }\n"], ["\n  ", ":checked ~ &::after {\n    content: \"\";\n    height: ", ";\n    width: ", ";\n    background: ", ";\n    position: absolute;\n    border-radius: 50%;\n    border: ", " ", ";\n  }\n"])), InternalRadio, function (props) { return parseSpacing(props.$radioInnerSize); }, function (props) { return parseSpacing(props.$radioInnerSize); }, parseColor("bg-btn-primary-disabled"), parseBorder("border-solid-m"), parseColor("border-inverted"));
/**
 *
 * This component is a wrapper for the InternalRadio component. It allows for customisable icons.
 *
 * NB. size must have the same value as the InternalRadio width and height
 *
 *
 */
var InternalRadioWrapper = function (props) {
    var _a = props.size, size = _a === void 0 ? "spacing-24" : _a, internalRadio = props.internalRadio, disabled = props.disabled, _b = props.disableFocusRing, disableFocusRing = _b === void 0 ? false : _b, _c = props.radioInnerSize, radioInnerSize = _c === void 0 ? "spacing-16" : _c, _d = props.radioOuterSize, radioOuterSize = _d === void 0 ? "spacing-24" : _d, _e = props.radioBorderWidth, radioBorderWidth = _e === void 0 ? "border-solid-m" : _e, _f = props.radioBorderColor, radioBorderColor = _f === void 0 ? "border-primary" : _f, _g = props.radioBackground, radioBackground = _g === void 0 ? "bg-primary" : _g, _h = props.checkedRadioBorderWidth, checkedRadioBorderWidth = _h === void 0 ? "border-solid-m" : _h, checked = props.checked;
    var finalRadioBorderWidth = checked
        ? checkedRadioBorderWidth
        : radioBorderWidth;
    return (React__default.createElement(OakFlex, { "$position": "relative", "$width": size, "$height": size, "$flexShrink": 0, "$justifyContent": "center", "$alignItems": "center" },
        internalRadio,
        !disabled ? (React__default.createElement(VisibleRadioButtonInput, { "$height": radioOuterSize, "$width": radioOuterSize, "$ba": finalRadioBorderWidth, "$borderColor": radioBorderColor, "$flexGrow": 0, "$flexShrink": 0, "$alignItems": "center", "$justifyContent": "center", "$background": radioBackground, "$disableFocusRing": !!disableFocusRing, "$radioInnerSize": radioInnerSize, "$position": "absolute", "$top": "spacing-0", "$left": "spacing-0" })) : (React__default.createElement(DisabledVisibleRadioButtonInput, { "$height": radioOuterSize, "$width": radioOuterSize, "$ba": finalRadioBorderWidth, "$borderColor": "bg-btn-primary-disabled", "$flexGrow": 0, "$flexShrink": 0, "$alignItems": "center", "$justifyContent": "center", "$background": radioBackground, "$disableFocusRing": !!disableFocusRing, "$radioInnerSize": radioInnerSize, "$position": "absolute", "$top": "spacing-0", "$left": "spacing-0" }))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { InternalRadioWrapper };
