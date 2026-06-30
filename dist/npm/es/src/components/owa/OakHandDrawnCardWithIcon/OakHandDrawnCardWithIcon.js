import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakHandDrawnCard } from '../OakHandDrawnCard/OakHandDrawnCard.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

/**
 * A hand-drawn card with an icon in the center
 */
var OakHandDrawnCardWithIcon = function (_a) {
    var iconName = _a.iconName, _b = _a.iconColor, iconColor = _b === void 0 ? "text-primary" : _b, _c = _a.iconWidth, iconWidth = _c === void 0 ? ["spacing-64", "spacing-120"] : _c, _d = _a.iconHeight, iconHeight = _d === void 0 ? ["spacing-64", "spacing-120"] : _d, alt = _a.alt, _e = _a.$width, $width = _e === void 0 ? ["spacing-80", "spacing-160"] : _e, _f = _a.$height, $height = _f === void 0 ? ["spacing-80", "spacing-160"] : _f, _g = _a.$alignItems, $alignItems = _g === void 0 ? "center" : _g, _h = _a.$justifyContent, $justifyContent = _h === void 0 ? "center" : _h, props = __rest(_a, ["iconName", "iconColor", "iconWidth", "iconHeight", "alt", "$width", "$height", "$alignItems", "$justifyContent"]);
    return (React__default.createElement(OakHandDrawnCard, __assign({ "$width": $width, "$height": $height, "$alignItems": $alignItems, "$justifyContent": $justifyContent }, props),
        React__default.createElement(OakIcon, { iconName: iconName, alt: alt, "$height": iconHeight, "$width": iconWidth, "$colorFilter": iconColor })));
};

export { OakHandDrawnCardWithIcon };
