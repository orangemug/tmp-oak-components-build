import { __makeTemplateObject, __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';
import { OakCardWithHandDrawnBorder } from '../../../OakCardWithHandDrawnBorder/OakCardWithHandDrawnBorder.js';
import { OakRoundIcon } from '../../../../images-and-icons/OakRoundIcon/OakRoundIcon.js';
import { parseDropShadow } from '../../../../../styles/helpers/parseDropShadow.js';

var StyledLabel = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledPupilOptionalityListButton = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  outline: none;\n  text-align: initial;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  outline: none;\n  text-align: initial;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) { return props.$disabled && "cursor: not-allowed"; }, function (props) {
    return !props.$disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      cursor: pointer;\n\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n        &:hover {\n          background: ", ";\n          ", " {\n            text-decoration: underline;\n          }\n        }\n      }\n\n      &:active {\n        box-shadow:\n          ", ",\n          ", ";\n      }\n    "], ["\n      cursor: pointer;\n\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n        &:hover {\n          background: ", ";\n          ", " {\n            text-decoration: underline;\n          }\n        }\n      }\n\n      &:active {\n        box-shadow:\n          ", ",\n          ", ";\n      }\n    "])), parseColor("bg-decorative1-subdued"), StyledLabel, parseDropShadow("drop-shadow-lemon"), parseDropShadow("drop-shadow-grey"));
});
/**
 * Button for units with optionality it is only used as the child of the PupilJourneyOptionailityitem component
 */
var OakPupilJourneyOptionalityButton = function (props) {
    props.lessonSectionName; props.progress; var disabled = props.disabled, href = props.href, unavailable = props.unavailable, onClick = props.onClick, numberOfLessons = props.numberOfLessons, rest = __rest(props, ["lessonSectionName", "progress", "disabled", "href", "unavailable", "onClick", "numberOfLessons"]);
    var disabledOrUnavailable = disabled || unavailable;
    return (React__default.createElement(StyledPupilOptionalityListButton, __assign({ as: disabledOrUnavailable ? "div" : "a", "$flexGrow": 1, "$background": unavailable ? "bg-neutral" : "bg-primary", "$disabled": disabledOrUnavailable, "$color": "text-primary", href: disabledOrUnavailable ? undefined : href, onClick: disabledOrUnavailable ? undefined : onClick }, rest),
        React__default.createElement(OakCardWithHandDrawnBorder, { fill: unavailable ? "border-neutral-lighter" : "bg-inverted", stroke: unavailable ? "border-neutral-lighter" : "border-primary", strokeWidth: "border-solid-s" },
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-8" },
                React__default.createElement(StyledLabel, { "$font": ["heading-7", "heading-6"], "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" }, props.title),
                React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": "spacing-4" },
                    !props.unavailable && (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement(StyledLabel, { "$font": "heading-light-7", "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" },
                            numberOfLessons,
                            " lessons"),
                        React__default.createElement(OakRoundIcon, { iconName: "chevron-right", "$width": "spacing-32", "$height": "spacing-32", "$background": "transparent", "$colorFilter": disabledOrUnavailable ? "icon-disabled" : "icon-primary" }))),
                    props.unavailable && (React__default.createElement(StyledLabel, { "$font": "heading-7", "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" }, "Unavailable")))))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { OakPupilJourneyOptionalityButton };
