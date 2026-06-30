import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';
import { oakFlexCss } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { oakBoxCss } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * Styled `ul` (unordered list) component.
 *
 * ## Usage
 *
 * Resets browser spacing and other styles, accepts BoxProps' style props.
 *
 * */
var OakUL = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  margin: 0;\n  display: block;\n  ", "\n  ", "\n"], ["\n  ", "\n  margin: 0;\n  display: block;\n  ", "\n  ", "\n"])), function (props) {
    return props.$reset && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      list-style: none;\n      padding: 0;\n    "], ["\n      list-style: none;\n      padding: 0;\n    "])));
}, oakBoxCss, function (props) { return props.$display && oakFlexCss; });
var templateObject_1, templateObject_2;

export { OakUL };
