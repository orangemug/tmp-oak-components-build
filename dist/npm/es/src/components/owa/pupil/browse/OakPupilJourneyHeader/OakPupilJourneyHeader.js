import React__default from 'react';
import { OakBulletList } from '../../../OakBulletList/OakBulletList.js';
import { OakHandDrawnCardWithIcon } from '../../../OakHandDrawnCardWithIcon/OakHandDrawnCardWithIcon.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';

/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
var OakPupilJourneyHeader = function (_a) {
    var _b = _a.iconBackground, iconBackground = _b === void 0 ? "primary" : _b, title = _a.title, iconName = _a.iconName, alt = _a.alt, breadcrumbs = _a.breadcrumbs, optionalityTitle = _a.optionalityTitle;
    return (React__default.createElement(OakFlex, { "$flexDirection": "row", "$gap": "spacing-24" },
        React__default.createElement(OakHandDrawnCardWithIcon, { fill: getIconBackground(iconBackground), iconName: iconName, "$flexGrow": 0, iconHeight: ["spacing-48", "spacing-56", "spacing-56"], iconWidth: ["spacing-48", "spacing-56", "spacing-56"], "$width": ["spacing-64", "spacing-80", "spacing-80"], "$height": ["spacing-64", "spacing-80", "spacing-80"], alt: alt }),
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-16" },
            optionalityTitle && (React__default.createElement(OakHeading, { tag: "h2", "$font": ["heading-7"] }, optionalityTitle)),
            React__default.createElement(OakHeading, { tag: "h1", "$font": ["heading-5", "heading-4"] }, title),
            React__default.createElement(OakBulletList, { listItems: breadcrumbs }))));
};
function getIconBackground(iconBackground) {
    return iconBackground === "primary"
        ? "bg-decorative4-main"
        : "bg-decorative3-main";
}

export { OakPupilJourneyHeader };
