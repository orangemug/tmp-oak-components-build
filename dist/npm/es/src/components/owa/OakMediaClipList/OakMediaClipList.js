import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakTypography } from '../../typography/OakTypography/OakTypography.js';
import { OakUL } from '../../typography/OakUL/OakUL.js';
import { OakMediaClipListAccordion } from '../OakMediaClipListAccordion/OakMediaClipListAccordion.js';

/**
 *
 * OakMediaClipList is a scrollable list of OakMediaClip components with clip counter and the title
 *
 */
var OakMediaClipList = function (_a) {
    var lessonTitle = _a.lessonTitle, currentClipCounter = _a.currentClipCounter, totalClipCounter = _a.totalClipCounter, children = _a.children;
    var mediaClipListHeader = (React__default.createElement(OakFlex, { "$flexDirection": "column", "$textAlign": "left", "$ph": "spacing-16", "$pv": "spacing-12" },
        React__default.createElement(OakTypography, { "$font": "body-3", "$mb": "spacing-4" }, "Lesson"),
        React__default.createElement(OakTypography, { "$font": "heading-7", "$mb": "spacing-4" }, lessonTitle),
        React__default.createElement(OakTypography, { "$font": "body-3" },
            currentClipCounter,
            "/",
            totalClipCounter,
            " clips")));
    var mediaClipListContent = (React__default.createElement(OakUL, { "$reset": true, "$ph": "spacing-12", "$pt": "spacing-8" }, children));
    return (React__default.createElement(OakMediaClipListAccordion, { header: mediaClipListHeader, id: "media-clip-list", initialOpen: true, "$maxHeight": "spacing-480" }, mediaClipListContent));
};

export { OakMediaClipList };
