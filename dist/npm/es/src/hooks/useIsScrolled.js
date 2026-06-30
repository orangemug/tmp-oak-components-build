import { __read } from '../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useCallback, useLayoutEffect } from 'react';

var useIsScrolled = function () {
    var _a = __read(useState(false), 2), isScrolled = _a[0], setIsScrolled = _a[1];
    var _b = __read(useState(null), 2), canaryElement = _b[0], setCanaryElement = _b[1];
    var ObserveScroll = useCallback(function (_a) {
        var children = _a.children;
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { ref: setCanaryElement }),
            children));
    }, []);
    useLayoutEffect(function () {
        if (!canaryElement) {
            return;
        }
        var observer = new IntersectionObserver(function (mutations) {
            setIsScrolled(!mutations.some(function (mutation) { return mutation.isIntersecting; }));
        }, {
            root: canaryElement.parentElement,
        });
        observer.observe(canaryElement);
        return function () {
            observer.disconnect();
        };
    }, [canaryElement]);
    return { isScrolled: isScrolled, ObserveScroll: ObserveScroll };
};

export { useIsScrolled };
