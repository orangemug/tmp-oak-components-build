import { __makeTemplateObject, __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../../images-and-icons/OakIcon/OakIcon.js';
import { InternalCheckBoxWrapper } from '../../../../internal-components/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js';
import { InternalCheckBoxLabelHoverDecor } from '../../../../internal-components/InternalCheckBoxLabel/InternalCheckBoxLabel.js';
import { InternalCheckBox } from '../../../../internal-components/InternalCheckBox/InternalCheckBox.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';
import { parseBorder } from '../../../../../styles/helpers/parseBorder.js';
import { parseBorderRadius } from '../../../../../styles/helpers/parseBorderRadius.js';
import { parseDropShadow } from '../../../../../styles/helpers/parseDropShadow.js';

var StyledInternalCheckBox = styled(InternalCheckBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:checked:not(:disabled) {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  &:checked:disabled {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover:not(:disabled) {\n      background: ", ";\n    }\n  }\n"], ["\n  &:checked:not(:disabled) {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  &:checked:disabled {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover:not(:disabled) {\n      background: ", ";\n    }\n  }\n"])), parseBorder("border-solid-l"), parseColor("border-primary"), parseBorder("border-solid-l"), parseColor("text-disabled"), parseColor("bg-primary"));
var StyledFlexBox = styled(OakFlex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  &:not(:focus-within) {\n    ", "\n  }\n\n  &:has(input:not(:disabled)) {\n    cursor: pointer;\n  }\n\n  &:has(input:disabled) {\n    pointer-events: none;\n    cursor: none;\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover:has(input:not(:disabled)) {\n      background-color: ", ";\n    }\n\n    &:hover input:not(:disabled) {\n      background: ", ";\n    }\n\n    &:hover:has(input:not(:disabled)) ", " {\n      text-decoration: underline;\n    }\n\n    &:hover:has(\n        ", "\n          input:not(:focus-visible):not(:checked):not(:disabled)\n      )::after {\n      content: \"\";\n      inset: 0;\n      pointer-events: none;\n      position: absolute;\n      border-bottom: ", ";\n      border-radius: ", ";\n    }\n\n    &:focus-within {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n\n    &:has(input:checked:not(:disabled)) {\n      outline: ", ";\n    }\n\n    &:has(input:checked:disabled) {\n      outline-color: ", ";\n    }\n\n    &:has(input:disabled:not(:checked)) {\n      ", "\n    }\n\n    &:has(input:disabled:checked) {\n      ", ";\n    }\n  }\n"], ["\n  &:not(:focus-within) {\n    ", "\n  }\n\n  &:has(input:not(:disabled)) {\n    cursor: pointer;\n  }\n\n  &:has(input:disabled) {\n    pointer-events: none;\n    cursor: none;\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover:has(input:not(:disabled)) {\n      background-color: ", ";\n    }\n\n    &:hover input:not(:disabled) {\n      background: ", ";\n    }\n\n    &:hover:has(input:not(:disabled)) ", " {\n      text-decoration: underline;\n    }\n\n    &:hover:has(\n        ", "\n          input:not(:focus-visible):not(:checked):not(:disabled)\n      )::after {\n      content: \"\";\n      inset: 0;\n      pointer-events: none;\n      position: absolute;\n      border-bottom: ", ";\n      border-radius: ", ";\n    }\n\n    &:focus-within {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n\n    &:has(input:checked:not(:disabled)) {\n      outline: ", ";\n    }\n\n    &:has(input:checked:disabled) {\n      outline-color: ", ";\n    }\n\n    &:has(input:disabled:not(:checked)) {\n      ", "\n    }\n\n    &:has(input:disabled:checked) {\n      ", ";\n    }\n  }\n"])), function (props) {
    return !!props.$outlineColor && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        outline: ", "\n          ", ";\n      "], ["\n        outline: ", "\n          ", ";\n      "])), parseBorder("border-solid-xl"), parseColor(props.$outlineColor));
}, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseColor("bg-decorative1-subdued"), parseColor("bg-primary"), InternalCheckBoxLabelHoverDecor, InternalCheckBoxLabelHoverDecor, parseBorder("border-solid-xl"), parseBorderRadius("border-radius-m2"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseBorder("border-solid-xl"), function (props) { return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        ", "\n      "], ["\n        ", "\n      "])), parseColor(props.$overlayBorderColor)); }, function (props) {
    return props.$feedbackBgColor
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n              background-color: ", ";\n            "], ["\n              background-color: ", ";\n            "])), props.$feedbackBgColor) : undefined;
}, function (props) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background-color: ", ";\n      "], ["\n        background-color: ", ";\n      "])), parseColor(props.$feedbackBgColor)); });
/**
 * A checkbox representing the options in a multiple choice question.
 */
var OakQuizCheckBox = function (props) {
    var _a, _b, _c;
    var id = props.id, value = props.value, feedback = props.feedback, image = props.image, disabled = props.disabled, innerRef = props.innerRef, displayValue = props.displayValue, isHighlighted = props.isHighlighted, rest = __rest(props, ["id", "value", "feedback", "image", "disabled", "innerRef", "displayValue", "isHighlighted"]);
    var isFeedback = !!feedback;
    var defaultRef = useRef(null);
    var inputRef = innerRef !== null && innerRef !== void 0 ? innerRef : defaultRef;
    var showTick = (feedback === "correct" && ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.checked)) ||
        (feedback === "incorrect" && !((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.checked));
    var showCross = feedback === "incorrect" && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.checked);
    var handleContainerClick = function (e) {
        var _a;
        var inputId = e.target.id;
        if (inputId !== id) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    var imageContainer = (React__default.createElement(OakFlex, { "$flexDirection": "column", "$minWidth": "spacing-360", "$gap": "spacing-16" },
        React__default.createElement(OakBox, null, image),
        displayValue));
    var feedbackBgColor = showTick ? "bg-correct" : "bg-incorrect";
    var feedbackBorderColor = showTick ? "border-success" : "border-error";
    var inputCheckbox = (React__default.createElement(StyledFlexBox, { "$pa": "spacing-20", "$borderRadius": "border-radius-m2", "$borderColor": isHighlighted ? "border-decorative5-stronger" : "border-primary", "$background": disabled && !isFeedback ? "bg-neutral-stronger" : "bg-primary", "$flexGrow": 1, onClick: handleContainerClick, "$overlayBorderColor": isFeedback ? feedbackBorderColor : "text-disabled", "$feedbackBgColor": isFeedback ? feedbackBgColor : undefined, "$outlineColor": isHighlighted ? "border-decorative5-stronger" : "transparent" },
        React__default.createElement(InternalCheckBoxLabelHoverDecor, { pointerEvents: "none", htmlFor: id, labelGap: "spacing-16", labelAlignItems: "center", "$color": disabled && !isFeedback ? "text-disabled" : "text-primary", "$font": "body-1", disabled: disabled },
            React__default.createElement(InternalCheckBoxWrapper, { size: "spacing-32", iconPadding: "spacing-4", checkedIcon: React__default.createElement(OakBox, { "$width": "100%", "$height": "100%", "$background": disabled || isFeedback ? "text-disabled" : "text-primary" },
                    React__default.createElement(OakBox, { "$ba": "border-solid-m", "$borderColor": "icon-inverted", "$width": "100%", "$height": "100%" })), internalCheckbox: React__default.createElement(StyledInternalCheckBox, __assign({ id: id, value: value, disabled: disabled || isFeedback }, rest, { "$width": "spacing-32", "$height": "spacing-32", "$ba": "border-solid-m", "$borderColor": "border-neutral", "$borderRadius": "border-radius-s", "$background": isHighlighted ? "bg-decorative5-main" : "bg-primary", "$checkedBackground": null, ref: inputRef })) }),
            image ? imageContainer : displayValue),
        isFeedback && (showTick || showCross) && (React__default.createElement(OakFlex, { className: "feedbackIconWrapper", "$flexGrow": 1, "$justifyContent": "flex-end", "$alignItems": "flex-end", "$height": "100%" },
            showTick && (React__default.createElement(OakIcon, { iconName: "tick", "$colorFilter": "icon-success", alt: feedback === "correct" ? "Correct" : "Unselected correct choice" })),
            showCross && (React__default.createElement(OakIcon, { iconName: "cross", "$colorFilter": "icon-error", alt: "Incorrect" }))))));
    return (React__default.createElement(OakFlex, { "$width": "100%", "$position": "relative" }, inputCheckbox));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { OakQuizCheckBox };
