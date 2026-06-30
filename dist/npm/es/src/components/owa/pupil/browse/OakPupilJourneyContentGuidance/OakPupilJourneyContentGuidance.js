import React__default from 'react';
import { OakModalCenter } from '../../../../messaging-and-feedback/OakModalCenter/OakModalCenter.js';
import { OakModalCenterBody } from '../../../../messaging-and-feedback/OakModalCenter/OakModalCenterBody.js';
import { OakPrimaryButton } from '../../../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakPrimaryInvertedButton } from '../../../../buttons/OakPrimaryInvertedButton/OakPrimaryInvertedButton.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';

var removedGuidanceDuplicates = function (contentGuidance) {
    if (contentGuidance === void 0) { contentGuidance = []; }
    return Array.from(new Set(contentGuidance === null || contentGuidance === void 0 ? void 0 : contentGuidance.map(function (guidance) { return guidance.contentguidanceLabel; })));
};
/**
 * This component is used to display content guidance to the pupil before they proceed to the lesson
 *
 * ##Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onAccept** \-                Callback function to be called when the pupil accepts the content guidance
 * - **onDecline** \-               Callback function to be called when the pupil declines the content guidance
 * - **contentGuidance** \-         An array of objects containing the content guidance label, description and area
 * - **supervisionLevel** \-        The level of supervision required for the content
 * - **acceptText** \-              The text to be displayed on the accept button
 * - **declineText** \-             The text to be displayed on the decline button
 * - **declineIcon** \-             The icon to be displayed on the decline button
 */
var OakPupilJourneyContentGuidance = function (_a) {
    var isOpen = _a.isOpen, onAccept = _a.onAccept, onDecline = _a.onDecline, _b = _a.title, title = _b === void 0 ? "Content guidance" : _b, contentGuidance = _a.contentGuidance, _c = _a.supervisionLevel, supervisionLevel = _c === void 0 ? null : _c, _d = _a.acceptText, acceptText = _d === void 0 ? "I understand, continue" : _d, _e = _a.declineText, declineText = _e === void 0 ? "Take me back to lessons" : _e, _f = _a.declineIcon, declineIcon = _f === void 0 ? "arrow-left" : _f;
    return (React__default.createElement(OakModalCenter, { isOpen: isOpen, modalFlexProps: { "aria-label": "".concat(title, " modal") }, footerSlot: React__default.createElement(OakFlex, { "$alignItems": "center", "$flexDirection": "column", "$justifyContent": "center", "$pv": "spacing-24", "$rowGap": "spacing-24" },
            React__default.createElement(OakPrimaryButton, { "$font": "heading-7", onClick: onAccept, "data-testid": "acceptButton" }, acceptText),
            React__default.createElement(OakPrimaryInvertedButton, { "$font": "heading-7", iconName: declineIcon, onClick: onDecline, "data-testid": "declineButton" }, declineText)), hideCloseButton: true },
        React__default.createElement(OakModalCenterBody, { iconName: "warning", iconOverride: {
                $colorFilter: "icon-warning",
            }, title: title },
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$rowGap": "spacing-32" },
                removedGuidanceDuplicates(contentGuidance).map(function (guidance, index) { return (React__default.createElement(OakHeading, { key: index, "$font": [
                        "heading-light-7",
                        "heading-light-7",
                        "heading-light-6",
                    ], "$textAlign": "center", tag: "h2" }, guidance)); }),
                supervisionLevel && (React__default.createElement(OakHeading, { "$font": ["heading-light-7", "heading-light-7", "heading-light-6"], "$textAlign": "center", tag: "h2" }, supervisionLevel))))));
};

export { OakPupilJourneyContentGuidance, removedGuidanceDuplicates };
