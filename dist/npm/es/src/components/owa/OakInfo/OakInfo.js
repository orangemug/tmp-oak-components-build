import { __rest, __read, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { OakTooltip } from '../../messaging-and-feedback/OakTooltip/OakTooltip.js';
import { OakScreenReader } from '../../messaging-and-feedback/OakScreenReader/OakScreenReader.js';
import { OakInfoButton } from '../OakInfoButton/OakInfoButton.js';

/**
 * Presents a button which will show a hint when clicked
 */
var OakInfo = function (props) {
    var hint = props.hint, id = props.id, isLoading = props.isLoading, disabled = props.disabled, buttonProps = props.buttonProps, tooltipProps = __rest(props, ["hint", "id", "isLoading", "disabled", "buttonProps"]);
    var _a = __read(useState(false), 2), isOpen = _a[0], setIsOpen = _a[1];
    var handleClick = function () {
        setIsOpen(!isOpen);
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakTooltip, __assign({ tooltip: hint, isOpen: isOpen }, tooltipProps),
            React__default.createElement(OakInfoButton, { onClick: handleClick, isOpen: isOpen, isLoading: isLoading, disabled: disabled, buttonProps: __assign({ "aria-expanded": isOpen, "aria-describedby": isOpen ? id : undefined, "aria-label": isOpen ? "close info tooltip" : "open info tooltip" }, buttonProps) })),
        isOpen && (React__default.createElement(OakScreenReader, { as: "div", id: id, "data-testid": "".concat(id, "-description") }, hint))));
};

export { OakInfo };
