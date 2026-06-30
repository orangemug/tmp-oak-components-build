import { __makeTemplateObject, __read, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { InternalShadowRoundButton } from '../../internal-components/InternalShadowRoundButton/InternalShadowRoundButton.js';
import { oakBoxCss, OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { FocusOn } from '../../../../node_modules/.pnpm/react-focus-on@3.10.2_@types_react@18.2.47_react@18.2.0/node_modules/react-focus-on/dist/es2015/Combination.js';
import Transition from '../../../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/Transition.js';

var FocusOnBox = styled(FocusOn)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), oakBoxCss);
var BlurredOakBox = styled(OakBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  backdrop-filter: blur(3px);\n"], ["\n  backdrop-filter: blur(3px);\n"])));
var FadeInFlex = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  opacity: ", ";\n  transition: opacity 0s;\n"], ["\n  opacity: ", ";\n  transition: opacity 0s;\n"])), function (_a) {
    var $state = _a.$state;
    switch ($state) {
        case "entered":
        case "entering":
            return "1";
        default:
            return "0";
    }
});
/**
 * Centered modal dialog with trapped focus, close button, backdrop click, and escape key handling.
 *
 * ## Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onClose** \-                 Called when the modal is closed via the close button, backdrop click, or escape key
 * - **children** \-                The content of the modal. Use with `<OakModalCenterBody>` for best results.
 * - **domContainer** \-            The DOM container to render the modal portal into.
 * - **disableBackdropClick?** \-   If true, clicking the backdrop will not call onClose
 * - **disableEscapeKey?** \-       If true, pressing the escape key will not call onClose
 * - **hideCloseButton?** \-        If true, the close button will be hidden
 * - **modalFlexProps?** \-         Override HTMLAttributes & OakFlex props for the modal container
 * - **modalOuterFlexProps?** \-    Override HTMLAttributes & OakFlex props for the outer modal container
 * - **modalInnerFlexProps?** \-    Override HTMLAttributes & OakFlex props for the inner modal container
 * - **backdropFlexProps?** \-      Override HTMLAttributes & OakFlex props for the backdrop container
 * - **footerSlot?** \-             Fixed area at the bottom of the modal, this will remain fixed in view if the content is scrollable
 */
var OakModalCenter = function (_a) {
    var children = _a.children, domContainer = _a.domContainer, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? function () { } : _b, _c = _a.disableBackdropClick, disableBackdropClick = _c === void 0 ? false : _c, _d = _a.disableEscapeKey, disableEscapeKey = _d === void 0 ? false : _d, _e = _a.hideCloseButton, hideCloseButton = _e === void 0 ? false : _e, modalFlexProps = _a.modalFlexProps, modalOuterFlexProps = _a.modalOuterFlexProps, modalInnerFlexProps = _a.modalInnerFlexProps, backdropFlexProps = _a.backdropFlexProps, footerSlot = _a.footerSlot, returnFocus = _a.returnFocus;
    var _f = __read(useState({
        top: false,
        bottom: false,
    }), 2), scrollBorders = _f[0], setScrollBorders = _f[1];
    var transitionRef = useRef(null);
    var scrollBoxRef = useRef(null);
    var checkForScroll = useCallback(function () {
        // To show some borders when the content is scrollable
        var scrollBoxElem = scrollBoxRef.current;
        if (!scrollBoxElem) {
            return;
        }
        if (scrollBoxElem.scrollHeight > scrollBoxElem.clientHeight) {
            scrollBoxRef.current.tabIndex = 0;
        }
        setScrollBorders({
            top: scrollBoxElem.scrollTop > 0,
            bottom: scrollBoxElem.scrollHeight > scrollBoxElem.clientHeight,
        });
    }, []);
    useLayoutEffect(function () {
        var _a;
        checkForScroll();
        (_a = scrollBoxRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", checkForScroll);
        return function () {
            var _a;
            (_a = scrollBoxRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", checkForScroll);
        };
    }, [isOpen]);
    useEffect(function () {
        window.addEventListener("resize", checkForScroll);
        return function () {
            window.removeEventListener("resize", checkForScroll);
        };
    });
    var isClientSide = typeof window !== "undefined";
    var modal = (React__default.createElement(Transition, { in: isOpen, nodeRef: transitionRef, addEndListener: function (done) {
            var _a;
            (_a = transitionRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("transitionend", done);
        }, timeout: 0, mountOnEnter: true, unmountOnExit: true }, function (state) { return (React__default.createElement(FadeInFlex, { ref: transitionRef, "$state": state, "$position": "fixed", "$inset": "spacing-0", "$justifyContent": "center", "$alignItems": "center", "$zIndex": "modal-dialog" },
        React__default.createElement(BlurredOakBox, __assign({ "$position": "fixed", "$inset": "spacing-0", "$zIndex": "behind", "$background": "bg-inverted-semi-transparent", "data-testid": "backdrop" }, backdropFlexProps)),
        React__default.createElement(OakFlex, __assign({ "$alignItems": "center", "$justifyContent": "center", "$maxWidth": "spacing-960", "$width": "100%", "$pa": "spacing-20" }, modalOuterFlexProps),
            React__default.createElement(FocusOnBox, { onEscapeKey: function () { return !disableEscapeKey && onClose(); }, onClickOutside: function () { return !disableBackdropClick && onClose(); }, returnFocus: returnFocus !== null && returnFocus !== void 0 ? returnFocus : true, autoFocus: true, "$width": "100%" },
                React__default.createElement(OakFlex, __assign({ "$flexDirection": "column", "$background": "bg-primary", "$borderRadius": "border-radius-l", "$width": "100%", "$position": "relative", role: "alertdialog", style: {
                        maxHeight: "calc(100vh - ".concat(parseSpacing("spacing-56"), " - ").concat(parseSpacing("spacing-56"), ")"),
                    } }, modalFlexProps),
                    React__default.createElement(OakBox, { "$minHeight": "spacing-56", "$position": "relative" }, !hideCloseButton && (React__default.createElement(OakBox, { "$position": "absolute", "$top": "spacing-12", "$right": "spacing-12" },
                        React__default.createElement(InternalShadowRoundButton, { onClick: onClose, "aria-label": "Close Modal", defaultIconBackground: "transparent", defaultIconColor: "icon-primary", defaultTextColor: "transparent", hoverTextColor: "transparent", disabledTextColor: "transparent", hoverIconBackground: "icon-primary", hoverIconColor: "icon-inverted", disabledIconBackground: "transparent", iconBackgroundSize: "spacing-32", iconSize: "spacing-32", iconName: "cross", "data-testid": "close-button" })))),
                    React__default.createElement("div", { style: { display: "contents" }, "data-autofocus-inside": true },
                        React__default.createElement(OakFlex, __assign({ ref: scrollBoxRef, "data-testid": "modal-main-content", "$overflow": "auto", "$flexDirection": "column", "$ph": "spacing-56", "$bt": scrollBorders.top ? "border-solid-s" : "border-solid-none", "$bb": scrollBorders.bottom
                                ? "border-solid-s"
                                : "border-solid-none", "$borderColor": "border-neutral-lighter" }, modalInnerFlexProps), children),
                        footerSlot)))))); }));
    if (domContainer && isClientSide) {
        return createPortal(modal, domContainer);
    }
    else {
        return modal;
    }
};
var templateObject_1, templateObject_2, templateObject_3;

export { OakModalCenter };
