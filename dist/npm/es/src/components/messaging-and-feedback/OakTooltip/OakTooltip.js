import { __rest, __read, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { InternalTooltip } from '../../internal-components/InternalTooltip/InternalTooltip.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

/**
 * A tooltip with oven-ready styling and positioning.
 */
var OakTooltip = function (_a) {
    var _b;
    var tooltipPosition = _a.tooltipPosition, children = _a.children, tooltip = _a.tooltip, isOpen = _a.isOpen, domContainer = _a.domContainer, props = __rest(_a, ["tooltipPosition", "children", "tooltip", "isOpen", "domContainer"]);
    var _c = __read(useState(null), 2), targetElement = _c[0], setTargetElement = _c[1];
    var _d = __read(useState(true), 2), isIntersecting = _d[0], setIsIntersecting = _d[1];
    var _e = __read(useState(domContainer), 2), domContainerState = _e[0], setDomContainerState = _e[1];
    var isVisible = isOpen && isIntersecting;
    /**
     * The overlay is positioned on top of the target element in a portal.
     * It tracks the target's size and position.
     *
     * we use it to position the tooltip relative to the target element without interfering
     * with the page layout
     */
    var _f = __read(useState(), 2), overlayStyle = _f[0], setOverlayStyle = _f[1];
    var squaredCornerRadiusProp = (function () {
        switch (tooltipPosition) {
            case "bottom-right":
                return "$btrr";
            case "top-right":
                return "$bbrr";
            case "top-left":
                return "$bblr";
            default:
                return "$btlr";
        }
    })();
    var borderRadiusProps = (_b = {
            $borderRadius: "border-radius-m"
        },
        _b[squaredCornerRadiusProp] = "border-radius-square",
        _b);
    useLayoutEffect(function () {
        if (!targetElement) {
            return;
        }
        var ticking = false;
        var updateOverlayStyle = function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    ticking = false;
                    var rect = targetElement.getBoundingClientRect();
                    setOverlayStyle({
                        top: rect.top,
                        left: rect.left,
                        width: rect.width,
                        height: rect.height,
                    });
                });
                ticking = true;
            }
        };
        // We use an intersection observer to detect when the target element is no longer visible
        var intersection = new IntersectionObserver(function (entries) {
            setIsIntersecting(entries.every(function (entry) { return entry.isIntersecting; }));
        });
        intersection.observe(targetElement);
        // We use a resize observer to detect when the target element's size changes
        var resize = new ResizeObserver(updateOverlayStyle);
        resize.observe(targetElement);
        // Update the overlay position on scroll and resize
        window.addEventListener("scroll", updateOverlayStyle, true);
        window.addEventListener("resize", updateOverlayStyle);
        return function () {
            resize.disconnect();
            intersection.disconnect();
            window.removeEventListener("scroll", updateOverlayStyle, true);
            window.removeEventListener("resize", updateOverlayStyle);
        };
    }, [targetElement]);
    useLayoutEffect(function () {
        if (domContainerState) {
            return;
        }
        setDomContainerState(document.body);
    }, [domContainerState]);
    return (React__default.createElement(React__default.Fragment, null,
        domContainerState &&
            createPortal(isVisible && (React__default.createElement(OakBox, { "$position": "fixed", style: overlayStyle, "$pointerEvents": "none", "$zIndex": "modal-dialog" },
                React__default.createElement(OakBox, __assign({ "$width": "fit-content", "$height": "fit-content", "$position": "absolute" }, getTooltipPositionProps(tooltipPosition)),
                    React__default.createElement(InternalTooltip, __assign({ "$background": "bg-decorative5-main", "$color": "text-primary", "$pv": "spacing-16", "$ph": "spacing-24", "$font": "heading-light-7", tooltipPosition: tooltipPosition, "aria-expanded": isVisible }, borderRadiusProps, props), tooltip)))), domContainerState),
        React__default.createElement("div", { ref: function (domElement) {
                var _a;
                setTargetElement((_a = domElement === null || domElement === void 0 ? void 0 : domElement.firstElementChild) !== null && _a !== void 0 ? _a : null);
            }, style: { display: "contents" } }, children)));
};
function getTooltipPositionProps(tooltipPosition) {
    var props = {};
    switch (tooltipPosition) {
        case "top-left":
        case "top-right":
            props.$top = "spacing-0";
            props.$transform = "translateY(calc(-100% - ".concat(parseSpacing("spacing-16"), "))");
            break;
        default:
            props.$bottom = "spacing-0";
            props.$transform = "translateY(calc(100% + ".concat(parseSpacing("spacing-16"), "))");
            break;
    }
    switch (tooltipPosition) {
        case "top-left":
        case "bottom-left":
            props.$left = "spacing-0";
            break;
        default:
            props.$right = "spacing-0";
            break;
    }
    return props;
}

export { OakTooltip };
