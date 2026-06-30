import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakHandDrawnCardWithIcon } from '../OakHandDrawnCardWithIcon/OakHandDrawnCardWithIcon.js';
import { OakPromoTag } from '../OakPromoTag/OakPromoTag.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * A large illuminated hand-drawn box with a subject icon in the center
 *
 * Accepts an optional `showPromoTag` prop to display a "New" tag in the top left corner
 */
var OakSubjectIcon = function (_a) {
    var showPromoTag = _a.showPromoTag, rest = __rest(_a, ["showPromoTag"]);
    return (React__default.createElement(OakBox, { "$width": "fit-content", "$height": "fit-content", "$position": "relative" },
        React__default.createElement(OakHandDrawnCardWithIcon, __assign({}, rest)),
        showPromoTag && (React__default.createElement(OakBox, { "$position": "absolute", "$top": ["spacing-0", "spacing-8"], "$left": ["spacing-0", "spacing-8"] },
            React__default.createElement(OakPromoTag, null)))));
};

export { OakSubjectIcon };
