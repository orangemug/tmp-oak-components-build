import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { StyledButtonWrapper } from '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakImage, placeholderStyles, oakPlaceholder } from '../../images-and-icons/OakImage/OakImage.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import { InternalButton } from '../../internal-components/InternalButton/InternalButton.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';
import { positionStyle } from '../../../styles/utils/positionStyle.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { OakTagFunctional } from '../../messaging-and-feedback/OakTagFunctional/OakTagFunctional.js';
import { formatTimeCode, OakTimer } from '../OakTimer/OakTimer.js';

var getButtonStyles = function (muxPlayingState) {
    switch (muxPlayingState) {
        case "standard":
            return {
                defaultBackground: "bg-primary",
                defaultTextColor: "text-inverted",
                hoverBackground: "bg-btn-secondary-hover",
                hoverTextColor: "text-primary",
                clipNameTitle: "text-primary",
            };
        case "playing":
            return {
                defaultBackground: "bg-decorative1-subdued",
                defaultTextColor: "text-primary",
                hoverBackground: "bg-decorative1-main",
                hoverTextColor: "text-primary",
                clipNameTitle: "text-primary",
            };
        case "played":
            return {
                defaultBackground: "bg-primary",
                defaultTextColor: "text-subdued",
                hoverBackground: "bg-btn-secondary-hover",
                hoverTextColor: "text-primary",
                clipNameTitle: "text-subdued",
            };
    }
};
var MediaButtonWrapper = styled(StyledButtonWrapper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 72px;\n  width: 100%;\n"], ["\n  min-height: 72px;\n  width: 100%;\n"])));
var StyledMediaClipImage = styled(OakImage)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), placeholderStyles);
var ImageBox = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  img {\n    border-radius: 2px;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"], ["\n  img {\n    border-radius: 2px;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"])), function (props) {
    return props.disabled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      &::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: lightgray;\n        opacity: 0.5;\n        border-radius: 2px;\n      }\n    "], ["\n      &::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: lightgray;\n        opacity: 0.5;\n        border-radius: 2px;\n      }\n    "])));
});
var TextBox = styled(OakFlex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: \"relative\";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  h4 {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n  }\n"], ["\n  position: \"relative\";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  h4 {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n  }\n"])));
var StyledInternalButton = styled(InternalButton)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  ", "\n  display: inline-block;\n  transition: opacity 300ms ease-out;\n  ", "\n"], ["\n  ", "\n  ", "\n  display: inline-block;\n  transition: opacity 300ms ease-out;\n  ", "\n"])), positionStyle, sizeStyle, function (props) { return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    &:hover {\n      h4 {\n        text-decoration: ", ";\n      }\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n    }\n    &:active {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &:disabled {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n  "], ["\n    &:hover {\n      h4 {\n        text-decoration: ", ";\n      }\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n    }\n    &:active {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n    &:disabled {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), props.$muxPlayingState === "standard"
    ? "underline"
    : "none", parseColor(props.$hoverTextColor), parseColor(props.$hoverBackground), parseColor(props.$hoverBorderColor), parseColor(props.$defaultBackground), parseColor(props.$defaultBorderColor), parseColor(props.$defaultTextColor), parseColor(props.$disabledBackground), parseColor(props.$disabledBorderColor), parseColor(props.$disabledTextColor)); });
var OakMediaClip = function (_a) {
    var thumbnailImage = _a.thumbnailImage, timeCode = _a.timeCode, clipName = _a.clipName, learningCycle = _a.learningCycle, muxPlayingState = _a.muxPlayingState, onClick = _a.onClick, disabled = _a.disabled, imageAltText = _a.imageAltText, isAudioClip = _a.isAudioClip, _b = _a.element, element = _b === void 0 ? "button" : _b;
    var buttonStyles = getButtonStyles(muxPlayingState);
    var formattedTimeCode = formatTimeCode(timeCode);
    var buttonAriaLabel = "".concat(isAudioClip ? "Audio" : "Video", " - ").concat(clipName).concat(learningCycle ? " - ".concat(learningCycle) : "", ", length: ").concat(formattedTimeCode).concat(muxPlayingState === "played" ? ", Played" : "");
    return (React__default.createElement(OakLI, { "$mb": "spacing-8" },
        React__default.createElement(MediaButtonWrapper, { "$position": "relative", "$borderRadius": "border-radius-s" },
            React__default.createElement(OakBox, { className: "grey-shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
            React__default.createElement(OakBox, { className: "yellow-shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
            React__default.createElement(StyledInternalButton, { element: element, tabIndex: 0, className: "internal-button", "$width": "100%", "$height": "100%", "$background": buttonStyles.defaultBackground, "$borderColor": "transparent", "$borderRadius": "border-radius-s", "$position": "relative", disabled: disabled, "$defaultBorderColor": "transparent", "$color": buttonStyles.defaultTextColor, "$hoverBackground": buttonStyles.hoverBackground, "$hoverBorderColor": "transparent", "$hoverTextColor": "text-primary", "$disabledBackground": "bg-btn-secondary-disabled", "$disabledBorderColor": "text-disabled", "$disabledTextColor": "text-disabled", "$justifyContent": "flex-start", onClick: onClick, "$pa": "spacing-8", "$muxPlayingState": muxPlayingState, "aria-label": buttonAriaLabel },
                React__default.createElement(OakFlex, { "$flexDirection": "row", "$alignItems": "center", "$width": "100%" },
                    React__default.createElement(React__default.Fragment, null,
                        React__default.createElement(ImageBox, { "$height": "spacing-56", "$width": "spacing-100", "$borderRadius": "border-radius-xs", "$mr": "spacing-16", "$position": "relative", disabled: disabled, "$flexShrink": 0 },
                            !isAudioClip && thumbnailImage ? (React__default.createElement(StyledMediaClipImage, { "$height": "100%", "$width": "100%", src: thumbnailImage !== null && thumbnailImage !== void 0 ? thumbnailImage : oakPlaceholder, alt: imageAltText, "$showOakPlaceholder": !thumbnailImage ? true : false, "$borderRadius": "border-radius-xs" })) : (React__default.createElement(OakIcon, { "$height": "100%", "$width": "100%", iconName: "audio-clip-small", alt: imageAltText, "$borderRadius": "border-radius-xs" })),
                            React__default.createElement(OakTimer, { timeCode: timeCode, "$position": "absolute", "$bottom": "spacing-4", "$right": "spacing-4" })),
                        React__default.createElement(TextBox, { "$width": "100%", "$flexDirection": "column", "$gap": "spacing-4" },
                            React__default.createElement(OakHeading, { "$textOverflow": "ellipsis", tag: "h4", "$font": "heading-7", "$color": !disabled ? buttonStyles.clipNameTitle : "text-disabled" }, clipName),
                            learningCycle && (React__default.createElement(OakP, { "$color": !disabled ? "text-subdued" : "text-disabled", "$font": "body-3", "$textOverflow": "ellipsis", "$overflow": "hidden", "$whiteSpace": "nowrap" }, learningCycle)))),
                    muxPlayingState === "played" && !disabled && (React__default.createElement(OakFlex, { "$flexGrow": 1 },
                        React__default.createElement(OakTagFunctional, { label: "Played", "$background": "bg-neutral" }))))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
/**
 *
 * OakMediaClip component adapted from the Internal button component, has 4 different states, standard, playing, played and disabled
 * The following callbacks are available for tracking focus events:
 *
 * timeCode should be provided in seconds as the OakTimer component converts this to hours and minutes format
 *
 * ### Callbacks
 * - `onClick`
 *
 */

export { OakMediaClip, StyledMediaClipImage };
