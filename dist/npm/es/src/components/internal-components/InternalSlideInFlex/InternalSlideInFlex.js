import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

var SlideInFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: ", ";\n  transform: ", ";\n  ", "\n"], ["\n  max-width: ", ";\n  transform: ", ";\n  ", "\n"])), function (_a) {
    var isLeftHandSide = _a.isLeftHandSide;
    return isLeftHandSide ? "calc(100vw - ".concat(parseSpacing("spacing-20"), ")") : "100vw";
}, function (_a) {
    var $state = _a.$state, isLeftHandSide = _a.isLeftHandSide;
    switch ($state) {
        case "entered":
        case "entering":
            return "translateX(0)";
        default:
            return isLeftHandSide ? "translateX(-100%)" : "translateX(100%)";
    }
}, function (_a) {
    var isLeftHandSide = _a.isLeftHandSide, largeScreenMaxWidth = _a.largeScreenMaxWidth;
    return !isLeftHandSide &&
        "\n      @media (min-width: 768px) {\n        max-width: ".concat(largeScreenMaxWidth, "px;\n      }\n    ");
});
var InternalSlideInFlex = forwardRef(function (props, ref) {
    var finalZIndex = props.finalZIndex, state = props.state, isLeftHandSide = props.isLeftHandSide, children = props.children, _a = props.largeScreenMaxWidth, largeScreenMaxWidth = _a === void 0 ? 600 : _a, rest = __rest(props, ["finalZIndex", "state", "isLeftHandSide", "children", "largeScreenMaxWidth"]);
    return (React__default.createElement(SlideInFlex, __assign({ ref: ref, "$background": "bg-primary", "$right": !isLeftHandSide ? "spacing-0" : null, "$left": isLeftHandSide ? "spacing-0" : null, "$position": "fixed", "$bottom": "spacing-0", "$width": ["spacing-640"], "$top": "spacing-0", "$transition": "standard-ease", "$zIndex": finalZIndex, "$flexDirection": "column", "$state": state, "$color": "text-primary", role: "dialog", isLeftHandSide: isLeftHandSide, largeScreenMaxWidth: largeScreenMaxWidth }, rest), children));
});
var templateObject_1;

export { InternalSlideInFlex as default };
