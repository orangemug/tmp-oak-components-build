import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { responsiveStyle } from './responsiveStyle.js';
import { parseSpacing } from '../helpers/parseSpacing.js';

var scrollMarginTop = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("scroll-margin-top", function (props) { return props.$scrollMarginTop; }, parseSpacing));
var scrollMarginLeft = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("scroll-margin-left", function (props) { return props.$scrollMarginLeft; }, parseSpacing));
var scrollSnapStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), scrollMarginTop, scrollMarginLeft);
var templateObject_1, templateObject_2, templateObject_3;

export { scrollSnapStyle };
