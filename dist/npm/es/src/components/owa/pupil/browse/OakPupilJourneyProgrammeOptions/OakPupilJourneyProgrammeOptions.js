import React__default from 'react';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHandDrawnHR } from '../../../OakHandDrawnHR/OakHandDrawnHR.js';

/**
 *
 * A styled list container with a option title to be use with OakPupilJourneyYearButton as the option Buttons
 *
 *
 */
var OakPupilJourneyProgrammeOptions = function (_a) {
    var children = _a.children, phase = _a.phase, titleSlot = _a.titleSlot, optionTitleSlot = _a.optionTitleSlot;
    var outerBackgroundColor = phase === "primary"
        ? "bg-decorative4-very-subdued"
        : "bg-decorative3-very-subdued";
    var backgroundColor = phase === "primary" ? "bg-decorative4-subdued" : "bg-decorative3-subdued";
    return (React__default.createElement(OakFlex, { "$flexDirection": "column", "$width": ["100%", "spacing-640", "spacing-960"], "$background": outerBackgroundColor },
        titleSlot && (React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": ["spacing-24", "spacing-32", "spacing-32"], "$mb": "spacing-32" },
            titleSlot,
            React__default.createElement(OakHandDrawnHR, { hrColor: "bg-primary", "$height": "spacing-4" }))),
        React__default.createElement(OakFlex, { "$justifyContent": "center", "$background": "bg-primary", "$ba": "border-solid-m", "$borderRadius": "border-radius-l", "$pa": "spacing-24", "$borderColor": backgroundColor },
            React__default.createElement(OakFlex, { "$pv": "spacing-24", "$flexDirection": "column", "$alignItems": "center", "$gap": "spacing-48" },
                optionTitleSlot,
                React__default.createElement(OakFlex, { "$gap": "spacing-16", "$flexWrap": "wrap", "$justifyContent": "center" }, children)))));
};

export { OakPupilJourneyProgrammeOptions };
