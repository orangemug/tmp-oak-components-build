import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakLabel } from '../../form-elements/OakLabel/OakLabel.js';

var OakTagFunctional = function (props) {
    var label = props.label, useSpan = props.useSpan, oakFlexProps = __rest(props, ["label", "useSpan"]);
    var icon = props.iconName && (React__default.createElement(OakIcon, { "$height": "spacing-20", "$width": "spacing-20", iconName: props.iconName }));
    var trailingIcon = props.isTrailingIcon && icon;
    var leadingIcon = !props.isTrailingIcon && icon;
    return (React__default.createElement(OakFlex, __assign({ "$borderRadius": "border-radius-m", "$ph": "spacing-8", "$pv": "spacing-4", "$font": "heading-light-7", "$gap": "spacing-8" }, oakFlexProps),
        leadingIcon,
        React__default.createElement(OakLabel, { as: useSpan ? "span" : undefined }, label),
        trailingIcon));
};

export { OakTagFunctional };
