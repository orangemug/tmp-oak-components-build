import React__default from 'react';
import { OakBulletList } from '../../../OakBulletList/OakBulletList.js';
import { OakHandDrawnCardWithIcon } from '../../../OakHandDrawnCardWithIcon/OakHandDrawnCardWithIcon.js';
import { OakJauntyAngleLabel } from '../../../../form-elements/OakJauntyAngleLabel/OakJauntyAngleLabel.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';

/**
 * This component is the header for the printable view;
 *
 *
 *
 */
var OakQuizPrintableHeader = function (_a) {
    var title = _a.title, iconName = _a.iconName, alt = _a.alt, breadcrumbs = _a.breadcrumbs, worksheetDownloaded = _a.worksheetDownloaded, workSheetAvailable = _a.workSheetAvailable, videoPercentage = _a.videoPercentage;
    return (React__default.createElement(OakFlex, { "$flexDirection": ["column", "row"], "$gap": "spacing-16", "$justifyContent": "space-between" },
        React__default.createElement(OakFlex, { "$flexDirection": "row", "$gap": "spacing-16" },
            React__default.createElement(OakHandDrawnCardWithIcon, { iconName: iconName, fill: "bg-primary", "$flexGrow": 0, iconHeight: "spacing-56", iconWidth: "spacing-56", "$width": "spacing-56", "$height": "spacing-56", alt: alt }),
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-12" },
                React__default.createElement(OakHeading, { tag: "h1", "$font": "heading-7" }, title),
                React__default.createElement(OakBulletList, { listItems: breadcrumbs }))),
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-12", "$alignItems": "flex-start" },
            React__default.createElement(OakJauntyAngleLabel, { label: "Lesson video completion - ".concat(videoPercentage, "%"), "$background": "bg-neutral", "$font": "heading-light-7" }),
            React__default.createElement(OakJauntyAngleLabel, { label: workSheetAvailable
                    ? "Worksheet downloaded - ".concat(worksheetDownloaded ? "Yes" : "No")
                    : "No worksheet", "$background": "bg-neutral", "$font": "heading-light-7" }))));
};

export { OakQuizPrintableHeader };
