import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakImage } from '../../images-and-icons/OakImage/OakImage.js';

var StyledAuthorImage = styled(OakImage)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 54px;\n  height: 54px;\n  flex-shrink: 0;\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  width: 54px;\n  height: 54px;\n  flex-shrink: 0;\n  img {\n    border-radius: 50%;\n  }\n"])));
var TightLetterSpacing = styled(OakBox)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  letter-spacing: -0.01em;\n  @media (min-width: 750px) {\n    letter-spacing: -0.02em;\n  }\n"], ["\n  letter-spacing: -0.01em;\n  @media (min-width: 750px) {\n    letter-spacing: -0.02em;\n  }\n"])));
var OakQuote = function (props) {
    var quote = props.quote, _a = props.color, color = _a === void 0 ? "bg-decorative1-main" : _a, authorName = props.authorName, authorTitle = props.authorTitle, authorImageSrc = props.authorImageSrc;
    return (React__default.createElement(OakFlex, { "$width": "100%", "$maxWidth": "spacing-640" },
        color !== "transparent" && (React__default.createElement(OakFlex, { "$width": "spacing-8", "$background": color, "$mr": "spacing-24", "$flexShrink": 0 })),
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-16" },
            React__default.createElement(OakBox, { "$font": ["heading-7", "heading-6"], "$color": "text-primary" },
                React__default.createElement(TightLetterSpacing, null,
                    "\"",
                    quote,
                    "\"")),
            authorName ? (React__default.createElement(OakFlex, { "$gap": "spacing-16", "$alignItems": "center" },
                authorImageSrc ? (React__default.createElement(StyledAuthorImage, { alt: "", role: "presentation", src: authorImageSrc })) : null,
                React__default.createElement(OakFlex, { "$flexDirection": "column" },
                    React__default.createElement(OakP, { "$font": "body-2-bold", "$color": "text-primary" }, authorName),
                    authorTitle ? (React__default.createElement(OakP, { "$font": "body-2", "$color": "text-primary" }, authorTitle)) : null))) : null)));
};
var templateObject_1, templateObject_2;

export { OakQuote };
