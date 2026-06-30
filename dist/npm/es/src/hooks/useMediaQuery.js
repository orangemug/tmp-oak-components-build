import { __read } from '../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { useState, useEffect } from 'react';
import { getMediaQuery } from '../styles/utils/responsiveStyle.js';

var useMediaQuery = function (device) {
    var _a = __read(useState(false), 2), matches = _a[0], setMatches = _a[1];
    var query = getMediaQuery(device);
    useEffect(function () {
        var media = globalThis.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        var listener = function () { return setMatches(media.matches); };
        globalThis.addEventListener("resize", listener);
        return function () { return globalThis.removeEventListener("resize", listener); };
    }, [matches, query]);
    return matches;
};

export { useMediaQuery };
