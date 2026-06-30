import React__default from 'react';
import { OakBulletList } from '../../../OakBulletList/OakBulletList.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';

/**
 * This component displays a heading for the previous lessons
 *
 *
 * listItems - List of labels to be displayed
 * textSlot? - Can pass if any react node, but <OakPupilJourneyListCounter /> is recommended
 *
 */
var OakPupilJourneyListItemSubheading = function (props) {
    var textSlot = props.textSlot, listItems = props.listItems;
    return (React__default.createElement(OakFlex, { "$flexDirection": ["column", "row"], "$flexWrap": "wrap", "$justifyContent": "space-between", "$flexGrow": [null, 1], "$alignItems": ["flex-start", "center"], "$gap": "spacing-24" },
        textSlot,
        React__default.createElement(OakBulletList, { listItems: listItems, "$background": "bg-decorative5-very-subdued", "$borderRadius": "border-radius-s", "$borderColor": "border-decorative5", "$ba": "border-solid-s", "$ph": "spacing-8", "$pv": "spacing-4" })));
};

export { OakPupilJourneyListItemSubheading };
