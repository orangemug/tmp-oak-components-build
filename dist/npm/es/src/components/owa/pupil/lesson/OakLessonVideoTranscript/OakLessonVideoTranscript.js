import { __read } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakCollapsibleContent } from '../../../../layout-and-structure/OakCollapsibleContent/OakCollapsibleContent.js';
import { OakTertiaryButton } from '../../../../buttons/OakTertiaryButton/OakTertiaryButton.js';

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
var OakLessonVideoTranscript = function (_a) {
    var children = _a.children, id = _a.id, _b = _a.signLanguageControl, signLanguageControl = _b === void 0 ? null : _b, transcriptToggled = _a.transcriptToggled;
    var _c = __read(useState(false), 2), showTranscript = _c[0], setShowTranscript = _c[1];
    var handleClick = function () {
        setShowTranscript(!showTranscript);
        if (transcriptToggled) {
            transcriptToggled({ isOpen: !showTranscript });
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakFlex, { "$flexDirection": ["column-reverse", "row"], "$justifyContent": "space-between" },
            React__default.createElement(OakBox, null, children && (React__default.createElement(OakTertiaryButton, { onClick: handleClick, iconName: showTranscript ? "chevron-up" : "chevron-down", isTrailingIcon: true, "aria-controls": id, "aria-expanded": showTranscript, "$mb": "spacing-24" }, showTranscript ? "Hide transcript" : "Show transcript"))),
            signLanguageControl && (React__default.createElement(OakBox, { "$mb": "spacing-24" }, signLanguageControl))),
        children && (React__default.createElement(OakCollapsibleContent, { id: id, "$maxHeight": "spacing-960", isOpen: showTranscript, "$font": "body-1", "$color": "text-primary", "aria-live": "polite" }, children))));
};

export { OakLessonVideoTranscript };
