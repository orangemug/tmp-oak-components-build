import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakLabel } from '../../form-elements/OakLabel/OakLabel.js';

var StyledTimeBox = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 0.9;\n  padding-left: 2px;\n  padding-right: 2px;\n"], ["\n  opacity: 0.9;\n  padding-left: 2px;\n  padding-right: 2px;\n"])));
var formatTimeCode = function (seconds) {
    var totalSeconds = Math.floor(seconds);
    var minutes = Math.floor(totalSeconds / 60);
    var remainingSeconds = totalSeconds % 60;
    return "".concat(String(minutes).padStart(2, "0"), ":").concat(String(remainingSeconds).padStart(2, "0"));
};
var OakTimer = function (props) {
    var timeCode = props.timeCode, oakBoxProps = __rest(props, ["timeCode"]);
    return (React__default.createElement(StyledTimeBox, __assign({ "$color": "text-inverted", "$borderRadius": "border-radius-xs", "$background": "icon-primary", "$font": ["body-4"] }, oakBoxProps),
        React__default.createElement(OakLabel, null, formatTimeCode(timeCode))));
};
var templateObject_1;
/**
 *
 * OakTimer component takes time in seconds and converts it to a minutes and seconds format
 *
 */

export { OakTimer, formatTimeCode };
