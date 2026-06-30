import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakHandDrawnCard } from '../OakHandDrawnCard/OakHandDrawnCard.js';

var OakCardHeader = function (props) {
    var iconName = props.iconName, tag = props.tag, children = props.children;
    return (React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": "spacing-8" },
        React__default.createElement(OakIcon, { iconName: iconName }),
        React__default.createElement(OakHeading, { "$font": "heading-6", tag: tag }, children)));
};
/**
 *
 * OakLessonInfoCards are created using the custom card either oakLessoninfoCard or oakStaticMessageCard and the content is added as children. And use the oakCardHeader to create the header of the card.
 *
 */
var OakLessonInfoCard = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (React__default.createElement(OakFlex, __assign({ "$borderRadius": "border-radius-l", "$pa": "spacing-24", "$flexDirection": "column", "$gap": "spacing-16", "$background": "bg-primary" }, rest), children));
};
var OakStaticMessageCard = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (React__default.createElement(OakHandDrawnCard, __assign({}, rest, { fill: [
            "bg-decorative2-very-subdued",
            "bg-decorative2-subdued",
            "bg-decorative2-subdued",
        ] }),
        React__default.createElement(OakFlex, { "$pa": "spacing-0", "$flexDirection": "column", "$gap": "spacing-16" }, children)));
};

export { OakCardHeader, OakLessonInfoCard, OakStaticMessageCard };
