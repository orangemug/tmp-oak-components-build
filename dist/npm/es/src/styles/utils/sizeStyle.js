import { __makeTemplateObject } from '../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { css } from 'styled-components';
import { responsiveStyle } from './responsiveStyle.js';
import { parseSpacing } from '../helpers/parseSpacing.js';

var sizeStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), responsiveStyle("width", function (props) { return props.$width; }, parseSpacing), responsiveStyle("min-width", function (props) { return props.$minWidth; }, parseSpacing), responsiveStyle("max-width", function (props) { return props.$maxWidth; }, parseSpacing), responsiveStyle("height", function (props) { return props.$height; }, parseSpacing), responsiveStyle("min-height", function (props) { return props.$minHeight; }, parseSpacing), responsiveStyle("max-height", function (props) { return props.$maxHeight; }, parseSpacing), responsiveStyle("aspect-ratio", function (props) { return props.$aspectRatio; }), responsiveStyle("box-sizing", function (props) { return props.$boxSizing; }));
var templateObject_1;

export { sizeStyle };
