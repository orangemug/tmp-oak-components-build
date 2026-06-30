import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import { OakPrimaryNavItem } from '../OakPrimaryNavItem/OakPrimaryNavItem.js';

/**
 * A row of buttons for navigating between different sections
 *
 * ⚠️ To be deprecated
 * @deprecated
 */
var OakPrimaryNav = function (_a) {
    var ariaLabel = _a.ariaLabel, navItems = _a.navItems;
    return (React__default.createElement("nav", { "aria-label": ariaLabel },
        React__default.createElement(OakFlex, { as: "ul", "$flexDirection": ["row"], "$gap": "spacing-24", "$mh": "spacing-0", "$mv": "spacing-0", "$ph": "spacing-0" }, navItems.map(function (_a, index) {
            var href = _a.href, isCurrent = _a.isCurrent, children = _a.children;
            return (React__default.createElement(OakLI, { "$listStyle": "none", key: index },
                React__default.createElement(OakPrimaryNavItem, { href: href, isCurrent: isCurrent }, children)));
        }))));
};

export { OakPrimaryNav };
