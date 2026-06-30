import { __makeTemplateObject, __rest, __read, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';
import { parseColorFilter } from '../../../../../styles/helpers/parseColorFilter.js';
import { parseSpacing } from '../../../../../styles/helpers/parseSpacing.js';
import { parseDropShadow } from '../../../../../styles/helpers/parseDropShadow.js';
import { OakLoadingSpinner } from '../../../../messaging-and-feedback/OakLoadingSpinner/OakLoadingSpinner.js';

var StyledLabel = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledIconWrapper = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  filter: ", ";\n"], ["\n  filter: ", ";\n"])), function (props) {
    return parseColorFilter(props.$disabled ? "icon-disabled" : "icon-primary");
});
var StyledRoundIcon = styled(OakRoundIcon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0;\n\n  background: transparent;\n\n  img {\n    filter: ", ";\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0;\n\n  background: transparent;\n\n  img {\n    filter: ", ";\n  }\n"])), parseSpacing("spacing-40"), parseSpacing("spacing-40"), function (props) {
    return parseColorFilter(props.$disabled ? "icon-disabled" : "icon-primary");
});
var activeIconStyles = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", " {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n"], ["\n  ", " {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n"])), StyledRoundIcon, parseColor("bg-btn-primary"), parseColorFilter("icon-inverted"));
var StyledLessonNavItem = styled(OakFlex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  outline: none;\n  text-align: initial;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  outline: none;\n  text-align: initial;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) { return props.$disabled && "cursor: default"; }, function (props) {
    return !props.$disabled && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      cursor: pointer;\n\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n        &:hover {\n          ", " {\n            text-decoration: underline;\n          }\n\n          ", "\n        }\n      }\n\n      &:active {\n        box-shadow:\n          ", ",\n          ", ";\n        ", "\n      }\n    "], ["\n      cursor: pointer;\n\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n        &:hover {\n          ", " {\n            text-decoration: underline;\n          }\n\n          ", "\n        }\n      }\n\n      &:active {\n        box-shadow:\n          ", ",\n          ", ";\n        ", "\n      }\n    "])), StyledLabel, activeIconStyles, parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"), activeIconStyles);
});
var FlexedOakBox = styled(OakBox)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
var OakLessonNavItem = function (props) {
    var as = props.as, lessonSectionName = props.lessonSectionName, progress = props.progress, disabled = props.disabled, isLoading = props.isLoading, href = props.href, onClick = props.onClick; props.numQuestions; props.grade; var rest = __rest(props, ["as", "lessonSectionName", "progress", "disabled", "isLoading", "href", "onClick", "numQuestions", "grade"]);
    var isDisabled = Boolean(disabled || isLoading);
    var _a = __read(pickColorsForSection(lessonSectionName), 4), notStartedBackgroundColor = _a[0], backgroundColor = _a[1], borderColor = _a[2], disabledBackgroundColor = _a[3];
    var resolvedBackgroundColor = isDisabled && disabledBackgroundColor
        ? disabledBackgroundColor
        : progress === "not-started"
            ? notStartedBackgroundColor
            : backgroundColor;
    return (React__default.createElement(StyledLessonNavItem, __assign({ as: isDisabled ? "div" : (as !== null && as !== void 0 ? as : "a"), "$gap": "spacing-24", "$alignItems": "center", "$background": resolvedBackgroundColor, "$ph": ["spacing-16", "spacing-24"], "$pv": "spacing-20", "$borderRadius": "border-radius-l", "$borderColor": isDisabled ? "border-neutral-lighter" : borderColor, "$ba": "border-solid-l", "$disabled": isDisabled, "$color": "text-primary", href: isDisabled ? undefined : href, onClick: isDisabled ? undefined : onClick }, rest),
        React__default.createElement(StyledIconWrapper, { "$width": "spacing-80", "$justifyContent": "center", "$disabled": isDisabled },
            React__default.createElement(OakIcon, { iconName: pickIconForSection(lessonSectionName), "$width": "spacing-56", "$height": "spacing-56" })),
        React__default.createElement(FlexedOakBox, null,
            React__default.createElement(StyledLabel, { as: "strong", "$font": ["heading-6", "heading-5"], "$color": isDisabled ? "text-disabled" : "text-primary" }, pickLabelForSection(lessonSectionName)),
            React__default.createElement(OakBox, { "$font": ["body-2", "body-1"], "$color": isDisabled ? "text-subdued" : "text-primary" }, pickSummaryForProgress(props, isDisabled))),
        renderQuestionCounter(props, isDisabled),
        isLoading ? (React__default.createElement(OakFlex, { "$width": "spacing-40", "$height": "spacing-40", "$alignItems": "center", "$justifyContent": "center" },
            React__default.createElement(OakLoadingSpinner, { "$width": "spacing-24" }))) : (React__default.createElement(StyledRoundIcon, { iconName: "chevron-right", "$disabled": isDisabled }))));
};
function renderQuestionCounter(props, isDisabled) {
    if (props.progress !== "complete") {
        return null;
    }
    /**
     * The large answer counter is only rendered when on a non-mobile screen
     */
    switch (props.lessonSectionName) {
        case "exit-quiz":
        case "starter-quiz":
            return (React__default.createElement(OakBox, { "$display": ["none", "block"], "$mr": "spacing-24" },
                React__default.createElement(OakSpan, { "$font": "heading-4", "$color": isDisabled ? "text-subdued" : "text-primary" }, props.grade),
                React__default.createElement(OakSpan, { "$font": "heading-6", "$color": isDisabled ? "text-subdued" : "text-primary" },
                    "\u00A0/\u00A0",
                    props.numQuestions)));
        default:
            return null;
    }
}
function pickIconForSection(sectionName) {
    switch (sectionName) {
        case "intro":
            return "intro";
        case "starter-quiz":
        case "exit-quiz":
            return "quiz";
        case "video":
            return "video";
    }
}
function pickColorsForSection(sectionName) {
    switch (sectionName) {
        case "intro":
            return [
                "bg-decorative2-very-subdued",
                "bg-decorative2-main",
                "border-decorative2-stronger",
                null,
            ];
        case "starter-quiz":
            return [
                "bg-decorative1-very-subdued",
                "bg-decorative1-main",
                "border-decorative1-stronger",
                "bg-decorative1-subdued",
            ];
        case "video":
            return [
                "bg-decorative4-very-subdued",
                "bg-decorative4-main",
                "border-decorative4-stronger",
                null,
            ];
        case "exit-quiz":
            return [
                "bg-decorative5-very-subdued",
                "bg-decorative5-main",
                "border-decorative5-stronger",
                "bg-decorative5-subdued",
            ];
    }
}
function pickLabelForSection(sectionName) {
    switch (sectionName) {
        case "intro":
            return "Introduction";
        case "starter-quiz":
            return "Starter quiz";
        case "video":
            return "Lesson video";
        case "exit-quiz":
            return "Exit quiz";
    }
}
function pickSummaryForProgress(props, isDisabled) {
    switch (props.progress) {
        case "not-started":
            return pickSummaryForNotStarted(props);
        case "in-progress":
            return "In progress...";
        case "complete":
            return (React__default.createElement(StyledIconWrapper, { "$gap": "spacing-4", "$alignItems": "center", "$disabled": isDisabled },
                React__default.createElement(OakIcon, { iconName: "tick", "$width": "spacing-24", "$height": "spacing-24" }),
                pickSummaryForComplete(props)));
    }
}
function pickSummaryForNotStarted(props) {
    switch (props.lessonSectionName) {
        case "intro":
            return "Prepare";
        case "starter-quiz":
            return "Activate - ".concat(props.numQuestions, " Questions");
        case "exit-quiz":
            return "Check - ".concat(props.numQuestions, " questions");
        case "video":
            return "Learn";
    }
}
function pickSummaryForComplete(props) {
    switch (props.lessonSectionName) {
        case "intro":
        case "video":
            return "Completed";
        case "starter-quiz":
        case "exit-quiz":
            // The counter is rendered as the summary next
            // when on a mobile device, so it is hidden on larger screens
            return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(OakBox, { "$display": ["none", "block"] }, "Completed"),
                React__default.createElement(OakBox, { "$display": ["block", "none"] },
                    props.grade,
                    "/",
                    props.numQuestions,
                    " correct")));
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

export { OakLessonNavItem };
