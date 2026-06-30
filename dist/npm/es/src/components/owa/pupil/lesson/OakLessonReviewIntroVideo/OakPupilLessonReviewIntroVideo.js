import { __rest, __read, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { ReviewItemContainer, ReviewItemTitleSection } from '../OakLessonReviewQuiz/OakPupilLessonReviewQuiz.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';

var OakLessonReviewIntroVideo = function (props) {
    var completed = props.completed, lessonSectionName = props.lessonSectionName, rest = __rest(props, ["completed", "lessonSectionName"]);
    var _a = __read(lessonSectionName === "intro"
        ? [
            "bg-decorative2-very-subdued",
            "border-decorative2",
            "bg-decorative2-main",
        ]
        : [
            "bg-decorative4-very-subdued",
            "border-decorative4",
            "bg-decorative4-main",
        ], 3), completedBackgroundColor = _a[0], borderColor = _a[1], iconBackgroundColor = _a[2];
    var summaryForIncomplete = lessonSectionName === "intro" ? "Prepare" : "Learn";
    var lessonSectionNameToIconMap = new Map();
    lessonSectionNameToIconMap.set("intro", "intro");
    lessonSectionNameToIconMap.set("video", "video");
    return (React__default.createElement(ReviewItemContainer, __assign({ "$background": completed ? completedBackgroundColor : "bg-primary", "$borderColor": completed ? completedBackgroundColor : borderColor }, rest),
        React__default.createElement(OakFlex, { "$gap": "spacing-24", "$alignItems": "center" },
            React__default.createElement(OakRoundIcon, { iconName: lessonSectionNameToIconMap.get(lessonSectionName), "$width": "spacing-56", "$height": "spacing-56", "$background": iconBackgroundColor }),
            React__default.createElement(ReviewItemTitleSection, { sectionHeader: lessonSectionName === "intro" ? "Introduction" : "Lesson video", completed: completed, summaryForIncomplete: summaryForIncomplete }))));
};

export { OakLessonReviewIntroVideo };
