import { __read, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useRef, useEffect } from 'react';
import { OakSecondaryButton } from '../OakSecondaryButton/OakSecondaryButton.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * A shared component that provides dropdown functionality for any button type.
 * Accepts the button component as a prop to eliminate code duplication.
 */
var OakButtonWithDropdown = function (_a) {
    var primaryActionText = _a.primaryActionText, _b = _a.primaryActionIcon, primaryActionIcon = _b === void 0 ? "chevron-down" : _b, onPrimaryAction = _a.onPrimaryAction, children = _a.children, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, ariaLabel = _a.ariaLabel, ariaDescription = _a.ariaDescription, leadingButtonIcon = _a.leadingButtonIcon, dataTestId = _a["data-testid"], ButtonComponent = _a.buttonComponent, _e = _a.dropdownTopSpacing, dropdownTopSpacing = _e === void 0 ? "spacing-56" : _e, flexWidth = _a.flexWidth, closeOnChange = _a.closeOnChange;
    var _f = __read(useState(false), 2), isOpen = _f[0], setIsOpen = _f[1];
    var dropdownRef = useRef(null);
    // Get all focusable elements within the dropdown
    var getFocusableElements = function () {
        if (!dropdownRef.current)
            return [];
        return Array.from(dropdownRef.current.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
    };
    var handleCloseOnChange = function () {
        if (closeOnChange) {
            setIsOpen(false);
        }
    };
    // Handle clicks  the dropdown to close it
    useEffect(function () {
        var handleKeyDown = function (event) {
            var _a, _b;
            if (!isOpen)
                return;
            var focusableElements = getFocusableElements();
            var currentIndex = focusableElements.indexOf(document.activeElement);
            switch (event.key) {
                case "Escape": {
                    event.preventDefault();
                    setIsOpen(false);
                    break;
                }
                case "ArrowDown": {
                    event.preventDefault();
                    if (focusableElements.length === 0)
                        return;
                    var nextDownIndex = currentIndex >= focusableElements.length - 1 ? 0 : currentIndex + 1;
                    (_a = focusableElements[nextDownIndex]) === null || _a === void 0 ? void 0 : _a.focus();
                    break;
                }
                case "ArrowUp": {
                    event.preventDefault();
                    if (focusableElements.length === 0)
                        return;
                    var nextUpIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
                    (_b = focusableElements[nextUpIndex]) === null || _b === void 0 ? void 0 : _b.focus();
                    break;
                }
                case "Enter": {
                    handleCloseOnChange();
                    break;
                }
                case "Return": {
                    handleCloseOnChange();
                    break;
                }
                case " ": {
                    handleCloseOnChange();
                    break;
                }
            }
        };
        var handleClick = function (event) {
            if (dropdownRef.current &&
                (!dropdownRef.current.contains(event.target) || !!closeOnChange)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClick);
            document.addEventListener("keydown", handleKeyDown);
        }
        return function () {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, dataTestId]);
    var handlePrimaryAction = function () {
        setIsOpen(!isOpen);
        onPrimaryAction === null || onPrimaryAction === void 0 ? void 0 : onPrimaryAction();
    };
    return (React__default.createElement(OakBox, { as: "section", "aria-label": ariaLabel, "aria-describedby": ariaDescription ? "".concat(dataTestId, "-description") : undefined, "data-testid": dataTestId, ref: dropdownRef, "$position": "relative" },
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-12" },
            React__default.createElement(OakFlex, { "$width": flexWidth, "$gap": "spacing-12" },
                React__default.createElement(ButtonComponent, { iconName: primaryActionIcon, isTrailingIcon: true, onClick: handlePrimaryAction, isLoading: isLoading, disabled: disabled, width: "max-content", "aria-expanded": isOpen, "aria-haspopup": "menu", "aria-label": primaryActionText, "data-testid": dataTestId ? "".concat(dataTestId, "-primary-action") : undefined },
                    React__default.createElement(OakFlex, { "$alignItems": "center" },
                        leadingButtonIcon,
                        primaryActionText))),
            isOpen && (React__default.createElement(OakBox, { "$background": "bg-primary", "$borderRadius": "border-radius-s", "$ba": "border-solid-m", "$borderColor": "border-primary", "$pa": "spacing-8", "$position": "absolute", "$top": dropdownTopSpacing, "$zIndex": "modal-close-button", role: "menu", "aria-label": "Dropdown menu. Use arrow keys to navigate, Tab to cycle through items, Escape to close.", "data-testid": dataTestId ? "".concat(dataTestId, "-dropdown") : undefined },
                React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-8" }, children))))));
};
OakButtonWithDropdown.Divider = function () { return (React__default.createElement(OakBox, { "$height": "spacing-0", "$width": "100%", "$bt": "border-solid-s", "$borderColor": "border-neutral-lighter", "aria-hidden": "true" })); };
OakButtonWithDropdown.Item = function (_a) {
    var children = _a.children; _a.element; var rest = __rest(_a, ["children", "element"]);
    return (React__default.createElement(OakSecondaryButton, __assign({ element: "a", role: "menuitem", isTrailingIcon: true }, rest), children));
};

export { OakButtonWithDropdown };
