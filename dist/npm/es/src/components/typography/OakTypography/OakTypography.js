import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * The Typography component sets a typography style context from which children
 * inherit style properties through the cascade.
 * ## Usage
 * This should be the primary component to set a typography context.
 * Use this component whenever you want to style blocks of 'body' text.
 */
var OakTypography = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), typographyStyle);
var templateObject_1;

export { OakTypography };
