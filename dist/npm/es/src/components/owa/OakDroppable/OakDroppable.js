import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseBorder } from '../../../styles/helpers/parseBorder.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';

var StyledFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: ", " ", ";\n  outline-style: dashed;\n\n  &[data-disabled=\"true\"] {\n    outline-color: ", ";\n  }\n"], ["\n  outline: ", " ", ";\n  outline-style: dashed;\n\n  &[data-disabled=\"true\"] {\n    outline-color: ", ";\n  }\n"])), parseBorder("border-solid-l"), parseColor("border-primary"), parseColor("border-neutral"));
/**
 * A drop zone for a draggable
 *
 * Has no intrinsic drop functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
var OakDroppable = forwardRef(function (_a, ref) {
    var children = _a.children, labelSlot = _a.labelSlot, isOver = _a.isOver, isHighlighted = _a.isHighlighted, isDisabled = _a.isDisabled, props = __rest(_a, ["children", "labelSlot", "isOver", "isHighlighted", "isDisabled"]);
    var slotBackground = (function () {
        switch (true) {
            case isOver:
                return "bg-primary";
            case isDisabled:
                return "bg-decorative2-subdued";
            default:
                return "bg-neutral";
        }
    })();
    var background = (function () {
        switch (true) {
            case isOver:
                return "bg-decorative2-main";
            case isHighlighted:
                return "bg-decorative5-main";
            default:
                return "bg-decorative2-subdued";
        }
    })();
    return (React__default.createElement(OakFlex, __assign({ ref: ref, "$background": background, "$pa": "spacing-16", "$borderRadius": "border-radius-l", "$gap": "spacing-16", "$flexDirection": ["column", "row", "row"] }, props),
        React__default.createElement(StyledFlex, { "$background": slotBackground, "$pa": "spacing-4", "$borderRadius": "border-radius-m2", "$minHeight": "spacing-64", "$flexBasis": "100%", "data-disabled": isDisabled },
            React__default.createElement(OakBox, { "$width": "100%" }, children)),
        labelSlot && (React__default.createElement(OakFlex, { "$background": isOver ? "bg-primary" : "bg-decorative2-very-subdued", "$borderRadius": "border-radius-m2", "$alignItems": "center", "$font": "body-1", "$ph": "spacing-20", "$minHeight": "spacing-56", "$pv": "spacing-4", "$flexBasis": "100%", "$width": "100%", "$alignSelf": "center", "data-testid": "label" }, labelSlot))));
});
var templateObject_1;

export { OakDroppable };
