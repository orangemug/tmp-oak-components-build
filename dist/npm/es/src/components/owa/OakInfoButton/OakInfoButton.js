import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { InternalShadowRoundButton } from '../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';

var StyledInternalShadowRoundButton = styled((InternalShadowRoundButton))(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover .shadow {\n    box-shadow: none !important;\n  }\n  &:active .shadow {\n    box-shadow:\n      ", ",\n      ", " !important;\n  }\n"], ["\n  &:hover .shadow {\n    box-shadow: none !important;\n  }\n  &:active .shadow {\n    box-shadow:\n      ", ",\n      ", " !important;\n  }\n"])), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"));
/**
 * Presents an  info icon button with an open and closed state
 *
 * onClick: MouseEventHandler
 *
 */
var OakInfoButton = function (props) {
    var isLoading = props.isLoading, disabled = props.disabled, onClick = props.onClick, isOpen = props.isOpen, buttonProps = props.buttonProps;
    return (React__default.createElement(StyledInternalShadowRoundButton, __assign({ element: "button", iconName: isOpen && !disabled ? "cross" : "info", defaultIconBackground: isOpen ? "icon-primary" : "bg-decorative5-main", defaultIconColor: isOpen ? "icon-inverted" : "icon-primary", hoverIconBackground: isOpen ? "icon-primary" : "bg-decorative5-main", defaultTextColor: "text-primary", hoverTextColor: "text-primary", disabledIconBackground: "bg-btn-primary-disabled", disabledTextColor: "text-disabled", disabledIconColor: "icon-inverted", isLoading: isLoading, disabled: disabled, iconBackgroundSize: "spacing-40", iconSize: "spacing-32", onClick: onClick, "data-rac": true }, buttonProps)));
};
var templateObject_1;

export { OakInfoButton };
