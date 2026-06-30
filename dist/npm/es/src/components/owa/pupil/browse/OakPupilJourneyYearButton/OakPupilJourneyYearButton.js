import { __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRectButton } from '../../../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';

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
var OakPupilJourneyYearButton = function (_a) {
    var phase = _a.phase, element = _a.element, rest = __rest(_a, ["phase", "element"]);
    var defaultBackground = phase === "primary"
        ? "bg-decorative4-very-subdued"
        : "bg-decorative3-very-subdued";
    var hoverBackground = phase === "primary" ? "bg-decorative4-main" : "bg-decorative3-main";
    var borderColor = phase === "primary"
        ? "border-decorative4-stronger"
        : "border-decorative3-stronger";
    return (React__default.createElement(InternalShadowRectButton, __assign({ element: element !== null && element !== void 0 ? element : "button", pv: "spacing-24", ph: "spacing-24", font: "heading-6", defaultBorderColor: borderColor, defaultBackground: defaultBackground, defaultTextColor: "text-primary", hoverBackground: hoverBackground, hoverBorderColor: borderColor, hoverTextColor: "text-primary", disabledBackground: "bg-btn-secondary-disabled", disabledBorderColor: "border-neutral-lighter", disabledTextColor: "text-subdued", hoverUnderline: true }, rest)));
};

export { OakPupilJourneyYearButton };
