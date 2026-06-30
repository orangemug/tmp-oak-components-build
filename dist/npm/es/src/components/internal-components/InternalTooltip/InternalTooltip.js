import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

var StyledFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: max-content;\n  pointer-events: none;\n"], ["\n  width: max-content;\n  pointer-events: none;\n"])));
var ARROW_SIZE = parseSpacing("spacing-16");
var StyledSvg = styled.svg(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  ", "\n  ", "\n"], ["\n  position: absolute;\n  ", "\n  ", "\n"])), function (_a) {
    var $tooltipPosition = _a.$tooltipPosition;
    switch ($tooltipPosition) {
        case "bottom-right":
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          top: -", ";\n          right: ", ";\n          transform: scale(-1, -1);\n        "], ["\n          top: -", ";\n          right: ", ";\n          transform: scale(-1, -1);\n        "])), ARROW_SIZE, parseSpacing("spacing-0"));
        case "top-right":
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          bottom: -", ";\n          right: ", ";\n          transform: scaleX(-1);\n        "], ["\n          bottom: -", ";\n          right: ", ";\n          transform: scaleX(-1);\n        "])), ARROW_SIZE, parseSpacing("spacing-0"));
        case "top-left":
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          bottom: -", ";\n          left: ", ";\n        "], ["\n          bottom: -", ";\n          left: ", ";\n        "])), ARROW_SIZE, parseSpacing("spacing-0"));
        default:
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          top: -", ";\n          left: ", ";\n          transform: scaleY(-1);\n        "], ["\n          top: -", ";\n          left: ", ";\n          transform: scaleY(-1);\n        "])), ARROW_SIZE, parseSpacing("spacing-0"));
    }
}, responsiveStyle("fill", function (props) { return props.$fill; }, parseColor));
/**
 * A primitive tooltip to be used as a basis for more opinionated UI components.
 */
var InternalTooltip = function (_a) {
    var children = _a.children, _b = _a.$background, $background = _b === void 0 ? "bg-inverted" : _b, _c = _a.$color, $color = _c === void 0 ? "text-inverted" : _c, _d = _a.tooltipPosition, tooltipPosition = _d === void 0 ? "bottom-left" : _d, props = __rest(_a, ["children", "$background", "$color", "tooltipPosition"]);
    return (React__default.createElement(StyledFlex, __assign({ role: "tooltip", "data-rac": true, "$position": "relative", "$background": $background, "$color": $color, "$maxWidth": ["spacing-360", "spacing-640"] }, props),
        children,
        React__default.createElement(StyledSvg, { width: ARROW_SIZE, height: ARROW_SIZE, "$fill": $background, "$tooltipPosition": tooltipPosition, "data-testid": "tooltip-arrow" },
            React__default.createElement("path", { d: "M0 0H16L8 8L0 16V0Z" }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { InternalTooltip };
