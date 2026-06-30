import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { responsiveStyle } from './responsiveStyle.js';
import { parseSpacing } from '../helpers/parseSpacing.js';

var paddingAll = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("padding", function (props) { return props.$pa; }, parseSpacing));
var paddingHorizontal = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("padding-left", function (props) { return props.$ph; }, parseSpacing), responsiveStyle("padding-right", function (props) { return props.$ph; }, parseSpacing));
var paddingVertical = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("padding-top", function (props) { return props.$pv; }, parseSpacing), responsiveStyle("padding-bottom", function (props) { return props.$pv; }, parseSpacing));
var paddingLeft = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("padding-left", function (props) { return props.$pl; }, parseSpacing));
var paddingRight = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("padding-right", function (props) { return props.$pr; }, parseSpacing));
var paddingTop = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("padding-top", function (props) { return props.$pt; }, parseSpacing));
var paddingBottom = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("padding-bottom", function (props) { return props.$pb; }, parseSpacing));
var marginAll = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("margin", function (props) { return props.$ma; }, parseSpacing));
var marginHorizontal = css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("margin-left", function (props) { return props.$mh; }, parseSpacing), responsiveStyle("margin-right", function (props) { return props.$mh; }, parseSpacing));
var marginVertical = css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("margin-top", function (props) { return props.$mv; }, parseSpacing), responsiveStyle("margin-bottom", function (props) { return props.$mv; }, parseSpacing));
var marginLeft = css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("margin-left", function (props) { return props.$ml; }, parseSpacing));
var marginRight = css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("margin-right", function (props) { return props.$mr; }, parseSpacing));
var marginTop = css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("margin-top", function (props) { return props.$mt; }, parseSpacing));
var marginBottom = css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("margin-bottom", function (props) { return props.$mb; }, parseSpacing));
var marginStyle = css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), marginAll, marginHorizontal, marginVertical, marginLeft, marginRight, marginTop, marginBottom);
var paddingStyle = css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), paddingAll, paddingHorizontal, paddingVertical, paddingLeft, paddingRight, paddingTop, paddingBottom);
var spacingStyle = css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), paddingStyle, marginStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

export { marginStyle, paddingStyle, spacingStyle };
