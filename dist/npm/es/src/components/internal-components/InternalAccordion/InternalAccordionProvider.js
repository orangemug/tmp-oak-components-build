import { __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useState } from 'react';

var accordionContext = createContext(null);
/**
 *
 * Decomposed component comprising InternalAccordionButton and InternalAccordionContent wrapped by InternalAccordionProvider
 *
 * - InternalAccordionButton will toggle InternalAccordionContent visibility
 * - It is up to the user to arrange the InternalAccordionButton and InternalAccordionContent components in the desired order
 *
 */
var InternalAccordionProvider = function (_a) {
    var children = _a.children, isInitialOpen = _a.isInitialOpen;
    var _b = __read(useState(isInitialOpen), 2), isOpen = _b[0], setOpen = _b[1];
    var accordionValue = {
        isOpen: isOpen,
        setOpen: setOpen,
        isInitialOpen: false,
    };
    return (React__default.createElement(accordionContext.Provider, { value: accordionValue }, children));
};

export { InternalAccordionProvider, accordionContext, InternalAccordionProvider as default };
