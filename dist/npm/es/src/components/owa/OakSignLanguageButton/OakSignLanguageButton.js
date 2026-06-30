import { __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { OakSmallSecondaryButton } from '../../buttons/OakSmallSecondaryButton/OakSmallSecondaryButton.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * Display a button to toggle sign language
 */
var OakSignLanguageButton = function (_a) {
    var onClick = _a.onClick;
    var _b = __read(useState(false), 2), showSignLanguage = _b[0], setShowSignLanguage = _b[1];
    var handleClick = function (event) {
        setShowSignLanguage(!showSignLanguage);
        onClick(event);
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakBox, { "$display": ["none", "block"] },
            React__default.createElement(OakSmallSecondaryButton, { iconName: "sign-language", isTrailingIcon: true, onClick: handleClick, "data-testid": "sign-language-desktop-button" }, showSignLanguage ? "Hide sign language" : "Show sign language")),
        React__default.createElement(OakBox, { "$display": ["block", "none"] },
            React__default.createElement(OakSmallSecondaryButton, { onClick: handleClick }, showSignLanguage ? "Hide sign language" : "Show sign language"))));
};

export { OakSignLanguageButton };
