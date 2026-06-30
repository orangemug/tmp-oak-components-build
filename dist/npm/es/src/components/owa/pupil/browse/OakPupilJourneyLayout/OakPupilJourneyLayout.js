import { __makeTemplateObject } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { getBreakpoint } from '../../../../../styles/utils/responsiveStyle.js';
import { backgrounds } from '../../../../../image-map.js';

var StyledLayoutBox = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (min-width: ", "px) {\n    ", "\n"], ["\n  @media (min-width: ", "px) {\n    ", "\n"])), getBreakpoint("large"), function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-image: url(", ");\n      background-repeat: no-repeat;\n      background-position-x: center;\n      background-size: 100%;\n    "], ["\n      background-image: url(", ");\n      background-repeat: no-repeat;\n      background-position-x: center;\n      background-size: 100%;\n    "])), getBackgroundUrlForSection(props.sectionName, props === null || props === void 0 ? void 0 : props.phase)); });
/**
 * Provides overall page layout and colours for the pupil journey
 *
 * Used for the unit, lesson and tiers/programme factor listing pages
 *
 * the sections of the page are passed in as props and children
 */
var OakPupilJourneyLayout = function (_a) {
    var sectionName = _a.sectionName, topNavSlot = _a.topNavSlot, phase = _a.phase, children = _a.children;
    var backgroundColor = (function () {
        switch (true) {
            case sectionName === "lesson-listing" && phase === "primary":
                return "bg-decorative4-very-subdued";
            case sectionName === "lesson-listing" && phase === "secondary":
                return "bg-decorative3-very-subdued";
            case sectionName === "unit-listing" && phase === "primary":
                return "bg-decorative4-very-subdued";
            case sectionName === "unit-listing" && phase === "secondary":
                return "bg-decorative3-very-subdued";
            case sectionName === "tier-listing" && phase === "primary":
                return "bg-decorative4-very-subdued";
            case sectionName === "tier-listing" && phase === "secondary":
                return "bg-decorative3-very-subdued";
            case sectionName === "subject-listing":
            case sectionName === "year-listing":
                return "bg-decorative1-main";
        }
    })();
    return (React__default.createElement(StyledLayoutBox, { "$background": backgroundColor, "$flexDirection": "column", "$alignItems": "center", "$ph": ["spacing-12", "spacing-24"], sectionName: sectionName, phase: phase },
        topNavSlot && (React__default.createElement(OakFlex, { "$height": ["spacing-80", "spacing-92", "spacing-120"], "$alignItems": "center", "$width": ["100%", "100%", "spacing-1280"] }, topNavSlot)),
        children));
};
function getBackgroundUrlForSection(sectionName, phase) {
    var prefix = "https://".concat(process.env.NEXT_PUBLIC_OAK_ASSETS_HOST, "/").concat(process.env.NEXT_PUBLIC_OAK_ASSETS_PATH, "/");
    switch (sectionName) {
        case "lesson-listing":
            return phase === "primary"
                ? "".concat(prefix).concat(backgrounds["confetti-pink"])
                : "".concat(prefix).concat(backgrounds["confetti-lavender"]);
        case "unit-listing":
            return phase === "primary"
                ? "".concat(prefix).concat(backgrounds["line-pink"])
                : "".concat(prefix).concat(backgrounds["line-lavender"]);
        case "subject-listing":
            return "".concat(prefix).concat(backgrounds["line-mint"]);
        case "year-listing":
            return "".concat(prefix).concat(backgrounds["confetti-mint"]);
        default:
            return "";
    }
}
var templateObject_1, templateObject_2;

export { OakPupilJourneyLayout, getBackgroundUrlForSection };
