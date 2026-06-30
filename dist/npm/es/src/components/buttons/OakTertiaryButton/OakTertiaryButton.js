import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalShadowRoundButton } from '../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';

/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 *
 */
var OakTertiaryButton = function (_a) {
    var element = _a.element, isTrailingIcon = _a.isTrailingIcon, iconName = _a.iconName, children = _a.children, props = __rest(_a, ["element", "isTrailingIcon", "iconName", "children"]);
    return (React__default.createElement(InternalShadowRoundButton, __assign({ element: element !== null && element !== void 0 ? element : "button" }, props, { isTrailingIcon: isTrailingIcon, iconName: iconName, defaultIconColor: "icon-inverted", disabledIconColor: "icon-inverted", disabledIconBackground: "bg-btn-primary-disabled", defaultIconBackground: "icon-primary", hoverIconBackground: "bg-btn-primary-hover", defaultTextColor: "text-primary", hoverTextColor: "bg-btn-primary-hover", disabledTextColor: "text-disabled", iconBackgroundSize: "spacing-32", iconSize: "spacing-24" }), children));
};

export { OakTertiaryButton };
