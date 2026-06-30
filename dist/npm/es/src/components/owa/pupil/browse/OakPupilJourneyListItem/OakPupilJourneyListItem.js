import { __makeTemplateObject, __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';
import { parseColorFilter } from '../../../../../styles/helpers/parseColorFilter.js';
import { parseSpacing } from '../../../../../styles/helpers/parseSpacing.js';
import { parseDropShadow } from '../../../../../styles/helpers/parseDropShadow.js';

var StyledLabel = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledRoundIcon = styled(OakRoundIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0;\n\n  background: transparent;\n\n  img {\n    filter: ", ";\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0;\n\n  background: transparent;\n\n  img {\n    filter: ", ";\n  }\n"])), parseSpacing("spacing-40"), parseSpacing("spacing-40"), function (props) {
    return parseColorFilter(props.$disabled ? "icon-disabled" : "icon-primary");
});
var activeIconStyles = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", " {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"], ["\n  ", " {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"])), StyledRoundIcon, parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"));
var hoverIconStyles = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", " {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n"], ["\n  ", " {\n    background: ", ";\n\n    img {\n      filter: ", ";\n    }\n  }\n"])), StyledRoundIcon, parseColor("bg-btn-primary"), parseColorFilter("icon-inverted"));
var StyledPupilJourneyItem = styled(OakFlex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  outline: none;\n  text-align: initial;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  outline: none;\n  text-align: initial;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) { return props.$disabled && "cursor: not-allowed"; }, function (props) {
    return !props.$disabled && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      cursor: pointer;\n\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n        &:hover {\n          background: ", ";\n          ", " {\n            text-decoration: underline;\n          }\n\n          ", "\n        }\n      }\n\n      &:active {\n        box-shadow:\n          ", ",\n          ", ";\n        ", "\n        ", "\n      }\n    "], ["\n      cursor: pointer;\n\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n        &:hover {\n          background: ", ";\n          ", " {\n            text-decoration: underline;\n          }\n\n          ", "\n        }\n      }\n\n      &:active {\n        box-shadow:\n          ", ",\n          ", ";\n        ", "\n        ", "\n      }\n    "])), parseColor("bg-decorative1-subdued"), StyledLabel, hoverIconStyles, parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"), activeIconStyles, hoverIconStyles);
});
var FlexedOakBox = styled(OakBox)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
var OakPupilJourneyListItem = function (props) {
    var as = props.as; props.lessonSectionName; props.progress; var disabled = props.disabled, href = props.href, unavailable = props.unavailable, onClick = props.onClick, rest = __rest(props, ["as", "lessonSectionName", "progress", "disabled", "href", "unavailable", "onClick"]);
    var disabledOrUnavailable = disabled || unavailable;
    return (React__default.createElement(OakBox, { role: "listitem" },
        React__default.createElement(StyledPupilJourneyItem, __assign({ className: disabledOrUnavailable ? undefined : "pupil-journey-item", as: disabledOrUnavailable ? "div" : (as !== null && as !== void 0 ? as : "a"), "$gap": ["spacing-16", "spacing-32"], "$alignItems": "center", "$justifyContent": "space-between", "$flexWrap": "wrap", "$background": unavailable ? "bg-neutral" : "bg-primary", "$pa": ["spacing-20", "spacing-24"], "$borderRadius": "border-radius-m", "$ba": unavailable ? "border-solid-m" : "border-solid-none", "$borderColor": unavailable ? "border-neutral-lighter" : "transparent", "$disabled": disabledOrUnavailable, "$color": "text-primary", href: disabledOrUnavailable ? undefined : href, onClick: disabledOrUnavailable ? undefined : onClick }, rest),
            React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": ["spacing-32"] },
                " ",
                React__default.createElement(OakFlex, null,
                    React__default.createElement(OakBox, { "$font": ["heading-5", "heading-4"], "$color": props.unavailable ? "text-subdued" : "text-primary", "$textDecoration": "none" }, props.index)),
                React__default.createElement(FlexedOakBox, null,
                    React__default.createElement(StyledLabel, { "$font": ["heading-6", "heading-5"], "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" }, props.title))),
            React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": "spacing-12", "$flexBasis": "auto", "$flexGrow": 1, "$justifyContent": "flex-end" },
                props.numberOfLessons !== undefined && !props.unavailable && (React__default.createElement(StyledLabel, { "$font": "heading-7", "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" },
                    props.numberOfLessons,
                    " lessons")),
                props.unavailable && (React__default.createElement(StyledLabel, { "$font": "heading-7", "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" }, "Unavailable")),
                !props.unavailable && (React__default.createElement(StyledRoundIcon, { iconName: "chevron-right", "$disabled": disabledOrUnavailable }))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

export { OakPupilJourneyListItem };
