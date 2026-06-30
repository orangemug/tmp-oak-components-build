import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useRef } from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { InternalCheckBoxLabelHoverDecor } from '../../internal-components/InternalCheckBoxLabel/InternalCheckBoxLabel.js';
import { InternalCheckBox } from '../../internal-components/InternalCheckBox/InternalCheckBox.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseBorder } from '../../../styles/helpers/parseBorder.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
var StyledOakIcon = styled(OakIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledInternalCheckBox = styled(InternalCheckBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n\n  &:checked:not(:disabled) + ", " {\n    filter: ", ";\n  }\n\n  &:checked:not(:disabled) {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  &:checked:disabled {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  &:hover:not(:disabled) {\n    background: ", ";\n  }\n"], ["\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n\n  &:checked:not(:disabled) + ", " {\n    filter: ", ";\n  }\n\n  &:checked:not(:disabled) {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  &:checked:disabled {\n    border: ", ";\n    border-color: ", ";\n  }\n\n  &:hover:not(:disabled) {\n    background: ", ";\n  }\n"])), StyledOakIcon, function (props) {
    return props.$keepIconColor ? "none" : parseColorFilter("icon-inverted");
}, parseBorder("border-solid-l"), parseColor("border-primary"), parseBorder("border-solid-l"), parseColor("text-disabled"), parseColor("bg-primary"));
var StyledFlexBox = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:has(input:not(:disabled)) {\n    cursor: pointer;\n  }\n\n  &:has(input:disabled) {\n    pointer-events: none;\n    cursor: none;\n  }\n\n  &:hover:has(input:not(:disabled)) ", " {\n    text-decoration: underline;\n  }\n\n  &:hover:has(input:not(:disabled)) {\n    background-color: ", ";\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:has(input:checked:not(:disabled)) {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  &:has(input:not(:disabled)) {\n    cursor: pointer;\n  }\n\n  &:has(input:disabled) {\n    pointer-events: none;\n    cursor: none;\n  }\n\n  &:hover:has(input:not(:disabled)) ", " {\n    text-decoration: underline;\n  }\n\n  &:hover:has(input:not(:disabled)) {\n    background-color: ", ";\n  }\n\n  &:focus-within {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:has(input:checked:not(:disabled)) {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), InternalCheckBoxLabelHoverDecor, parseColor("bg-neutral"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseColor("bg-inverted"), parseColor("text-inverted"));
/**
 *
 * A checkbox for search filters.
 *
 * Takes a displayValue and optional icon, for subject icons `subject-[subjectSlug]` should be used.
 *
 * ## To be renamed and refactored 🔀
 * This component will be renamed to `OakCheckboxAsButton` and refactored to have more variants
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 */
var OakSearchFilterCheckBox = function (props) {
    var id = props.id, value = props.value, disabled = props.disabled, innerRef = props.innerRef, displayValue = props.displayValue, icon = props.icon, keepIconColor = props.keepIconColor, rest = __rest(props, ["id", "value", "disabled", "innerRef", "displayValue", "icon", "keepIconColor"]);
    var defaultRef = useRef(null);
    var inputRef = innerRef !== null && innerRef !== void 0 ? innerRef : defaultRef;
    var handleContainerClick = function (e) {
        var _a;
        var inputId = e.target.id;
        if (inputId !== id) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    return (React__default.createElement(OakFlex, { "$minHeight": "spacing-40", "$position": "relative" },
        React__default.createElement(StyledFlexBox, { "$borderRadius": "border-radius-s", "$borderColor": "border-neutral-lighter", "$ba": "border-solid-s", "$background": "bg-primary", onClick: handleContainerClick, "$ph": "spacing-12", "$pv": "spacing-4", "$gap": "spacing-4" },
            React__default.createElement(StyledInternalCheckBox, __assign({ id: id, value: value, disabled: disabled, ref: inputRef, "$keepIconColor": keepIconColor }, rest)),
            icon && React__default.createElement(StyledOakIcon, { alt: "", iconName: icon }),
            React__default.createElement(InternalCheckBoxLabelHoverDecor, { pointerEvents: "none", htmlFor: id, "$font": "heading-7", disabled: disabled }, displayValue))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { OakSearchFilterCheckBox };
