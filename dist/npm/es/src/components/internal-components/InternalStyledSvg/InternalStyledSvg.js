import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseBorderWidth } from '../../../styles/helpers/parseBorderWidth.js';

var colorFillStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), responsiveStyle("fill", function (props) { return props.$fill; }, parseColor));
/**
 * A styled SVG element with props to apply design tokens to the fill and stroke.
 */
var InternalStyledSvg = styled.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n    ", "\n"], ["\n  ", "\n  ", "\n    ", "\n"])), colorFillStyle, responsiveStyle("stroke", function (props) { return props.$stroke; }, parseColor), responsiveStyle("stroke-width", function (props) { return props.$strokeWidth; }, parseBorderWidth));
var templateObject_1, templateObject_2;

export { InternalStyledSvg, colorFillStyle };
