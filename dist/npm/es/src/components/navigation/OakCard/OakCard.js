import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakFocusIndicator } from '../../messaging-and-feedback/OakFocusIndicator/OakFocusIndicator.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakImage } from '../../images-and-icons/OakImage/OakImage.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakTagFunctional } from '../../messaging-and-feedback/OakTagFunctional/OakTagFunctional.js';

var StyledOakFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: ", ";\n  pa: ", ";\n  gap: ", ";\n\n  &:hover {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    span {\n      text-decoration: underline;\n    }\n\n    span {\n      text-decoration-thickness: 18%;\n    }\n  }\n"], ["\n  flex-direction: ", ";\n  pa: ", ";\n  gap: ", ";\n\n  &:hover {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    span {\n      text-decoration: underline;\n    }\n\n    span {\n      text-decoration-thickness: 18%;\n    }\n  }\n"])), function (_a) {
    var $flexDirection = _a.$flexDirection;
    return $flexDirection;
}, function (_a) {
    var $pa = _a.$pa;
    return parseSpacing($pa);
}, function (_a) {
    var $gap = _a.$gap;
    return parseSpacing($gap);
});
var StyledOakImage = styled(OakImage)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  aspect-ratio: ", ";\n\n  img {\n    border-radius: ", ";\n    object-fit: cover;\n  }\n"], ["\n  height: ", ";\n  width: ", ";\n  aspect-ratio: ", ";\n\n  img {\n    border-radius: ", ";\n    object-fit: cover;\n  }\n"])), function (_a) {
    var $height = _a.$height;
    return parseSpacing($height);
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $aspectRatio = _a.$aspectRatio;
    return $aspectRatio;
}, parseBorderRadius("border-radius-m2"));
/**
 * A highly customisable card component that displays a heading and takes a href at minimum.
 *
 * It can also display an image, subcopy, a tag, and a link with an icon.
 *
 * The card can be oriented in a row or column layout and its width can be adjusted using spacing tokens.
 * The image aspect ratio can be set to either 1:1 or 4:3.
 */
var OakCard = function (_a) {
    var heading = _a.heading, _b = _a.headingLevel, headingLevel = _b === void 0 ? "h3" : _b, href = _a.href, _c = _a.cardOrientation, cardOrientation = _c === void 0 ? "column" : _c, cardWidth = _a.cardWidth, imageSrc = _a.imageSrc, imageAlt = _a.imageAlt, _d = _a.aspectRatio, aspectRatio = _d === void 0 ? "1/1" : _d, subCopy = _a.subCopy, _e = _a.subCopyColor, subCopyColor = _e === void 0 ? "text-primary" : _e, tagName = _a.tagName, _f = _a.tagBackground, tagBackground = _f === void 0 ? "bg-decorative3-very-subdued" : _f, linkText = _a.linkText, _g = _a.linkIconName, linkIconName = _g === void 0 ? "arrow-right" : _g, _h = _a.hoverBackground, hoverBackground = _h === void 0 ? "bg-btn-secondary-hover" : _h;
    return (React__default.createElement(OakFocusIndicator, { "$background": "bg-primary", hoverBackground: hoverBackground, "$height": "100%", "$width": cardWidth, "$borderRadius": "border-radius-m2" },
        React__default.createElement(StyledOakFlex, { as: "a", href: href, "$flexDirection": cardOrientation, "$height": "100%", "$pa": "spacing-16", "$gap": "spacing-16", "$color": "text-primary" },
            imageSrc && (React__default.createElement(StyledOakImage, { src: imageSrc || "", alt: imageAlt || "", "$height": cardOrientation === "row" ? "spacing-240" : "auto", "$width": "auto", "$aspectRatio": aspectRatio })),
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$justifyContent": "space-between", "$height": cardOrientation === "row" ? "auto" : "100%", "$pt": cardOrientation === "row" ? "spacing-24" : "spacing-0", "$pb": cardOrientation === "row" ? "spacing-24" : "spacing-0", "$gap": "spacing-16" },
                React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-16" },
                    React__default.createElement(OakHeading, { tag: headingLevel, "$font": "heading-6" }, heading),
                    subCopy && React__default.createElement(OakP, { "$color": subCopyColor }, subCopy)),
                React__default.createElement(OakFlex, { "$flexDirection": "row", "$justifyContent": tagName ? "space-between" : "flex-end", "$gap": "spacing-16" },
                    tagName && (React__default.createElement(OakTagFunctional, { label: tagName, "$background": tagBackground })),
                    linkText && (React__default.createElement(OakFlex, { "$alignItems": "center" },
                        React__default.createElement(OakSpan, { "$font": "heading-light-7" }, linkText),
                        React__default.createElement(OakIcon, { iconName: linkIconName, alt: "", "$width": "spacing-24", "$height": "spacing-24" }))))))));
};
var templateObject_1, templateObject_2;

export { OakCard };
