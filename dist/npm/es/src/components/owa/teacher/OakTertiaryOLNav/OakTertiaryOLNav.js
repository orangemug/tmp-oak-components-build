import { __makeTemplateObject, __rest, __read, __assign } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import styled from 'styled-components';
import { InternalLink } from '../../../internal-components/InternalLink/InternalLink.js';
import { parseColor } from '../../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../../styles/helpers/parseDropShadow.js';
import { OakLI } from '../../../typography/OakLI/OakLI.js';
import { parseSpacing } from '../../../../styles/helpers/parseSpacing.js';
import { OakAnchorTarget } from '../../../navigation/OakAnchorTarget/OakAnchorTarget.js';
import { OakBox } from '../../../layout-and-structure/OakBox/OakBox.js';
import { OakSpan } from '../../../typography/OakSpan/OakSpan.js';

var StyledNav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n"], ["\n  outline: none;\n"])));
var StyledOakLink = styled(InternalLink)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-decoration: none;\n  color: inherit;\n  width: 100%;\n  display: Flex;\n  width: 100%;\n  &:focus {\n    box-shadow: none;\n  }\n\n  &::before {\n    content: counter(list-counter);\n    min-width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background-color: ", ";\n    color: ", ";\n    text-align: center;\n    line-height: 32px;\n    margin-right: ", ";\n    text-decoration: none;\n  }\n  &:hover::before {\n    background-color: ", ";\n    box-shadow: ", ";\n    text-decoration: none;\n  }\n\n  &:focus-within::before {\n    box-shadow:\n      ", ",\n      ", ";\n    text-decoration: none;\n  }\n  &:active {\n    color: ", ";\n  }\n  &:active::before {\n    box-shadow:\n      ", ",\n      ", ";\n    background-color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  color: inherit;\n  width: 100%;\n  display: Flex;\n  width: 100%;\n  &:focus {\n    box-shadow: none;\n  }\n\n  &::before {\n    content: counter(list-counter);\n    min-width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background-color: ", ";\n    color: ", ";\n    text-align: center;\n    line-height: 32px;\n    margin-right: ", ";\n    text-decoration: none;\n  }\n  &:hover::before {\n    background-color: ", ";\n    box-shadow: ", ";\n    text-decoration: none;\n  }\n\n  &:focus-within::before {\n    box-shadow:\n      ", ",\n      ", ";\n    text-decoration: none;\n  }\n  &:active {\n    color: ", ";\n  }\n  &:active::before {\n    box-shadow:\n      ", ",\n      ", ";\n    background-color: ", ";\n  }\n"])), parseColor("bg-inverted"), parseColor("text-inverted"), parseSpacing("spacing-12"), parseColor("bg-btn-primary-hover"), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseColor("text-primary"), parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"), parseColor("bg-inverted"));
var StyledOL = styled.ol(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n"], ["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n"])));
var StyledOLItem = styled(OakLI)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  counter-increment: list-counter;\n  display: flex;\n  align-items: center;\n  margin-bottom: ", ";\n  min-height: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n"], ["\n  position: relative;\n  counter-increment: list-counter;\n  display: flex;\n  align-items: center;\n  margin-bottom: ", ";\n  min-height: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n"])), parseSpacing("spacing-12"), parseColor("bg-btn-primary-hover"));
var OakTertiaryOLNav = function (_a) {
    var items = _a.items, ariaLabel = _a.ariaLabel, title = _a.title, anchorTarget = _a.anchorTarget, onClick = _a.onClick, rest = __rest(_a, ["items", "ariaLabel", "title", "anchorTarget", "onClick"]);
    var _b = __read(useState(null), 2), currentHref = _b[0], setCurrentHref = _b[1];
    var handleKeyDown = function (event) {
        if (event.key && event.key !== "Tab") {
            setCurrentHref(event.currentTarget.hash);
        }
    };
    return (React__default.createElement(StyledNav, __assign({ "aria-label": ariaLabel }, rest),
        anchorTarget && React__default.createElement(OakAnchorTarget, { id: anchorTarget }),
        title && (React__default.createElement(OakBox, { "$mb": "spacing-24" },
            React__default.createElement(OakSpan, { "$font": "heading-light-7" }, title))),
        React__default.createElement(StyledOL, { role: "list" }, items.map(function (item, index) { return (React__default.createElement(StyledOLItem, { "$font": "heading-7", key: index },
            React__default.createElement(StyledOakLink, { onClick: onClick, href: item.href, "aria-current": item.href === currentHref ? "true" : undefined, onKeyDown: handleKeyDown }, item.title))); }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { OakTertiaryOLNav };
