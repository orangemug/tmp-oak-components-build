import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { InternalCard } from '../InternalCard/InternalCard.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * The `backgroundElement` should be sized to fit the entire card
 */
var StyledBackgroundBox = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > * {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  & > * {\n    width: 100%;\n    height: 100%;\n  }\n"])));
/**
 * A flexed card with a presentational background element positioned behind the card contents.
 */
var InternalCardWithBackgroundElement = function (_a) {
    var backgroundElement = _a.backgroundElement, children = _a.children, props = __rest(_a, ["backgroundElement", "children"]);
    return (React__default.createElement(InternalCard, __assign({}, props),
        React__default.createElement(StyledBackgroundBox, { "$position": "absolute", "$inset": "spacing-0", "aria-hidden": true }, backgroundElement),
        React__default.createElement(OakBox, { "$position": "relative" }, children)));
};
var templateObject_1;

export { InternalCardWithBackgroundElement };
