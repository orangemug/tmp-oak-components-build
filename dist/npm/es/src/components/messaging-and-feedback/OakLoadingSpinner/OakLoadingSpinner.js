import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { keyframes, css } from 'styled-components';
import { OakScreenReader } from '../OakScreenReader/OakScreenReader.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { colorStyle } from '../../../styles/utils/colorStyle.js';

var SpinnerKeyframe = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var DelayedShow = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var StyledLoadingSpinner = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  ", "\n  --inner-width: calc(var(--width) / 10 * 8);\n  --thickness: calc(var(--width) / 12);\n\n  display: inline-flex;\n  width: var(--width);\n  height: var(--width);\n\n  ::after {\n    content: \" \";\n    display: block;\n    width: var(--inner-width);\n    height: var(--inner-width);\n    margin: var(--thickness);\n    border-radius: 50%;\n    border: var(--thickness) solid currentcolor;\n    ", "\n    animation: ", " 1.2s linear infinite;\n  }\n  ", "\n"], ["\n  ", "\n  ", "\n  --inner-width: calc(var(--width) / 10 * 8);\n  --thickness: calc(var(--width) / 12);\n\n  display: inline-flex;\n  width: var(--width);\n  height: var(--width);\n\n  ::after {\n    content: \" \";\n    display: block;\n    width: var(--inner-width);\n    height: var(--inner-width);\n    margin: var(--thickness);\n    border-radius: 50%;\n    border: var(--thickness) solid currentcolor;\n    ", "\n    animation: ", " 1.2s linear infinite;\n  }\n  ", "\n"])), function (props) {
    return props.$width
        ? responsiveStyle("--width", function (props) { return props.$width; }, parseSpacing)
        : css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          --width: 1.25rem;\n        "], ["\n          --width: 1.25rem;\n        "])));
}, function (_a) {
    var $delay = _a.$delay;
    if ($delay) {
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        opacity: 0;\n        animation: ", " 0s;\n        animation-delay: ", "s;\n        animation-fill-mode: forwards;\n      "], ["\n        opacity: 0;\n        animation: ", " 0s;\n        animation-delay: ", "s;\n        animation-fill-mode: forwards;\n      "])), DelayedShow, $delay / 1000);
    }
}, function (props) {
    return props.loaderColor
        ? css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            border-color: ", "\n              ", " ", "\n              transparent;\n          "], ["\n            border-color: ", "\n              ", " ", "\n              transparent;\n          "])), parseColor(props.loaderColor), parseColor(props.loaderColor), parseColor(props.loaderColor)) : css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            border-color: currentcolor currentcolor currentcolor transparent;\n          "], ["\n            border-color: currentcolor currentcolor currentcolor transparent;\n          "])));
}, SpinnerKeyframe, colorStyle);
/**
 *
 * A loading spinner of variable size.
 *
 */
var OakLoadingSpinner = function (props) { return (React__default.createElement(StyledLoadingSpinner, __assign({}, props),
    React__default.createElement(OakScreenReader, null, "Loading"))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

export { OakLoadingSpinner };
