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
var StyledButtonWrapper = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  > :first-child:hover .highlight {\n    display: block;\n  }\n  > :first-child:active .highlight {\n    display: block;\n  }\n  > :first-child:active .shadow {\n    display: block;\n  }\n  > :first-child:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n    background: white;\n  }\n"], ["\n  > :first-child:hover .highlight {\n    display: block;\n  }\n  > :first-child:active .highlight {\n    display: block;\n  }\n  > :first-child:active .shadow {\n    display: block;\n  }\n  > :first-child:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n    background: white;\n  }\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
/**
 *
 * A styled button with round icons, not intended to be used directly.
 * Instead used by OakSmallTertiaryInvertedButton.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
var InternalShadowIconButton = function (props) {
    var _a = props.element, element = _a === void 0 ? "button" : _a, children = props.children, iconName = props.iconName, isTrailingIcon = props.isTrailingIcon, isLoading = props.isLoading, disabled = props.disabled, _b = props.width, width = _b === void 0 ? "max-content" : _b, maxWidth = props.maxWidth, hoverIconColor = props.hoverIconColor, disabledTextColor = props.disabledTextColor, defaultIconColor = props.defaultIconColor, disabledIconColor = props.disabledIconColor, defaultTextColor = props.defaultTextColor, hoverTextColor = props.hoverTextColor, className = props.className, $justifyContent = props.$justifyContent, rest = __rest(props, ["element", "children", "iconName", "isTrailingIcon", "isLoading", "disabled", "width", "maxWidth", "hoverIconColor", "disabledTextColor", "defaultIconColor", "disabledIconColor", "defaultTextColor", "hoverTextColor", "className", "$justifyContent"]);
    var icon = iconName && (React__default.createElement(OakBox, { "$position": "relative" },
        React__default.createElement(OakIcon, { iconName: iconName, "$width": "spacing-24", "$height": "spacing-24", "$colorFilter": props.disabled ? disabledIconColor : "icon-subdued", "$position": "absolute", "$top": "spacing-4", "$left": "spacing-4", "$display": "none", className: "shadow", alt: "" }),
        React__default.createElement(OakIcon, { iconName: iconName, "$width": "spacing-24", "$height": "spacing-24", "$colorFilter": props.disabled ? disabledIconColor : "icon-promo", "$position": "absolute", "$display": "none", "$top": "spacing-2", "$left": "spacing-2", className: "highlight", alt: "" }),
        React__default.createElement(OakIcon, { iconName: iconName, "$width": "spacing-24", "$height": "spacing-24", "$colorFilter": props.disabled
                ? disabledIconColor
                : defaultIconColor
                    ? defaultIconColor
                    : null, "data-icon-for": "button", alt: "" })));
    var loader = (React__default.createElement(OakBox, { "$width": "spacing-24", "$height": "spacing-24" },
        React__default.createElement(OakLoadingSpinner, { "$width": "spacing-24", "$color": "text-disabled" })));
    var iconLogic = (isLoading || icon) && (React__default.createElement(OakFlex, { className: "icon-container", "$background": props.defaultIconBackground, "$color": props.defaultTextColor, "$borderRadius": "border-radius-circle", "$position": "relative", "$alignItems": "center", "$justifyContent": "center" }, isLoading && !disabled ? loader : icon));
    return (React__default.createElement(StyledButtonWrapper, { className: className, "$position": "relative", "$width": width, "$maxWidth": maxWidth, "$justifyContent": $justifyContent },
        React__default.createElement(StyledInternalButton, __assign({ element: element !== null && element !== void 0 ? element : "button" }, rest, { "$hoverTextColor": hoverTextColor, "$hoverIconColor": hoverIconColor, "$defaultTextColor": defaultTextColor, "$disabledTextColor": disabledTextColor, "$color": defaultTextColor, "$position": "relative", "$borderRadius": "border-radius-s", disabled: disabled || isLoading }),
            React__default.createElement(OakFlex, { "$flexDirection": "row", "$alignItems": "center", "$gap": children ? "spacing-4" : "spacing-0", "$justifyContent": "center", "$pl": isTrailingIcon ? "spacing-8" : "spacing-0", "$pr": isTrailingIcon ? "spacing-0" : "spacing-8" },
                !isTrailingIcon && iconLogic,
                React__default.createElement(OakSpan, { "$font": "heading-light-7" }, children),
                isTrailingIcon && iconLogic))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { InternalShadowIconButton };
