import { __makeTemplateObject, __rest, __read, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';

var StyledLessonReviewItem = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  text-align: initial;\n"], ["\n  outline: none;\n  text-align: initial;\n"])));
var OakLessonReviewItem = function (props) {
    var completed = props.completed, lessonSectionName = props.lessonSectionName, rest = __rest(props, ["completed", "lessonSectionName"]);
    var _a = __read(pickColorsForSection(lessonSectionName), 3), completedBackgroundColor = _a[0], borderColor = _a[1], iconBackgroundColor = _a[2];
    var lessonSectionNameToIconMap = new Map();
    lessonSectionNameToIconMap.set("intro", "intro");
    lessonSectionNameToIconMap.set("starter-quiz", "quiz");
    lessonSectionNameToIconMap.set("exit-quiz", "quiz");
    lessonSectionNameToIconMap.set("video", "video");
    return (React__default.createElement(StyledLessonReviewItem, __assign({ completed: completed, "$gap": "spacing-24", "$alignItems": "center", "$background": completed ? completedBackgroundColor : "bg-primary", "$ph": ["spacing-16", "spacing-24"], "$pv": "spacing-20", "$borderRadius": "border-radius-l", "$borderColor": completed ? completedBackgroundColor : borderColor, "$ba": "border-solid-l" }, rest),
        React__default.createElement(OakRoundIcon, { iconName: lessonSectionNameToIconMap.get(lessonSectionName), "$width": "spacing-56", "$height": "spacing-56", "$background": iconBackgroundColor }),
        React__default.createElement(OakFlex, { "$flexGrow": 1, "$flexShrink": 1, "$flexDirection": "column" },
            React__default.createElement(OakBox, { "$font": ["heading-6", "heading-5"], "$color": "text-primary" }, pickLabelForSection(lessonSectionName)),
            React__default.createElement(OakBox, { "$font": ["body-2", "body-1"] }, pickSummaryForProgress(props))),
        renderQuestionCounter(props)));
};
var pickSummaryForProgress = function (props) {
    if (props.completed === false) {
        return pickSummaryForIncomplete(props);
    }
    else {
        return (React__default.createElement(OakFlex, { "$gap": "spacing-4", "$alignItems": "center" },
            React__default.createElement(OakIcon, { iconName: "tick", "$width": "spacing-24", "$height": "spacing-24" }),
            "Completed"));
    }
};
var pickSummaryForIncomplete = function (props) {
    switch (props.lessonSectionName) {
        case "intro":
            return "Prepare";
        case "starter-quiz":
            return "Activate - ".concat(props.numQuestions, " questions");
        case "exit-quiz":
            return "Check - ".concat(props.numQuestions, " questions");
        case "video":
            return "Learn";
    }
};
var pickLabelForSection = function (sectionName) {
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
};
var pickColorsForSection = function (sectionName) {
    switch (sectionName) {
        case "intro":
            return [
                "bg-decorative2-very-subdued",
                "border-decorative2",
                "bg-decorative2-main",
            ];
        case "starter-quiz":
            return [
                "bg-decorative1-very-subdued",
                "border-decorative1",
                "bg-decorative1-main",
            ];
        case "video":
            return [
                "bg-decorative4-very-subdued",
                "border-decorative4",
                "bg-decorative4-main",
            ];
        case "exit-quiz":
            return [
                "bg-decorative5-very-subdued",
                "border-decorative5",
                "bg-decorative5-main",
            ];
    }
};
var renderQuestionCounter = function (props) {
    if (props.completed === false) {
        return null;
    }
    switch (props.lessonSectionName) {
        case "exit-quiz":
        case "starter-quiz":
            return (React__default.createElement(OakBox, null,
                React__default.createElement(OakSpan, { "$font": "heading-4" }, props.grade),
                React__default.createElement(OakSpan, { "$font": "heading-6" },
                    "\u00A0/\u00A0",
                    props.numQuestions)));
        default:
            return null;
    }
};
var templateObject_1;

export { OakLessonReviewItem };
