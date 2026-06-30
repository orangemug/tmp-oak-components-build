import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useContext } from 'react';
import styled from 'styled-components';
import { RadioContext } from '../../form-elements/OakRadioGroup/OakRadioGroup.js';
import { InternalCheckBoxHoverFocus } from '../../internal-components/InternalCheckBox/InternalCheckBox.js';
import { InternalCheckBoxWrapper } from '../../internal-components/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js';
import { InternalRadio } from '../../internal-components/InternalRadio/InternalRadio.js';
import { InternalRadioWrapper } from '../../internal-components/InternalRadioWrapper/InternalRadioWrapper.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';

var SingleIcon = function (_a) {
    var iconName = _a.iconName;
    return (React__default.createElement(OakFlex, { "$background": "bg-decorative5-main", "$pa": "spacing-12", "$alignItems": "center", "$alignSelf": "stretch" },
        React__default.createElement(OakIcon, { iconName: iconName, "$width": "spacing-48", "$height": "spacing-48" })));
};
var MultipleIcons = function (_a) {
    var iconName = _a.iconName;
    return (React__default.createElement(OakFlex, { "$background": "bg-decorative5-main", "$pa": "spacing-12", "$alignItems": "center", "$flexDirection": "column", "$gap": "spacing-16", "$justifyContent": "center" }, iconName.map(function (name, index) { return (React__default.createElement(OakFlex, { key: "".concat(name, "-").concat(index), "$position": "relative", "$alignContent": "center", "$alignItems": "center", "$justifyContent": "center" },
        React__default.createElement(OakIcon, { iconName: name, "$width": "spacing-40", "$height": "spacing-40", "$mr": index < iconName.length - 1 ? "spacing-8" : "spacing-0" }))); })));
};
var LabelContainer = styled("label")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  cursor: pointer;\n  display: flex;\n"], ["\n  flex: 1;\n  cursor: pointer;\n  display: flex;\n"])));
var Container = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n\n  &:has(input:focus-within) {\n    &:focus-visible {\n      box-shadow:\n        0px 0px 0px 2px ", ",\n        0px 0px 0px 5px ", ";\n    }\n  }\n  @media (hover: hover) {\n    &:hover:not(:disabled, :active) {\n      background: ", ";\n    }\n  }\n"], ["\n  cursor: pointer;\n\n  &:has(input:focus-within) {\n    &:focus-visible {\n      box-shadow:\n        0px 0px 0px 2px ", ",\n        0px 0px 0px 5px ", ";\n    }\n  }\n  @media (hover: hover) {\n    &:hover:not(:disabled, :active) {\n      background: ", ";\n    }\n  }\n"])), parseColor("bg-decorative5-main"), parseColor("bg-btn-primary-hover"), function (props) {
    return props.$hoverBackground ? parseColor(props.$hoverBackground) : null;
});
/**
 * Download cards present a downloadable resource with metadata and a selectable control.
 * ## Usage
 * Use this component when users need to select one or more downloadable resources,
 * such as lesson plans, slide decks, or worksheets.
 * Design document: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14795-5603>
 */
var OakDownloadCard = function (props) {
    var _a;
    var radioContext = useContext(RadioContext);
    var title = props.title, fileSize = props.fileSize, format = props.format, iconName = props.iconName, value = props.value, _b = props.disabled, disabled = _b === void 0 ? false : _b, defaultChecked = props.defaultChecked, checked = props.checked, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onHovered = props.onHovered, _c = props.isRadio, isRadio = _c === void 0 ? false : _c, dataTestId = props["data-testid"], rest = __rest(props, ["title", "fileSize", "format", "iconName", "value", "disabled", "defaultChecked", "checked", "onChange", "onFocus", "onBlur", "onHovered", "isRadio", "data-testid"]);
    var checkboxSize = "spacing-24";
    var checkedBorderColor = "border-primary";
    var disabledColor = "text-disabled";
    var currentCheckedBackgroundFill = disabled
        ? disabledColor
        : checkedBorderColor;
    var currentCheckedBorderColor = disabled
        ? disabledColor
        : checkedBorderColor;
    var anyDisabled = disabled || radioContext.disabled;
    var isChecked = value === radioContext.currentValue;
    var radioChecked = checked !== null && checked !== void 0 ? checked : isChecked;
    var handleRadioChange = function (event) {
        var _a;
        (_a = radioContext.onValueUpdated) === null || _a === void 0 ? void 0 : _a.call(radioContext, event);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    var isMultipleIcon = Array.isArray(iconName);
    return (React__default.createElement(Container, { "data-testid": dataTestId, "$background": "bg-primary", "$ba": "border-solid-m", "$borderRadius": "border-radius-s", "$overflow": "hidden", "$hoverBackground": "bg-btn-secondary-hover", "$color": "text-primary", "$width": "100%" },
        React__default.createElement(LabelContainer, null,
            React__default.createElement(OakFlex, { "$alignItems": "stretch", "$flexGrow": 1 },
                isMultipleIcon ? (React__default.createElement(MultipleIcons, { iconName: iconName })) : (React__default.createElement(SingleIcon, { iconName: iconName })),
                React__default.createElement(OakFlex, { "$flexGrow": 1, "$flexDirection": "column", "$justifyContent": "center", "$gap": "spacing-4", "$pv": "spacing-12", "$ph": "spacing-16" },
                    React__default.createElement(OakBox, { "$font": "body-2-bold" }, title),
                    fileSize && React__default.createElement(OakBox, { "$font": "body-3" }, fileSize),
                    React__default.createElement(OakBox, { "$font": "body-3" }, format))),
            React__default.createElement(OakFlex, null,
                React__default.createElement(OakFlex, { "$alignItems": "center", "$pr": "spacing-16" },
                    isRadio && (React__default.createElement(InternalRadioWrapper, { checked: isChecked, size: checkboxSize, disabled: anyDisabled, radioBorderColor: checkedBorderColor, internalRadio: React__default.createElement(InternalRadio, __assign({}, rest, { id: props.id, name: (_a = props.name) !== null && _a !== void 0 ? _a : radioContext.name, value: value, disabled: anyDisabled, onHovered: onHovered, onChange: handleRadioChange, onFocus: onFocus, onBlur: onBlur, defaultChecked: defaultChecked, checked: radioChecked })) })),
                    !isRadio && (React__default.createElement(InternalCheckBoxWrapper, { size: checkboxSize, internalCheckbox: React__default.createElement(InternalCheckBoxHoverFocus, __assign({ name: radioContext.name, value: value, "$width": checkboxSize, "$height": checkboxSize, "$ba": "border-solid-m", "$borderRadius": "border-radius-xs", "$borderColor": "text-primary", "$checkedBackground": currentCheckedBackgroundFill, "$checkedBorderColor": currentCheckedBorderColor, "$uncheckedBorderColor": "border-neutral", "$hoverBorderRadius": "border-radius-xs", onHovered: onHovered, onChange: onChange, onFocus: onFocus, onBlur: onBlur, defaultChecked: defaultChecked, checked: checked, disabled: anyDisabled }, rest)), iconPadding: "spacing-0" })))))));
};
var templateObject_1, templateObject_2;

export { OakDownloadCard };
