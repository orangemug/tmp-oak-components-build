import { __rest, __read, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useState } from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakLabel } from '../OakLabel/OakLabel.js';

var RadioContext = createContext({
    currentValue: "default",
    name: "default",
});
/**
 *
 * A react context supporting a list of mutually exclusive options rendered as buttons.
 *
 * ## Usage
 *
 * the nested items should be OakSecondaryButtonAsRadio or implement the same logic.
 * use the callback onChange to get the value of the clicked button.
 *
 */
var OakButtonAsRadioGroup = function (props) {
    var name = props.name, children = props.children, label = props.label, ariaLabel = props.ariaLabel, ariaLabelledby = props.ariaLabelledby, onChange = props.onChange, _a = props.$font, $font = _a === void 0 ? "body-1-bold" : _a, _b = props.$gap, $gap = _b === void 0 ? "spacing-16" : _b, disabled = props.disabled, value = props.value, _c = props.defaultValue, defaultValue = _c === void 0 ? "" : _c, rest = __rest(props, ["name", "children", "label", "ariaLabel", "ariaLabelledby", "onChange", "$font", "$gap", "disabled", "value", "defaultValue"]);
    var _d = __read(useState(defaultValue), 2), currentValue = _d[0], setCurrentValue = _d[1];
    if (!label && !ariaLabel && !ariaLabelledby) {
        throw new Error("OakButtonAsRadioGroup: At least one of label, ariaLabel or ariaLabelledby is required");
    }
    var handleValueUpdated = function (newValue) {
        if (value === undefined) {
            setCurrentValue(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    return (React__default.createElement(OakFlex, __assign({ role: "radiogroup", "$gap": $gap }, rest, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby }),
        label && React__default.createElement(OakLabel, { "$font": $font }, label),
        React__default.createElement(RadioContext.Provider, { value: {
                currentValue: value !== null && value !== void 0 ? value : currentValue,
                name: name,
                disabled: disabled,
                onValueUpdated: handleValueUpdated,
            } }, children)));
};

export { OakButtonAsRadioGroup, RadioContext };
