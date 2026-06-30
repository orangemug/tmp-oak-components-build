import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakSvg } from '../../images-and-icons/OakSvg/OakSvg.js';
import { InternalButton } from '../InternalButton/InternalButton.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakLoadingSpinner } from '../../messaging-and-feedback/OakLoadingSpinner/OakLoadingSpinner.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { positionStyle } from '../../../styles/utils/positionStyle.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';

var StyledInternalButton = styled(InternalButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n"])), positionStyle, sizeStyle, function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &:hover {\n      text-decoration: ", ";\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:active {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:disabled {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n  "], ["\n    &:hover {\n      text-decoration: ", ";\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:active {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n    &:disabled {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      [data-state=\"selected\"] {\n        display: none;\n      }\n    }\n  "])), props.$hoverUnderline ? "underline" : "none", parseColor(props.$hoverTextColor), parseColor(props.$hoverBackground), parseColor(props.$hoverBorderColor), parseColor(props.$defaultBackground), parseColor(props.$defaultBorderColor), parseColor(props.$defaultTextColor), parseColor(props.$disabledBackground), parseColor(props.$disabledBorderColor), parseColor(props.$disabledTextColor)); });
var StyledOakSvg = styled(OakSvg)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  bottom: -3px;\n  left: 0px;\n  position: absolute;\n  height: 5px;\n  color: ", ";\n"], ["\n  bottom: -3px;\n  left: 0px;\n  position: absolute;\n  height: 5px;\n  color: ", ";\n"])), parseColor("border-decorative1"));
var StyledButtonWrapper = styled(OakBox)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .grey-shadow:has(+ * + .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:hover),\n  .yellow-shadow:has(+ .internal-button:hover:not(:focus-visible, :active)) {\n    box-shadow: ", ";\n  }\n  .grey-shadow:has(+ * + .internal-button:hover) {\n    box-shadow: none;\n  }\n  .grey-shadow:has(+ * + .internal-button:active) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:active) {\n    box-shadow: ", ";\n  }\n"], ["\n  .grey-shadow:has(+ * + .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:focus-visible) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:hover),\n  .yellow-shadow:has(+ .internal-button:hover:not(:focus-visible, :active)) {\n    box-shadow: ", ";\n  }\n  .grey-shadow:has(+ * + .internal-button:hover) {\n    box-shadow: none;\n  }\n  .grey-shadow:has(+ * + .internal-button:active) {\n    box-shadow: ", ";\n  }\n  .yellow-shadow:has(+ .internal-button:active) {\n    box-shadow: ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-grey"), parseDropShadow("drop-shadow-centered-lemon"), function (props) { return parseDropShadow(props.$hoverShadow); }, parseDropShadow("drop-shadow-grey"), parseDropShadow("drop-shadow-lemon"));
/**
 *
 * A styled rectangular button, not intended to be used directly.
 * Instead used by OakPrimaryButton and OakSecondaryButton.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
var InternalShadowRectButton = function (props) {
    var _a = props.element, element = _a === void 0 ? "button" : _a, children = props.children, iconName = props.iconName, iconAriaHidden = props.iconAriaHidden, isTrailingIcon = props.isTrailingIcon, isLoading = props.isLoading, disabled = props.disabled, _b = props.width, width = _b === void 0 ? "max-content" : _b, _c = props.height, height = _c === void 0 ? "auto" : _c, maxWidth = props.maxWidth, innerWidth = props.innerWidth, defaultBackground = props.defaultBackground, defaultBorderColor = props.defaultBorderColor, defaultTextColor = props.defaultTextColor, disabledTextColor = props.disabledTextColor, hoverTextColor = props.hoverTextColor, hoverBackground = props.hoverBackground, hoverBorderColor = props.hoverBorderColor, hoverUnderline = props.hoverUnderline, disabledBackground = props.disabledBackground, disabledBorderColor = props.disabledBorderColor, className = props.className, _d = props.hoverShadow, hoverShadow = _d === void 0 ? "drop-shadow-lemon" : _d, _e = props.pv, pv = _e === void 0 ? "spacing-12" : _e, _f = props.ph, ph = _f === void 0 ? "spacing-16" : _f, pt = props.pt, pb = props.pb, pl = props.pl, pr = props.pr, _g = props.iconLayout, iconLayout = _g === void 0 ? "row" : _g, _h = props.iconGap, iconGap = _h === void 0 ? "spacing-8" : _h, iconOverride = props.iconOverride, _j = props.font, font = _j === void 0 ? "heading-7" : _j, _k = props.textAlign, textAlign = _k === void 0 ? "left" : _k, _l = props.loadingSpinnerSize, loadingSpinnerSize = _l === void 0 ? "spacing-24" : _l, _m = props.display, display = _m === void 0 ? "inline-block" : _m, selected = props.selected, rest = __rest(props, ["element", "children", "iconName", "iconAriaHidden", "isTrailingIcon", "isLoading", "disabled", "width", "height", "maxWidth", "innerWidth", "defaultBackground", "defaultBorderColor", "defaultTextColor", "disabledTextColor", "hoverTextColor", "hoverBackground", "hoverBorderColor", "hoverUnderline", "disabledBackground", "disabledBorderColor", "className", "hoverShadow", "pv", "ph", "pt", "pb", "pl", "pr", "iconLayout", "iconGap", "iconOverride", "font", "textAlign", "loadingSpinnerSize", "display", "selected"]);
    var icon = iconOverride !== null && iconOverride !== void 0 ? iconOverride : (React__default.createElement(React__default.Fragment, null, iconName && (React__default.createElement(OakIcon, { iconName: iconName, "$width": "spacing-24", "$height": "spacing-24", "$colorFilter": props.disabled ? disabledTextColor : defaultTextColor, "aria-hidden": iconAriaHidden }))));
    var loader = (React__default.createElement(OakBox, { "$width": loadingSpinnerSize, "$height": loadingSpinnerSize },
        React__default.createElement(OakLoadingSpinner, { "$width": loadingSpinnerSize })));
    var iconLogic = React__default.createElement(React__default.Fragment, null, isLoading && !disabled ? loader : icon);
    return (React__default.createElement(StyledButtonWrapper, { className: className, "$position": "relative", "$width": width, "$height": height, "$maxWidth": maxWidth, "$hoverShadow": hoverShadow },
        React__default.createElement(OakBox, { className: "grey-shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
        React__default.createElement(OakBox, { className: "yellow-shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
        React__default.createElement(StyledInternalButton, __assign({ element: element, className: "internal-button", "$ba": "border-solid-m", "$background": defaultBackground, "$borderColor": defaultBorderColor, "$color": defaultTextColor, "$pv": pv, "$ph": ph, "$pt": pt, "$pb": pb, "$pl": pl, "$pr": pr, "$borderRadius": "border-radius-s", "$position": "relative", disabled: disabled || isLoading, "$width": "100%", "$height": "100%", "$hoverTextColor": hoverTextColor, "$hoverBackground": hoverBackground, "$hoverBorderColor": hoverBorderColor, "$hoverUnderline": hoverUnderline, "$defaultTextColor": defaultTextColor, "$defaultBackground": defaultBackground, "$defaultBorderColor": defaultBorderColor, "$disabledTextColor": disabledTextColor, "$disabledBackground": disabledBackground, "$disabledBorderColor": disabledBorderColor, "$display": display }, rest),
            React__default.createElement(OakFlex, { "$flexDirection": iconLayout, "$alignItems": "center", "$gap": iconGap, "$justifyContent": "center", "$width": innerWidth },
                !isTrailingIcon && iconLogic,
                selected ? (React__default.createElement(TextWithUnderline, { font: font }, children)) : (React__default.createElement(OakSpan, { "$font": font, "$textAlign": textAlign }, children)),
                isTrailingIcon && iconLogic))));
};
var TextWithUnderline = function (_a) {
    var textAlign = _a.textAlign, font = _a.font, children = _a.children;
    return (React__default.createElement(OakBox, { "$position": "relative", "$textAlign": textAlign },
        React__default.createElement(OakSpan, { "$font": font }, children),
        React__default.createElement(StyledOakSvg, { name: "underline", "data-state": "selected", "data-testid": "selected-underline" })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { InternalShadowRectButton, StyledButtonWrapper };
