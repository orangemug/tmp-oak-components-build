import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

var StyledBackLink = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 50%;\n  display: flex;\n  width: fit-content;\n  height: fit-content;\n  border: none;\n  padding: 0;\n  outline: none;\n\n  img {\n    pointer-events: none;\n  }\n\n  &:not(:disabled) {\n    cursor: pointer;\n  }\n\n  &:active {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:hover,\n  &:focus-visible {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:disabled {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n"], ["\n  border-radius: 50%;\n  display: flex;\n  width: fit-content;\n  height: fit-content;\n  border: none;\n  padding: 0;\n  outline: none;\n\n  img {\n    pointer-events: none;\n  }\n\n  &:not(:disabled) {\n    cursor: pointer;\n  }\n\n  &:active {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:hover,\n  &:focus-visible {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:disabled {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n"])), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"), parseColor("bg-btn-primary"), parseColorFilter("text-inverted"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseColor("bg-btn-primary-disabled"), parseColorFilter("text-inverted"));
/**
 * Used to navigate the user back to the previous page in the app.
 *
 * Polymorphic rendering as any HTML element or component using `as` — defaults to `a`.
 *
 * E.g.
 *
 * * Default (Anchor) `<OakBackLink href="https://www.thenational.academy/" />`
 * * Button `<OakBackLink as="button" onClick={() => goBack(-1)} />`
 *
 */
var OakBackLink = function (_a) {
    var as = _a.as, _b = _a.label, label = _b === void 0 ? "Back" : _b, props = __rest(_a, ["as", "label"]);
    return (React__default.createElement(StyledBackLink, __assign({ as: as !== null && as !== void 0 ? as : "a", "aria-label": label }, props),
        React__default.createElement(OakIcon, { alt: "", iconName: "chevron-left", "$width": "spacing-40", "$objectFit": "cover", "$height": "spacing-40" })));
};
var templateObject_1;

export { OakBackLink };
