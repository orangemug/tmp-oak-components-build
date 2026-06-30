import { getCldImageUrl as L } from '../../../../node_modules/.pnpm/next-cloudinary@6.16.0_next@15.5.15_@babel_core@7.28.4_react-dom@18.2.0_react@18.2.0__react@18.2.0__react@18.2.0/node_modules/next-cloudinary/dist/index.js';

function getCloudinaryIdFromUrl(src, config) {
    // When a private CDN is used, CldImage will only accept the image ID as the src
    // this appears to be a limitation of the library which appears to have been designed
    // with basic public CDN usage in mind.
    return src.toString().replace(getCloudinaryRootUrl(config), "");
}
// Attempts to build the stem of a cloudinary URL, this is used to extract the image id
function getCloudinaryRootUrl(config) {
    // `getCldImageUrl` handles all the logic to construct a cloudinary URL from the given config
    // (supporting private CDNs, custom CNAMES etc. so we don't have to)
    var canaryUrl = new URL(L({ src: "canary.jpg" }, config));
    return canaryUrl.origin + "/image/upload/";
}

export { getCloudinaryIdFromUrl };
