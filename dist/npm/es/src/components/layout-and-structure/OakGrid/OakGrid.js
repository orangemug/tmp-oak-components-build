import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { OakBox } from '../OakBox/OakBox.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

var gridStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n    ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n    ", "\n"])), responsiveStyle("row-gap", function (props) { return props.$rg; }, parseSpacing), responsiveStyle("column-gap", function (props) { return props.$cg; }, parseSpacing), responsiveStyle("grid-auto-rows", function (props) { return props.$gridAutoRows; }), responsiveStyle("grid-template-areas", function (props) { return props.$gridTemplateAreas; }), responsiveStyle("grid-template-columns", function (props) { return props.$gridTemplateColumns; }), responsiveStyle("grid-template-rows", function (props) { return props.$gridTemplateRows; }));
/**
 * Creates a grid layout
 *
 * Defaults to a 12 column grid
 */
var OakGrid = styled(OakBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  width: 100%;\n\n  ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  width: 100%;\n\n  ", ";\n"])), gridStyle);
var templateObject_1, templateObject_2;

export { OakGrid };
