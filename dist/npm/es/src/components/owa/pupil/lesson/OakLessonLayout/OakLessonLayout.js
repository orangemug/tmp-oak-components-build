import { __makeTemplateObject, __read } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { parseSpacing } from '../../../../../styles/helpers/parseSpacing.js';
import { getBreakpoint } from '../../../../../styles/utils/responsiveStyle.js';
import '../../../../../styles/theme/color.js';
import '../../../../../styles/theme/typography.js';
import { oakDefaultTheme } from '../../../../../styles/theme/default.theme.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';
import { backgrounds } from '../../../../../image-map.js';

var lessonSectionNames = [
    "overview",
    "intro",
    "starter-quiz",
    "video",
    "exit-quiz",
    "review",
];
/**
 * `OakBox` does not support space-between tokens on `padding` only `margin`, so we need to
 * set it here to apply appropriate padding to the top of the content.
 */
var StyledLayoutBox = styled(OakBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (min-width: ", "px) {\n    padding-top: ", ";\n  }\n  @media (min-width: ", "px) {\n    ", "\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-size: 100%;\n  }\n"], ["\n  @media (min-width: ", "px) {\n    padding-top: ", ";\n  }\n  @media (min-width: ", "px) {\n    ", "\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-size: 100%;\n  }\n"])), getBreakpoint("small"), parseSpacing("spacing-56"), getBreakpoint("large"), function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), getBackgroundUrlForLesson(props.sectionName, props.phase, props.celebrate)); });
var StickyFooter = styled(OakBox)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n"], ["\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n"])));
/**
 * Provides overall page layout and colours for the sections of a lesson.
 */
var OakLessonLayout = function (_a) {
    var lessonSectionName = _a.lessonSectionName, _b = _a.phase, phase = _b === void 0 ? "primary" : _b, _c = _a.celebrate, celebrate = _c === void 0 ? false : _c, topNavSlot = _a.topNavSlot, bottomNavSlot = _a.bottomNavSlot, children = _a.children;
    var _d = __read(pickSectionColours(lessonSectionName, phase), 4), pageBackgroundColor = _d[0], contentBackgroundColor = _d[1], contentBorderColor = _d[2], mobileContentBackgroundColor = _d[3];
    return (React__default.createElement(StyledLayoutBox, { "$display": "flex", "$width": "100%", "$minHeight": "100%", "$ph": ["spacing-0", "spacing-24"], "$background": pageBackgroundColor, sectionName: lessonSectionName, celebrate: celebrate, phase: phase },
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$flexGrow": 1, "$background": [mobileContentBackgroundColor, "transparent"], "$maxWidth": "spacing-1280", "$minHeight": "100%", "$mh": "auto", "$position": "relative" },
            React__default.createElement(OakBox, { "$display": ["none", "block"] },
                React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 1308 943", fill: "none", style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                    }, preserveAspectRatio: "none" },
                    React__default.createElement("mask", { id: "wobbly_mask", fill: "white" },
                        React__default.createElement("path", { d: "M1307.54 535.104C1307.23 636.219 1306.18 739.057 1306.6 839.224C1306.7 898.723 1307.88 947.11 1307 1006C871.2 1012.67 437.787 1006 2 1006C1 939 1.31004 845.783 2.6275 777.934C3.15031 725.636 2.9621 673.135 2.1047 621.04C1.77011 559.918 1.68647 498.83 0.933629 437.946C0.264441 384.059 1.60282 330.442 0.180796 275.304C-0.634779 244.608 1.51916 210.464 2.46021 178.01C3.06666 156.814 3.92405 136.091 4.44685 115.165C5.76432 63.2723 9.36114 33.861 17.2868 27.0998C19.9009 24.8686 22.4521 22.0965 25.087 18.8849C44.7654 12.9688 64.9662 10.1291 85.1882 10.4672C116.807 13.0364 148.782 8.37119 180.61 7.15417L213.714 6.2076C231.196 5.46386 248.595 4.78774 265.785 4.88916C504.33 5.83573 742.85 7.93171 981.395 7.93171C1023.49 7.93171 1065.67 5.93715 1107.85 3.87498C1136.42 2.45512 1164.98 1.03526 1193.53 0.0886897C1210.34 -0.486014 1227.15 1.88041 1243.88 2.9284C1250.8 2.9284 1257.71 4.24684 1264.56 4.07781C1275.4 3.4355 1286.23 5.43006 1296.48 10.0277C1297.86 18.9863 1302.6 31.427 1303.65 48.8371C1305.07 72.7042 1306.18 101.338 1306.91 133.014C1307.62 164.691 1307.94 198.801 1307.83 233.25C1307.71 273.58 1308.02 313.742 1308 354.073C1307.92 414.856 1307.75 475.639 1307.52 535.104H1307.54Z" })),
                    React__default.createElement("path", { d: "M1307.54 535.104C1307.23 636.219 1306.18 739.057 1306.6 839.224C1306.7 898.723 1307.88 947.11 1307 1006C871.2 1012.67 437.787 1006 2 1006C1 939 1.31004 845.783 2.6275 777.934C3.15031 725.636 2.9621 673.135 2.1047 621.04C1.77011 559.918 1.68647 498.83 0.933629 437.946C0.264441 384.059 1.60282 330.442 0.180796 275.304C-0.634779 244.608 1.51916 210.464 2.46021 178.01C3.06666 156.814 3.92405 136.091 4.44685 115.165C5.76432 63.2723 9.36114 33.861 17.2868 27.0998C19.9009 24.8686 22.4521 22.0965 25.087 18.8849C44.7654 12.9688 64.9662 10.1291 85.1882 10.4672C116.807 13.0364 148.782 8.37119 180.61 7.15417L213.714 6.2076C231.196 5.46386 248.595 4.78774 265.785 4.88916C504.33 5.83573 742.85 7.93171 981.395 7.93171C1023.49 7.93171 1065.67 5.93715 1107.85 3.87498C1136.42 2.45512 1164.98 1.03526 1193.53 0.0886897C1210.34 -0.486014 1227.15 1.88041 1243.88 2.9284C1250.8 2.9284 1257.71 4.24684 1264.56 4.07781C1275.4 3.4355 1286.23 5.43006 1296.48 10.0277C1297.86 18.9863 1302.6 31.427 1303.65 48.8371C1305.07 72.7042 1306.18 101.338 1306.91 133.014C1307.62 164.691 1307.94 198.801 1307.83 233.25C1307.71 273.58 1308.02 313.742 1308 354.073C1307.92 414.856 1307.75 475.639 1307.52 535.104H1307.54Z", fill: parseColor(contentBackgroundColor)({
                            theme: oakDefaultTheme,
                        }), stroke: parseColor(contentBorderColor)({
                            theme: oakDefaultTheme,
                        }), strokeWidth: "8", mask: "url(#wobbly_mask)" }))),
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$flexGrow": 1, "$minHeight": "100%", "$zIndex": 1, "$pt": ["spacing-0", "spacing-16"], "$gap": ["spacing-48", "spacing-56"] },
                topNavSlot && (React__default.createElement(OakBox, { "$pv": "spacing-20", "$pl": ["spacing-16", "spacing-8"], "$pr": ["spacing-16", "spacing-0"], "$mr": ["spacing-0", "spacing-48"], "$background": ["bg-primary", "transparent"] }, topNavSlot)),
                React__default.createElement(OakFlex, { "$flexGrow": 1, "$flexDirection": "column" }, children),
                bottomNavSlot && (React__default.createElement(StickyFooter, { "$mh": ["spacing-0", "spacing-0", "spacing-4"], "$borderColor": contentBorderColor, "$bt": "border-solid-xl", "$background": ["bg-primary", contentBackgroundColor] }, bottomNavSlot))))));
};
function pickSectionColours(sectionName, phase) {
    switch (sectionName) {
        case "overview":
            return phase === "secondary"
                ? [
                    "bg-decorative3-subdued",
                    "bg-primary",
                    "border-decorative3",
                    "bg-primary",
                ]
                : [
                    "bg-decorative4-subdued",
                    "bg-primary",
                    "border-decorative4",
                    "bg-primary",
                ];
        case "intro":
            return [
                "bg-decorative2-subdued",
                "bg-decorative2-very-subdued",
                "border-inverted",
                "bg-decorative2-subdued",
            ];
        case "starter-quiz":
            return [
                "bg-decorative1-main",
                "bg-decorative1-very-subdued",
                "border-inverted",
                "bg-decorative1-subdued",
            ];
        case "video":
            return [
                "bg-decorative4-subdued",
                "bg-primary",
                "border-decorative4",
                "bg-primary",
            ];
        case "exit-quiz":
            return [
                "bg-decorative5-main",
                "bg-decorative5-very-subdued",
                "border-inverted",
                "bg-decorative5-subdued",
            ];
        case "review":
            return phase === "secondary"
                ? [
                    "bg-decorative3-subdued",
                    "bg-primary",
                    "border-decorative3",
                    "bg-primary",
                ]
                : [
                    "bg-decorative4-subdued",
                    "bg-primary",
                    "border-decorative4",
                    "bg-primary",
                ];
        default:
            return [
                "bg-decorative3-subdued",
                "bg-primary",
                "border-decorative3",
                "bg-primary",
            ];
    }
}
function getBackgroundUrlForLesson(sectionName, phase, celebrate) {
    var prefix = "https://".concat(process.env.NEXT_PUBLIC_OAK_ASSETS_HOST, "/").concat(process.env.NEXT_PUBLIC_OAK_ASSETS_PATH, "/");
    switch (sectionName) {
        case "overview":
            return phase === "secondary"
                ? "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-lavender"], ");")
                : "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-pink"], ");");
        case "intro":
            return "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-mint"], ");");
        case "starter-quiz":
            return celebrate
                ? "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-green"], ");")
                : "";
        case "video":
            return "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-pink"], ");");
        case "exit-quiz":
            return celebrate
                ? "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-green-lemon"], ");")
                : "";
        case "review":
            return phase === "secondary"
                ? "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-lavender"], ");")
                : "background-image: url(".concat(prefix).concat(backgrounds["lesson-confetti-pink"], ");");
        default:
            return "";
    }
}
var templateObject_1, templateObject_2, templateObject_3;

export { OakLessonLayout, lessonSectionNames };
