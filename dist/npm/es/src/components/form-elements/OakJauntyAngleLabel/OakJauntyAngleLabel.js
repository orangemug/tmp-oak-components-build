import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

var OakJauntyAngleLabel = function (props) {
    var label = props.label, oakBoxProps = __rest(props, ["label"]);
    return (React__default.createElement(OakBox, __assign({ "$borderRadius": "border-radius-m", "$ph": "spacing-8", "$pv": "spacing-4", "$font": ["heading-7", "heading-6"], "$transform": "rotate(-1.5deg)" }, oakBoxProps), label));
};

export { OakJauntyAngleLabel };
