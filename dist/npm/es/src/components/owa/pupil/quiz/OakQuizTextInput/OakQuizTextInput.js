import { __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakTextInput } from '../../../../form-elements/OakTextInput/OakTextInput.js';

/**
 * A text input for a free-text question in a quiz
 */
var OakQuizTextInput = function (_a) {
    var feedback = _a.feedback, readOnly = _a.readOnly, props = __rest(_a, ["feedback", "readOnly"]);
    var validity;
    var iconName;
    var iconAlt = undefined;
    switch (feedback) {
        case "correct":
            validity = "valid";
            iconName = "tick";
            iconAlt = "Correct";
            break;
        case "incorrect":
            validity = "invalid";
            iconName = "cross";
            iconAlt = "Incorrect";
            break;
    }
    return (React__default.createElement(OakTextInput, __assign({}, props, { validity: validity, iconName: iconName, iconAlt: iconAlt, readOnly: readOnly || !!feedback, isTrailingIcon: true })));
};

export { OakQuizTextInput };
