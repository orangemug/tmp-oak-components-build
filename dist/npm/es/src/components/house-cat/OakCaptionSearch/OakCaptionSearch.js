import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakPrimaryButton } from '../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakFormInputWithLabels } from '../../owa/OakFormInputWithLabels/OakFormInputWithLabels.js';

var OakCaptionSearch = function (_a) {
    var onSearch = _a.onSearch, hasError = _a.hasError, errorText = _a.errorText, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, defaultValue = _a.defaultValue;
    var handleFormSubmit = function (event) {
        // NB. we don't handle caption ID validation here to remain decoupled from the application logic
        event.preventDefault();
        // get the input value from the form
        var form = event.target;
        var input = form.querySelector('input[name="caption-id"]');
        var captionIdString = input.value.trim();
        if (onSearch) {
            onSearch(captionIdString);
        }
    };
    return (React__default.createElement(OakFlex, { as: "form", "$flexDirection": "column", "$color": "text-primary", "$background": "bg-primary", "$pa": "spacing-24", "$gap": "spacing-24", "$borderRadius": "border-radius-s", onSubmit: handleFormSubmit },
        React__default.createElement(OakFormInputWithLabels, { label: "Caption ID", inputName: "caption-id", helperText: "Enter on or more IDs (separated by commas).", invalid: hasError, invalidText: errorText, disabled: isLoading, defaultValue: defaultValue, required: true }),
        React__default.createElement(OakPrimaryButton, { type: "submit", iconName: "search", isTrailingIcon: true, isLoading: isLoading }, "Search")));
};

export { OakCaptionSearch };
