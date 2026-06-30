import { __assign, __rest } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakPrimaryInvertedButton } from '../OakPrimaryInvertedButton/OakPrimaryInvertedButton.js';
import { OakSecondaryButton } from '../OakSecondaryButton/OakSecondaryButton.js';
import { OakButtonWithDropdown } from '../OakButtonWithDropdown/OakButtonWithDropdown.js';

/**
 * A secondary button that takes custom menu items or .Item and .Divider compound components as children.
 *
 */
var OakSecondaryButtonWithDropdown = function (props) {
    return (React__default.createElement(OakButtonWithDropdown, __assign({}, props, { buttonComponent: OakSecondaryButton, dropdownTopSpacing: "spacing-56" })));
};
OakSecondaryButtonWithDropdown.Divider = function () { return (React__default.createElement(OakButtonWithDropdown.Divider, null)); };
OakSecondaryButtonWithDropdown.Item = function (_a) {
    var children = _a.children; _a.element; var rest = __rest(_a, ["children", "element"]);
    return (React__default.createElement(OakPrimaryInvertedButton, __assign({ element: "a", role: "menuitem", isTrailingIcon: true }, rest), children));
};

export { OakSecondaryButtonWithDropdown };
