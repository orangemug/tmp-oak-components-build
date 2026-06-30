import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakIcon } from '../OakIcon/OakIcon.js';
import { OakImage } from '../OakImage/OakImage.js';

/**
 * A wrapper around `OakIcon` which applies a rounded background.
 * Supports either an icon name or an image src
 */
var OakRoundIcon = function (_a) {
    var _b = _a.$background, $background = _b === void 0 ? "bg-decorative5-main" : _b, _c = _a.$borderRadius, $borderRadius = _c === void 0 ? "border-radius-circle" : _c, _d = _a.$width, $width = _d === void 0 ? "spacing-48" : _d, _e = _a.$height, $height = _e === void 0 ? "spacing-48" : _e, _f = _a.$pa, $pa = _f === void 0 ? "spacing-4" : _f, className = _a.className, rest = __rest(_a, ["$background", "$borderRadius", "$width", "$height", "$pa", "className"]);
    var icon = rest.iconName ? (React__default.createElement(OakIcon, __assign({}, rest, { "$height": "100%", "$width": "100%" }))) : (React__default.createElement(OakImage, __assign({}, rest, { "$height": "100%", "$width": "100%" })));
    return (React__default.createElement(OakBox, { className: className, "$background": $background, "$borderRadius": $borderRadius, "$width": $width, "$height": $height, "$pa": $pa }, icon));
};

export { OakRoundIcon };
