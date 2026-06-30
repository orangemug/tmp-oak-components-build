import { __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import { variantConfig } from './config.js';
import { InternalLink } from '../../internal-components/InternalLink/InternalLink.js';

/**
 * A link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
var OakLink = forwardRef(function (props, ref) {
    var _a = props.variant, variant = _a === void 0 ? "primary" : _a;
    var variantDefinition = variantConfig[variant];
    return (React__default.createElement(InternalLink, __assign({ color: variantDefinition.color, hoverColor: variantDefinition.hoverColor, activeColor: variantDefinition.activeColor, visitedColor: variantDefinition.visitedColor, textDecoration: variantDefinition.textDecoration, disabledColor: "text-disabled" }, props, { ref: ref })));
});

export { OakLink };
