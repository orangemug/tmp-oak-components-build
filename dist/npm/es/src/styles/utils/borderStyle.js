import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { parseColor } from '../helpers/parseColor.js';
import { parseBorder } from '../helpers/parseBorder.js';
import { parseBorderRadius } from '../helpers/parseBorderRadius.js';
import { responsiveStyle } from './responsiveStyle.js';

var borderAll = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border", function (props) { return props.$ba; }, parseBorder));
var borderTop = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-top", function (props) { return props.$bt; }, parseBorder));
var borderRight = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-right", function (props) { return props.$br; }, parseBorder));
var borderBottom = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-bottom", function (props) { return props.$bb; }, parseBorder));
var borderLeft = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-left", function (props) { return props.$bl; }, parseBorder));
var borderHorizontal = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("border-left", function (props) { return props.$bh; }, parseBorder), responsiveStyle("border-right", function (props) { return props.$bh; }, parseBorder));
var borderVertical = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("border-top", function (props) { return props.$bv; }, parseBorder), responsiveStyle("border-bottom", function (props) { return props.$bv; }, parseBorder));
var borderColor = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-color", function (props) { return props.$borderColor; }, parseColor));
var borderRadius = css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-radius", function (props) { return props.$borderRadius; }, parseBorderRadius));
var borderRadiusTopLeft = css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-top-left-radius", function (props) { return props.$btlr; }, parseBorderRadius));
var borderRadiusTopRight = css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-top-right-radius", function (props) { return props.$btrr; }, parseBorderRadius));
var borderRadiusBottomLeft = css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-bottom-left-radius", function (props) { return props.$bblr; }, parseBorderRadius));
var borderRadiusBottomRight = css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("border-bottom-right-radius", function (props) { return props.$bbrr; }, parseBorderRadius));
var borderRadiusTop = css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("border-top-left-radius", function (props) { return props.$btr; }, parseBorderRadius), responsiveStyle("border-top-right-radius", function (props) { return props.$btr; }, parseBorderRadius));
var borderRadiusBottom = css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("border-bottom-left-radius", function (props) { return props.$bbr; }, parseBorderRadius), responsiveStyle("border-bottom-right-radius", function (props) { return props.$bbr; }, parseBorderRadius));
var borderStrokeStyle = css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), responsiveStyle("border-style", function (props) { return props.$borderStyle; }));
var borderStyle = css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), borderAll, borderTop, borderRight, borderBottom, borderLeft, borderHorizontal, borderVertical, borderColor, borderRadius, borderRadiusTopLeft, borderRadiusTopRight, borderRadiusBottomLeft, borderRadiusBottomRight, borderRadiusTop, borderRadiusBottom, borderStrokeStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

export { borderStyle };
