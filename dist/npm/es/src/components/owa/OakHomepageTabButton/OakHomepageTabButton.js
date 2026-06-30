import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { InternalButton } from '../../internal-components/InternalButton/InternalButton.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { OakPromoTag } from '../OakPromoTag/OakPromoTag.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { InternalStyledSvg } from '../../internal-components/InternalStyledSvg/InternalStyledSvg.js';
import { Underline } from '../../../svgs/underline.js';

var StyledButton = styled(InternalButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :hover .buttonText {\n    text-decoration: underline;\n    color: ", ";\n  }\n\n  :focus .focusUnderlineSvg {\n    display: block;\n    filter: ", "\n      drop-shadow(", ");\n    transform: rotate(-2deg);\n  }\n\n  :focus .activeUnderline {\n    display: none;\n  }\n\n  :focus .focusUnderline {\n    display: block;\n  }\n  .activeUnderlineSvg,\n  .focusUnderlineSvg {\n    position: absolute;\n    bottom: 0;\n  }\n"], ["\n  :hover .buttonText {\n    text-decoration: underline;\n    color: ", ";\n  }\n\n  :focus .focusUnderlineSvg {\n    display: block;\n    filter: ", "\n      drop-shadow(", ");\n    transform: rotate(-2deg);\n  }\n\n  :focus .activeUnderline {\n    display: none;\n  }\n\n  :focus .focusUnderline {\n    display: block;\n  }\n  .activeUnderlineSvg,\n  .focusUnderlineSvg {\n    position: absolute;\n    bottom: 0;\n  }\n"])), parseColor("text-primary"), parseColorFilter("icon-promo"), parseDropShadow("drop-shadow-black"));
var OakHomepageTabButton = function (props) {
    var _a = props.element, element = _a === void 0 ? "button" : _a, iconName = props.iconName, isActive = props.isActive, title = props.title, showNewIcon = props.showNewIcon, rest = __rest(props, ["element", "iconName", "isActive", "title", "showNewIcon"]);
    var color = isActive ? "text-primary" : "text-subdued";
    return (React__default.createElement(StyledButton, __assign({ element: element, "aria-current": isActive ? "page" : null, title: title, disabled: isActive }, rest),
        React__default.createElement(OakFlex, { "$height": "100%", "$flexDirection": "column", "$alignItems": "center", "$justifyContent": "space-between", "$gap": "spacing-16" },
            React__default.createElement(OakIcon, { "$width": ["spacing-48", "spacing-92", "spacing-92"], "$height": ["spacing-48", "spacing-92", "spacing-92"], iconName: iconName, "$colorFilter": color, alt: "" }),
            React__default.createElement(OakFlex, { "$alignItems": "center", "$justifyContent": "center", "$gap": "spacing-4", "$position": "relative", "$pb": ["spacing-12", "spacing-24"] },
                React__default.createElement(OakSpan, { className: "buttonText", "$font": ["body-3-bold", "heading-7"], "$color": color, "$textAlign": "center" }, title),
                showNewIcon && (React__default.createElement(OakPromoTag, { display: ["none", "flex"], width: "spacing-48" })),
                isActive && (React__default.createElement(OakBox, { className: "activeUnderline", "$position": "absolute", "$bottom": "spacing-0", "$width": "100%" },
                    React__default.createElement(InternalStyledSvg, { className: "activeUnderlineSvg", xmlns: "http://www.w3.org/2000/svg", fill: "none", height: "6", width: "100%" },
                        React__default.createElement(Underline, null)))),
                React__default.createElement(OakBox, { className: "focusUnderline", "$display": "none", "$position": "absolute", "$bottom": "spacing-0", "$width": "100%" },
                    React__default.createElement(InternalStyledSvg, { className: "focusUnderlineSvg", xmlns: "http://www.w3.org/2000/svg", height: "8", width: "100%", preserveAspectRatio: "none" },
                        React__default.createElement(Underline, null)))))));
};
var templateObject_1;

export { OakHomepageTabButton };
