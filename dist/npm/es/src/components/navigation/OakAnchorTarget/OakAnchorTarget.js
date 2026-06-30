import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';

/**
 *  * AnchorTarget is a component to enable in-page linking to a particular section
 *
 * Styled `span` component.
 *
 * ## Usage
 *
 * Drop AnchorTarget inside a relative or absolulely positioned element without content, passing
 * it a unique 'id'. Then link it elsewhere using `<a href='#${id}' />`.
 *
 * */
var OakAnchorTarget = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  ", "\n"])), responsiveStyle("scroll-margin-top", function (props) { return props.$pt; }, parseSpacing));
var templateObject_1;

export { OakAnchorTarget };
