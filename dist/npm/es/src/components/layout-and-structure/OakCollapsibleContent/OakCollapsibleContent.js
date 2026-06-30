import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../OakBox/OakBox.js';
import { OakFlex } from '../OakFlex/OakFlex.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';

var StyledScrollBox = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &::-webkit-scrollbar-thumb {\n    border-radius: ", ";\n    background-color: ", ";\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: ", ";\n    background-color: ", ";\n  }\n  &::-webkit-scrollbar {\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n  }\n"], ["\n  &::-webkit-scrollbar-thumb {\n    border-radius: ", ";\n    background-color: ", ";\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: ", ";\n    background-color: ", ";\n  }\n  &::-webkit-scrollbar {\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n  }\n"])), parseBorderRadius("border-radius-m"), parseColor("bg-interactive-element1"), parseBorderRadius("border-radius-m"), parseColor("bg-primary"), parseSpacing("spacing-12"), parseSpacing("spacing-12"), parseBorderRadius("border-radius-m"));
/**
 * A filled scrollable box that can be hidden with the `isOpen` prop.
 * Useful for hiding content that is not immediately relevant
 */
var OakCollapsibleContent = function (_a) {
    var isOpen = _a.isOpen, children = _a.children, id = _a.id, rest = __rest(_a, ["isOpen", "children", "id"]);
    return (React__default.createElement(OakBox, { "$display": isOpen ? "block" : "none", id: id },
        React__default.createElement(OakFlex, __assign({ "$background": "bg-neutral-stronger", "$ph": "spacing-16", "$pv": "spacing-24", "$borderRadius": "border-radius-m" }, rest),
            React__default.createElement(StyledScrollBox, { "$overflow": "auto", "$maxHeight": "100%", "$width": "100%", "$pr": "spacing-16" }, children))));
};
var templateObject_1;

export { OakCollapsibleContent };
