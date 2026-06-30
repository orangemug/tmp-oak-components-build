import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRectButton } from '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';

/**
 *
 * A specific implementation of InternalRectButton which can be displayed in two different states using the toggleOn prop
 *
 * This button does not manage its own state but could be adapted to do so at some point in the future
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
var OakSmallSecondaryToggleButton = function (_a) {
    var element = _a.element, toggleOn = _a.toggleOn, rest = __rest(_a, ["element", "toggleOn"]);
    var defaultBorderColor = toggleOn ? "bg-btn-primary" : "text-primary";
    var defaultBackground = toggleOn ? "bg-btn-primary" : "bg-btn-secondary";
    var defaultTextColor = toggleOn ? "text-inverted" : "text-primary";
    var hoverBackground = toggleOn
        ? "bg-btn-primary-hover"
        : "bg-btn-secondary-hover";
    var hoverBorderColor = toggleOn ? "bg-btn-primary-hover" : "text-primary";
    var hoverTextColor = toggleOn ? "text-inverted" : "text-primary";
    var disabledBackground = toggleOn
        ? "bg-btn-primary-disabled"
        : "bg-btn-secondary-disabled";
    var disabledTextColor = toggleOn ? "text-inverted" : "text-disabled";
    return (React__default.createElement(InternalShadowRectButton, __assign({ element: element !== null && element !== void 0 ? element : "button", defaultBorderColor: defaultBorderColor, defaultBackground: defaultBackground, defaultTextColor: defaultTextColor, hoverBackground: hoverBackground, hoverBorderColor: hoverBorderColor, hoverTextColor: hoverTextColor, disabledBackground: disabledBackground, disabledBorderColor: "text-disabled", disabledTextColor: disabledTextColor, font: "body-3-bold", pv: "spacing-4", ph: "spacing-8", loadingSpinnerSize: "spacing-20", iconGap: "spacing-4", "aria-pressed": toggleOn }, rest)));
};

export { OakSmallSecondaryToggleButton };
