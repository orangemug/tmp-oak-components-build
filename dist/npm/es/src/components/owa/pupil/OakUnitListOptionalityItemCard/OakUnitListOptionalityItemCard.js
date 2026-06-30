import { __makeTemplateObject, __rest, __assign } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakSpan } from '../../../typography/OakSpan/OakSpan.js';
import { OakFlex } from '../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../../images-and-icons/OakIcon/OakIcon.js';
import { parseColor } from '../../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../../styles/helpers/parseDropShadow.js';
import { OakSaveButton } from '../../OakSaveButton/OakSaveButton.js';

var StyledOptionalityListItem = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  outline: none;\n  text-align: initial;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n\n  &:hover .hover-text {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    background: ", ";\n    box-shadow:\n      ", ",\n      ", ";\n  }\n  ", "\n\n  ", "\n"], ["\n  outline: none;\n  text-align: initial;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n\n  &:hover .hover-text {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    background: ", ";\n    box-shadow:\n      ", ",\n      ", ";\n  }\n  ", "\n\n  ", "\n"])), parseColor("bg-primary"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) {
    return !props.$disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["  \n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n    &:hover {\n      ", " {\n        background: ", ";\n      }\n      background: ", ";\n    }\n  }\n      }\n    "], ["  \n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n    &:hover {\n      ", " {\n        background: ", ";\n      }\n      background: ", ";\n    }\n  }\n      }\n    "])), StyledOakIndexBox, parseColor("bg-decorative3-very-subdued"), parseColor("bg-decorative3-main"));
}, function (props) {
    return props.$disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      cursor: not-allowed;\n      background: ", ";\n      border-color: ", ";\n    "], ["\n      cursor: not-allowed;\n      background: ", ";\n      border-color: ", ";\n    "])), parseColor("bg-neutral"), parseColor("border-neutral-lighter"));
});
var StyledOakIndexBox = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  @media (hover: hover) {\n    &:hover {\n      background: ", ";\n    }\n  }\n"], ["\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  @media (hover: hover) {\n    &:hover {\n      background: ", ";\n    }\n  }\n"])), parseColor("bg-decorative3-very-subdued"));
var HeadingWithFocus = styled(OakHeading)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  outline: none;\n  border-radius: 6px;\n  padding: 4px;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"], ["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  outline: none;\n  border-radius: 6px;\n  padding: 4px;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
var OakUnitListOptionalityItemCard = function (props) {
    var lessonCount = props.lessonCount, href = props.href, unavailable = props.unavailable, firstItemRef = props.firstItemRef, onClick = props.onClick, isSaved = props.isSaved, isSaving = props.isSaving, onSave = props.onSave, rest = __rest(props, ["lessonCount", "href", "unavailable", "firstItemRef", "onClick", "isSaved", "isSaving", "onSave"]);
    return (React__default.createElement(OakFlex, { "$display": "flex", "$flexGrow": 1 },
        React__default.createElement(StyledOptionalityListItem, __assign({ "$ph": "spacing-12", "$pv": "spacing-16", "$background": "bg-decorative3-very-subdued", "$borderRadius": "border-radius-m", "$borderColor": "border-decorative3", "$ba": "border-solid-m", "$disabled": unavailable, "$flexGrow": 1 }, rest),
            React__default.createElement(OakFlex, { "$justifyContent": "space-between", "$flexGrow": 1, "$flexDirection": "column" },
                React__default.createElement(HeadingWithFocus, { "$font": "heading-7", "$color": unavailable ? "text-disabled" : "text-primary", tag: "h3", "$mb": "spacing-12", as: onSave ? "a" : "h3", onClick: unavailable ? undefined : onClick, href: unavailable ? undefined : href, ref: firstItemRef, className: onSave ? undefined : "hover-text" }, props.title),
                React__default.createElement(OakFlex, { "$justifyContent": onSave ? "space-between" : "flex-end", "$ph": "spacing-4" },
                    React__default.createElement(OakFlex, { "$alignItems": "center", "$justifyContent": "flex-end" },
                        React__default.createElement(OakSpan, { "$color": unavailable ? "text-disabled" : "text-primary", "$font": "heading-light-7", className: onSave ? undefined : "hover-text" }, lessonCount),
                        !onSave && (React__default.createElement(OakIcon, { iconName: "chevron-right", "$colorFilter": unavailable ? "text-disabled" : "text-primary" }))),
                    onSave && (React__default.createElement(OakSaveButton, { isSaved: isSaved !== null && isSaved !== void 0 ? isSaved : false, isLoading: isSaving !== null && isSaving !== void 0 ? isSaving : false, onSave: function () { return onSave(props.slug); }, unavailable: unavailable, saveButtonId: "save-button-".concat(props.slug), title: props.title })))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { OakUnitListOptionalityItemCard };
