import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useContext } from 'react';
import { CldImage as le } from '../../../../node_modules/.pnpm/next-cloudinary@6.16.0_next@15.5.15_@babel_core@7.28.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__react@18.2.0/node_modules/next-cloudinary/dist/index.js';
import { getCloudinaryIdFromUrl } from './cloudinary.js';
import { OakImage } from '../../images-and-icons/OakImage/OakImage.js';

var cloudinaryConfigContext = createContext(undefined);
/**
 * Provides a Cloudinary config to all descendent `OakCloudinaryImage` elements.
 *
 * See https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
 * for documentation of the config object.
 */
var OakCloudinaryConfigProvider = cloudinaryConfigContext.Provider;
/**
 * OakCloudinaryImage wraps OakImage providing responsive images from Cloudinary
 * based on the `sizes` prop.
 *
 * Cloudinary cloud name can be set globally with `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` or a config
 * can be passed with `OakCloudinaryConfigProvider`.
 *
 * ## To be refactored 🔀
 * This component will be refactored not to be tight to a service like Cloudinary
 */
var OakCloudinaryImage = function (_a) {
    var cloudinaryId = _a.cloudinaryId, _b = _a.unoptimized, unoptimized = _b === void 0 ? cloudinaryId.endsWith(".svg") : _b, props = __rest(_a, ["cloudinaryId", "unoptimized"]);
    var config = useContext(cloudinaryConfigContext);
    var src = getCloudinaryIdFromUrl(cloudinaryId, config);
    return (React__default.createElement(OakImage, __assign({ as: le, src: src, imageProps: {
            config: config,
            flags: unoptimized ? undefined : ["keep_attribution"],
        }, unoptimized: unoptimized }, props)));
};

export { OakCloudinaryConfigProvider, OakCloudinaryImage };
