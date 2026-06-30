import React__default from 'react';
import { NativeOptGroup } from './NativeOptGroup.js';
import { NativeLegend } from './NativeLegend.js';

function OakOptGroup(_a) {
    var label = _a.label, children = _a.children;
    return (React__default.createElement(NativeOptGroup, { label: label, "$ph": "spacing-16", "$pv": "spacing-8" },
        React__default.createElement(NativeLegend, { "$ph": "spacing-16", "$pv": "spacing-8" }, label),
        children));
}

export { OakOptGroup };
