import { __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakCollapsibleContent } from '../../layout-and-structure/OakCollapsibleContent/OakCollapsibleContent.js';
import { OakSmallSecondaryButton } from '../../buttons/OakSmallSecondaryButton/OakSmallSecondaryButton.js';

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
var OakVideoTranscript = function (_a) {
    var children = _a.children, id = _a.id, _b = _a.signLanguageControl, signLanguageControl = _b === void 0 ? null : _b, _c = _a.copyLinkControl, copyLinkControl = _c === void 0 ? null : _c, transcriptToggled = _a.transcriptToggled;
    var _d = __read(useState(false), 2), showTranscript = _d[0], setShowTranscript = _d[1];
    var handleClick = function () {
        setShowTranscript(!showTranscript);
        if (transcriptToggled) {
            transcriptToggled({ isOpen: !showTranscript });
        }
    };
    var label = showTranscript ? "Hide transcript" : "Show transcript";
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakFlex, { "$flexDirection": "row", "$flexWrap": "wrap", "$gap": ["spacing-8", "spacing-16"] },
            children && (React__default.createElement(OakBox, { "$display": ["none", "block"] },
                React__default.createElement(OakSmallSecondaryButton, { onClick: handleClick, iconName: showTranscript ? "chevron-up" : "chevron-down", isTrailingIcon: true, "aria-controls": id, "aria-expanded": showTranscript }, label))),
            children && (React__default.createElement(OakBox, { "$display": ["block", "none"] },
                React__default.createElement(OakSmallSecondaryButton, { onClick: handleClick, "aria-controls": id, "aria-expanded": showTranscript }, label))),
            copyLinkControl && React__default.createElement(OakBox, null, copyLinkControl),
            signLanguageControl && React__default.createElement(OakBox, null, signLanguageControl)),
        children && (React__default.createElement(OakCollapsibleContent, { id: id, "$maxHeight": "spacing-960", isOpen: showTranscript, "$font": "body-2", "$color": "text-primary", "$pa": "spacing-12", "$mt": ["spacing-16", "spacing-32"], "aria-live": "polite" }, children))));
};

export { OakVideoTranscript };
