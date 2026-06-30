import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { OakLoadingSpinner } from '../../messaging-and-feedback/OakLoadingSpinner/OakLoadingSpinner.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';

var StyledOakIcon = styled(OakIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 1.25em;\n  min-width: 1.25em;\n  height: 1.25em;\n  min-height: 1.25em;\n"], ["\n  width: 1.25em;\n  min-width: 1.25em;\n  height: 1.25em;\n  min-height: 1.25em;\n"])));
var StyledOakLoadingSpinner = styled(OakLoadingSpinner)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  --width: 1.25em;\n"], ["\n  --width: 1.25em;\n"])));
var StyledLink = styled.a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline;\n  align-items: center;\n  gap: ", ";\n  outline: none;\n  border-radius: ", ";\n  padding: ", ";\n  margin: -", ";\n  appearance: none;\n  ", "\n  background: none;\n  border: none;\n  text-decoration: ", ";\n  cursor: pointer;\n  color: ", ";\n  overflow-wrap: break-word;\n\n  ", " {\n    filter: ", ";\n    display: inline-block;\n    vertical-align: text-top;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:visited {\n    color: ", ";\n\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  @media (hover: hover) {\n    &:hover,\n    &:visited:hover {\n      color: ", ";\n      ", " {\n        filter: ", ";\n      }\n      text-decoration: underline;\n      text-decoration-thickness: 18%;\n    }\n  }\n\n  &:active {\n    color: ", ";\n    outline: 1px solid ", ";\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    color: ", ";\n\n    ", " {\n      filter: ", ";\n    }\n  }\n"], ["\n  display: inline;\n  align-items: center;\n  gap: ", ";\n  outline: none;\n  border-radius: ", ";\n  padding: ", ";\n  margin: -", ";\n  appearance: none;\n  ", "\n  background: none;\n  border: none;\n  text-decoration: ", ";\n  cursor: pointer;\n  color: ", ";\n  overflow-wrap: break-word;\n\n  ", " {\n    filter: ", ";\n    display: inline-block;\n    vertical-align: text-top;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:visited {\n    color: ", ";\n\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  @media (hover: hover) {\n    &:hover,\n    &:visited:hover {\n      color: ", ";\n      ", " {\n        filter: ", ";\n      }\n      text-decoration: underline;\n      text-decoration-thickness: 18%;\n    }\n  }\n\n  &:active {\n    color: ", ";\n    outline: 1px solid ", ";\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    color: ", ";\n\n    ", " {\n      filter: ", ";\n    }\n  }\n"])), parseSpacing("spacing-4"), parseBorderRadius("border-radius-m"), parseSpacing("spacing-4"), parseSpacing("spacing-4"), function (props) { return (props.$font ? typographyStyle : "font: inherit;"); }, function (props) { return props.$textDecoration; }, function (props) { return parseColor(props.$color); }, StyledOakIcon, function (props) { return parseColorFilter(props.$color); }, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) { return parseColor(props.$visitedColor); }, StyledOakIcon, function (props) { return parseColorFilter(props.$visitedColor); }, function (props) { return parseColor(props.$hoverColor); }, StyledOakIcon, function (props) { return parseColorFilter(props.$hoverColor); }, function (props) { return parseColor(props.$activeColor); }, function (props) { return parseColor(props.$activeColor); }, StyledOakIcon, function (props) { return parseColorFilter(props.$activeColor); }, function (props) { return parseColor(props.$disabledColor); }, StyledOakIcon, function (props) { return parseColorFilter(props.$disabledColor); });
/**
 * A link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
var InternalLink = forwardRef(function (props, ref) {
    var _a = props.element, element = _a === void 0 ? "a" : _a, iconName = props.iconName, isTrailingIcon = props.isTrailingIcon, children = props.children, isLoading = props.isLoading, color = props.color, disabledColor = props.disabledColor, visitedColor = props.visitedColor, hoverColor = props.hoverColor, activeColor = props.activeColor, _b = props.textDecoration, textDecoration = _b === void 0 ? "underline" : _b, rest = __rest(props, ["element", "iconName", "isTrailingIcon", "children", "isLoading", "color", "disabledColor", "visitedColor", "hoverColor", "activeColor", "textDecoration"]);
    var icon = (function () {
        switch (true) {
            case isLoading:
                return (React__default.createElement(OakBox, { "$pl": isTrailingIcon ? "spacing-4" : undefined, "$pr": isTrailingIcon ? undefined : "spacing-4", "$display": "inline-block" },
                    React__default.createElement(StyledOakLoadingSpinner, { "$color": "icon-primary" })));
            case !!iconName:
                return (React__default.createElement(OakBox, { "$pl": isTrailingIcon ? "spacing-4" : undefined, "$pr": isTrailingIcon ? undefined : "spacing-4", "$display": "inline-block" },
                    React__default.createElement(StyledOakIcon, { iconName: iconName })));
            default:
                return null;
        }
    })();
    var disabled = (function () {
        switch (true) {
            case "disabled" in rest:
                return rest.disabled;
            case isLoading:
                return true;
            default:
                return undefined;
        }
    })();
    return (React__default.createElement(StyledLink, __assign({ as: element, ref: ref, disabled: disabled, "$color": color, "$disabledColor": disabledColor, "$visitedColor": visitedColor, "$hoverColor": hoverColor, "$activeColor": activeColor, "$textDecoration": textDecoration }, rest),
        !isTrailingIcon && icon,
        React__default.createElement(OakSpan, null, children),
        isTrailingIcon && icon));
});
var templateObject_1, templateObject_2, templateObject_3;

export { InternalLink };
