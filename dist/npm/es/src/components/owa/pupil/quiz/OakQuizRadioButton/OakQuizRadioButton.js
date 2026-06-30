import { __makeTemplateObject, __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../../images-and-icons/OakIcon/OakIcon.js';
import { OakRadioButton } from '../../../../form-elements/OakRadioButton/OakRadioButton.js';
import { parseDropShadow } from '../../../../../styles/helpers/parseDropShadow.js';
import { parseBorder } from '../../../../../styles/helpers/parseBorder.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';
import { parseBorderRadius } from '../../../../../styles/helpers/parseBorderRadius.js';
import { RadioContext } from '../../../../form-elements/OakRadioGroup/OakRadioGroup.js';

var StyledOakFlex = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &:not(:focus-within) {\n    ", "\n  }\n\n  &:hover {\n    cursor: ", ";\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  &:not(:focus-within) {\n    ", "\n  }\n\n  &:hover {\n    cursor: ", ";\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
    return !!props.$outlineColor && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        outline: ", "\n          ", ";\n      "], ["\n        outline: ", "\n          ", ";\n      "])), parseBorder("border-solid-xl"), parseColor(props.$outlineColor));
}, function (props) { return (props.$disabled ? "default" : "pointer"); }, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) {
    return !props.$disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:hover {\n        background-color: ", ";\n        text-decoration: underline;\n      }\n    "], ["\n      &:hover {\n        background-color: ", ";\n        text-decoration: underline;\n      }\n    "])), parseColor("bg-decorative1-subdued"));
}, function (props) {
    return !props.$disabled &&
        !props.$checked && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      &:hover:not(:focus-within)::after {\n        pointer-events: none;\n        content: \"\";\n        position: absolute;\n        inset: 0;\n        border-radius: ", ";\n        border-bottom: ", "\n          ", ";\n      }\n    "], ["\n      &:hover:not(:focus-within)::after {\n        pointer-events: none;\n        content: \"\";\n        position: absolute;\n        inset: 0;\n        border-radius: ", ";\n        border-bottom: ", "\n          ", ";\n      }\n    "])), parseBorderRadius("border-radius-m2"), parseBorder("border-solid-l"), parseColor("border-neutral-stronger"));
});
/**
 * A radio button representing the options in a multiple choice question.
 *
 * Use with `OakRadioGroup` to create a group of radio buttons.
 */
var OakQuizRadioButton = function (props) {
    var value = props.value, feedback = props.feedback, image = props.image, disabled = props.disabled, isHighlighted = props.isHighlighted, label = props.label, rest = __rest(props, ["value", "feedback", "image", "disabled", "isHighlighted", "label"]);
    var showFeedback = !!feedback;
    // Give the input focus when the entire component is clicked
    var handleOnClick = function (event) {
        var _a;
        (_a = event.currentTarget.querySelector("input")) === null || _a === void 0 ? void 0 : _a.click();
    };
    var checked = useContext(RadioContext).currentValue === value;
    var outlineColor;
    var backgroundColor = "bg-primary";
    var feedbackIcon = null;
    var feedbackAltText;
    var radioBackground = "bg-primary";
    switch (true) {
        case disabled && !showFeedback:
            backgroundColor = "bg-neutral-stronger";
            break;
        case feedback === "correct" && checked:
            outlineColor = "border-success";
            backgroundColor = "bg-correct";
            feedbackIcon = "tick";
            feedbackAltText = "Correct";
            break;
        case feedback === "incorrect" && checked:
            outlineColor = "border-error";
            backgroundColor = "bg-incorrect";
            feedbackIcon = "cross";
            feedbackAltText = "Incorrect";
            break;
        case feedback === "incorrect" && !checked:
            feedbackIcon = "tick";
            feedbackAltText = "Unselected correct choice";
            break;
        case isHighlighted:
            radioBackground = "bg-decorative5-main";
            outlineColor = "border-decorative5-stronger";
            break;
        case checked && !disabled:
            outlineColor = "border-primary";
            break;
    }
    return (React__default.createElement(StyledOakFlex, { "$pa": "spacing-20", "$borderRadius": "border-radius-m2", "$justifyContent": "space-between", "$position": "relative", "$alignContent": "center", onClick: handleOnClick, "$disabled": disabled || showFeedback, "$checked": checked, "$outlineColor": outlineColor, "$background": backgroundColor },
        React__default.createElement(OakRadioButton, __assign({ value: value, disabled: disabled || showFeedback, "$labelGap": "spacing-16", disableFocusRing: true, radioInnerSize: "spacing-24", radioOuterSize: "spacing-32", radioBackground: radioBackground, checkedRadioBorderWidth: "border-solid-l", label: image ? (React__default.createElement(OakFlex, { "$flexDirection": "column", "$minWidth": "spacing-360", "$gap": "spacing-16" },
                React__default.createElement(OakBox, null, image),
                label)) : (label) }, rest)),
        showFeedback && feedbackIcon && (React__default.createElement(OakFlex, { "$alignSelf": "flex-end" },
            React__default.createElement(OakIcon, { iconName: feedbackIcon, "$colorFilter": feedbackIcon === "tick" ? "icon-success" : "icon-error", alt: feedbackAltText })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { OakQuizRadioButton };
