import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

var StyledIconContainer = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  pointer-events: none;\n  opacity: 0;\n\n  input:checked + & {\n    opacity: 1;\n  }\n"], ["\n  pointer-events: none;\n  opacity: 0;\n\n  input:checked + & {\n    opacity: 1;\n  }\n"])));
/**
 *
 * This component is a wrapper for the InternalCheckBox component. It allows for customisable icons.
 *
 * NB. size must have the same value as the InternalCheckBox width and height
 *
 *
 */
var InternalCheckBoxWrapper = function (props) {
    var _a = props.size, size = _a === void 0 ? "spacing-24" : _a, _b = props.iconPadding, iconPadding = _b === void 0 ? "spacing-0" : _b, internalCheckbox = props.internalCheckbox, _c = props.checkedIcon, checkedIcon = _c === void 0 ? (React__default.createElement(OakIcon, { iconName: "tick", "$width": "100%", "$height": "100%", "$colorFilter": "icon-inverted" })) : _c;
    return (React__default.createElement(OakBox, { "$position": "relative", "$width": size, "$height": size },
        internalCheckbox,
        React__default.createElement(StyledIconContainer, { "$position": "absolute", "$top": "spacing-0", "$left": "spacing-0", "$pa": iconPadding, "$width": size, "$height": size }, checkedIcon)));
};
var templateObject_1;

export { InternalCheckBoxWrapper };
