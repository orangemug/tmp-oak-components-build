import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { InternalButton } from '../../internal-components/InternalButton/InternalButton.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';

var StyledInternalButton = styled(InternalButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :hover {\n    .oak-save-count {\n      background-color: ", ";\n    }\n  }\n  :focus-visible {\n    .oak-save-count {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"], ["\n  :hover {\n    .oak-save-count {\n      background-color: ", ";\n    }\n  }\n  :focus-visible {\n    .oak-save-count {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"])), parseColor("bg-decorative1-main"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
var OakSaveCount = function (_a) {
    var count = _a.count, href = _a.href, loading = _a.loading, _b = _a.label, label = _b === void 0 ? "My library" : _b;
    var hasCount = typeof count === "number";
    var iconName = hasCount && count > 0 ? "bookmark-filled" : "bookmark-outlined";
    var showTruncatedCount = hasCount && count > 99;
    var ariaLabel = hasCount
        ? "".concat(label, ": ").concat(count, " saved unit").concat(count === 1 ? "" : "s")
        : label;
    return (React__default.createElement(StyledInternalButton, { as: "a", href: href, "aria-label": ariaLabel },
        React__default.createElement(OakFlex, { "$width": "fit-content", "$minWidth": "spacing-32", "$height": "spacing-32", "$background": loading ? "bg-btn-secondary-hover" : "bg-decorative1-subdued", "$font": "heading-light-7", "$alignItems": "center", "$justifyContent": ["center", "initial"], "$pl": [null, "spacing-4"], "$pr": [null, "spacing-8"], "$borderRadius": "border-radius-s", "$borderColor": loading ? "border-neutral-lighter" : "bg-decorative1-main", "$ba": "border-solid-s", className: loading ? undefined : "oak-save-count", "$gap": "spacing-4" },
            React__default.createElement(OakIcon, { iconName: iconName, "data-testid": iconName, "$width": "spacing-24" }),
            React__default.createElement(OakBox, { "$display": ["none", "contents"] },
                label,
                hasCount && (React__default.createElement(OakSpan, null,
                    "(",
                    showTruncatedCount ? "99+" : count,
                    ")"))))));
};
var templateObject_1;

export { OakSaveCount };
