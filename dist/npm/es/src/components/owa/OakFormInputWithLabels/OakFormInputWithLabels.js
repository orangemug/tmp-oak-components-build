import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakFormInput } from '../../form-elements/OakFormInput/OakFormInput.js';
import { OakLabel } from '../../form-elements/OakLabel/OakLabel.js';
import { OakP } from '../../typography/OakP/OakP.js';

var OakFormInputWithLabels = function (_a) {
    var label = _a.label, helperText = _a.helperText, placeholder = _a.placeholder, invalid = _a.invalid, invalidText = _a.invalidText, value = _a.value, inputName = _a.inputName, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.required, required = _c === void 0 ? false : _c, defaultValue = _a.defaultValue, _d = _a.onChange, onChange = _d === void 0 ? function () { } : _d, _e = _a.onInitialFocus, onInitialFocus = _e === void 0 ? function () { } : _e, _f = _a.onBlur, onBlur = _f === void 0 ? function () { } : _f;
    var inputId = "input-".concat(label.toLowerCase().replace(/\s+/g, "-"));
    return (React__default.createElement(OakFlex, { "$width": "100%", "$flexDirection": "column", "$gap": "spacing-8" },
        React__default.createElement(OakFlex, { "$flexDirection": "column" },
            React__default.createElement(OakLabel, { "$font": "body-2-bold", htmlFor: inputId }, label),
            helperText && React__default.createElement(OakP, { "$font": "body-3" }, helperText)),
        React__default.createElement(OakFormInput, { name: inputName, id: inputId, placeholder: placeholder, invalid: invalid, value: value, onChange: onChange, onInitialFocus: onInitialFocus, onBlur: onBlur, disabled: disabled, "aria-describedby": invalid ? "error-".concat(inputId) : undefined, defaultValue: defaultValue, required: required }),
        invalid && invalidText && (React__default.createElement(OakP, { id: "error-".concat(inputId), "$font": "body-2", "$color": "text-error" }, invalidText))));
};

export { OakFormInputWithLabels };
