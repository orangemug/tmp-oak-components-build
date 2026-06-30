import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import InternalSlideInFlex from '../InternalSlideInFlex/InternalSlideInFlex.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { parseOpacity } from '../../../styles/helpers/parseOpacity.js';
import Transition from '../../../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-group/esm/Transition.js';
import { FocusOn } from '../../../../node_modules/.pnpm/react-focus-on@3.10.2_@types_react@18.2.47_react@18.2.0/node_modules/react-focus-on/dist/es2015/Combination.js';

var FadeOutBox = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: ", ";\n  background-color: black;\n  position: fixed;\n  inset: 0;\n  transition: ease;\n"], ["\n  opacity: ", ";\n  background-color: black;\n  position: fixed;\n  inset: 0;\n  transition: ease;\n"])), function (_a) {
    var $state = _a.$state;
    switch ($state) {
        case "entered":
        case "entering":
            return parseOpacity("semi-transparent");
        default:
            return parseOpacity("transparent");
    }
});
var InternalModalTransition = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, transitionRef = _a.transitionRef, onClose = _a.onClose, finalZIndex = _a.finalZIndex, isLeftHandSide = _a.isLeftHandSide, _b = _a.closeOnBackgroundClick, closeOnBackgroundClick = _b === void 0 ? false : _b, largeScreenMaxWidth = _a.largeScreenMaxWidth, rest = __rest(_a, ["children", "isOpen", "transitionRef", "onClose", "finalZIndex", "isLeftHandSide", "closeOnBackgroundClick", "largeScreenMaxWidth"]);
    return (React__default.createElement(Transition, { in: isOpen, nodeRef: transitionRef, addEndListener: function (done) {
            var _a;
            (_a = transitionRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("transitionend", done);
        }, timeout: 500, mountOnEnter: true, unmountOnExit: true }, function (state) { return (React__default.createElement(FocusOn, { onEscapeKey: onClose, returnFocus: true, autoFocus: true, preventScrollOnFocus: true },
        React__default.createElement(FadeOutBox, { "$zIndex": finalZIndex, "$state": state, onClick: closeOnBackgroundClick ? onClose : undefined }),
        React__default.createElement(InternalSlideInFlex, __assign({ isLeftHandSide: isLeftHandSide, ref: transitionRef, "$zIndex": finalZIndex, "$state": state, "aria-modal": true, largeScreenMaxWidth: largeScreenMaxWidth }, rest), children))); }));
};
var templateObject_1;

export { InternalModalTransition as default };
