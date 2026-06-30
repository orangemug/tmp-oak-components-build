import { __read } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { OakTooltip } from '../../../../messaging-and-feedback/OakTooltip/OakTooltip.js';
import { OakScreenReader } from '../../../../messaging-and-feedback/OakScreenReader/OakScreenReader.js';
import { OakHintButton } from '../OakHintButton/OakHintButton.js';

/**
 * Presents a button which will show a hint when clicked
 */
var OakQuizHint = function (_a) {
    var hint = _a.hint, id = _a.id, hintToggled = _a.hintToggled;
    var _b = __read(useState(false), 2), isOpen = _b[0], setIsOpen = _b[1];
    var handleClick = function () {
        setIsOpen(!isOpen);
        if (hintToggled) {
            hintToggled({ isOpen: !isOpen });
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakTooltip, { tooltip: hint, isOpen: isOpen, tooltipPosition: "top-left" },
            React__default.createElement(OakHintButton, { isOpen: isOpen, onClick: handleClick, buttonProps: {
                    "aria-expanded": isOpen,
                    "aria-describedby": isOpen ? id : undefined,
                } })),
        isOpen && (React__default.createElement(OakScreenReader, { as: "div", id: id, "data-testid": "".concat(id, "-description") }, hint))));
};

export { OakQuizHint };
