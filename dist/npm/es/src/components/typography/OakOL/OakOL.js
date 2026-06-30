import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { colorStyle } from '../../../styles/utils/colorStyle.js';
import { marginStyle } from '../../../styles/utils/spacingStyle.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';

/**
 * Styled `ol` (ordered list) component.
 *
 * ## Usage
 *
 * Use where we have an ordered list to ensure numbers are styled
 *
 * */
var OakOL = styled.ol(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  counter-reset: item;\n  padding: 0;\n\n  li {\n    display: block;\n    counter-increment: item;\n    margin: 0;\n    padding: 0 0 0 16px;\n    text-indent: -16px;\n    list-style-type: none;\n    line-height: 32px;\n\n    // Portable text generates linebreaks within list items\n\n    br {\n      content: \"\";\n      display: block;\n      margin-top: 8px;\n    }\n  }\n\n  & li::before {\n    padding-right: 4px;\n    content: counter(item) \".\";\n  }\n  a {\n    color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"], ["\n  counter-reset: item;\n  padding: 0;\n\n  li {\n    display: block;\n    counter-increment: item;\n    margin: 0;\n    padding: 0 0 0 16px;\n    text-indent: -16px;\n    list-style-type: none;\n    line-height: 32px;\n\n    // Portable text generates linebreaks within list items\n\n    br {\n      content: \"\";\n      display: block;\n      margin-top: 8px;\n    }\n  }\n\n  & li::before {\n    padding-right: 4px;\n    content: counter(item) \".\";\n  }\n  a {\n    color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"])), function (props) {
    return props.theme &&
        props.theme.uiColors &&
        props.theme.uiColors["text-link-active"];
}, marginStyle, colorStyle, typographyStyle);
var templateObject_1;

export { OakOL };
