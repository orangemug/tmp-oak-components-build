import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { generatePageNumbers } from './utils.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import { OakUL } from '../../typography/OakUL/OakUL.js';
import { InternalButton } from '../../internal-components/InternalButton/InternalButton.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { OakLink } from '../OakLink/OakLink.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';

var StyledChevronButton = styled(OakLink)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  ", "\n"], ["\n  display: inline-block;\n  ", "\n"])), function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &:disabled {\n      color: ", ";\n      cursor: pointer;\n    }\n  "], ["\n    &:disabled {\n      color: ", ";\n      cursor: pointer;\n    }\n  "])), props.disabledColor); });
var StyledIcon = styled(OakIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    if (props.disabled) {
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        filter: ", ";\n      "], ["\n        filter: ", ";\n      "])), parseColorFilter("icon-disabled"));
    }
});
var StyledNumberButton = styled(OakLink)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: 30px;\n  width: 30px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  ", "\n  color: ", ";\n\n  ", ";\n\n  ", "\n\n  &:hover {\n    text-decoration: underline;\n    ", "\n  }\n"], ["\n  height: 30px;\n  width: 30px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  ", "\n  color: ", ";\n\n  ", ";\n\n  ", "\n\n  &:hover {\n    text-decoration: underline;\n    ", "\n  }\n"])), typographyStyle, parseColor("text-primary"), function (props) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background-color: ", ";\n  "], ["\n    background-color: ", ";\n  "])), props.selected
    ? parseColor("icon-primary")
    : parseColor("icon-inverted")); }, function (props) {
    return props.selected && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color: ", ";\n      &:visited {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      &:visited {\n        color: ", ";\n      }\n    "])), parseColor("text-inverted"), parseColor("text-inverted"));
}, function (props) {
    return props.selected && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        color: ", ";\n        @media (hover: hover) {\n    &:hover:not(:disabled) {\n      color: ", ";\n    }\n      "], ["\n        color: ", ";\n        @media (hover: hover) {\n    &:hover:not(:disabled) {\n      color: ", ";\n    }\n      "])), parseColor("text-inverted"), parseColor("text-inverted"));
});
var StyledEllipsis = styled(InternalButton)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  &:disabled {\n    cursor: pointer;\n  }\n"], ["\n  &:disabled {\n    cursor: pointer;\n  }\n"])));
var OakPageNumber = function (_a) {
    var currentPage = _a.currentPage, pageNumber = _a.pageNumber, onClick = _a.onClick, href = _a.href, pageName = _a.pageName;
    var isActive = currentPage === pageNumber;
    return (React__default.createElement(StyledNumberButton, { "data-testid": "page-number-component", "aria-label": "".concat(pageName, " page ").concat(pageNumber), "aria-current": isActive ? "page" : false, "$font": "heading-7", onClick: onClick, selected: isActive, href: href }, pageNumber));
};
var OakEllipsis = function () {
    return (React__default.createElement(StyledEllipsis, { "$color": "text-primary", "$font": "heading-7", "$background": "bg-primary", "aria-label": "Hidden page numbers", disabled: true }, "..."));
};
var OakPagination = function (_a) {
    var totalPages = _a.totalPages, nextHref = _a.nextHref, prevHref = _a.prevHref, paginationHref = _a.paginationHref, pageName = _a.pageName, onPageChange = _a.onPageChange, currentPage = _a.currentPage;
    var pages = generatePageNumbers(currentPage, totalPages);
    var isFirstPage = currentPage <= 1;
    var isLastPage = currentPage >= totalPages;
    var handleNumberClick = function (num, event) {
        event.preventDefault();
        onPageChange(num);
    };
    var handleChevronClick = function (direction, event) {
        event.preventDefault();
        var newPage = currentPage + (direction === "backwards" ? -1 : 1);
        onPageChange(newPage);
    };
    if (currentPage === 1 && totalPages < 2) {
        return null;
    }
    return (React__default.createElement("nav", { "aria-label": "pagination", "data-testid": "pagination" },
        React__default.createElement(OakFlex, { "$alignItems": "center", "$justifyContent": "center", "$width": "100%", "$gap": ["spacing-8", "spacing-16", "spacing-16"] },
            React__default.createElement(StyledChevronButton, { element: isFirstPage ? "button" : "a", rel: "prev", href: prevHref, "data-testid": "backwards-button", onClick: function (e) {
                    e.preventDefault();
                    handleChevronClick("backwards", e);
                }, onKeyDown: function (e) {
                    if (e.key === "Enter") {
                        handleChevronClick("backwards", e);
                    }
                }, tabIndex: isFirstPage ? -1 : 0, "aria-disabled": isFirstPage, disabled: isFirstPage, "aria-label": isFirstPage ? "No previous pages" : "Go to previous page" },
                React__default.createElement(StyledIcon, { disabled: isFirstPage, iconName: "chevron-left" })),
            React__default.createElement(OakUL, { "$reset": true, "$display": "flex" }, pages.map(function (page, i) {
                if (typeof page === "number") {
                    return (React__default.createElement(OakLI, { key: "".concat(page, " ").concat(i), "$mh": ["spacing-4", "spacing-8", "spacing-8"] },
                        React__default.createElement(OakPageNumber, { pageName: pageName, key: page, pageNumber: page + 1, currentPage: currentPage, href: "".concat(paginationHref, "?page=").concat(page + 1), onClick: function (e) {
                                return handleNumberClick(page + 1, e);
                            } })));
                }
                else {
                    return (React__default.createElement(OakLI, { "$mh": ["spacing-4", "spacing-8", "spacing-8"], key: "".concat(page, " ").concat(i) },
                        React__default.createElement(OakFlex, { "$height": "100%", "$alignSelf": "center" },
                            React__default.createElement(OakEllipsis, null))));
                }
            })),
            React__default.createElement(StyledChevronButton, { element: isLastPage ? "button" : "a", rel: "next", tabIndex: isLastPage ? -1 : 0, "data-testid": "forwards-button", href: nextHref, onClick: function (e) {
                    handleChevronClick("forwards", e);
                }, onKeyDown: function (e) {
                    if (e.key === "Enter") {
                        handleChevronClick("forwards", e);
                    }
                }, "aria-disabled": isLastPage, disabled: isLastPage, "aria-label": isLastPage ? "No further pages" : "Go to next page" },
                React__default.createElement(StyledIcon, { disabled: isLastPage, iconName: "chevron-right" })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * Pagination component for navigating through pages
 *
 * @param router - Next.js router object
 * @param currentPage - Current page number
 * @param totalPages - Total number of pages
 * @param nextHref - URL for the next page
 * @param prevHref - URL for the previous page
 * @param paginationHref - Base URL for the pagination
 * @param pageName - Name of the page
 * @param onPageChange - Callback function for iterating through pages
 *
 */

export { OakPagination };
