import { __read } from '../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { useState, useEffect } from 'react';
import { getMediaQuery } from '../styles/utils/responsiveStyle.js';

function getMediaQueries() {
    var mediaDesktop = globalThis.matchMedia(getMediaQuery("desktop"));
    var mediaTablet = globalThis.matchMedia(getMediaQuery("tablet"));
    return { mediaDesktop: mediaDesktop, mediaTablet: mediaTablet };
}
function matchBreakpoint(_a) {
    var mediaDesktop = _a.mediaDesktop, mediaTablet = _a.mediaTablet;
    if (mediaDesktop.matches) {
        return "desktop";
    }
    else if (mediaTablet.matches) {
        return "tablet";
    }
    return "mobile";
}
var useBreakpoint = function () {
    var _a = __read(useState(function () {
        if (globalThis) {
            return matchBreakpoint(getMediaQueries());
        }
        return "desktop";
    }), 2), value = _a[0], setValue = _a[1];
    useEffect(function () {
        var queries = getMediaQueries();
        var listener = function () { return setValue(matchBreakpoint(queries)); };
        globalThis.addEventListener("resize", listener);
        return function () {
            globalThis.removeEventListener("resize", listener);
        };
    }, []);
    return value;
};

export { useBreakpoint };
