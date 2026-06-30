import { __rest, __assign, __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef, useRef } from 'react';
import styled, { css } from 'styled-components';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { borderStyle } from '../../../styles/utils/borderStyle.js';
import { colorStyle } from '../../../styles/utils/colorStyle.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';
import { spacingStyle } from '../../../styles/utils/spacingStyle.js';

var BaseRadio = forwardRef(function (props, ref) {
    var onHovered = props.onHovered, rest = __rest(props, ["onHovered"]);
    var hoverStart = useRef(Date.now());
    var handleMouseEnter = function () {
        hoverStart.current = Date.now();
    };
    var handleMouseLeave = function () {
        var delta = Date.now() - hoverStart.current;
        if (onHovered) {
            onHovered(props.value, props.id, delta);
        }
    };
    return (React__default.createElement("input", __assign({ ref: ref, type: "radio", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, rest)));
});
/**
 *
 * These components can be used with InternalRadioWrapper which allows for customisable icons
 *
 * Several flavours of Radio are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * NB. Hover decorations must be wrapped in a box with position relative to allow for the hover effect to work
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */
var internalRadioDefaults = {
    $borderRadius: "border-radius-xs",
    $ba: "border-solid-m",
    $borderColor: "text-primary",
    $checkedBackground: "text-primary",
};
var InternalRadio = styled(BaseRadio).attrs(function (_a) {
    _a.theme; var props = __rest(_a, ["theme"]);
    return (__assign(__assign({}, internalRadioDefaults), props));
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* removing default appearance */\n  -webkit-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  margin: 0;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n\n  border-color: ", ";\n\n  &:checked {\n    ", ";\n  }\n\n  &:disabled {\n    pointer-events: none;\n  }\n\n  @media (hover: hover) {\n    &:hover:not(:disabled) {\n      border-color: ", ";\n    }\n  }\n"], ["\n  /* removing default appearance */\n  -webkit-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  margin: 0;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n\n  border-color: ", ";\n\n  &:checked {\n    ", ";\n  }\n\n  &:disabled {\n    pointer-events: none;\n  }\n\n  @media (hover: hover) {\n    &:hover:not(:disabled) {\n      border-color: ", ";\n    }\n  }\n"])), borderStyle, colorStyle, spacingStyle, sizeStyle, function (props) { return parseColor(props.$uncheckedBorderColor); }, function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n      border-color: ", ";\n    "], ["\n      background: ", ";\n      border-color: ", ";\n    "])), parseColor(props.$checkedBackground), parseColor(props.$checkedBorderColor)); }, function (props) { return parseColor(props.$checkedBackground); });
var internalRadioHoverDefaults = {
    $hoverBorderRadius: "border-radius-xs",
};
var InternalRadioHover = styled(InternalRadio).attrs(function (_a) {
    _a.theme; var props = __rest(_a, ["theme"]);
    return (__assign(__assign({}, internalRadioHoverDefaults), props));
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* @media wrapper is required to prevent hover effect on iOS Safari */\n\n  @media (hover: hover) {\n    &:hover:not(&:checked):not(&:disabled)::after {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 60%;\n      height: 60%;\n      transform: translate(-50%, -50%);\n      border-radius: ", ";\n      background: ", ";\n    }\n  }\n"], ["\n  /* @media wrapper is required to prevent hover effect on iOS Safari */\n\n  @media (hover: hover) {\n    &:hover:not(&:checked):not(&:disabled)::after {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 60%;\n      height: 60%;\n      transform: translate(-50%, -50%);\n      border-radius: ", ";\n      background: ", ";\n    }\n  }\n"])), function (props) { return parseBorderRadius(props.$hoverBorderRadius); }, function (props) { return parseColor(props.$checkedBackground); });
var focusStyle = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &:focus-visible {\n    box-shadow: ", ";\n  }\n"], ["\n  &:focus-visible {\n    box-shadow: ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-lemon"));
styled(InternalRadio)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), focusStyle);
styled(InternalRadioHover)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), focusStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { InternalRadio, InternalRadioHover, internalRadioDefaults, internalRadioHoverDefaults };
