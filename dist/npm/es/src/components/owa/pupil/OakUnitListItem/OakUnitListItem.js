import { __makeTemplateObject, __rest, __assign } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakP } from '../../../typography/OakP/OakP.js';
import { OakHeading } from '../../../typography/OakHeading/OakHeading.js';
import { OakLI } from '../../../typography/OakLI/OakLI.js';
import { OakBox } from '../../../layout-and-structure/OakBox/OakBox.js';
import { OakSpan } from '../../../typography/OakSpan/OakSpan.js';
import { OakIcon } from '../../../images-and-icons/OakIcon/OakIcon.js';
import { parseColor } from '../../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../../styles/helpers/parseDropShadow.js';
import { OakSaveButton } from '../../OakSaveButton/OakSaveButton.js';

var FlexWithFocus = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  outline: none;\n\n  &:hover .hover-text {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"], ["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  outline: none;\n\n  &:hover .hover-text {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
var StyledUnitListItem = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: initial;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n\n  ", "\n\n  ", "\n"], ["\n  text-align: initial;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n\n  ", "\n\n  ", "\n"])), function (props) {
    return !props.$disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n    &:hover {\n      ", " {\n        background: ", ";\n      }\n      background: ", ";\n    }\n  }\n      }\n    "], ["\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n    &:hover {\n      ", " {\n        background: ", ";\n      }\n      background: ", ";\n    }\n  }\n      }\n    "])), StyledOakIndexBox, parseColor("bg-decorative3-subdued"), parseColor("bg-decorative3-subdued"));
}, function (props) {
    return props.$disabled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      cursor: not-allowed;\n      background: ", ";\n    "], ["\n      cursor: not-allowed;\n      background: ", ";\n    "])), parseColor("bg-neutral"));
});
var StyledOakIndexBox = styled(OakFlex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  @media (hover: hover) {\n    &:hover {\n      background: ", ";\n    }\n  }\n"], ["\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  @media (hover: hover) {\n    &:hover {\n      background: ", ";\n    }\n  }\n"])), parseColor("bg-decorative3-subdued"));
/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
var OakUnitListItem = function (props) {
    var lessonCount = props.lessonCount, href = props.href, unavailable = props.unavailable, onClick = props.onClick, index = props.index, isLegacy = props.isLegacy, onSave = props.onSave, isSaved = props.isSaved, isSaving = props.isSaving, firstItemRef = props.firstItemRef, saveButtonId = props.saveButtonId, _a = props.as, as = _a === void 0 ? "a" : _a, rest = __rest(props, ["lessonCount", "href", "unavailable", "onClick", "index", "isLegacy", "onSave", "isSaved", "isSaving", "firstItemRef", "saveButtonId", "as"]);
    return (React__default.createElement(OakLI, { "$listStyle": "none", "$width": "100%" },
        React__default.createElement(StyledUnitListItem, __assign({ "$alignItems": "center", "$background": unavailable ? "bg-neutral" : "bg-primary", "$borderRadius": "border-radius-m", "$disabled": unavailable, "$pr": "spacing-16", "$width": "100%", "$display": ["none", "flex"] }, rest),
            React__default.createElement(FlexWithFocus, { "$pr": onSave ? "spacing-8" : "spacing-0", "$borderRadius": "border-radius-m", "$gap": "spacing-16", "$alignItems": "center", "$width": "100%", "$height": "100%", as: as, href: unavailable ? undefined : href, ref: firstItemRef, onClick: unavailable ? undefined : onClick },
                React__default.createElement(StyledOakIndexBox, { "$background": unavailable
                        ? "bg-neutral-stronger"
                        : isLegacy
                            ? "bg-decorative3-subdued"
                            : "bg-decorative3-main", "$justifyContent": "center", "$alignItems": "center", "$minWidth": "spacing-64", "$alignSelf": "stretch" },
                    React__default.createElement(OakSpan, { "$font": "heading-5", "$color": unavailable ? "text-disabled" : "text-primary" }, index)),
                React__default.createElement(OakFlex, { "$pv": "spacing-20", "$pr": "spacing-16", "$flexGrow": 1 },
                    React__default.createElement(OakP, { "$font": "heading-7", "$color": unavailable ? "text-disabled" : "text-primary", className: "hover-text" }, props.title)),
                React__default.createElement(OakFlex, { "$minWidth": "spacing-80", "$alignItems": "center", "$justifyContent": "end" },
                    React__default.createElement(OakP, { "$font": "heading-light-7", "$whiteSpace": "nowrap", "$color": unavailable ? "text-disabled" : "text-primary" }, props.yearTitle)),
                React__default.createElement(OakFlex, { "$font": "heading-light-7", "$color": unavailable ? "text-disabled" : "text-primary", "$alignItems": "center", "$justifyContent": "end", "$minWidth": onSave ? "spacing-100" : "spacing-160" },
                    React__default.createElement(OakP, { "$whiteSpace": "nowrap" }, lessonCount),
                    !onSave && (React__default.createElement(OakIcon, { iconName: "chevron-right", iconWidth: "spacing-32", "$colorFilter": unavailable ? "text-disabled" : "text-primary" })))),
            onSave && (React__default.createElement(OakSaveButton, { onSave: onSave, isSaved: isSaved !== null && isSaved !== void 0 ? isSaved : false, isLoading: isSaving !== null && isSaving !== void 0 ? isSaving : false, unavailable: unavailable, saveButtonId: saveButtonId, title: props.title }))),
        React__default.createElement(StyledUnitListItem, __assign({ "$background": unavailable ? "bg-neutral" : "bg-primary", "$borderRadius": "border-radius-m", "$disabled": unavailable, "$display": ["flex", "none"], "$width": "100%", "$pa": "spacing-16" }, rest),
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-16", "$width": "100%" },
                React__default.createElement(OakFlex, { "$gap": "spacing-16", as: as, href: unavailable ? undefined : href },
                    React__default.createElement(OakFlex, { "$background": unavailable
                            ? "bg-neutral-stronger"
                            : isLegacy
                                ? "bg-decorative3-subdued"
                                : "bg-decorative3-main", "$justifyContent": "center", "$alignItems": "center", "$borderRadius": "border-radius-m", "$width": "spacing-40", "$height": "spacing-40", "$minWidth": "spacing-40" },
                        React__default.createElement(OakHeading, { tag: "h3", "$font": "heading-5", "$color": unavailable ? "text-disabled" : "text-primary" }, index)),
                    React__default.createElement(OakBox, { "$width": "100%" },
                        React__default.createElement(OakP, { "$font": "heading-7", "$color": unavailable ? "text-disabled" : "text-primary" }, props.title))),
                React__default.createElement(OakFlex, { "$justifyContent": "space-between", "$alignItems": "center" },
                    React__default.createElement(OakP, { "$font": "heading-light-7", "$color": unavailable ? "text-disabled" : "text-primary" }, props.yearTitle),
                    React__default.createElement(OakP, { "$font": "heading-light-7", "$color": unavailable ? "text-disabled" : "text-primary" }, lessonCount),
                    onSave && (React__default.createElement(OakSaveButton, { onSave: onSave, isSaved: isSaved !== null && isSaved !== void 0 ? isSaved : false, isLoading: isSaving !== null && isSaving !== void 0 ? isSaving : false, unavailable: unavailable, title: props.title })))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { OakUnitListItem };
