import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';

var oakAspectRatioPercentage = {
    "16:9": 56.25,
    "3:2": 66.66,
    "1:1": 100,
    "2:3": 150,
    "7:8": 114,
};
var parseRatioToPercentage = function (ratio) {
    return ratio ? "".concat(oakAspectRatioPercentage[ratio], "%") : undefined;
};
var OakAspectRatioOuter = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 0;\n  position: relative;\n  ", "\n"], ["\n  width: 100%;\n  height: 0;\n  position: relative;\n  ", "\n"])), responsiveStyle("padding-top", function (props) { return props.ratio; }, parseRatioToPercentage));
var OakAspectRatioInner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  top: 0;\n"], ["\n  display: flex;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  top: 0;\n"])));
/**
 *
 * AspectRatio provides a container of fixed aspect ratio
 *
 * ⚠️ To be deprecated
 * @deprecated
 *
 * ## Usage
 * Use this component when you want to ensure a box has a certain aspect ratio.
 * Wrap with component with <code>position: relative</code> and a width or min-width
 * The 'ratio' prop is responsive, so you can pass an array e.g. <code>["3:2", "16:9"]</code>
 * which will result in different aspect ratios on different screen widths.
 * For an example usage, see the <code>CardImage</code> component.
 */
var OakAspectRatio = function (props) {
    var children = props.children, ratio = props.ratio, htmlAttrs = __rest(props, ["children", "ratio"]);
    return (React__default.createElement(OakAspectRatioOuter, __assign({ ratio: ratio }, htmlAttrs),
        React__default.createElement(OakAspectRatioInner, null, children)));
};
var templateObject_1, templateObject_2;

export { OakAspectRatio };
