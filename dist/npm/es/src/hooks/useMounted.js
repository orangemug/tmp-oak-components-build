import { __read } from '../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { useState, useEffect } from 'react';

var useMounted = function () {
    var _a = __read(useState(false), 2), isMounted = _a[0], setIsMounted = _a[1];
    useEffect(function () {
        setIsMounted(true);
    }, []);
    return isMounted;
};

export { useMounted };
