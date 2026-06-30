import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { InternalLink } from '../../internal-components/InternalLink/InternalLink.js';

// we do this to avoid type errors when spreading props
var StyledInternalLink = styled(InternalLink)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/**
 * deprecated - use `<OakLink variant="secondary"/>` instead
 * @deprecated
 *
 * A black link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 *
 */
var OakSecondaryLink = forwardRef(function (props, ref) {
    var displayDisabled = props.displayDisabled, restProps = __rest(props, ["displayDisabled"]);
    var color = displayDisabled ? "text-disabled" : "text-primary";
    var visitedColor = displayDisabled ? "text-disabled" : "text-primary";
    return (React__default.createElement(StyledInternalLink, __assign({ color: color, hoverColor: color, activeColor: color, disabledColor: "text-disabled", visitedColor: visitedColor, textDecoration: "none" }, restProps, { ref: ref })));
});
var templateObject_1;

export { OakSecondaryLink };
