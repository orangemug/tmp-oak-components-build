import React__default from 'react';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import '../../typography/OakHeading/OakHeading.js';
import '../../typography/OakLI/OakLI.js';
import '../../typography/OakOL/OakOL.js';
import '../../typography/OakP/OakP.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import '../../typography/OakTypography/OakTypography.js';
import '../../typography/OakUL/OakUL.js';
import { OakPrimaryButton } from '../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakSecondaryButton } from '../../buttons/OakSecondaryButton/OakSecondaryButton.js';
import { OakLink } from '../../navigation/OakLink/OakLink.js';

/**
 * A banner presenting the user with options to accept or reject cookies.
 */
var OakCookieBanner = function (_a) {
    var state = _a.state, innerMaxWidth = _a.innerMaxWidth, onOpenSettings = _a.onOpenSettings, onHide = _a.onHide, onAccept = _a.onAccept, onReject = _a.onReject, _b = _a.isFixed, isFixed = _b === void 0 ? false : _b, zIndex = _a.zIndex;
    var finalZIndex = (function () {
        if (typeof zIndex === "number") {
            return zIndex;
        }
        if (isFixed) {
            return "banner";
        }
    })();
    return (React__default.createElement(OakBox, { "$background": "bg-neutral", "$bt": "border-solid-s", "$borderColor": "border-neutral", "$position": isFixed ? "fixed" : undefined, "$bottom": isFixed ? "spacing-0" : undefined, "$right": isFixed ? "spacing-0" : undefined, "$left": isFixed ? "spacing-0" : undefined, "$zIndex": finalZIndex, "$color": "text-primary", "data-testid": "cookie-banner" },
        React__default.createElement(OakBox, { "$maxWidth": innerMaxWidth, "$mh": "auto" },
            React__default.createElement(OakFlex, { "$alignItems": ["flex-start", "flex-start", "center"], "$flexDirection": ["column", "column", "row"], "$mh": ["spacing-16", "spacing-24", "spacing-56"], "$pv": "spacing-24", "$gap": ["spacing-24", "spacing-24", "spacing-32"] }, (function () {
                switch (state) {
                    case "accepted":
                    case "rejected":
                        return (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement(OakBox, { "$font": ["body-3", "body-2", "heading-light-7"] },
                                "You've",
                                " ",
                                React__default.createElement(OakSpan, { as: "strong", "$font": ["body-3-bold", "body-2-bold", "heading-7"] }, state),
                                " ",
                                "additional cookies. You can",
                                " ",
                                React__default.createElement(OakLink, { variant: "secondary", element: "button", onClick: onOpenSettings }, "change your cookie settings"),
                                " ",
                                "at any time."),
                            React__default.createElement(OakFlex, { "$justifyContent": "flex-end", "$flexGrow": 1 },
                                React__default.createElement(OakSecondaryButton, { onClick: onHide }, "Hide this message"))));
                    default:
                        return (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement(OakBox, { "$font": ["body-3", "body-2"] },
                                React__default.createElement(OakSpan, { as: "strong", "$font": ["body-3-bold", "body-2-bold"] }, "This site uses cookies to store information on your computer."),
                                " ",
                                "Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used."),
                            React__default.createElement(OakFlex, { "$gap": ["spacing-12", "spacing-32"], "$justifyContent": "flex-end", "$flexDirection": ["column", "row"], "$flexWrap": ["wrap", "wrap", "nowrap"], "$flexGrow": 1 },
                                React__default.createElement(OakFlex, { "$whiteSpace": "nowrap", "$alignItems": "center" },
                                    React__default.createElement(OakLink, { variant: "secondary", "$font": "heading-7", element: "button", type: "button", onClick: onReject, "data-testid": "cookie-banner-reject" }, "Reject non-essential cookies")),
                                React__default.createElement(OakSecondaryButton, { onClick: onOpenSettings }, "Cookie settings"),
                                React__default.createElement(OakPrimaryButton, { onClick: onAccept, "data-testid": "cookie-banner-accept" }, "Accept all cookies"))));
                }
            })()))));
};

export { OakCookieBanner };
