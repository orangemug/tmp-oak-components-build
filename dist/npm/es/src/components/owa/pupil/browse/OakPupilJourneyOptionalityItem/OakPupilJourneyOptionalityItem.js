import { __rest, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakGrid } from '../../../../layout-and-structure/OakGrid/OakGrid.js';

/**
 *
 * OakPupilJourneyOptionalityItem is a styled container to be used for units with optionality, OakPupilJourneyOptionalityButton should be used as children
 *
 */
var OakPupilJourneyOptionalityItem = function (props) {
    var children = props.children; props.index; props.title; var unavailable = props.unavailable; props.disabled; var rest = __rest(props, ["children", "index", "title", "unavailable", "disabled"]);
    var disabledOrUnavailable = props.disabled || props.unavailable;
    return (React__default.createElement(OakFlex, __assign({ "$borderRadius": "border-radius-m", "$pa": "spacing-24", "$flexDirection": "column", "$gap": "spacing-24", "$background": unavailable ? "bg-neutral" : "bg-primary" }, rest),
        React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": "spacing-32" },
            React__default.createElement(OakFlex, null,
                React__default.createElement(OakBox, { "$font": ["heading-5", "heading-4"], "$color": props.unavailable ? "text-subdued" : "text-primary", "$textDecoration": "none" }, props.index)),
            React__default.createElement(OakBox, { "$font": ["heading-6", "heading-5"], "$color": disabledOrUnavailable ? "text-subdued" : "text-primary" }, props.title)),
        React__default.createElement(OakGrid, { "$gridTemplateColumns": ["repeat(1,1fr)", "repeat(2, 1fr)"], "$cg": "spacing-12", "$rg": "spacing-12" }, children)));
};

export { OakPupilJourneyOptionalityItem };
