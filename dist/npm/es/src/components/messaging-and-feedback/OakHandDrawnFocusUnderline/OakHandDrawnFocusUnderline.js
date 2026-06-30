import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { HandDrawnFocusUnderlineSvg } from './SubHandDrawnFocusUnderline.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var StyledOakFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/**
 * A Drawn FocusUnderline svg inside a flex container
 *
 * use prop FocusUnderlineColor to change the color of the FocusUnderline
 *
 * change the sizeProps of the flex container to change the size and dimentions of the FocusUnderline
 */
var OakHandDrawnFocusUnderline = function (props) {
    var FocusUnderlineColor = props.FocusUnderlineColor, flexProps = __rest(props, ["FocusUnderlineColor"]);
    return (React__default.createElement(StyledOakFlex, __assign({}, flexProps),
        React__default.createElement(HandDrawnFocusUnderlineSvg, { "$fill": FocusUnderlineColor })));
};
var templateObject_1;

export { OakHandDrawnFocusUnderline };
