import { __read } from '../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { useState, useEffect } from 'react';

/**
 * Returns true if the user has requested that the system minimize the amount of non-essential motion it uses.
 */
function usePrefersReducedMotion() {
    var _a = __read(useState(false), 2), prefersReducedMotion = _a[0], setPrefersReducedMotion = _a[1];
    useEffect(function () {
        var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
    }, []);
    return prefersReducedMotion;
}

export { usePrefersReducedMotion };
