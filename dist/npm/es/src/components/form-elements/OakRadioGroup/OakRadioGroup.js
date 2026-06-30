import { __makeTemplateObject, __rest, __read, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useState } from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

var DisplayContentsLegend = styled("legend")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: contents;\n"], ["\n  display: contents;\n"])));
var RadioContext = createContext({
    currentValue: "default",
    name: "default",
});
/**
 *
 * OakRadioGroup allow users to select a single item from a list of mutually exclusive options .
 * OakRadioGroup consists of a set of OakRadioButtons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 * use the callback onChange to get the value of the selected radio button.
 *
 */
var OakRadioGroup = function (props) {
    var name = props.name, children = props.children, label = props.label, onChange = props.onChange, _a = props.$font, $font = _a === void 0 ? "body-1-bold" : _a, _b = props.$gap, $gap = _b === void 0 ? "spacing-16" : _b, disabled = props.disabled, value = props.value, _c = props.defaultValue, defaultValue = _c === void 0 ? "" : _c, rest = __rest(props, ["name", "children", "label", "onChange", "$font", "$gap", "disabled", "value", "defaultValue"]);
    var _d = __read(useState(defaultValue), 2), currentValue = _d[0], setCurrentValue = _d[1];
    var handleValueUpdated = function (event) {
        if (value === undefined) {
            setCurrentValue(event.target.value);
        }
        if (onChange) {
            onChange(event);
        }
    };
    return (React__default.createElement(OakFlex, __assign({ as: "fieldset", "$gap": $gap, "$flexDirection": "column", "$borderStyle": "none", "$pa": "spacing-0", "$ma": "spacing-0" }, rest),
        label && (React__default.createElement(DisplayContentsLegend, null,
            React__default.createElement(OakBox, { "$font": $font }, label))),
        React__default.createElement(RadioContext.Provider, { value: {
                currentValue: value !== null && value !== void 0 ? value : currentValue,
                name: name,
                disabled: disabled,
                onValueUpdated: handleValueUpdated,
            } }, children)));
};
var templateObject_1;

export { OakRadioGroup, RadioContext };
