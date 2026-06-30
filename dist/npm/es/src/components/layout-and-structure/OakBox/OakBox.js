import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';
import { colorStyle } from '../../../styles/utils/colorStyle.js';
import { positionStyle } from '../../../styles/utils/positionStyle.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';
import { spacingStyle } from '../../../styles/utils/spacingStyle.js';
import { borderStyle } from '../../../styles/utils/borderStyle.js';
import { displayStyle } from '../../../styles/utils/displayStyle.js';
import { dropShadowStyle } from '../../../styles/utils/dropShadowStyle.js';
import { opacityStyle } from '../../../styles/utils/opacityStyle.js';
import { transformStyle } from '../../../styles/utils/transformStyle.js';
import { transitionStyle } from '../../../styles/utils/transitionStyle.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';
import { zIndexStyle } from '../../../styles/utils/zIndexStyle.js';
import { scrollSnapStyle } from '../../../styles/utils/scrollSnapStyle.js';

var oakBoxCss = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), positionStyle, sizeStyle, spacingStyle, colorStyle, borderStyle, displayStyle, dropShadowStyle, opacityStyle, transformStyle, transitionStyle, typographyStyle, zIndexStyle, scrollSnapStyle, function (props) {
    /* onClick might be passed in the useClickableCard pattern */
    return props.onClick && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :hover {\n        cursor: pointer;\n      }\n    "], ["\n      :hover {\n        cursor: pointer;\n      }\n    "])));
});
/**
 * OakBox exposes all the styles that are available styles on a div tag. These include:
 * - color
 * - size
 * - display
 * - spacing
 * - position
 * - border
 * - opacity
 * - z-index
 * - typography
 * - transition
 * - transform
 * - drop-shadow
 * - scroll-margin-top/left
 *
 */
var OakBox = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), oakBoxCss);
var templateObject_1, templateObject_2, templateObject_3;

export { OakBox, oakBoxCss };
