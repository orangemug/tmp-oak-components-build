import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowIconButton } from '../../internal-components/InternalShadowIconButton/InternalShadowIconButton.js';

/**
 *
 * A specific implementation of InternalShadowIconButton
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
var OakSmallTertiaryInvertedButton = function (_a) {
    var element = _a.element, rest = __rest(_a, ["element"]);
    return (React__default.createElement(InternalShadowIconButton, __assign({ element: element !== null && element !== void 0 ? element : "button", defaultTextColor: "text-primary", hoverTextColor: "text-primary", disabledTextColor: "text-disabled", disabledIconColor: "text-disabled" }, rest)));
};

export { OakSmallTertiaryInvertedButton };
