import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { HandDrawnHRSvg } from './HandDrawnHRSvg.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var StyledOakFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/**
 * A Drawn HR svg inside a flex container
 *
 * use prop hrColor to change the color of the HR
 *
 * change the sizeProps of the flex container to change the size and dimentions of the HR
 */
var OakHandDrawnHR = function (props) {
    var hrColor = props.hrColor, flexProps = __rest(props, ["hrColor"]);
    return (React__default.createElement(StyledOakFlex, __assign({ focusable: false }, flexProps),
        React__default.createElement(HandDrawnHRSvg, { "$fill": hrColor })));
};
var templateObject_1;

export { OakHandDrawnHR };
