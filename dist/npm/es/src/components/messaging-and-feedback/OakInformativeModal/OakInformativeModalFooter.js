import { __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useContext } from 'react';
import { OakInformativeModalBorderColor } from './OakInformativeModal.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

/**
 * Intended to be used in the `footer` slot of `OakInformativeModal`
 * it is ideal as a container for one or more buttons.
 * It switches from a horizontal to vertical layout on smaller screens
 */
var OakInformativeModalFooter = function (props) {
    var $borderColor = useContext(OakInformativeModalBorderColor);
    return (React__default.createElement(OakFlex, __assign({}, props, { "$flexDirection": ["column", "row"], "$bt": "border-solid-s", "$borderColor": $borderColor, "$ph": ["spacing-16", "spacing-16", "spacing-16"], "$pv": ["spacing-12", "spacing-16", "spacing-16"], "$gap": ["spacing-16", "spacing-24"], "$width": "100%" })));
};

export { OakInformativeModalFooter };
