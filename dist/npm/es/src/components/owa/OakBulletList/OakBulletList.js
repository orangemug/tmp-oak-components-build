import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';

/**
 * An inline bulleted list
 */
var OakBulletList = function (props) {
    var listItems = props.listItems, rest = __rest(props, ["listItems"]);
    return (React__default.createElement(OakSpan, __assign({}, rest), listItems.map(function (item, i) {
        return (React__default.createElement(OakSpan, { key: i },
            i !== 0 && React__default.createElement(OakSpan, null, " \u2022 "),
            React__default.createElement(OakSpan, null, item)));
    })));
};

export { OakBulletList };
