import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakHandDrawnHR } from '../OakHandDrawnHR/OakHandDrawnHR.js';
import { InternalChevronAccordion } from '../../internal-components/InternalChevronAccordion/InternalChevronAccordion.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var StyledHandDrawnHR = styled(OakHandDrawnHR)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 0.125rem;\n  position: ", ";\n  width: ", ";\n  bottom: 0.125rem;\n"], ["\n  height: 0.125rem;\n  position: ", ";\n  width: ", ";\n  bottom: 0.125rem;\n"])), function (props) { return props.$position; }, function (props) { return props.$width; });
/**
 * An accordion component that can be used to show/hide content
 */
var OakOutlineAccordion = function (_a) {
    var header = _a.header, children = _a.children, id = _a.id, _b = _a.initialOpen, initialOpen = _b === void 0 ? false : _b, styleProps = __rest(_a, ["header", "children", "id", "initialOpen"]);
    return (React__default.createElement(OakFlex, { "$position": "relative", "$flexDirection": "column" },
        React__default.createElement(StyledHandDrawnHR, { "$width": "100%" }),
        React__default.createElement(InternalChevronAccordion, __assign({ header: header, id: id, initialOpen: initialOpen }, styleProps), children),
        React__default.createElement(StyledHandDrawnHR, { "$position": "absolute", "$width": "100%" })));
};
var templateObject_1;

export { OakOutlineAccordion };
