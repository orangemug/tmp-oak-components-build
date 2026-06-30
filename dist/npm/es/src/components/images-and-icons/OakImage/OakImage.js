import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useShowPlaceholder } from './useShowPlaceholder.js';
import { colorFilterStyle } from '../../../styles/utils/colorFilterStyle.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

var oakPlaceholder = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTI4Ljc3OSAxOS4xNzZhMjcuMTkxIDI3LjE5MSAwIDAgMC0zLjggMS42IDE2LjcgMTYuNyAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNSAxLjUgMCAwIDAgMS43LjJjNS43LTIuNiA5LjMtNyAxMC4zLTEzLjJhMSAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45IDE3LjkgMCAwIDEtMy4yIDkuMiAyMy43IDIzLjcgMCAwIDEtMTAuOSA5LjEgNS40MDEgNS40MDEgMCAwIDEtNC41LS4yIDI2LjI5OCAyNi4yOTggMCAwIDEtOC41LTYuNiAyNS45IDI1LjkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMyAxOS4zIDAgMCAxIDEwLjgtMTYuNiAzOC45OTkgMzguOTk5IDAgMCAxIDUuNy0yLjEgMi4xIDIuMSAwIDAgMCAuOS0xLjMgMTQuMSAxNC4xIDAgMCAxIDMuNS02LjNsLjMtLjNjMS45LTIgMi42LTIgNC4zLjJsLjQuNWMxLjEgMS4xIDEgMS41LS4xIDIuNmExMS45IDExLjkgMCAwIDAtMy4yIDQuNCAxNi45IDE2LjkgMCAwIDEgNy41IDIuM2M1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDItLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45MDEgMTcuOTAxIDAgMCAxLTEwLjktMTMuNiA5Ljc5NiA5Ljc5NiAwIDAgMS0uMS0xLjlabTE4LjEgMTIuMmMuNC01LjUtNi45LTEyLjYtMTMtMTIuMS41IDYuNSA3LjYgMTIuOCAxMyAxMi4xWiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=";
var clickStyles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    /* onClick might be passed in the useClickableCard pattern */
    return props.onClick && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :hover {\n        cursor: pointer;\n      }\n    "], ["\n      :hover {\n        cursor: pointer;\n      }\n    "])));
});
var placeholderStyles = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return props.$showOakPlaceholder && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-image: url(", ");\n      background-color: ", ";\n      background-size: ", ";\n      background-position: center;\n      background-repeat: no-repeat;\n    "], ["\n      background-image: url(", ");\n      background-color: ", ";\n      background-size: ", ";\n      background-position: center;\n      background-repeat: no-repeat;\n    "])), oakPlaceholder, parseColor("bg-decorative2-very-subdued"), parseSpacing("spacing-64"));
});
var StyledFillImage = styled(Image)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), colorFilterStyle, clickStyles, placeholderStyles, function (props) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    object-fit: ", ";\n  "], ["\n    object-fit: ", ";\n  "])), props.$objectFit ? props.$objectFit : "contain"); });
var StyledResponsiveImage = styled(Image)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  width: 100%;\n  height: auto;\n"], ["\n  ", "\n  ", "\n  ", "\n  width: 100%;\n  height: auto;\n"])), colorFilterStyle, clickStyles, placeholderStyles);
/**
 * A wrapper for NextJs's Image component.
 *
 * Use this for all image types as well as icons.
 * Can accept remote urls provided they are whitelisted in next.config.js and relative urls for local images provided they begin with a "/".
 * Set the width and height of the image through the `$width` and `$height` props when the aspect ratio is not known. This will letterbox the image to avoid stretching.
 * Alternatively pass `width` and `height` props when the aspect ratio is known and use $minWidth to set the rendered width, avoiding letter-boxing.
 * NB. for letterboxed images, $background controls the color of the letterbox not the image.
 * `positionStyle` and `spacingStyle` props are also exposed for container.
 * sizes is exposed for further optimisation read Next docs for more info.
 *
 */
var OakImage = function (_a) {
    var props = __rest(_a, []);
    var as = props.as, src = props.src, alt = props.alt, width = props.width, height = props.height, sizes = props.sizes, _b = props.$width, $width = _b === void 0 ? "100%" : _b, _c = props.$position, $position = _c === void 0 ? "relative" : _c, $colorFilter = props.$colorFilter, _d = props.placeholder, placeholder = _d === void 0 ? "oak" : _d, unoptimized = props.unoptimized, imageProps = props.imageProps, $objectFit = props.$objectFit, onLoad = props.onLoad, onError = props.onError, rest = __rest(props, ["as", "src", "alt", "width", "height", "sizes", "$width", "$position", "$colorFilter", "placeholder", "unoptimized", "imageProps", "$objectFit", "onLoad", "onError"]);
    var finalPlaceholder = placeholder === "oak" ? undefined : placeholder;
    var _e = useShowPlaceholder(), showPlaceholder = _e.showPlaceholder, handleComplete = _e.handleComplete, setImg = _e.setImg;
    // We don't know the aspect ratio of the image, so we must use fill and letterbox it to avoid stretching
    // Use $width and $height to set the width and height of the image container
    if (!width || !height) {
        return (React__default.createElement(OakBox, __assign({ as: "span", "$display": "block", "$position": $position, "$width": $width }, rest),
            React__default.createElement(StyledFillImage, __assign({ ref: setImg, as: as !== null && as !== void 0 ? as : Image, src: src, alt: alt, sizes: sizes, fill: true, "$colorFilter": $colorFilter, placeholder: finalPlaceholder, "$showOakPlaceholder": placeholder === "oak" && showPlaceholder, unoptimized: unoptimized, onLoad: handleComplete(onLoad), onError: handleComplete(onError), "$objectFit": $objectFit }, imageProps))));
    }
    // When we know the aspect ratio, we can use Image's repsonsive layout
    // Use $minWidth to set the width with auto height
    return (React__default.createElement(OakBox, __assign({ as: "span", "$display": "block", "$maxWidth": "spacing-0", "$position": $position }, rest),
        React__default.createElement(StyledResponsiveImage, __assign({ ref: setImg, as: as !== null && as !== void 0 ? as : Image, src: src, alt: alt, width: width, height: height, sizes: sizes, unoptimized: unoptimized, "$colorFilter": $colorFilter, placeholder: finalPlaceholder, "$showOakPlaceholder": placeholder === "oak" && showPlaceholder, onLoad: handleComplete(onLoad), onError: handleComplete(onError) }, imageProps))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

export { OakImage, oakPlaceholder, placeholderStyles };
