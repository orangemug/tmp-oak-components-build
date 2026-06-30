import React__default from 'react';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';

/**
 * Gives feedback after a question has been answered
 */
var OakQuizFeedback = function (_a) {
    var feedback = _a.feedback, answerFeedback = _a.answerFeedback;
    var feedbackLabel;
    switch (feedback) {
        case "correct":
            feedbackLabel = "Correct";
            break;
        case "incorrect":
            feedbackLabel = "Incorrect";
            break;
        case "partially-correct":
            feedbackLabel = "Almost correct";
            break;
    }
    return (React__default.createElement(OakBox, { "aria-live": "polite" },
        React__default.createElement(OakFlex, { "$gap": "spacing-12", role: "alert" },
            React__default.createElement(OakRoundIcon, { iconName: feedback === "correct" ? "tick" : "cross", alt: "", "$pa": "spacing-0", "$background": feedback === "correct" ? "icon-success" : "icon-error", "$colorFilter": "text-inverted", "$width": "spacing-24", "$height": "spacing-24" }),
            React__default.createElement(OakSpan, { "$font": "heading-6", "$color": feedback === "correct" ? "text-success" : "text-error", role: "alert" }, feedbackLabel)),
        answerFeedback && (React__default.createElement(OakSpan, { as: "p", "$mt": "spacing-12", "$font": feedback === "correct" ? "body-2-bold" : "body-2", role: "alert" }, answerFeedback))));
};

export { OakQuizFeedback };
