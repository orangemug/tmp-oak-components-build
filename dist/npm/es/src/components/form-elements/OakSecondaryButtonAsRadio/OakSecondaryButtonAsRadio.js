import React__default, { useContext } from 'react';
import { OakSecondaryButton } from '../../buttons/OakSecondaryButton/OakSecondaryButton.js';
import { RadioContext } from '../OakButtonAsRadioGroup/OakButtonAsRadioGroup.js';
import { OakPrimaryButton } from '../../buttons/OakPrimaryButton/OakPrimaryButton.js';

/**
 *
 * To be used as a child of OakButtonAsRadioGroup.
 * Highlights when the value matches the current value of the group.
 * Changes the current value of the group when clicked.
 *
 * ## Usage
 *
 * See OakButtonAsRadioGroup.
 *
 */
var OakSecondaryButtonAsRadio = function (_a) {
    var children = _a.children, value = _a.value;
    var radioContext = useContext(RadioContext);
    var currentValue = radioContext.currentValue, onValueUpdated = radioContext.onValueUpdated;
    var checked = currentValue === value;
    return checked ? (React__default.createElement(OakPrimaryButton, { role: "radio", "aria-checked": checked }, children)) : (React__default.createElement(OakSecondaryButton, { role: "radio", "aria-checked": checked, onClick: function () { return onValueUpdated === null || onValueUpdated === void 0 ? void 0 : onValueUpdated(value); } }, children));
};

export { OakSecondaryButtonAsRadio };
