import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { InternalChevronAccordion } from '../../internal-components/InternalChevronAccordion/InternalChevronAccordion.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var AccordionWrapper = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  border-width: 2px;\n"], ["\n  position: relative;\n  border-width: 2px;\n"])));
// @todo only show shadow when there is are more items to scroll and remove once scrolled to the bottom
// const BottomBoxShadow = styled(OakBox)`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 50px;
//   z-index: 100;
//   -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
//   -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
//   box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
// `;
/**
 * An accordion component that can be used to show/hide content
 */
var OakMediaClipListAccordion = function (_a) {
    var header = _a.header, children = _a.children, id = _a.id, initialOpen = _a.initialOpen, styleProps = __rest(_a, ["header", "children", "id", "initialOpen"]);
    return (React__default.createElement(AccordionWrapper, { "$position": "relative", "$flexDirection": "column" },
        React__default.createElement(InternalChevronAccordion, __assign({ header: header, id: id, initialOpen: initialOpen, "$pv": "spacing-0", "$borderStyle": "solid", "$borderColor": "border-primary", "$ba": "border-solid-m", "$bl": ["border-solid-m", "border-solid-m", "border-solid-none"] }, styleProps), children)));
};
var templateObject_1;

export { OakMediaClipListAccordion };
