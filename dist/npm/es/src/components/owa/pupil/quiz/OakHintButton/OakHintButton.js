import { __makeTemplateObject, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { InternalShadowRoundButton } from '../../../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';
import { parseDropShadow } from '../../../../../styles/helpers/parseDropShadow.js';

var StyledInternalShadowRoundButton = styled(InternalShadowRoundButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover .shadow {\n    box-shadow: none !important;\n  }\n  &:active .shadow {\n    box-shadow:\n      ", ",\n      ", " !important;\n  }\n"], ["\n  &:hover .shadow {\n    box-shadow: none !important;\n  }\n  &:active .shadow {\n    box-shadow:\n      ", ",\n      ", " !important;\n  }\n"])), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"));
/**
 *
 * A specific implementation of InternalShadowRoundButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
var OakHintButton = function (props) {
    var isOpen = props.isOpen, disabled = props.disabled, buttonProps = props.buttonProps;
    return (React__default.createElement(StyledInternalShadowRoundButton, __assign({ iconName: isOpen && !disabled ? "lightbulb-yellow" : "lightbulb", defaultIconBackground: isOpen ? "icon-primary" : "bg-decorative5-main", hoverIconBackground: isOpen ? "icon-primary" : "bg-decorative5-main", defaultTextColor: "text-primary", hoverTextColor: "text-primary", disabledIconBackground: "bg-btn-primary-disabled", disabledTextColor: "text-disabled", disabledIconColor: "icon-inverted", onClick: props.onClick, isLoading: props.isLoading, disabled: props.disabled, iconBackgroundSize: "spacing-40", iconSize: "spacing-24", "data-rac": true }, buttonProps), !isOpen ? "Need a hint?" : "Close hint"));
};
var templateObject_1;

export { OakHintButton };
