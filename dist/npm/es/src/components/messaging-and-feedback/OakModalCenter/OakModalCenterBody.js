import { __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

/*
 *
 * FIXME: This component should either live in its own folder or
 * or be renamed to SubModalCenterBody and be excluded from the exports
 * as per the rules stated in src/docs/namingConventions.mdx
 *
 */
/**
 * Intended to be used within the `OakModalCenter` component
 * it provides a consistent layout for the body of the modal
 * It includes an icon, a title, and the children passed to it.
 * The icon and title can be extended/overridden with the `iconOverride` and `headingOverride` props.
 *
 *  ## Props
 *
 * - **iconName** \-            The name of the icon to display. Accepts an icon name token
 * - **title** \-               The title of the modal
 * - **children** \-            The content of the modal body
 * - **headingOverride** \-     Override HTMLAttributes & OakHEading props for the heading
 * - **iconOverride** \-        Override HTMLAttributes & OakIcon props for the icon
 */
var OakModalCenterBody = function (_a) {
    var children = _a.children, _b = _a.iconName, iconName = _b === void 0 ? "info" : _b, title = _a.title, headingOverride = _a.headingOverride, iconOverride = _a.iconOverride, hideIcon = _a.hideIcon;
    return (React__default.createElement(OakFlex, { "$pb": "spacing-24", "$width": "100%", "$flexDirection": "column", "$alignItems": "center", "$justifyContent": "center" },
        !hideIcon && (React__default.createElement(OakIcon, __assign({ iconName: iconName, "$width": "spacing-100", "$height": "spacing-100", "$mb": "spacing-32", "data-testid": "icon" }, iconOverride))),
        React__default.createElement(OakHeading, __assign({ "$font": ["heading-5", "heading-5", "heading-4"], "data-testid": "OakHeading-id", tag: "h1", "$mb": "spacing-32", "$textAlign": "center" }, headingOverride), title),
        children));
};

export { OakModalCenterBody };
