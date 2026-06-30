import React__default from 'react';
import { NativeOption } from './NativeOption.js';

function OakOption(_a) {
    var selected = _a.selected, disabled = _a.disabled, value = _a.value, children = _a.children, asDefault = _a.asDefault, _b = _a.$focusRingDropShadows, $focusRingDropShadows = _b === void 0 ? [
        "drop-shadow-centered-lemon",
        "drop-shadow-centered-grey",
    ] : _b;
    return (React__default.createElement(NativeOption, { "$asDefault": asDefault, value: value, disabled: disabled, selected: selected, "$ph": "spacing-16", "$pv": "spacing-8", "$focusRingDropShadows": $focusRingDropShadows }, children));
}

export { OakOption };
