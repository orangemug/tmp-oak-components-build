import React__default from 'react';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';

/**
 * This component is the header for quiz section in the printable view;
 *
 *
 *
 */
var OakQuizPrintableSubHeader = function (_a) {
    var title = _a.title, grade = _a.grade, numQuestions = _a.numQuestions, attempts = _a.attempts;
    return (React__default.createElement(OakFlex, { "$flexDirection": ["column", "row"], "$gap": "spacing-16", "$justifyContent": "space-between", "$alignItems": ["flex-start", "center"] },
        React__default.createElement(OakHeading, { tag: "h1", "$font": "heading-6" }, title),
        React__default.createElement(OakFlex, { "$flexDirection": "row", "$gap": attempts ? "spacing-24" : "spacing-0", "$background": "bg-neutral", "$pv": "spacing-4", "$ph": "spacing-12", "$borderRadius": "border-radius-m" },
            React__default.createElement(OakBox, null,
                React__default.createElement(OakSpan, { "$font": "heading-4" }, grade),
                React__default.createElement(OakSpan, { "$font": "heading-6" },
                    "\u00A0/\u00A0",
                    numQuestions)),
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-12", "$justifyContent": "center" }, attempts !== undefined && (React__default.createElement(OakSpan, { "$font": "heading-6" },
                "Attempts: ",
                attempts))))));
};

export { OakQuizPrintableSubHeader };
