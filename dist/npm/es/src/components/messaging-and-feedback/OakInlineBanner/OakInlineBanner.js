import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakLoadingSpinner } from '../OakLoadingSpinner/OakLoadingSpinner.js';
import { InternalShadowRoundButton } from '../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

var bannerTypes = {
    info: {
        icon: "info",
        iconColorFilter: "icon-primary",
        backgroundColour: "bg-decorative3-very-subdued",
        borderColour: "border-decorative3",
    },
    neutral: {
        icon: "info",
        iconColorFilter: "icon-primary",
        backgroundColour: "bg-neutral",
        borderColour: "border-neutral-lighter",
    },
    success: {
        icon: "success",
        iconColorFilter: "icon-primary",
        backgroundColour: "bg-decorative1-very-subdued",
        borderColour: "border-decorative1-stronger",
    },
    alert: {
        icon: "bell",
        iconColorFilter: "icon-primary",
        backgroundColour: "bg-decorative5-very-subdued",
        borderColour: "border-decorative5-stronger",
    },
    warning: {
        icon: "warning",
        iconColorFilter: "icon-warning",
        backgroundColour: "bg-decorative6-very-subdued",
        borderColour: "border-decorative6",
    },
    error: {
        icon: "error",
        iconColorFilter: "icon-error",
        backgroundColour: "bg-incorrect",
        borderColour: "border-error",
    },
};
var bannerVariants = {
    regular: {
        defaultIconDimensions: {
            $width: "spacing-32",
            $height: "spacing-32",
        },
        loadingSpinnerDimensions: {
            $width: "spacing-24",
        },
        heading: {
            $font: ["heading-7"],
        },
        ctaWrapper: {
            $mt: "spacing-12",
        },
        flexDirection: "row",
        bannerPadding: "spacing-16",
        textContentGap: "spacing-4",
    },
    large: {
        defaultIconDimensions: {
            $width: "spacing-40",
            $height: "spacing-40",
        },
        loadingSpinnerDimensions: {
            $width: "spacing-32",
        },
        heading: {
            $font: ["heading-6"],
        },
        ctaWrapper: {
            $mt: "spacing-8",
        },
        closeButtonWrapper: {
            $position: "absolute",
            $top: "spacing-0",
            $right: "spacing-0",
        },
        flexDirection: "column",
        bannerPadding: "spacing-24",
        textContentGap: "spacing-16",
    },
};
/**
 * A inline banner that can be used to display important information to the user.
 *
 * ## Props
 *
 * - **isOpen** \-                      If true the banner will be displayed
 * - **title?** \-                      Optional title to display in the banner, without this the banner will be more compact
 * - **message** \-                     Message to display in the banner
 * - **type?** \-                       Optional type of banner to display (info, neutral, success, alert, error, warning) (default: info)
 * - **icon?** \-                       Optional icon to display in the banner
 * - **iconColorFilter?** \-            Optional color filter to apply to the icon
 * - **isLoading?** \-                  If true show a loading spinner instead of an icon
 * - **cta?** \-                        Optional call to action to display in the banner (ReactNode)
 * - **canDismiss?** \-                 If true the banner can be dismissed (show close icon) (default: false)
 * - **onDismiss?** \-                  Function called when the banner is dismissed
 * - **closeButtonOverrideProps?** \-   Props to override the close button (aria-label, etc)
 * - **variant?** \-                    The variant of the inline banner to display (regular, large) (default: regular)
 * - **...rest** \-                     Other props to be passed to the wrapper OakFlex component (can be used to override styles of the banner)
 */
var OakInlineBanner = function (_a) {
    var _b, _c, _d, _e, _f;
    var isOpen = _a.isOpen, title = _a.title, message = _a.message, _g = _a.type, type = _g === void 0 ? "info" : _g, icon = _a.icon, iconColorFilter = _a.iconColorFilter, isLoading = _a.isLoading, cta = _a.cta, _h = _a.canDismiss, canDismiss = _h === void 0 ? false : _h, _j = _a.onDismiss, onDismiss = _j === void 0 ? function () { } : _j, closeButtonOverrideProps = _a.closeButtonOverrideProps, _k = _a.variant, variant = _k === void 0 ? "regular" : _k, _l = _a.titleTag, titleTag = _l === void 0 ? "h1" : _l, props = __rest(_a, ["isOpen", "title", "message", "type", "icon", "iconColorFilter", "isLoading", "cta", "canDismiss", "onDismiss", "closeButtonOverrideProps", "variant", "titleTag"]);
    var iconElement = (React__default.createElement(OakBox, null,
        React__default.createElement(OakIcon, __assign({ iconName: (_c = icon !== null && icon !== void 0 ? icon : (_b = bannerTypes[type]) === null || _b === void 0 ? void 0 : _b.icon) !== null && _c !== void 0 ? _c : "info", "$colorFilter": iconColorFilter !== null && iconColorFilter !== void 0 ? iconColorFilter : (_d = bannerTypes[type]) === null || _d === void 0 ? void 0 : _d.iconColorFilter }, bannerVariants[variant].defaultIconDimensions, { "data-testid": "inline-banner-icon" }))));
    var loader = (React__default.createElement(OakFlex, __assign({}, bannerVariants[variant].defaultIconDimensions, { "$flexShrink": 0, "$justifyContent": "center", "$alignItems": "center" }),
        React__default.createElement(OakLoadingSpinner, __assign({}, bannerVariants[variant].loadingSpinnerDimensions, { "data-testid": "inline-banner-loading-spinner" }))));
    var iconLogic = isLoading ? loader : iconElement;
    return (React__default.createElement(OakFlex, __assign({ "data-testid": "oak-inline-banner", "$alignItems": title ? "start" : "end", "$display": isOpen ? "flex" : "none", "$background": (_e = bannerTypes[type]) === null || _e === void 0 ? void 0 : _e.backgroundColour, "$pa": bannerVariants[variant].bannerPadding, "$borderRadius": "border-radius-m", "$ba": "border-solid-s", "$borderStyle": "solid", "$borderColor": (_f = bannerTypes[type]) === null || _f === void 0 ? void 0 : _f.borderColour, "$flexDirection": "column" }, props),
        React__default.createElement(OakFlex, { "$position": "relative", "$flexDirection": bannerVariants[variant].flexDirection, "$justifyContent": "space-between", "$alignItems": title || variant === "large" ? "start" : "center", "$gap": "spacing-12", "$width": "100%" },
            iconLogic,
            canDismiss && (React__default.createElement(OakFlex, __assign({ "$order": 2 }, bannerVariants[variant].closeButtonWrapper),
                React__default.createElement(InternalShadowRoundButton, __assign({ "aria-label": "Dismiss banner", defaultIconBackground: "transparent", defaultIconColor: "icon-primary", defaultTextColor: "transparent", hoverTextColor: "transparent", disabledTextColor: "transparent", hoverIconBackground: "icon-primary", hoverIconColor: "icon-inverted", disabledIconBackground: "transparent", iconBackgroundSize: "spacing-24", iconSize: "spacing-24", iconName: "cross", "data-testid": "inline-banner-close-button", onClick: onDismiss }, closeButtonOverrideProps)))),
            React__default.createElement(OakFlex, { "$order": 1, "$width": "100%", "$flexDirection": title ? "column" : "row", "$justifyContent": title ? "center" : "space-between", "$alignItems": title ? "start" : "center", "$gap": bannerVariants[variant].textContentGap },
                title && (React__default.createElement(OakHeading, __assign({ "data-testid": "inline-banner-title", tag: titleTag }, bannerVariants[variant].heading), title)),
                React__default.createElement(OakBox, { "$font": "body-2", "data-testid": "inline-banner-message" }, message),
                cta && (React__default.createElement(OakFlex, __assign({}, (title ? bannerVariants[variant].ctaWrapper : {})), cta))))));
};

export { OakInlineBanner, bannerTypes, bannerVariants };
