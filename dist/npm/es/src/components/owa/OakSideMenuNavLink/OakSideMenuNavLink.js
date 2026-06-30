import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { flexStyle } from '../../../styles/utils/flexStyle.js';
import { paddingStyle } from '../../../styles/utils/spacingStyle.js';
import { getBreakpoint } from '../../../styles/utils/responsiveStyle.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';

var StyledLink = styled("a")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  display: flex;\n  outline: none;\n  background-color: ", ";\n\n  @media (min-width: ", "px) {\n    border-left: ", ";\n    :hover {\n      text-decoration: underline;\n      border-color: ", ";\n    }\n  }\n\n  :focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n    border-color: transparent;\n    border-radius: 4px;\n  }\n  ", "\n  ", "\n"], ["\n  text-decoration: none;\n  display: flex;\n  outline: none;\n  background-color: ", ";\n\n  @media (min-width: ", "px) {\n    border-left: ", ";\n    :hover {\n      text-decoration: underline;\n      border-color: ", ";\n    }\n  }\n\n  :focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n    border-color: transparent;\n    border-radius: 4px;\n  }\n  ", "\n  ", "\n"])), function (props) {
    return props.isSelected ? parseColor(props.selectedBackground) : undefined;
}, getBreakpoint("small"), function (props) {
    return props.isSelected ? "4px solid #222222" : "4px solid transparent";
}, function (props) {
    return props.isSelected
        ? parseColor("bg-btn-primary-hover")
        : parseColor(props.hoverBorderColor);
}, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), flexStyle, paddingStyle);
var OakSideMenuNavLinkCss = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), flexStyle, paddingStyle);
var UnstyledComponent = function (props) {
    var item = props.item, isSelected = props.isSelected, onClick = props.onClick, _a = props.hoverBorderColor, hoverBorderColor = _a === void 0 ? "bg-decorative1-main" : _a, selectedBackground = props.selectedBackground, _b = props.selectedHeadingFont, selectedHeadingFont = _b === void 0 ? "heading-light-7" : _b, rest = __rest(props, ["item", "isSelected", "onClick", "hoverBorderColor", "selectedBackground", "selectedHeadingFont"]);
    return (React__default.createElement(StyledLink, __assign({ "$alignItems": ["center", "flex-start"], "$columnGap": "spacing-16", href: item.href, "$ph": ["spacing-0", "spacing-12"], isSelected: isSelected, hoverBorderColor: hoverBorderColor, selectedBackground: selectedBackground, "$flexDirection": ["row", "column"], onClick: onClick, "aria-current": isSelected ? "true" : undefined }, rest),
        React__default.createElement(OakFlex, { "$flexDirection": ["row", "column"], "$columnGap": ["spacing-16", "spacing-4"], "$flexWrap": "wrap" },
            React__default.createElement(OakSpan, { "$font": isSelected ? selectedHeadingFont : "heading-light-7", "$color": "text-primary" }, item.heading),
            item.subheading && (React__default.createElement(OakSpan, { "$font": "body-3", "$color": "text-subdued", "$whiteSpace": "break-spaces" }, item.subheading))),
        React__default.createElement(OakIcon, { "$display": ["block", "none"], iconName: "chevron-right", "$width": "spacing-24", "$pl": "spacing-12" })));
};
/**
 *
 * The OakSideMenuNavLink component is a styled link that represents a navigation item in the side menu.
 * It is designed to be used within the OakSideMenuNav component, but can also be used independently.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * - `onClick`: A callback function that is triggered when the link is clicked.
 *
 * ### Props
 * - `item`: An object containing the heading, subheading, and href of the link.
 * - `isSelected`: A boolean indicating whether the link is currently selected.
 * - `onClick`: A callback function that is triggered when the link is clicked.
 */
var OakSideMenuNavLink = styled(UnstyledComponent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), OakSideMenuNavLinkCss);
var templateObject_1, templateObject_2, templateObject_3;

export { OakSideMenuNavLink };
