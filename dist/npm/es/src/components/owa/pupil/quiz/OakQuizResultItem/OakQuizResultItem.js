import React__default from 'react';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../../images-and-icons/OakIcon/OakIcon.js';
import { OakImage } from '../../../../images-and-icons/OakImage/OakImage.js';
import { OakSpan } from '../../../../typography/OakSpan/OakSpan.js';
import { OakCodeRenderer } from '../../../OakCodeRenderer/OakCodeRenderer.js';

var DisplayText = function (_a) {
    var boldPrefixText = _a.boldPrefixText, standardText = _a.standardText, _b = _a.height, height = _b === void 0 ? "spacing-20" : _b;
    if (boldPrefixText && standardText) {
        return (React__default.createElement(OakFlex, { "$color": "text-primary", "$minHeight": height, "$alignItems": "center" },
            React__default.createElement(OakBox, null,
                React__default.createElement(OakSpan, { "$font": "body-2-bold" },
                    React__default.createElement(OakCodeRenderer, { string: boldPrefixText })),
                React__default.createElement(OakSpan, { "$font": "body-2" },
                    "\u00A0",
                    "-",
                    "\u00A0",
                    React__default.createElement(OakCodeRenderer, { string: standardText })))));
    }
    else if (standardText) {
        return (React__default.createElement(OakFlex, { "$minHeight": height, "$alignItems": "center" },
            React__default.createElement(OakSpan, { "$color": "text-primary", "$font": "body-2" },
                React__default.createElement(OakCodeRenderer, { string: standardText }))));
    }
    else {
        return null;
    }
};
/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
var OakQuizResultItem = function (_a) {
    var standardText = _a.standardText, boldPrefixText = _a.boldPrefixText, feedbackState = _a.feedbackState, imageURL = _a.imageURL, imageAlt = _a.imageAlt;
    if (boldPrefixText && !standardText) {
        throw new Error("standardText must be provided if boldPrefixText is provided");
    }
    if (!standardText && !imageURL) {
        throw new Error("Either standardText or imageURL must be provided");
    }
    if (imageURL && !imageAlt) {
        throw new Error("Image URL provided without alt text");
    }
    var background = (function () {
        if (feedbackState === "correct") {
            return "bg-decorative5-subdued";
        }
        else if (feedbackState === "incorrect") {
            return "bg-neutral";
        }
        else {
            return null;
        }
    })();
    return (React__default.createElement(OakFlex, { "$flexDirection": "column", "$alignItems": "start", "$gap": "spacing-8" },
        React__default.createElement(OakFlex, { "$background": background, "$pa": "spacing-8", "$borderRadius": "border-radius-m", "$width": "fit-content", "$gap": "spacing-12", "$alignItems": "center" },
            feedbackState && (React__default.createElement(OakIcon, { iconName: feedbackState === "correct" ? "tick" : "cross", "data-testid": feedbackState === "correct" ? "tick" : "cross", "$width": "spacing-32", "$height": "spacing-32", "$colorFilter": feedbackState === "correct" ? "text-primary" : "icon-error" })),
            React__default.createElement(DisplayText, { height: "spacing-32", standardText: standardText, boldPrefixText: boldPrefixText })),
        imageURL && imageAlt && (React__default.createElement(OakImage, { src: imageURL, alt: imageAlt, "$width": "spacing-160", "$height": "spacing-160", "$background": "bg-neutral" }))));
};

export { OakQuizResultItem };
