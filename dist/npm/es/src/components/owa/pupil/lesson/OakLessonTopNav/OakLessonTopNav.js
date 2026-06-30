import { __makeTemplateObject, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';
import { getBreakpoint } from '../../../../../styles/utils/responsiveStyle.js';

var StyledMobileSummary = styled(OakSpan)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (min-width: ", "px) {\n    display: none;\n  }\n"], ["\n  @media (min-width: ", "px) {\n    display: none;\n  }\n"])), getBreakpoint("small"));
/**
 * Controls for navigating back and displaying progress in a lesson
 */
var OakLessonTopNav = function (_a) {
    var lessonSectionName = _a.lessonSectionName, backLinkSlot = _a.backLinkSlot, counterSlot = _a.counterSlot, heading = _a.heading, mobileSummary = _a.mobileSummary;
    return (React__default.createElement(OakFlex, { "$gap": "spacing-24", "$alignItems": "center" },
        React__default.createElement(OakBox, { "$pl": ["spacing-0", "spacing-12"] }, backLinkSlot),
        React__default.createElement(OakFlex, { "$flexGrow": "none" },
            React__default.createElement(OakRoundIcon, __assign({}, pickSectionIcon(lessonSectionName), { "$width": "spacing-40", "$height": "spacing-40" }))),
        React__default.createElement(OakBox, null,
            React__default.createElement(OakHeading, { tag: "h1", "$font": ["heading-7", "heading-5"] }, heading),
            React__default.createElement(StyledMobileSummary, { "$font": "body-3" }, mobileSummary)),
        React__default.createElement(OakFlex, { "$flexGrow": 1, "$justifyContent": "flex-end" },
            React__default.createElement(OakBox, { "$display": ["none", "block"] }, counterSlot))));
};
function pickSectionIcon(sectionName) {
    switch (sectionName) {
        case "intro":
            return {
                iconName: "intro",
                $background: "icon-decorative2",
            };
        case "starter-quiz":
            return {
                iconName: "quiz",
                $background: "icon-decorative1",
            };
        case "video":
            return {
                iconName: "video",
                $background: "icon-decorative4",
            };
        case "exit-quiz":
            return {
                iconName: "quiz",
                $background: "icon-decorative5",
            };
        default:
            return {
                iconName: "intro",
                $background: "icon-decorative2",
            };
    }
}
var templateObject_1;

export { OakLessonTopNav };
