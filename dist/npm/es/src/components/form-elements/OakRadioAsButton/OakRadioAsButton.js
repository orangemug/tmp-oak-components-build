import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useId, useContext, useRef } from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { InternalCheckBoxLabelHoverDecor } from '../../internal-components/InternalCheckBoxLabel/InternalCheckBoxLabel.js';
import { InternalRadio } from '../../internal-components/InternalRadio/InternalRadio.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';
import { RadioContext } from '../OakRadioGroup/OakRadioGroup.js';
import { InternalRadioWrapper } from '../../internal-components/InternalRadioWrapper/InternalRadioWrapper.js';
import { OakScreenReader } from '../../messaging-and-feedback/OakScreenReader/OakScreenReader.js';

var colorSchemes = [
    "primary",
    "decorative1",
    "decorative2",
    "decorative3",
    "decorative4",
    "decorative5",
    "decorative6",
    "transparent",
];
// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
var StyledOakIcon = styled(OakIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledFlexBox = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:has(input:disabled) {\n    pointer-events: none;\n    cursor: none;\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover:has(input:not(:disabled)) ", " {\n    text-decoration: underline;\n  }\n\n  &:hover:has(input:not(:disabled)) {\n    background-color: ", ";\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", " {\n    filter: ", ";\n  }\n\n  &:has(input:checked:not(:disabled)) {\n    background-color: ", ";\n    color: ", ";\n    border-color: transparent;\n\n    ", " {\n      filter: ", ";\n    }\n  }\n"], ["\n  cursor: pointer;\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:has(input:disabled) {\n    pointer-events: none;\n    cursor: none;\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover:has(input:not(:disabled)) ", " {\n    text-decoration: underline;\n  }\n\n  &:hover:has(input:not(:disabled)) {\n    background-color: ", ";\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", " {\n    filter: ", ";\n  }\n\n  &:has(input:checked:not(:disabled)) {\n    background-color: ", ";\n    color: ", ";\n    border-color: transparent;\n\n    ", " {\n      filter: ", ";\n    }\n  }\n"])), function (props) {
    return parseColor(props.$colorSchemeTokens.background);
}, function (props) { return parseColor(props.$colorSchemeTokens.borderColor); }, parseColor("text-primary"), function (props) {
    return parseColor(props.$colorSchemeTokens.disabledBackground);
}, function (props) {
    return parseColor(props.$colorSchemeTokens.disabledBorderColor);
}, parseColor("text-disabled"), InternalCheckBoxLabelHoverDecor, function (props) {
    return parseColor(props.$colorSchemeTokens.hoverBackground);
}, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), StyledOakIcon, parseColorFilter("icon-primary"), parseColor("bg-inverted"), parseColor("text-inverted"), StyledOakIcon, function (props) {
    return props.$keepIconColor ? "none" : parseColorFilter("text-inverted");
});
var getColorSchemeTokens = function (colorScheme) {
    switch (colorScheme) {
        case "primary":
            return {
                background: "bg-primary",
                hoverBackground: "bg-neutral",
                borderColor: "border-neutral-lighter",
                disabledBackground: "bg-btn-secondary-disabled",
                disabledBorderColor: "border-neutral-lighter",
            };
        case "transparent":
            return {
                background: "transparent",
                hoverBackground: "transparent",
                borderColor: "transparent",
                disabledBackground: "transparent",
                disabledBorderColor: "transparent",
            };
        default:
            return {
                background: "bg-".concat(colorScheme, "-main"),
                hoverBackground: "bg-".concat(colorScheme, "-very-subdued"),
                borderColor: "border-".concat(colorScheme),
                disabledBackground: "bg-btn-secondary-disabled",
                disabledBorderColor: "border-neutral-lighter",
            };
    }
};
/**
 * A radio input styled as a button, to be used within `<OakRadioGroup/>`.
 */
var OakRadioAsButton = function (props) {
    var id = useId();
    var value = props.value, disabled = props.disabled, innerRef = props.innerRef, displayValue = props.displayValue, onChange = props.onChange, keepIconColor = props.keepIconColor, _a = props.colorScheme, colorScheme = _a === void 0 ? "primary" : _a, width = props.width, rest = __rest(props, ["value", "disabled", "innerRef", "displayValue", "onChange", "keepIconColor", "colorScheme", "width"]);
    var _b = useContext(RadioContext), name = _b.name, onValueUpdated = _b.onValueUpdated, currentValue = _b.currentValue;
    var defaultRef = useRef(null);
    var inputRef = innerRef !== null && innerRef !== void 0 ? innerRef : defaultRef;
    var handleContainerClick = function (e) {
        var _a;
        var el = e.target;
        if (!el.isEqualNode(inputRef.current)) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    var isChecked = currentValue === value;
    var colorSchemeTokens = getColorSchemeTokens(colorScheme);
    var _c = rest; _c.icon; _c.variant; var restWithoutVariantProps = __rest(_c, ["icon", "variant"]);
    var radio = (React__default.createElement(InternalRadioWrapper, { radioBorderColor: "border-neutral", radioOuterSize: "spacing-20", size: "spacing-20", disableFocusRing: true, internalRadio: React__default.createElement(InternalRadio, __assign({}, restWithoutVariantProps, { id: id, value: value, disabled: disabled, ref: inputRef, onChange: function (e) {
                onValueUpdated === null || onValueUpdated === void 0 ? void 0 : onValueUpdated(e);
                onChange === null || onChange === void 0 ? void 0 : onChange(e);
            }, name: name, checked: isChecked })) }));
    return (React__default.createElement(StyledFlexBox, { "$borderRadius": "border-radius-s", "$ba": "border-solid-s", "$pv": "spacing-4", "$ph": "spacing-12", "$gap": "spacing-8", "$alignItems": "center", "$keepIconColor": keepIconColor, "$colorSchemeTokens": colorSchemeTokens, "$width": width !== null && width !== void 0 ? width : "fit-content", "$minHeight": "spacing-40", onClick: handleContainerClick },
        rest.variant === "with-radio" ? (radio) : (React__default.createElement(OakScreenReader, null, radio)),
        rest.variant === "with-icon" && (React__default.createElement(StyledOakIcon, { alt: "", iconName: rest.icon })),
        React__default.createElement(InternalCheckBoxLabelHoverDecor, { pointerEvents: "none", htmlFor: id, "$font": "heading-7", disabled: disabled }, displayValue)));
};
var templateObject_1, templateObject_2;

export { OakRadioAsButton, colorSchemes };
