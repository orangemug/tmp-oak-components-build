import { __makeTemplateObject, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import styled from 'styled-components';
import { OakSideMenuNavLink } from '../OakSideMenuNavLink/OakSideMenuNavLink.js';
import { OakAnchorTarget } from '../../navigation/OakAnchorTarget/OakAnchorTarget.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import { OakUL } from '../../typography/OakUL/OakUL.js';

var StyledNav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n"], ["\n  outline: none;\n"])));
var OakSideMenuNav = function (props) {
    var heading = props.heading, menuItems = props.menuItems, anchorTargetId = props.anchorTargetId;
    var _a = __read(useState(null), 2), selectedHref = _a[0], setSelectedHref = _a[1];
    return (React__default.createElement(StyledNav, { "aria-labelledby": "side-menu-header" },
        React__default.createElement(OakAnchorTarget, { id: anchorTargetId }),
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$background": ["bg-decorative1-subdued", "bg-primary"], "$pa": ["spacing-48", "spacing-0"], "$gap": "spacing-16" },
            React__default.createElement(OakHeading, { tag: "h2", "$font": "heading-light-7", "$color": "text-subdued", id: "side-menu-header" }, heading),
            React__default.createElement(OakUL, { "$reset": true, "$display": "flex", "$gap": "spacing-16", "$flexDirection": "column" }, menuItems.map(function (item) { return (React__default.createElement(OakLI, { key: item.href },
                React__default.createElement(OakSideMenuNavLink, { item: item, isSelected: selectedHref === item.href, onClick: function () { return setSelectedHref(item.href); } }))); })))));
};
var templateObject_1;

export { OakSideMenuNav };
