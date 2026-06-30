import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { InternalChevronAccordion } from '../../internal-components/InternalChevronAccordion/InternalChevronAccordion.js';

var OakBasicAccordion = function (_a) {
    var header = _a.header, children = _a.children, id = _a.id, initialOpen = _a.initialOpen, subheading = _a.subheading, styleProps = __rest(_a, ["header", "children", "id", "initialOpen", "subheading"]);
    return (React__default.createElement(InternalChevronAccordion, __assign({ header: header, id: id, initialOpen: initialOpen, subheading: subheading }, styleProps), children));
};

export { OakBasicAccordion };
