import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';
import { borderStyle } from '../../../styles/utils/borderStyle.js';
import { spacingStyle } from '../../../styles/utils/spacingStyle.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';
import { positionStyle } from '../../../styles/utils/positionStyle.js';
import { colorStyle } from '../../../styles/utils/colorStyle.js';

var textAreaCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  resize: none;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  resize: none;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), sizeStyle, borderStyle, spacingStyle, typographyStyle, positionStyle, colorStyle);
var UnstyledOakTextArea = forwardRef(function (props, ref) {
    return React__default.createElement("textarea", __assign({ ref: ref }, props));
});
/**
 *
 * A textarea that can be used for longer text inputs where text should wrap.
 *
 */
var OakTextArea = styled(UnstyledOakTextArea)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), textAreaCss);
var templateObject_1, templateObject_2;

export { OakTextArea };
