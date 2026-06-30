import { __makeTemplateObject, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { InternalShadowIconButton } from '../../internal-components/InternalShadowIconButton/InternalShadowIconButton.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseOpacity } from '../../../styles/helpers/parseOpacity.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import Transition from '../../../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/Transition.js';

var SuccessIconBackground = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  top: 6px;\n  left: 6px;\n"], ["\n  top: 6px;\n  left: 6px;\n"])));
var SuccessIcon = (React__default.createElement(OakBox, { "$position": "relative" },
    React__default.createElement(SuccessIconBackground, { "$width": "spacing-20", "$height": "spacing-20", "$background": "bg-primary", "$borderRadius": "border-radius-circle", "$position": "absolute" }),
    React__default.createElement(OakIcon, { iconName: "success", "$width": "spacing-32", "$height": "spacing-32" })));
var variants = {
    green: {
        background: "bg-decorative1-main",
        icon: SuccessIcon,
        color: "text-primary",
    },
    yellow: {
        background: "bg-decorative5-main",
        icon: SuccessIcon,
        color: "text-primary",
    },
    pink: {
        background: "bg-decorative4-main",
        icon: SuccessIcon,
        color: "text-primary",
    },
    blue: {
        background: "bg-decorative3-main",
        icon: SuccessIcon,
        color: "text-primary",
    },
    aqua: {
        background: "bg-decorative2-main",
        icon: SuccessIcon,
        color: "text-primary",
    },
    light: {
        background: "bg-primary",
        icon: SuccessIcon,
        color: "text-primary",
    },
    dark: {
        background: "bg-inverted",
        icon: SuccessIcon,
        color: "text-inverted",
    },
    error: {
        background: "bg-error",
        icon: (React__default.createElement(OakIcon, { iconName: "warning", "$colorFilter": "text-inverted", "$height": "spacing-32", "$width": "spacing-32" })),
        color: "text-inverted",
    },
    success: {
        background: "bg-success",
        icon: SuccessIcon,
        color: "text-inverted",
    },
};
var StyledFlex = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: ", ";\n  transition: opacity 0.3s ease-in-out;\n"], ["\n  opacity: ", ";\n  transition: opacity 0.3s ease-in-out;\n"])), function (_a) {
    var $state = _a.$state;
    switch ($state) {
        case "exiting":
        case "entering":
            return parseOpacity("semi-transparent");
        case "exited":
            return parseOpacity("transparent");
        case "entered":
            return parseOpacity("opaque");
        default:
            return parseOpacity("transparent");
    }
});
var OakToast = function (_a) {
    var message = _a.message, variant = _a.variant, _b = _a.autoDismiss, autoDismiss = _b === void 0 ? false : _b, _c = _a.autoDismissDuration, autoDismissDuration = _c === void 0 ? 5000 : _c, showIcon = _a.showIcon, onClose = _a.onClose, id = _a.id, _d = _a.showClose, showClose = _d === void 0 ? false : _d;
    var _e = __read(useState(true), 2), isVisible = _e[0], setIsVisible = _e[1];
    useEffect(function () {
        if (autoDismiss && isVisible) {
            var timer_1 = setTimeout(function () {
                setIsVisible(false);
            }, Math.max(5000, autoDismissDuration));
            return function () { return clearTimeout(timer_1); };
        }
    }, [autoDismiss, autoDismissDuration, isVisible, id]);
    var transitionRef = useRef(null);
    var _f = variants[variant], background = _f.background, icon = _f.icon, color = _f.color;
    return (React__default.createElement(Transition, { nodeRef: transitionRef, in: isVisible, timeout: 300, appear: true, onExited: onClose }, function (state) { return (React__default.createElement(StyledFlex, { "data-testid": "oak-toast", "$pa": "spacing-16", "$borderRadius": "border-radius-m2", "$background": background, "$state": state, "$width": "max-content", "$maxWidth": ["spacing-240", "spacing-360"], "$gap": "spacing-12", "$dropShadow": "drop-shadow-standard", "$alignItems": "center", "$font": "heading-light-7", "$color": color, "$position": "relative" },
        showIcon && icon,
        message,
        (!autoDismiss || showClose) && (React__default.createElement(InternalShadowIconButton, { "aria-label": "Dismiss", defaultIconColor: color, defaultTextColor: "transparent", hoverTextColor: "transparent", disabledTextColor: "transparent", hoverIconColor: color, iconName: "cross", onClick: function () { return setIsVisible(false); } })))); }));
};
var templateObject_1, templateObject_2;

export { OakToast };
