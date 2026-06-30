import React__default from 'react';
import { OakSmallTertiaryInvertedButton } from '../../buttons/OakSmallTertiaryInvertedButton/OakSmallTertiaryInvertedButton.js';

var OakSaveButton = function (props) {
    var isSaved = props.isSaved, isLoading = props.isLoading, onSave = props.onSave, unavailable = props.unavailable, saveButtonId = props.saveButtonId, title = props.title;
    return (React__default.createElement(OakSmallTertiaryInvertedButton, { iconName: isSaved ? "bookmark-filled" : "bookmark-outlined", isTrailingIcon: true, "aria-disabled": isLoading, disabled: unavailable, onClick: onSave, width: "spacing-100", "$justifyContent": "end", "aria-label": "".concat(isSaved ? "Unsave" : "Save", " this unit: ").concat(title, " "), id: saveButtonId }, isSaved ? "Saved" : "Save"));
};

export { OakSaveButton };
