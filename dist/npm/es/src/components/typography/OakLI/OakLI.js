import { __assign, __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { oakBoxCss } from '../../layout-and-structure/OakBox/OakBox.js';
import { displayStyle } from '../../../styles/utils/displayStyle.js';
import { listStyle } from '../../../styles/utils/listStyle.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';
import { flexStyle } from '../../../styles/utils/flexStyle.js';

/**
 * Styled `li` (list item) component.
 *
 * ## Usage
 *
 * Places where we directly want to style a list item
 *
 **/
var oakLIDefaults = {
    $display: "revert",
};
var OakLI = styled.li.attrs(function (props) { return (__assign(__assign({}, oakLIDefaults), props)); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  // FIXME - Flex props will only work when display is set to flex, can we conditionally apply this + props above ?\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  // FIXME - Flex props will only work when display is set to flex, can we conditionally apply this + props above ?\n  ", "\n"])), oakBoxCss, typographyStyle, listStyle, displayStyle, flexStyle);
var templateObject_1;

export { OakLI, oakLIDefaults };
