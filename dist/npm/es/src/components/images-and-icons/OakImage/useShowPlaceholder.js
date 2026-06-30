import { __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import { useState, useCallback } from 'react';

function useShowPlaceholder() {
    // Default to false so that we don't show the placeholder if the image is already complete
    var _a = __read(useState(false), 2), showPlaceholder = _a[0], setShowPlaceholder = _a[1];
    var setImg = useCallback(function (img) {
        // the `load` or `error` event may never be called if the image is coming from the cache
        // so we need to check the `complete` property as well as listen to the `onLoad` and `onError` events
        img && setShowPlaceholder(!img.complete);
    }, []);
    return {
        showPlaceholder: showPlaceholder,
        setImg: setImg,
        /**
         * Wraps the `onLoad` and `onError` events to set the placeholder state
         */
        handleComplete: function (originalHandler) {
            return function (event) {
                if (originalHandler) {
                    originalHandler(event);
                }
                setShowPlaceholder(false);
            };
        },
    };
}

export { useShowPlaceholder };
