import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import { OakCloseButton } from '../../buttons/OakCloseButton/OakCloseButton.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { useIsScrolled } from '../../../hooks/useIsScrolled.js';
import { useMounted } from '../../../hooks/useMounted.js';
import InternalModalTransition from '../../internal-components/InternalModalTransition/InternalModalTransition.js';

var OakInformativeModalBorderColor = createContext("border-neutral-lighter");
/**
 * Modal dialog with trapped focus and a close button. See the [design specification](https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=15135-2063)
 */
var OakInformativeModal = function (_a) {
    var children = _a.children, footerSlot = _a.footerSlot, domContainer = _a.domContainer, isOpen = _a.isOpen, onClose = _a.onClose, zIndex = _a.zIndex, isLeftHandSide = _a.isLeftHandSide, closeOnBackgroundClick = _a.closeOnBackgroundClick, largeScreenMaxWidth = _a.largeScreenMaxWidth, rest = __rest(_a, ["children", "footerSlot", "domContainer", "isOpen", "onClose", "zIndex", "isLeftHandSide", "closeOnBackgroundClick", "largeScreenMaxWidth"]);
    var transitionRef = useRef(null);
    var _b = useIsScrolled(), isScrolled = _b.isScrolled, ObserveScroll = _b.ObserveScroll;
    // `createPortal` is not supported in SSR so we can only render when mounted on the client
    var isMounted = useMounted();
    if (!isMounted) {
        return null;
    }
    var onCloseModal = function () {
        onClose();
    };
    var onCloseButton = function () {
        onClose("close_button");
    };
    var finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";
    return createPortal(React__default.createElement(OakInformativeModalBorderColor.Provider, { value: "border-neutral-lighter" },
        React__default.createElement(InternalModalTransition, __assign({ isOpen: isOpen, transitionRef: transitionRef, onClose: onCloseModal, finalZIndex: finalZIndex, isLeftHandSide: isLeftHandSide, closeOnBackgroundClick: closeOnBackgroundClick, largeScreenMaxWidth: largeScreenMaxWidth }, rest),
            React__default.createElement(OakFlex, { "$background": "bg-primary", "$flexDirection": "column", "$height": "100%" },
                React__default.createElement(OakFlex, { "$pa": "spacing-16", "$justifyContent": "flex-end", "$alignItems": "center" },
                    React__default.createElement(OakCloseButton, { onClose: onCloseButton })),
                React__default.createElement("div", { style: { display: "contents" }, "data-autofocus-inside": true },
                    React__default.createElement(OakFlex, { "$flexGrow": 1, "$flexDirection": "column", "$overflow": "auto", "$bt": "border-solid-s", "$borderColor": isScrolled ? "border-neutral-lighter" : "transparent" },
                        React__default.createElement(ObserveScroll, null, children)),
                    footerSlot)))), domContainer !== null && domContainer !== void 0 ? domContainer : document.body);
};

export { OakInformativeModal, OakInformativeModalBorderColor };
