import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseBorder } from '../../../styles/helpers/parseBorder.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { parseBorderWidth } from '../../../styles/helpers/parseBorderWidth.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';

var StyledOakIcon = styled(OakIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledDraggable = styled(OakBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: grab;\n  outline: none;\n  user-select: none;\n\n  ", " {\n    filter: ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover:not([data-dragging=\"true\"]):not([data-disabled=\"true\"]):not(\n        [data-readonly=\"true\"]\n      ) {\n      background-color: ", ";\n      color: ", ";\n      box-shadow: ", ";\n      border-bottom: ", "\n        ", ";\n      padding-bottom: ", ";\n      text-decoration: underline;\n\n      ", " {\n        filter: ", ";\n      }\n    }\n  }\n\n  &:focus-visible:not([data-dragging=\"true\"]):not([data-disabled=\"true\"]) {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &[data-dragging=\"true\"] {\n    cursor: move;\n    background-color: ", ";\n    color: ", ";\n    outline: ", " ", ";\n    outline-offset: -", ";\n    box-shadow:\n      ", ",\n      ", ";\n    text-decoration: underline;\n\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  &[data-disabled=\"true\"] {\n    cursor: default;\n    background-color: ", ";\n    color: ", ";\n\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  &[data-readonly=\"true\"] {\n    cursor: default;\n  }\n"], ["\n  cursor: grab;\n  outline: none;\n  user-select: none;\n\n  ", " {\n    filter: ", ";\n  }\n\n  @media (hover: hover) {\n    &:hover:not([data-dragging=\"true\"]):not([data-disabled=\"true\"]):not(\n        [data-readonly=\"true\"]\n      ) {\n      background-color: ", ";\n      color: ", ";\n      box-shadow: ", ";\n      border-bottom: ", "\n        ", ";\n      padding-bottom: ", ";\n      text-decoration: underline;\n\n      ", " {\n        filter: ", ";\n      }\n    }\n  }\n\n  &:focus-visible:not([data-dragging=\"true\"]):not([data-disabled=\"true\"]) {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &[data-dragging=\"true\"] {\n    cursor: move;\n    background-color: ", ";\n    color: ", ";\n    outline: ", " ", ";\n    outline-offset: -", ";\n    box-shadow:\n      ", ",\n      ", ";\n    text-decoration: underline;\n\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  &[data-disabled=\"true\"] {\n    cursor: default;\n    background-color: ", ";\n    color: ", ";\n\n    ", " {\n      filter: ", ";\n    }\n  }\n\n  &[data-readonly=\"true\"] {\n    cursor: default;\n  }\n"])), StyledOakIcon, function (props) { return parseColorFilter(props.$iconColor); }, parseColor("bg-decorative1-subdued"), parseColor("text-primary"), parseDropShadow("drop-shadow-standard"), parseBorder("border-solid-xl"), parseColor("border-primary"), parseSpacing("spacing-16"), StyledOakIcon, parseColorFilter("icon-primary"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseColor("bg-decorative1-main"), parseColor("text-primary"), parseBorder("border-solid-xl"), parseColor("border-primary"), parseBorderWidth("border-solid-xl"), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"), StyledOakIcon, parseColorFilter("icon-primary"), parseColor("bg-neutral"), parseColor("text-disabled"), StyledOakIcon, parseColorFilter("icon-disabled"));
var StyledFlex = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-block: -", ";\n"], ["\n  margin-block: -", ";\n"])), parseSpacing("spacing-8"));
/**
 * The component has no intrinsic draggable functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
var OakDraggable = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.iconName, iconName = _b === void 0 ? "move-arrows" : _b, _c = _a.iconColor, iconColor = _c === void 0 ? "icon-primary" : _c, _d = _a.iconAlt, iconAlt = _d === void 0 ? "" : _d, _e = _a.color, color = _e === void 0 ? "text-primary" : _e, _f = _a.background, background = _f === void 0 ? "bg-primary" : _f, isDragging = _a.isDragging, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, props = __rest(_a, ["children", "iconName", "iconColor", "iconAlt", "color", "background", "isDragging", "isDisabled", "isReadOnly"]);
    return (React__default.createElement(StyledDraggable, __assign({ ref: ref, "$pv": "spacing-20", "$pl": "spacing-12", "$pr": "spacing-16", "$background": background, "$color": color, "$borderRadius": "border-radius-m2", "$minHeight": "spacing-56", "data-dragging": isDragging, "data-disabled": isDisabled, "data-readonly": isReadOnly, "$iconColor": iconColor }, props),
        React__default.createElement(StyledFlex, { "$gap": "spacing-16", "$alignItems": "center" },
            React__default.createElement(StyledOakIcon, { iconName: iconName, "$width": "spacing-32", "$height": "spacing-32", alt: iconAlt }),
            React__default.createElement(OakFlex, { "$font": "body-1-bold" }, children))));
});
var templateObject_1, templateObject_2, templateObject_3;

export { OakDraggable };
