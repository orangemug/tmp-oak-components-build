import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakHandDrawnCardWithIcon } from '../OakHandDrawnCardWithIcon/OakHandDrawnCardWithIcon.js';
import { OakPromoTag } from '../OakPromoTag/OakPromoTag.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';

var StyledOakFlexAsLink = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  animation: ", ";\n  animation-delay: 0.5s;\n  cursor: pointer;\n  outline: none;\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  @keyframes background-fade {\n    from {\n      background-color: ", ";\n    }\n    to {\n      transform: ", ";\n    }\n  }\n"], ["\n  animation: ", ";\n  animation-delay: 0.5s;\n  cursor: pointer;\n  outline: none;\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  @keyframes background-fade {\n    from {\n      background-color: ", ";\n    }\n    to {\n      transform: ", ";\n    }\n  }\n"])), function (_a) {
    var hasAnimation = _a.hasAnimation;
    return hasAnimation ? "background-fade 2s ease-in-out" : "none";
}, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseColor("bg-decorative1-main"), parseColor("bg-primary"));
/**
 * @deprecated Use `<OakCard />` instead
 *
 * A card component that displays an icon, text content, and an external link.
 *
 * ## Props
 *
 * - **mainSection** - Main content (ReactNode) - Can include OakHeading, OakP, OakLink, etc.
 * - **iconName** - Name of the icon to be displayed
 * - **iconAlt** - Alternative text for the icon (for accessibility)
 * - **iconColor** - Optional color filter for the icon
 * - **iconFill** - Optional fill color for the icon
 * - **href** - Destination URL when the card is clicked
 * - **showNew** - Whether to display the "New" promo tag
 * - **narrow** - Whether to display the card in a narrow layout
 */
var OakLinkCard = function (_a) {
    var mainSection = _a.mainSection, _b = _a.iconName, iconName = _b === void 0 ? "books" : _b, _c = _a.iconAlt, iconAlt = _c === void 0 ? "" : _c, _d = _a.iconColor, iconColor = _d === void 0 ? "icon-primary" : _d, _e = _a.iconFill, iconFill = _e === void 0 ? "bg-decorative1-main" : _e, href = _a.href, _f = _a.showNew, showNew = _f === void 0 ? false : _f, _g = _a.hasAnimation, hasAnimation = _g === void 0 ? false : _g, _h = _a.narrow, narrow = _h === void 0 ? false : _h;
    return (React__default.createElement(StyledOakFlexAsLink, { hasAnimation: hasAnimation, as: "a", href: href, "$flexDirection": narrow ? "column-reverse" : ["column-reverse", "row"], "$alignItems": narrow ? "flex-start" : ["flex-start", "center"], "$justifyContent": "space-between", "$gap": "spacing-32", "$background": "bg-primary", "$pa": "spacing-24", "$borderRadius": "border-radius-m2", "$width": "100%", "$dropShadow": "drop-shadow-centred-standard" },
        React__default.createElement(OakBox, { "$width": "100%" }, mainSection),
        React__default.createElement(OakBox, { "$position": "relative" },
            React__default.createElement(OakHandDrawnCardWithIcon, { iconName: iconName, alt: iconAlt, iconWidth: narrow ? ["spacing-64"] : ["spacing-64", "spacing-100"], iconHeight: narrow ? ["spacing-64"] : ["spacing-64", "spacing-100"], "$width": narrow ? ["spacing-80"] : ["spacing-80", "spacing-160"], "$height": narrow ? ["spacing-80"] : ["spacing-80", "spacing-160"], fill: iconFill, iconColor: iconColor }),
            showNew && (React__default.createElement(OakBox, { "$position": "absolute", "$top": narrow ? ["spacing-0"] : ["spacing-0", "spacing-8"], "$left": narrow ? ["spacing-0"] : ["spacing-0", "spacing-8"], "data-testid": "oak-new-promo-tag", "$zIndex": "in-front", "aria-hidden": "true" },
                React__default.createElement(OakPromoTag, null))))));
};
var templateObject_1;

export { OakLinkCard };
