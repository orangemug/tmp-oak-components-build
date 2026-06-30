import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRectButton } from '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';

/**
 *
 * A specific implementation of InternalRectButtoną
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
var OakPrimaryButton = function (_a) {
    var element = _a.element, rest = __rest(_a, ["element"]);
    return (React__default.createElement(InternalShadowRectButton, __assign({ element: element !== null && element !== void 0 ? element : "button", defaultBorderColor: "bg-btn-primary", defaultBackground: "bg-btn-primary", defaultTextColor: "text-inverted", hoverBackground: "bg-btn-primary-hover", hoverBorderColor: "bg-btn-primary-hover", hoverTextColor: "text-inverted", hoverUnderline: true, disabledBackground: "bg-btn-primary-disabled", disabledBorderColor: "text-disabled", disabledTextColor: "text-inverted" }, rest)));
};

export { OakPrimaryButton };
