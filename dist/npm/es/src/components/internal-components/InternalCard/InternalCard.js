import { __assign, __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var internalCardDefaults = {
    $pa: "spacing-24",
    $flexDirection: "column",
    $flexGrow: 1,
    $position: "relative",
};
/**
 *
 * InternalCard extends OakFlex. It has all the props of OakFlex, but applies default styles for consistency.
 *
 */
var InternalCard = styled(OakFlex).attrs(function (props) { return (__assign(__assign({}, internalCardDefaults), props)); })(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;

export { InternalCard, internalCardDefaults };
