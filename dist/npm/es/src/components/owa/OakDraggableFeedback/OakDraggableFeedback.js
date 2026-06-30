import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakDraggable } from '../OakDraggable/OakDraggable.js';

/**
 * A draggable element that visually indicates whether or not its state is correct or not
 */
var OakDraggableFeedback = function (_a) {
    var feedback = _a.feedback, props = __rest(_a, ["feedback"]);
    return (React__default.createElement(OakDraggable, __assign({}, props, { iconName: feedback === "correct" ? "tick" : "cross", iconColor: feedback === "correct" ? "icon-success" : "icon-error", iconAlt: feedback === "correct" ? "correct" : "incorrect", "$ba": "border-solid-xl", "$borderColor": feedback === "correct" ? "border-success" : "border-error", "$background": feedback === "correct" ? "bg-correct" : "bg-incorrect", isReadOnly: true })));
};

export { OakDraggableFeedback };
