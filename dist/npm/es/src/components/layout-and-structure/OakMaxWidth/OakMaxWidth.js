import { __assign, __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { OakFlex } from '../OakFlex/OakFlex.js';

var oakMaxWidthDefaults = {
    $maxWidth: ["spacing-480", "spacing-1280"],
    $ph: ["spacing-0", "spacing-12"],
    $flexDirection: "column",
    $flexGrow: 1,
    $width: "100%",
    $mh: "auto",
};
/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
var OakMaxWidth = styled(OakFlex).attrs(function (props) { return (__assign(__assign({}, oakMaxWidthDefaults), props)); })(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;

export { OakMaxWidth, oakMaxWidthDefaults };
