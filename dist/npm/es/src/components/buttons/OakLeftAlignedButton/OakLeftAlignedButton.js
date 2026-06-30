import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakSvg } from '../../images-and-icons/OakSvg/OakSvg.js';
import { InternalButton } from '../../internal-components/InternalButton/InternalButton.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakLoadingSpinner } from '../../messaging-and-feedback/OakLoadingSpinner/OakLoadingSpinner.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { positionStyle } from '../../../styles/utils/positionStyle.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';

var StyledInternalButton = styled(InternalButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  display: inline-block;\n  ", "\n"], ["\n  ", "\n  ", "\n  display: inline-block;\n  ", "\n"])), positionStyle, sizeStyle, function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &:hover {\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:active {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:disabled {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n  "], ["\n    &:hover {\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:active {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:disabled {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n  "])), parseColor(props.$hoverTextColor), parseColor(props.$hoverBackground), parseColor(props.$hoverBorderColor), parseColor(props.$defaultBackground), parseColor(props.$defaultBorderColor), parseColor(props.$defaultTextColor), parseColor(props.$disabledBackground), parseColor(props.$disabledBorderColor), parseColor(props.$disabledTextColor)); });
var StyledOakSvg = styled(OakSvg)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  bottom: -3px;\n  left: 0px;\n  position: absolute;\n  height: 5px;\n  color: ", ";\n"], ["\n  bottom: -3px;\n  left: 0px;\n  position: absolute;\n  height: 5px;\n  color: ", ";\n"])), parseColor("border-decorative1"));
var StyledButtonWrapper = styled(OakBox)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .grey-shadow:has(+ * + .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:hover),\n  .grey-shadow:has(+ * + .internal-button:hover) {\n    box-shadow: none;\n  }\n  .grey-shadow:has(+ * + .internal-button:active) {\n    box-shadow: ", ";\n  }\n"], ["\n  .grey-shadow:has(+ * + .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:hover),\n  .grey-shadow:has(+ * + .internal-button:hover) {\n    box-shadow: none;\n  }\n  .grey-shadow:has(+ * + .internal-button:active) {\n    box-shadow: ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-grey"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-grey"));
/**
 * A left-aligned button styled similarly to OakSmallPrimaryInvertedButton
 * with configurable icon alignment.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 * `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`
 * called after a mouseEnter and mouseLeave event has happened
 */
var OakLeftAlignedButton = function (props) {
    var _a = props.element, element = _a === void 0 ? "button" : _a, children = props.children, iconName = props.iconName, isTrailingIcon = props.isTrailingIcon, isLoading = props.isLoading, disabled = props.disabled, _b = props.width, width = _b === void 0 ? "max-content" : _b, _c = props.height, height = _c === void 0 ? "auto" : _c, maxWidth = props.maxWidth, innerWidth = props.innerWidth, className = props.className, selected = props.selected, _d = props.rightAlignIcon, rightAlignIcon = _d === void 0 ? false : _d, rest = __rest(props, ["element", "children", "iconName", "isTrailingIcon", "isLoading", "disabled", "width", "height", "maxWidth", "innerWidth", "className", "selected", "rightAlignIcon"]);
    var icon = iconName && (React__default.createElement(OakIcon, { iconName: iconName, "$width": "spacing-24", "$height": "spacing-24", "$colorFilter": disabled ? "text-disabled" : "text-primary" }));
    var loader = (React__default.createElement(OakBox, { "$width": "spacing-20", "$height": "spacing-20" },
        React__default.createElement(OakLoadingSpinner, { "$width": "spacing-20" })));
    var iconLogic = isLoading && !disabled ? loader : icon;
    // If the icon should be rightAligned, it must be trailing
    var shouldTrailIcon = isTrailingIcon || rightAlignIcon;
    return (React__default.createElement(StyledButtonWrapper, { className: className, "$position": "relative", "$width": width, "$height": height, "$maxWidth": maxWidth },
        React__default.createElement(OakBox, { className: "grey-shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
        React__default.createElement(OakBox, { className: "yellow-shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
        React__default.createElement(StyledInternalButton, __assign({ element: element, className: "internal-button", "$ba": "border-solid-m", "$background": "bg-btn-secondary", "$borderColor": "bg-btn-secondary", "$color": "text-primary", "$pv": "spacing-4", "$ph": "spacing-8", "$borderRadius": "border-radius-s", "$position": "relative", disabled: disabled || isLoading, "$width": "100%", "$height": "100%", "$hoverTextColor": "text-primary", "$hoverBackground": "bg-btn-secondary-hover", "$hoverBorderColor": "bg-btn-secondary-hover", "$defaultTextColor": "text-primary", "$defaultBackground": "bg-btn-secondary", "$defaultBorderColor": "bg-btn-secondary", "$disabledTextColor": "text-disabled", "$disabledBackground": "bg-btn-secondary", "$disabledBorderColor": "bg-btn-secondary" }, rest),
            React__default.createElement(OakFlex, { "data-testid": "left-aligned-btn-flex-container", "$flexDirection": "row", "$alignItems": "center", "$gap": "spacing-8", "$justifyContent": rightAlignIcon ? "space-between" : "start", "$width": innerWidth },
                !shouldTrailIcon && iconLogic,
                selected ? (React__default.createElement(TextWithUnderline, null, children)) : (React__default.createElement(OakSpan, { "$font": "body-3-bold", "$textAlign": "left" }, children)),
                shouldTrailIcon && iconLogic))));
};
var TextWithUnderline = function (_a) {
    var children = _a.children;
    return (React__default.createElement(OakBox, { "$position": "relative", "$textAlign": "left" },
        React__default.createElement(OakSpan, { "$font": "body-3-bold" }, children),
        React__default.createElement(StyledOakSvg, { name: "underline", "data-state": "selected", "data-testid": "selected-underline" })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { OakLeftAlignedButton };
