import React__default from 'react';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';

/**
 * Represents textual user input from a keyboard, voice input, or any other text entry device.
 * */
var OakKbd = function (_a) {
    var children = _a.children;
    return (React__default.createElement(OakSpan, { "$font": "body-3-bold", as: "kbd", "$borderColor": "border-decorative3-stronger", "$background": "bg-primary", "$borderRadius": "border-radius-m", "$ba": "border-solid-m", "$ph": "spacing-8", "$pv": "spacing-4", "$whiteSpace": "nowrap" }, children));
};

export { OakKbd };
