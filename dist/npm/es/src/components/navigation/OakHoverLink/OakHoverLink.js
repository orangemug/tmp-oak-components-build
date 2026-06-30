import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { InternalLink } from '../../internal-components/InternalLink/InternalLink.js';

var StyleInternalLink = styled(InternalLink)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n"], ["\n  display: inline-flex;\n  align-items: center;\n"])));
/**
 * deprecated - use `<OakLink />` instead
 * @deprecated
 *
 * A link with an optional icon where underline is shown on hover.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 * A linkDisabled prop is also available to disable the link even when it is not a button.
 *
 */
var OakHoverLink = forwardRef(function (props, ref) {
    var color = props.displayDisabled ? "text-disabled" : "text-primary";
    return (React__default.createElement(StyleInternalLink, __assign({ color: color, hoverColor: color, activeColor: color, disabledColor: color, visitedColor: color, textDecoration: "none" }, props, { ref: ref })));
});
var templateObject_1;

export { OakHoverLink };
