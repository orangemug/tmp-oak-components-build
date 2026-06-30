import React__default from 'react';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * Intended to be used in the `children` slot of `OakInformativeModal`
 * it applies some padding and margin to ensure that the contents
 * line up with the modal's header and footer
 */
var OakInformativeModalBody = function (props) {
    return (React__default.createElement(OakBox, { "$position": "relative", "$minHeight": "100%" },
        React__default.createElement(OakBox, { "$ph": ["spacing-16", "spacing-64", "spacing-64"], "$pv": ["spacing-16", "spacing-56", "spacing-56"] }, props.children)));
};

export { OakInformativeModalBody };
