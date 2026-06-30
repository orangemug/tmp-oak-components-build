import React__default from 'react';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHandDrawnHR } from '../../../OakHandDrawnHR/OakHandDrawnHR.js';

/*
 
FIXME:
This component falls into the swiss army knife trap.
Conditional logic is being used to handle a range of specific layout needs at a higher level in the tree.
It would be better to decompose this component and recompose more specific components handling the specific layout needs.
However, I do not want to introduce break changes in this PR.

*/
var Slots = function (_a) {
    var titleSlot = _a.titleSlot, filterSlot = _a.filterSlot, subheadingSlot = _a.subheadingSlot;
    if (titleSlot) {
        return (React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-24" },
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-32" },
                titleSlot,
                React__default.createElement(OakHandDrawnHR, { hrColor: "bg-primary", "$height": "spacing-4" })),
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-32" },
                filterSlot,
                React__default.createElement(OakFlex, null, subheadingSlot))));
    }
    else {
        return React__default.createElement(OakFlex, { "$pt": "spacing-24" }, subheadingSlot);
    }
};
/**
 *
 * A styled list container for use with OakPupilJourneyListItems
 *
 *
 */
var OakPupilJourneyList = function (_a) {
    var children = _a.children, phase = _a.phase, titleSlot = _a.titleSlot, subheadingSlot = _a.subheadingSlot, filterSlot = _a.filterSlot;
    var outerBackgroundColor = phase === "primary"
        ? "bg-decorative4-very-subdued"
        : "bg-decorative3-very-subdued";
    var backgroundColor = phase === "primary" ? "bg-decorative4-subdued" : "bg-decorative3-subdued";
    return (React__default.createElement(OakFlex, { "$flexDirection": "column", "$width": ["100%", "spacing-640", "spacing-960"], "$background": outerBackgroundColor, "$gap": "spacing-24" },
        React__default.createElement(Slots, { titleSlot: titleSlot, filterSlot: filterSlot, subheadingSlot: subheadingSlot }),
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$pa": "spacing-16", "$borderRadius": "border-radius-l", "$gap": "spacing-16", "$background": backgroundColor, role: "list" }, children)));
};

export { OakPupilJourneyList };
