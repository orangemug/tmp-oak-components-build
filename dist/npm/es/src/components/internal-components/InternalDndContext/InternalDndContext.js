import { __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { DndContext } from '../../../../node_modules/.pnpm/@dnd-kit_core@6.3.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@dnd-kit/core/dist/core.esm.js';
import React__default, { createContext, useContext, useEffect } from 'react';

/**
 * Facilitates DI for the DndContext
 */
var injectDndContext = createContext(DndContext);
/**
 * Wraps dnd-kit's `DndContext` to normalise scroll behaviour and enable dependency injection
 */
var InternalDndContext = function (props) {
    var DndContext = useContext(injectDndContext);
    /**
     * Disable smooth scrolling during drag to ensure that the dragged item is always visible
     */
    useEffect(function () {
        var originalScrollingBehaviour = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        return function () {
            document.documentElement.style.scrollBehavior =
                originalScrollingBehaviour;
        };
    });
    return React__default.createElement(DndContext, __assign({}, props));
};

export { InternalDndContext, injectDndContext };
