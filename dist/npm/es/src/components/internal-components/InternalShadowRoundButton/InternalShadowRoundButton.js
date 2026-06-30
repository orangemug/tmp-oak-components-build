import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { InternalButton } from '../InternalButton/InternalButton.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakLoadingSpinner } from '../../messaging-and-feedback/OakLoadingSpinner/OakLoadingSpinner.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { positionStyle } from '../../../styles/utils/positionStyle.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';

var StyledInternalButton = styled(InternalButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  ", "\n  ", "\n  ", "\n"], ["\n  display: inline-block;\n  ", "\n  ", "\n  ", "\n"])), positionStyle, sizeStyle, function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &:hover {\n      text-decoration: underline;\n      color: ", ";\n\n      &:not(:active) [data-icon-for=\"button\"] img {\n        filter: ", ";\n      }\n    }\n    &:active {\n      color: ", ";\n    }\n    &:disabled {\n      color: ", ";\n    }\n  "], ["\n    &:hover {\n      text-decoration: underline;\n      color: ", ";\n\n      &:not(:active) [data-icon-for=\"button\"] img {\n        filter: ", ";\n      }\n    }\n    &:active {\n      color: ", ";\n    }\n    &:disabled {\n      color: ", ";\n    }\n  "])), parseColor(props.$hoverTextColor), props.$hoverIconColor
    ? parseColorFilter(props.$hoverIconColor)
    : undefined, parseColor(props.$defaultTextColor), parseColor(props.$disabledTextColor)); });
var StyledButtonWrapper = styled(OakFlex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), function (props) { return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    > :first-child:focus-visible .shadow {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n    > :first-child:hover .shadow {\n      box-shadow: ", ";\n    }\n    > :first-child:active .shadow {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  "], ["\n    > :first-child:focus-visible .shadow {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n    > :first-child:hover .shadow {\n      box-shadow: ", ";\n    }\n    > :first-child:active .shadow {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  "])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseDropShadow(props.$hoverDropShadow /*"drop-shadow-lemon"*/), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey")); }, function (props) { return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    > :first-child:disabled .icon-container {\n      background: ", ";\n    }\n    > :first-child:hover .icon-container {\n      background: ", ";\n    }\n    > :first-child:active .icon-container {\n      background: ", ";\n    }\n  "], ["\n    > :first-child:disabled .icon-container {\n      background: ", ";\n    }\n    > :first-child:hover .icon-container {\n      background: ", ";\n    }\n    > :first-child:active .icon-container {\n      background: ", ";\n    }\n  "])), parseColor(props.$disabledIconBackground), parseColor(props.$hoverIconBackground), parseColor(props.$defaultIconBackground)); });
/**
 *
 * A styled button with round icons, not intended to be used directly.
 * Instead used by OakTertiaryButton and OakHintButton.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
var InternalShadowRoundButton = function (props) {
    var _a = props.element, element = _a === void 0 ? "button" : _a, children = props.children, iconName = props.iconName, isTrailingIcon = props.isTrailingIcon, isLoading = props.isLoading, disabled = props.disabled, _b = props.width, width = _b === void 0 ? "max-content" : _b, maxWidth = props.maxWidth, iconBackgroundSize = props.iconBackgroundSize, iconSize = props.iconSize, disabledIconBackground = props.disabledIconBackground, hoverIconColor = props.hoverIconColor, disabledTextColor = props.disabledTextColor, defaultIconColor = props.defaultIconColor, hoverIconBackground = props.hoverIconBackground, defaultIconBackground = props.defaultIconBackground, defaultIconBorderColor = props.defaultIconBorderColor, disabledIconBorderColor = props.disabledIconBorderColor, disabledIconColor = props.disabledIconColor, defaultTextColor = props.defaultTextColor, hoverTextColor = props.hoverTextColor, _c = props.hoverDropShadow, hoverDropShadow = _c === void 0 ? "drop-shadow-lemon" : _c, className = props.className, rest = __rest(props, ["element", "children", "iconName", "isTrailingIcon", "isLoading", "disabled", "width", "maxWidth", "iconBackgroundSize", "iconSize", "disabledIconBackground", "hoverIconColor", "disabledTextColor", "defaultIconColor", "hoverIconBackground", "defaultIconBackground", "defaultIconBorderColor", "disabledIconBorderColor", "disabledIconColor", "defaultTextColor", "hoverTextColor", "hoverDropShadow", "className"]);
    var icon = iconName && (React__default.createElement(OakIcon, { iconName: iconName, "$width": iconSize, "$height": iconSize, "$colorFilter": props.disabled
            ? disabledIconColor
            : defaultIconColor
                ? defaultIconColor
                : null, "data-icon-for": "button" }));
    var loader = (React__default.createElement(OakBox, { "$width": iconSize, "$height": iconSize },
        React__default.createElement(OakLoadingSpinner, { "$width": iconSize, loaderColor: "bg-primary" })));
    var iconBorderColor = disabled || isLoading ? disabledIconBorderColor : defaultIconBorderColor;
    var iconLogic = (isLoading || icon) && (React__default.createElement(OakFlex, { className: "icon-container", "$background": props.defaultIconBackground, "$color": props.defaultTextColor, "$borderRadius": "border-radius-circle", "$position": "relative", "$width": iconBackgroundSize, "$height": iconBackgroundSize, "$alignItems": "center", "$justifyContent": "center", "$minWidth": iconBackgroundSize },
        React__default.createElement(OakBox, { className: "shadow", "$position": "absolute", "$borderRadius": "border-radius-circle", "$borderColor": iconBorderColor, "$ba": iconBorderColor ? "border-solid-m" : undefined, "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
        isLoading && !disabled ? loader : icon));
    return (React__default.createElement(StyledButtonWrapper, { className: className, "$position": "relative", "$width": width, "$maxWidth": maxWidth, "$disabledIconBackground": disabledIconBackground, "$hoverIconBackground": hoverIconBackground, "$defaultIconBackground": defaultIconBackground, "$hoverDropShadow": hoverDropShadow },
        React__default.createElement(StyledInternalButton, __assign({ element: element !== null && element !== void 0 ? element : "button" }, rest, { "$hoverTextColor": hoverTextColor, "$hoverIconColor": hoverIconColor, "$defaultTextColor": defaultTextColor, "$disabledTextColor": disabledTextColor, "$color": defaultTextColor, "$position": "relative", disabled: disabled || isLoading }),
            React__default.createElement(OakFlex, { "$flexDirection": "row", "$alignItems": "center", "$gap": children ? "spacing-12" : "spacing-0", "$justifyContent": "center" },
                !isTrailingIcon && iconLogic,
                React__default.createElement(OakSpan, { "$font": "heading-7" }, children),
                isTrailingIcon && iconLogic))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { InternalShadowRoundButton };
