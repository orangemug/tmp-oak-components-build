import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRectButton } from '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';

/**
 *
 * A specific implementation of InternalRectButton
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
var OakSmallPrimaryInvertedButton = function (_a) {
    var element = _a.element, rest = __rest(_a, ["element"]);
    return (React__default.createElement(InternalShadowRectButton, __assign({ element: element !== null && element !== void 0 ? element : "button", defaultBorderColor: "bg-btn-secondary", defaultBackground: "bg-btn-secondary", defaultTextColor: "text-primary", hoverBackground: "bg-btn-secondary-hover", hoverBorderColor: "bg-btn-secondary-hover", hoverTextColor: "text-primary", disabledBackground: "bg-btn-secondary", disabledBorderColor: "bg-btn-secondary", disabledTextColor: "text-disabled", hoverShadow: null, font: "body-3-bold", pv: "spacing-4", ph: "spacing-8", loadingSpinnerSize: "spacing-20", iconGap: "spacing-4" }, rest)));
};

export { OakSmallPrimaryInvertedButton };
