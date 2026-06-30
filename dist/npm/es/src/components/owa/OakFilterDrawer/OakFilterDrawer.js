import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { InternalShadowRoundButton } from '../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { useIsScrolled } from '../../../hooks/useIsScrolled.js';
import { useMounted } from '../../../hooks/useMounted.js';
import InternalModalTransition from '../../internal-components/InternalModalTransition/InternalModalTransition.js';
import { OakLink } from '../../navigation/OakLink/OakLink.js';

/**
 *
 * Based on the OakModal component, this component is a filter drawer that slides in from the right side of the screen.
 * Designed for mobile and tablet devices
 *
 * ### Callbacks
 * clearAllInputs: used to clear filter options
 *
 */
var OakFilterDrawer = function (_a) {
    var isOpen = _a.isOpen, domContainer = _a.domContainer, onClose = _a.onClose, zIndex = _a.zIndex, children = _a.children, clearAllInputs = _a.clearAllInputs, footerSlot = _a.footerSlot, rest = __rest(_a, ["isOpen", "domContainer", "onClose", "zIndex", "children", "clearAllInputs", "footerSlot"]);
    var _b = useIsScrolled(), isScrolled = _b.isScrolled, ObserveScroll = _b.ObserveScroll;
    var transitionRef = useRef(null);
    var isMounted = useMounted();
    if (!isMounted) {
        return null;
    }
    var finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";
    return createPortal(React__default.createElement(InternalModalTransition, __assign({ isOpen: isOpen, transitionRef: transitionRef, onClose: onClose, finalZIndex: finalZIndex, isLeftHandSide: false }, rest),
        React__default.createElement(OakFlex, { "$ma": "spacing-24", "$justifyContent": "space-between", "$alignItems": "center" },
            React__default.createElement(OakLink, { variant: "secondary", onClick: clearAllInputs, "aria-label": "Clear", element: "button" }, "Clear"),
            React__default.createElement(OakHeading, { "$font": "heading-6", tag: "h3" }, "Filters"),
            React__default.createElement(InternalShadowRoundButton, { onClick: onClose, "aria-label": "Close", defaultIconBackground: "transparent", defaultIconColor: "icon-primary", defaultTextColor: "transparent", hoverTextColor: "transparent", disabledTextColor: "transparent", hoverIconBackground: "icon-primary", hoverIconColor: "icon-inverted", disabledIconBackground: "transparent", iconBackgroundSize: "spacing-24", iconSize: "spacing-24", iconName: "cross" })),
        React__default.createElement(OakFlex, { "$flexGrow": 1, "$flexDirection": "column", "$overflow": "auto", "$bt": "border-solid-s", "$borderColor": isScrolled ? "border-neutral-lighter" : "transparent" },
            React__default.createElement(ObserveScroll, null,
                React__default.createElement("div", { "data-autofocus-inside": true, tabIndex: -2 },
                    React__default.createElement(OakBox, { "$mh": "spacing-24" }, children)))),
        React__default.createElement(OakFlex, { "$flexDirection": ["column", "row"], "$bt": "border-solid-s", "$borderColor": "border-neutral-lighter", "$pa": "spacing-12", "$gap": ["spacing-16", "spacing-24"], "$width": "100%" }, footerSlot)), domContainer !== null && domContainer !== void 0 ? domContainer : document.body);
};

export { OakFilterDrawer };
