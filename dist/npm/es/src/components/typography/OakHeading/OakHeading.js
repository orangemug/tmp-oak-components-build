import { __spreadArray, __read, __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { colorStyle } from '../../../styles/utils/colorStyle.js';
import { marginStyle } from '../../../styles/utils/spacingStyle.js';
import { opacityStyle } from '../../../styles/utils/opacityStyle.js';
import { typographyStyle } from '../../../styles/utils/typographyStyle.js';

var oakHeadingTagsConst = [
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
];
var oakHeadingTags = __spreadArray([], __read(oakHeadingTagsConst), false);
var HeadingTagComponent = function (props) {
    var tag = props.tag, ariaLabel = props.ariaLabel, ariaHidden = props.ariaHidden, otherProps = __rest(props, ["tag", "ariaLabel", "ariaHidden"]);
    var Tag = tag;
    return (React__default.createElement(Tag, __assign({}, otherProps, { "aria-label": ariaLabel, "aria-hidden": ariaHidden })));
};
/**
 *
 * OakHeading can be one of the following style tags dependant on its role: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6".
 * Use the controls to view different font styles.
 *
 */
var OakHeading = styled(HeadingTagComponent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), typographyStyle, marginStyle, colorStyle, opacityStyle);
var templateObject_1;

export { HeadingTagComponent, OakHeading, oakHeadingTags };
