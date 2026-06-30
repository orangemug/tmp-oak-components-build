import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { parseColor } from '../helpers/parseColor.js';
import { responsiveStyle } from './responsiveStyle.js';

var colorStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), responsiveStyle("color", function (props) { return props.$color; }, parseColor), responsiveStyle("background", function (props) { return props.$background; }, parseColor));
var templateObject_1;

export { colorStyle };
