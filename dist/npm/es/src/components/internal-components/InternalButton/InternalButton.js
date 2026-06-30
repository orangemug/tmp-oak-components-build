import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { colorStyle } from '../../../styles/utils/colorStyle.js';
import { displayStyle } from '../../../styles/utils/displayStyle.js';
import { spacingStyle } from '../../../styles/utils/spacingStyle.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';
import { dropShadowStyle } from '../../../styles/utils/dropShadowStyle.js';
import { borderStyle } from '../../../styles/utils/borderStyle.js';

var internalButtonCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  text-align: left;\n  font-family: unset;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:disabled {\n    pointer-events: none;\n    cursor: default;\n  }\n"], ["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  text-align: left;\n  font-family: unset;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:disabled {\n    pointer-events: none;\n    cursor: default;\n  }\n"])), typographyStyle, colorStyle, spacingStyle, displayStyle, borderStyle, dropShadowStyle);
var UnstyledInternalButton = function (props) {
    var onClick = props.onClick, onHovered = props.onHovered, _a = props.element, Component = _a === void 0 ? "button" : _a, rest = __rest(props, ["onClick", "onHovered", "element"]);
    var hoverStart = useRef(Date.now());
    var handleClick = function (event) {
        if (onClick) {
            onClick(event);
        }
    };
    var handleMouseEnter = function () {
        hoverStart.current = Date.now();
    };
    var handleMouseLeave = function (event) {
        var delta = Date.now() - hoverStart.current;
        if (onHovered) {
            onHovered(event, delta);
        }
    };
    return (React__default.createElement(Component, __assign({}, rest, { onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })));
};
/**
 *
 * An unstyled button to be used as a basis for all UI button components.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 * NB. We must export a styled component for it to be inheritable
 */
var InternalButton = styled(UnstyledInternalButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), internalButtonCss);
var templateObject_1, templateObject_2;

export { InternalButton };
