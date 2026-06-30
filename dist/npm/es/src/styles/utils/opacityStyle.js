import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { parseOpacity } from '../helpers/parseOpacity.js';
import { responsiveStyle } from './responsiveStyle.js';

var opacityStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("opacity", function (props) { return props.$opacity; }, parseOpacity));
var templateObject_1;

export { opacityStyle };
