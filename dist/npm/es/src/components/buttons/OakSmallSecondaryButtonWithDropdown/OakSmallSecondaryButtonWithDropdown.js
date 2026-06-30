import { __assign, __rest } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakSmallSecondaryButton } from '../OakSmallSecondaryButton/OakSmallSecondaryButton.js';
import { OakButtonWithDropdown } from '../OakButtonWithDropdown/OakButtonWithDropdown.js';
import { OakSmallPrimaryInvertedButton } from '../OakSmallPrimaryInvertedButton/OakSmallPrimaryInvertedButton.js';

/**
 * A secondary button that allows children to be passed in as a dropdown menu.
 *
 */
var OakSmallSecondaryButtonWithDropdown = function (props) {
    return (React__default.createElement(OakButtonWithDropdown, __assign({}, props, { buttonComponent: OakSmallSecondaryButton, dropdownTopSpacing: "spacing-40", flexWidth: ["100%"] })));
};
OakSmallSecondaryButtonWithDropdown.Divider = function () { return (React__default.createElement(OakButtonWithDropdown.Divider, null)); };
OakSmallSecondaryButtonWithDropdown.Item = function (_a) {
    var children = _a.children; _a.element; var rest = __rest(_a, ["children", "element"]);
    return (React__default.createElement(OakSmallPrimaryInvertedButton, __assign({ element: "a", role: "menuitem", isTrailingIcon: true }, rest), children));
};

export { OakSmallSecondaryButtonWithDropdown };
