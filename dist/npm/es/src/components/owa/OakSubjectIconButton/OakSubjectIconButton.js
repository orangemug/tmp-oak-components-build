import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRectButton } from '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

/**
 *
 * A specific implementation of InternalRectButton
 *
 * Changes colour according to the phase prop. Can be used as a link or a button.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
var OakSubjectIconButton = function (_a) {
    var phase = _a.phase, element = _a.element, subjectIconName = _a.subjectIconName, variant = _a.variant, selected = _a.selected, rest = __rest(_a, ["phase", "element", "subjectIconName", "variant", "selected"]);
    var backgroundColourLevel = getBackgroundColourLevel(phase);
    var defaultBackground = "bg-decorative".concat(backgroundColourLevel, "-").concat(selected ? "subdued" : "very-subdued");
    var hoverBackground = "bg-decorative".concat(backgroundColourLevel, "-main");
    var borderColor = "border-decorative".concat(backgroundColourLevel, "-stronger");
    var horizontalVariantBorderWidth = selected
        ? "border-solid-xl"
        : "border-solid-s";
    var isVerticalVariant = variant === "vertical";
    var iconOverride = (React__default.createElement(OakIcon, { iconName: subjectIconName, "data-testid": subjectIconName, "$minWidth": isVerticalVariant ? "spacing-72" : "spacing-40", "$minHeight": isVerticalVariant ? "spacing-72" : "spacing-40", "aria-hidden": "true" }));
    return (React__default.createElement(InternalShadowRectButton, __assign({ element: element !== null && element !== void 0 ? element : "button", iconOverride: iconOverride, iconLayout: isVerticalVariant ? "column" : "row", iconGap: isVerticalVariant ? "spacing-4" : "spacing-8", pv: null, ph: null, pt: isVerticalVariant ? "spacing-12" : "spacing-0", pb: isVerticalVariant ? "spacing-24" : "spacing-0", pl: isVerticalVariant ? "spacing-12" : "spacing-4", pr: "spacing-12", font: "heading-7", defaultBorderColor: borderColor, defaultBackground: defaultBackground, defaultTextColor: "text-primary", hoverBackground: hoverBackground, hoverBorderColor: borderColor, hoverTextColor: "text-primary", disabledBackground: "bg-btn-secondary-disabled", disabledBorderColor: "border-neutral-lighter", disabledTextColor: "text-subdued", textAlign: "center", innerWidth: isVerticalVariant ? "spacing-120" : "auto", hoverUnderline: true, height: isVerticalVariant ? null : "spacing-48", "$ba": isVerticalVariant ? "border-solid-m" : horizontalVariantBorderWidth, "$display": "inline-flex" }, rest)));
};
var getBackgroundColourLevel = function (phase) {
    switch (phase) {
        case "primary":
            return 4;
        case "secondary":
            return 3;
        case "non-curriculum":
            return 1;
    }
};

export { OakSubjectIconButton };
