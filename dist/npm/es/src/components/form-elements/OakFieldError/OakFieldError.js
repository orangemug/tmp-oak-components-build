import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

/**
 *
 * OakFieldError renders a error message when passed children.
 *
 */
var OakFieldError = function (props) {
    var children = props.children;
    if (!children) {
        /**
         * Return early to avoid unwanted whitespace when there's no error
         */
        return null;
    }
    return (React__default.createElement(OakFlex, { "$alignItems": "center", "$flexDirection": "row" },
        React__default.createElement(OakFlex, { "$alignSelf": "flex-start", "$mr": "spacing-16" },
            React__default.createElement(OakIcon, { alt: "Error", iconName: "content-guidance", "$colorFilter": "icon-error" })),
        React__default.createElement(OakSpan, { "$color": "text-error" }, children)));
};

export { OakFieldError };
