import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakImage, oakPlaceholder } from '../../images-and-icons/OakImage/OakImage.js';
import { OakTypography } from '../../typography/OakTypography/OakTypography.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseTransitions } from '../../../styles/helpers/parseTransitions.js';
import { getMediaQuery } from '../../../styles/utils/responsiveStyle.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

var OakMediaClipStackListItemLink = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transition: ", ";\n\n  &:hover {\n    h5 {\n      text-decoration: underline;\n    }\n  }\n\n  &:focus-visible {\n    outline: none;\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:hover,\n  &:focus-visible {\n    img {\n      -webkit-filter: brightness(80%);\n      transition: ", ";\n    }\n  }\n"], ["\n  transition: ", ";\n\n  &:hover {\n    h5 {\n      text-decoration: underline;\n    }\n  }\n\n  &:focus-visible {\n    outline: none;\n    box-shadow:\n      ", ",\n      ", ";\n  }\n\n  &:hover,\n  &:focus-visible {\n    img {\n      -webkit-filter: brightness(80%);\n      transition: ", ";\n    }\n  }\n"])), parseTransitions("standard-ease"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"), parseTransitions("standard-ease"));
var ImageStackShadow = styled(OakBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: ", " 8px -6px;\n\n  margin-top: 10px;\n  margin-right: 15px;\n\n  img {\n    -webkit-filter: brightness(100%);\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: -6px;\n    left: 8px;\n    width: 100%;\n    height: 100%;\n    box-shadow: ", " 7px -4px;\n    border-radius: ", ";\n  }\n\n  @media ", " {\n    box-shadow: ", " 4px -3px;\n\n    &::after {\n      top: -3px;\n      left: 4px;\n      box-shadow: ", " 4px -3px;\n    }\n  }\n\n  #play-icon {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -16px;\n    margin-top: -16px;\n  }\n"], ["\n  box-shadow: ", " 8px -6px;\n\n  margin-top: 10px;\n  margin-right: 15px;\n\n  img {\n    -webkit-filter: brightness(100%);\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: -6px;\n    left: 8px;\n    width: 100%;\n    height: 100%;\n    box-shadow: ", " 7px -4px;\n    border-radius: ", ";\n  }\n\n  @media ", " {\n    box-shadow: ", " 4px -3px;\n\n    &::after {\n      top: -3px;\n      left: 4px;\n      box-shadow: ", " 4px -3px;\n    }\n  }\n\n  #play-icon {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -16px;\n    margin-top: -16px;\n  }\n"])), parseColor("icon-disabled"), parseColor("border-neutral-lighter"), parseBorderRadius("border-radius-s"), getMediaQuery("mobile"), parseColor("border-neutral"), parseColor("border-neutral-lighter"));
var StyledMediaClipImage = styled(OakImage)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  background-size: ", ";\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  img {\n    object-fit: fill;\n    border-radius: ", ";\n  }\n"], ["\n  background-color: ", ";\n  background-size: ", ";\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  img {\n    object-fit: fill;\n    border-radius: ", ";\n  }\n"])), parseColor("bg-decorative2-very-subdued"), parseSpacing("spacing-64"), parseBorderRadius("border-radius-s"));
var OakMediaClipStackListItem = function (props) {
    var title = props.title, numberOfClips = props.numberOfClips, imageUrl = props.imageUrl, imageAltText = props.imageAltText, href = props.href, isAudioClip = props.isAudioClip, rel = props.rel, rest = __rest(props, ["title", "numberOfClips", "imageUrl", "imageAltText", "href", "isAudioClip", "rel"]);
    return (React__default.createElement(OakMediaClipStackListItemLink, __assign({ as: "a", rel: rel, href: href, "$display": "flex", "$flexDirection": ["row", "row", "column"], "$gap": ["spacing-8", "spacing-8", "spacing-0"], "$width": "fit-content", "$alignItems": ["center", "center", "flex-start"] }, rest),
        React__default.createElement(OakBox, null,
            React__default.createElement(ImageStackShadow, { "$borderRadius": "border-radius-s", "$width": ["spacing-100", "spacing-100", "spacing-180"], "$height": ["spacing-64", "spacing-64", "spacing-100"], "$position": "relative", "$mb": ["spacing-0", "spacing-0", "spacing-12"] },
                !isAudioClip ? (React__default.createElement(StyledMediaClipImage, { src: !imageUrl ? oakPlaceholder : imageUrl, alt: imageAltText, "$borderRadius": "border-radius-s", "$overflow": "hidden" })) : (React__default.createElement(OakIcon, { "$width": ["spacing-100", "spacing-100", "spacing-180"], "$height": ["spacing-64", "spacing-64", "spacing-100"], iconName: "audio-clip-large", alt: imageAltText, "$position": "absolute", "$borderRadius": "border-radius-s", "$overflow": "hidden", "$objectFit": "cover" })),
                React__default.createElement(OakIcon, { id: "play-icon", iconName: "play", "$width": "spacing-32", "$height": "spacing-32" }))),
        React__default.createElement(OakBox, { "$mb": ["spacing-0", "spacing-0", "spacing-16"] },
            React__default.createElement(OakHeading, { tag: "h3", "$font": "heading-7", "$color": "text-primary" }, title),
            React__default.createElement(OakTypography, { "$font": "body-3", "$color": "text-subdued" },
                numberOfClips,
                " ",
                numberOfClips === 1 ? "clip" : "clips"))));
};
var templateObject_1, templateObject_2, templateObject_3;
/**
 *
 * OakMediaClipStackListItemLink component is a link that displays a stack of videos with a title and number of clips
 *
 */

export { OakMediaClipStackListItem };
