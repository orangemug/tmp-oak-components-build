import { __makeTemplateObject, __rest, __read, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { InternalReviewAccordion } from '../../../../internal-components/InternalReviewAccordion/InternalReviewAccordion.js';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';

var StyledLessonReviewItem = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  text-align: initial;\n"], ["\n  outline: none;\n  text-align: initial;\n"])));
var ReviewItemContainer = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (React__default.createElement(StyledLessonReviewItem, __assign({ "$flexDirection": ["column", "column", "row"], "$justifyContent": "space-between", "$flexWrap": "wrap", "$ph": ["spacing-16", "spacing-24"], "$pv": "spacing-20", "$borderRadius": "border-radius-l", "$ba": "border-solid-l" }, rest), children));
};
var ReviewItemTitleSection = function (props) {
    var sectionHeader = props.sectionHeader, completed = props.completed, summaryForIncomplete = props.summaryForIncomplete;
    return (React__default.createElement(OakFlex, { "$flexGrow": 1, "$flexShrink": 1, "$flexDirection": "column" },
        React__default.createElement(OakBox, { "$font": ["heading-6", "heading-5"], "$color": "text-primary" }, sectionHeader),
        React__default.createElement(OakBox, { "$font": ["body-2", "body-1"] }, completed === false ? (summaryForIncomplete) : (React__default.createElement(OakFlex, { "$gap": "spacing-4", "$alignItems": "center" },
            React__default.createElement(OakIcon, { iconName: "tick", "$width": "spacing-24", "$height": "spacing-24" }),
            "Completed")))));
};
var OakLessonReviewQuiz = function (props) {
    var completed = props.completed, lessonSectionName = props.lessonSectionName, resultsSlot = props.resultsSlot, rest = __rest(props, ["completed", "lessonSectionName", "resultsSlot"]);
    var _a = __read(lessonSectionName === "starter-quiz"
        ? [
            "bg-decorative1-very-subdued",
            "border-decorative1",
            "bg-decorative1-main",
        ]
        : [
            "bg-decorative5-very-subdued",
            "border-decorative5",
            "bg-decorative5-main",
        ], 3), completedBackgroundColor = _a[0], borderColor = _a[1], iconBackgroundColor = _a[2];
    var summaryForIncomplete = lessonSectionName === "starter-quiz"
        ? "Activate - ".concat(props.numQuestions, " questions")
        : "Check - ".concat(props.numQuestions, " questions");
    var resultsToggleAriaLabel = lessonSectionName === "starter-quiz"
        ? "Starter quiz results"
        : "Exit quiz results";
    return (React__default.createElement(ReviewItemContainer, __assign({ "$background": completed ? completedBackgroundColor : "bg-primary", "$borderColor": completed ? completedBackgroundColor : borderColor }, rest),
        React__default.createElement(OakFlex, { "$gap": "spacing-24", "$alignItems": "center" },
            React__default.createElement(OakRoundIcon, { iconName: "quiz", "$width": "spacing-56", "$height": "spacing-56", "$background": iconBackgroundColor }),
            React__default.createElement(ReviewItemTitleSection, { sectionHeader: lessonSectionName === "exit-quiz" ? "Exit quiz" : "Starter quiz", completed: completed, summaryForIncomplete: summaryForIncomplete }),
            completed && (React__default.createElement(OakBox, null,
                React__default.createElement(OakSpan, { "$font": "heading-4" }, props.grade),
                React__default.createElement(OakSpan, { "$font": "heading-6" },
                    "\u00A0/\u00A0",
                    props.numQuestions)))),
        completed && (React__default.createElement(InternalReviewAccordion, { initialOpen: false, id: "quiz-review-accordion-".concat(lessonSectionName), toggleButtonAriaLabel: resultsToggleAriaLabel }, resultsSlot))));
};
var templateObject_1;

export { OakLessonReviewQuiz, ReviewItemContainer, ReviewItemTitleSection };
