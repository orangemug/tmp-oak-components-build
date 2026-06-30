import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakImage } from '../../images-and-icons/OakImage/OakImage.js';
import { OakMaxWidth } from '../../layout-and-structure/OakMaxWidth/OakMaxWidth.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

var StyledAuthorImage = styled(OakImage)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  margin-right: 12px;\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  width: 50px;\n  height: 50px;\n  margin-right: 12px;\n  img {\n    border-radius: 50%;\n  }\n"])));
var OakHeaderHeroCss = css(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var UnstyledComponent = function (props) {
    var authorName = props.authorName, authorTitle = props.authorTitle, authorImageSrc = props.authorImageSrc, authorImageAlt = props.authorImageAlt, heroImageSrc = props.heroImageSrc, heroImageAlt = props.heroImageAlt, headingTitle = props.headingTitle, breadcrumbs = props.breadcrumbs, subHeadingText = props.subHeadingText, cmsImage = props.cmsImage;
    var hasAuthorProps = authorImageSrc && authorImageAlt && authorName && authorTitle;
    return (React__default.createElement(OakBox, { "$width": "100%", "$background": "bg-decorative3-main", "$overflowX": "hidden" },
        React__default.createElement(OakMaxWidth, null,
            React__default.createElement(OakFlex, { "$minWidth": "100%", "$flexDirection": ["column-reverse", "column-reverse", "row"], "$alignItems": ["center", null], "$minHeight": "spacing-360", "$background": "bg-decorative3-main", "$zIndex": "neutral", "$justifyContent": ["space-between"], "data-testid": "oak-header-component" },
                React__default.createElement(OakFlex, { "$alignSelf": "flex-start", "$height": "100%", "$flexDirection": "column" },
                    React__default.createElement(OakBox, { "$display": ["none", "none", "block"], "$pv": "spacing-24" }, breadcrumbs),
                    React__default.createElement(OakFlex, { "$flexDirection": "column", "$maxWidth": "spacing-640", "$minHeight": ["spacing-0", "spacing-0", "spacing-360"], "$mb": ["spacing-0", "spacing-48", "spacing-0"], "$justifyContent": "center" },
                        React__default.createElement(OakHeading, { tag: "h1", "$color": "text-primary", "$font": ["heading-4", "heading-3"], "$mb": "spacing-24" }, headingTitle),
                        hasAuthorProps && (React__default.createElement(OakFlex, { "$mb": "spacing-24", "$flexDirection": "row", "$alignItems": "center" },
                            React__default.createElement(StyledAuthorImage, { alt: authorImageAlt, src: authorImageSrc, "$zIndex": "in-front" }),
                            React__default.createElement(OakBox, null,
                                React__default.createElement(OakP, { "$font": "heading-7" }, authorName),
                                React__default.createElement(OakP, { "$font": "body-3" }, authorTitle)))),
                        React__default.createElement(OakP, { "$font": "body-1", "$mb": ["spacing-48", "spacing-0"] }, subHeadingText))),
                React__default.createElement(OakFlex, { "$position": "relative", "$minHeight": ["spacing-180", "spacing-480", "spacing-480"], "$alignItems": "center", "$justifyContent": "center", "$mb": ["spacing-0", "spacing-32", "spacing-0"] },
                    cmsImage ? (cmsImage) : (React__default.createElement(OakImage, { "$transform": "rotate(-2.025deg)", src: heroImageSrc, width: 100, "$minHeight": ["spacing-240", "spacing-360", "spacing-360"], "$minWidth": ["spacing-240", "spacing-640", "spacing-480"], alt: heroImageAlt, "$zIndex": "in-front" })),
                    React__default.createElement(OakFlex, { "$position": "absolute", "$top": "spacing-0", "$bottom": "spacing-0", "$width": ["spacing-360", "spacing-960", "spacing-960"] },
                        React__default.createElement(OakIcon, { iconName: "loopdown", alt: "loopdown ui-graphic", "$position": "absolute", "$height": "100%", "$width": "100%" }))),
                React__default.createElement(OakFlex, { "$alignSelf": "flex-start", "$ml": "spacing-24", "$pt": "spacing-24", "$pb": [null, "spacing-24"], "$display": ["block", "block", "none"] }, breadcrumbs)))));
};
/**
 *
 * Oak Heading component with hero image, can be used for blog posts, articles, and other content pages.
 *
 * This Oak component can be passed the OWA breadcrumbs component as a prop. Currently this component does not exist in the component library.
 */
var OakHeaderHero = styled(UnstyledComponent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), OakHeaderHeroCss);
var templateObject_1, templateObject_2, templateObject_3;

export { OakHeaderHero };
