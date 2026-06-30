import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRoundButton } from '../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';

/**
 *
 * An icon button that can be used for closing items such as in navigation menus and modals.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14493-15312>
 *
 *
 */
function OakCloseButton(_a) {
    var onClose = _a.onClose, rest = __rest(_a, ["onClose"]);
    return (React__default.createElement(InternalShadowRoundButton, __assign({ onClick: onClose, "aria-label": "Close", defaultIconBackground: "transparent", defaultIconColor: "icon-primary", defaultTextColor: "transparent", hoverTextColor: "transparent", disabledTextColor: "transparent", hoverIconBackground: "bg-neutral", hoverIconColor: "icon-primary", disabledIconBackground: "transparent", iconBackgroundSize: "spacing-24", iconSize: "spacing-24", iconName: "cross", hoverDropShadow: null }, rest)));
}

export { OakCloseButton };
