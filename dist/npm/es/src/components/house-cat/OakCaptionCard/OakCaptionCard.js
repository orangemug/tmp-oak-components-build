import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { getTimeText } from '../utils.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { InternalCheckBoxLabelHoverDecor } from '../../internal-components/InternalCheckBoxLabel/InternalCheckBoxLabel.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { OakCheckBox } from '../../form-elements/OakCheckBox/OakCheckBox.js';
import { OakLink } from '../../navigation/OakLink/OakLink.js';

var StyledFlexBox = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &:hover:has(input:not(:disabled)) ", " {\n    text-decoration: underline;\n  }\n\n  &:has(input:focus-visible) {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n  ", "\n"], ["\n  &:hover:has(input:not(:disabled)) ", " {\n    text-decoration: underline;\n  }\n\n  &:has(input:focus-visible) {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  ", "\n\n  ", "\n  ", "\n"])), InternalCheckBoxLabelHoverDecor, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), function (props) {
    return props.$disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      cursor: not-allowed;\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      cursor: not-allowed;\n      background-color: ", ";\n      color: ", ";\n    "])), parseColor("bg-neutral-stronger"), parseColor("text-disabled"));
}, function (props) {
    return !props.$disabled &&
        props.$highlighted && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n    "])), parseColor("bg-decorative3-very-subdued"), parseColor("bg-decorative3-main"), parseColor("bg-decorative3-subdued"));
}, function (props) {
    return !props.$disabled &&
        !props.$highlighted && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      &:hover {\n        background-color: ", ";\n      }\n    "])), parseColor("bg-decorative3-subdued"));
});
/**
 * A caption card with links to the associated lesson and rev edit page.
 *
 * ## Events
 * The following callbacks are available for tracking checkbox events:
 *
 * ### onCheckChanged
 *  onCheckChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 */
var OakCaptionCard = function (props) {
    var checked = props.checked, onCheckChanged = props.onCheckChanged, onClick = props.onClick, captionId = props.captionId, videoTitle = props.videoTitle, lessonUid = props.lessonUid, videoType = props.videoType, lastUpdated = props.lastUpdated, lastEdited = props.lastEdited, _a = props.highlighted, highlighted = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, _c = props["data-testid"], dataTestId = _c === void 0 ? "caption-card" : _c, editHref = props.editHref, lessonHref = props.lessonHref;
    var filterColor = disabled ? "icon-disabled" : null;
    return (React__default.createElement(StyledFlexBox, { "data-testid": dataTestId, "$minHeight": "spacing-40", "$position": "relative", "$background": "bg-primary", "$borderRadius": "border-radius-s", "$pa": "spacing-16", "$gap": "spacing-12", "$flexDirection": "column", "$width": "100%", "$highlighted": !!highlighted, "$disabled": !!disabled, onClick: onClick },
        React__default.createElement(OakFlex, { "$justifyContent": "flex-start", "$alignItems": "center", "$width": "100%", "$gap": "spacing-12", "$font": "heading-7" },
            React__default.createElement(OakCheckBox, { checked: checked, value: "Caption ID: ".concat(captionId), displayValue: "", disabled: disabled, onChange: onCheckChanged, "aria-labelledby": captionId, "aria-label": "check caption ".concat(captionId), "data-testid": "checkbox", id: captionId }),
            React__default.createElement(OakFlex, { "$font": "heading-7", "$justifyContent": "flex-start", "$gap": "spacing-8", "$flexWrap": "wrap" },
                React__default.createElement(OakSpan, { "$font": "heading-7" },
                    "Caption ID: ",
                    captionId),
                React__default.createElement(OakSpan, null, " \u2022 "),
                React__default.createElement(OakBox, null,
                    "Video Title: ",
                    videoTitle)),
            React__default.createElement(OakFlex, { "$flexGrow": 10, "$justifyContent": "flex-end" },
                React__default.createElement(OakLink, { variant: "secondary", href: editHref, iconName: "external", isTrailingIcon: true, "aria-label": "edit caption ".concat(captionId, " in a new tab in rev"), target: "_blank", onClick: function (e) {
                        e.stopPropagation();
                    } }, "Edit"))),
        React__default.createElement(OakFlex, { "$justifyContent": "flex-start", "$alignItems": "center", "$width": "100%", "$gap": "spacing-32", "$font": "body-2" },
            React__default.createElement(OakLink, { variant: "secondary", href: lessonHref, "aria-label": "view lesson ".concat(lessonUid, " in a new tab"), "data-testid": "lesson_uid", iconName: "external", isTrailingIcon: true, target: "_blank", onClick: function (e) {
                    e.stopPropagation();
                } }, lessonUid),
            React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": "spacing-4" },
                " ",
                React__default.createElement(OakIcon, { alt: "", iconName: "video", iconWidth: "spacing-24", iconHeight: "spacing-24", "$colorFilter": filterColor }),
                getVideoTypeText(videoType)),
            lastEdited ? (React__default.createElement(OakFlex, { "$alignItems": "center" },
                React__default.createElement(OakIcon, { alt: "", iconName: "equipment-required", iconWidth: "spacing-24", iconHeight: "spacing-24", "$colorFilter": filterColor }),
                "Edited ",
                getTimeText(lastEdited))) : null,
            React__default.createElement(OakFlex, { "$alignItems": "center" },
                React__default.createElement(OakIcon, { alt: "", iconName: "success", iconWidth: "spacing-24", iconHeight: "spacing-24", "$colorFilter": filterColor }),
                "Updated ",
                getTimeText(lastUpdated)))));
};
function getVideoTypeText(videoType) {
    switch (videoType) {
        case "lesson":
            return "Lesson video";
        case "media clip":
            return "Media clip";
        default:
            return "Unknown";
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { OakCaptionCard };
