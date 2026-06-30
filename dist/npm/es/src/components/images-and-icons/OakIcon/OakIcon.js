import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { icons } from '../../../image-map.js';
import { OakImage } from '../OakImage/OakImage.js';

var oakIconNames = Object.keys(icons);
/**
 * returns true if the given string is a valid `OakIconName`
 */
function isValidIconName(iconName) {
    return oakIconNames.includes(iconName);
}
/**
 * returns a Icon URL from Cloudinary if is a valid icon, otherwise returns undefined
 */
function generateOakIconURL(iconName) {
    var urlPath = "https://".concat(process.env.NEXT_PUBLIC_OAK_ASSETS_HOST, "/").concat(process.env.NEXT_PUBLIC_OAK_ASSETS_PATH);
    if (isValidIconName(iconName)) {
        return "".concat(urlPath, "/").concat(icons[iconName]);
    }
    else if (iconName.includes("subject")) {
        return "".concat(urlPath, "/").concat(icons["books"]);
    }
    else {
        return "".concat(urlPath, "/").concat(icons["question-mark"]);
    }
}
/**
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */
var OakIcon = function (props) {
    var iconName = props.iconName, alt = props.alt, iconWidth = props.iconWidth, iconHeight = props.iconHeight, _a = props.$width, $width = _a === void 0 ? iconWidth !== null && iconWidth !== void 0 ? iconWidth : "spacing-32" : _a, _b = props.$height, $height = _b === void 0 ? iconHeight !== null && iconHeight !== void 0 ? iconHeight : "spacing-32" : _b, _c = props.$minHeight, $minHeight = _c === void 0 ? $height : _c, _d = props.$minWidth, $minWidth = _d === void 0 ? $width : _d; props.imageProps; var rest = __rest(props, ["iconName", "alt", "iconWidth", "iconHeight", "$width", "$height", "$minHeight", "$minWidth", "imageProps"]);
    return (React__default.createElement(OakImage, __assign({ src: generateOakIconURL(iconName), alt: alt !== null && alt !== void 0 ? alt : "", "$width": $width, "$height": $height, "$minHeight": $minHeight, "$minWidth": $minWidth, placeholder: "empty", 
        // Icons should not be optimised since the SVG is already as small as it can be and should be served directly
        unoptimized: true }, rest)));
};

export { OakIcon, generateOakIconURL, isValidIconName, oakIconNames };
