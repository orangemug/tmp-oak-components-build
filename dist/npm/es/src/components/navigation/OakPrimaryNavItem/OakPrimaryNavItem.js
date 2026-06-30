import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import Link from '../../../../_virtual/link.js';
import styled from 'styled-components';
import { OakPrimaryButton } from '../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakPrimaryInvertedButton } from '../../buttons/OakPrimaryInvertedButton/OakPrimaryInvertedButton.js';

var OakPrimaryButtonWithoutPointerEvents = styled(OakPrimaryButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  pointer-events: none;\n"], ["\n  pointer-events: none;\n"])));
/**
 *
 * A specific implementation of OakPrimaryButton and OakPrimaryInvertedButton rendering
 * relevant view depending on isCurrent prop
 *
 * ⚠️ To be deprecated
 * @deprecated
 */
var OakPrimaryNavItem = function (_a) {
    var href = _a.href, _b = _a.isCurrent, isCurrent = _b === void 0 ? false : _b, _c = _a.shallow, shallow = _c === void 0 ? true : _c, children = _a.children;
    return isCurrent ? (React__default.createElement(OakPrimaryButtonWithoutPointerEvents, { element: "span", "aria-current": "page" }, children)) : (React__default.createElement(OakPrimaryInvertedButton, { element: Link, href: href, shallow: shallow, isTrailingIcon: true }, children));
};
var templateObject_1;

export { OakPrimaryNavItem };
