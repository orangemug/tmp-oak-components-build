import { __makeTemplateObject, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { OakFlex } from '../OakFlex/OakFlex.js';

var combineSpanStart = function (start, span) {
    return start ? "".concat(start, "/").concat(span) : "".concat(span);
};
var parseSpanStart = function (value) {
    if (value === null || value === void 0 ? void 0 : value.includes("/")) {
        var _a = __read(value.split("/"), 2), start = _a[0], span_1 = _a[1];
        return "".concat(start, " / span ").concat(span_1);
    }
    var span = value;
    return "span ".concat(span);
};
var gridArea = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: column;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  flex-direction: column;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n  ", "\n"])), responsiveStyle("grid-column", function (props) {
    return Array.isArray(props.$colSpan)
        ? props.$colSpan.map(function (span, index) {
            return combineSpanStart(Array.isArray(props.$colStart)
                ? props.$colStart[index]
                : props.$colStart, span);
        })
        : combineSpanStart(Array.isArray(props.$colStart)
            ? props.$colStart[0]
            : props.$colStart, props.$colSpan);
}, function (value) { return parseSpanStart(value); }), responsiveStyle("grid-row", function (props) {
    return Array.isArray(props.$rowSpan)
        ? props.$rowSpan.map(function (span, index) {
            return combineSpanStart(Array.isArray(props.$rowStart)
                ? props.$rowStart[index]
                : props.$rowStart, span);
        })
        : combineSpanStart(Array.isArray(props.$rowStart)
            ? props.$rowStart[0]
            : props.$rowStart, props.$rowSpan);
}, function (value) { return parseSpanStart(value); }), responsiveStyle("order", function (props) { return props.$order; }, function (value) { return value && "".concat(value); }), responsiveStyle("grid-row", function (props) {
    return props.$rowSpan ? "span ".concat(props.$rowSpan) : "span 1";
}), responsiveStyle("grid-column-start", function (props) { return props.$colStart; }), responsiveStyle("grid-column-end", function (props) { return props.$colEnd; }), responsiveStyle("grid-row-start", function (props) { return props.$rowStart; }));
/**
 *
 * OakGridArea is a flex container that should be used inside OakGrid.
 *
 * - There is no nesting of OakGridAreas
 * - Column and row arrangements are achieved through $colSpan, $rowSpan, $colStart, $colEnd, $rowStart, $rowEnd
 *
 */
var OakGridArea = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), gridArea);
var templateObject_1, templateObject_2;

export { OakGridArea };
