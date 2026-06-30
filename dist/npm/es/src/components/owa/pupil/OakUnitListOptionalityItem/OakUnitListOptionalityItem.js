import { __makeTemplateObject, __rest, __assign } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../layout-and-structure/OakBox/OakBox.js';
import { OakHeading } from '../../../typography/OakHeading/OakHeading.js';
import { OakSpan } from '../../../typography/OakSpan/OakSpan.js';
import { OakLabel } from '../../../form-elements/OakLabel/OakLabel.js';
import { OakGrid } from '../../../layout-and-structure/OakGrid/OakGrid.js';
import { OakGridArea } from '../../../layout-and-structure/OakGridArea/OakGridArea.js';
import { OakUnitListOptionalityItemCard } from '../OakUnitListOptionalityItemCard/OakUnitListOptionalityItemCard.js';

var StyledYearAndOptionFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (min-width: 356px) {\n    min-width: 260px;\n  }\n"], ["\n  @media (min-width: 356px) {\n    min-width: 260px;\n  }\n"])));
var UnitYearAndOptionCount = function (_a) {
    var yearTitle = _a.yearTitle, optionalityUnitsLength = _a.optionalityUnitsLength, unavailable = _a.unavailable;
    return (React__default.createElement(StyledYearAndOptionFlex, { "$width": ["100%", "spacing-240"], "$justifyContent": ["space-between"], "$alignItems": "center" },
        React__default.createElement(OakSpan, { "$color": unavailable ? "text-disabled" : "text-primary", "$font": "heading-light-7" }, yearTitle),
        React__default.createElement(OakBox, { "$ph": "spacing-8", "$pv": "spacing-4", "$ba": "border-solid-s", "$borderColor": unavailable ? "border-neutral-lighter" : "bg-decorative4-main", "$color": unavailable ? "text-disabled" : "text-primary", "$background": unavailable ? "bg-neutral-stronger" : "bg-decorative4-very-subdued", "$borderRadius": "border-radius-s" },
            React__default.createElement(OakLabel, { "$font": "heading-light-7", "$color": unavailable ? "text-disabled" : "text-primary" }, "".concat(optionalityUnitsLength, " unit options")))));
};
var UnitIndex = function (_a) {
    var children = _a.children, unavailable = _a.unavailable, rest = __rest(_a, ["children", "unavailable"]);
    return (React__default.createElement(OakFlex, __assign({ "$btlr": "border-radius-s", "$bblr": "border-radius-s", "$background": unavailable ? "bg-neutral-stronger" : "bg-decorative3-main", "$minWidth": ["spacing-40", "spacing-64"], "$width": ["spacing-40", "spacing-64", "auto"], "$height": ["spacing-40", "auto", "auto"], "$justifyContent": "center", "$alignItems": "center" }, rest),
        React__default.createElement(OakSpan, { "$font": "heading-5", "$color": unavailable ? "text-disabled" : "text-primary" }, children)));
};
var StyledUnitHeading = function (_a) {
    var children = _a.children, unavailable = _a.unavailable;
    return (React__default.createElement(OakFlex, { "$maxWidth": "spacing-480", "$mr": ["spacing-0", "spacing-16"] },
        React__default.createElement(OakHeading, { "$color": unavailable ? "text-disabled" : "text-primary", "$font": "heading-7", tag: "h4" }, children)));
};
/**
 *
 * OakUnitsListOptionalityItem component used as links for unit cards with optionality
 */
var OakUnitListOptionalityItem = function (props) {
    var unavailable = props.unavailable, index = props.index, optionalityUnits = props.optionalityUnits, nullTitle = props.nullTitle, firstItemRef = props.firstItemRef, onSave = props.onSave, getIsSaved = props.getIsSaved, getIsSaving = props.getIsSaving, rest = __rest(props, ["unavailable", "index", "optionalityUnits", "nullTitle", "firstItemRef", "onSave", "getIsSaved", "getIsSaving"]);
    return (React__default.createElement(OakFlex, __assign({ "$flexDirection": ["column", "row", "row"], "$width": "100%", as: "li", "$background": "bg-primary", "$borderRadius": "border-radius-m" }, rest),
        React__default.createElement(OakFlex, { "$display": ["flex", "none"], "$ph": "spacing-16", "$pt": "spacing-16", "$gap": "spacing-16" },
            React__default.createElement(UnitIndex, { unavailable: unavailable, "$bbrr": "border-radius-s", "$btrr": "border-radius-s" }, index),
            React__default.createElement(StyledUnitHeading, { unavailable: unavailable }, nullTitle)),
        React__default.createElement(UnitIndex, { unavailable: unavailable, "$display": ["none", "flex", "flex"] }, index),
        React__default.createElement(OakBox, { "$pa": "spacing-16", "$width": "100%" },
            React__default.createElement(OakFlex, { "$alignItems": "center", "$mb": "spacing-16", "$display": ["none", "flex"] },
                React__default.createElement(OakFlex, { "$flexGrow": 1, "$alignItems": "center", "$justifyContent": "space-between" },
                    React__default.createElement(StyledUnitHeading, { unavailable: unavailable }, nullTitle),
                    React__default.createElement(OakFlex, { "$alignItems": "center" },
                        React__default.createElement(UnitYearAndOptionCount, { yearTitle: props.yearTitle, optionalityUnitsLength: optionalityUnits.length, unavailable: unavailable })))),
            React__default.createElement(OakFlex, { "$alignItems": "center", "$justifyContent": "space-between", "$mb": "spacing-16", "$display": ["flex", "none", "none"], "$width": "100%" },
                React__default.createElement(OakBox, { "$mb": "spacing-16", "$display": ["none", "auto", "auto"] },
                    React__default.createElement(StyledUnitHeading, { unavailable: unavailable }, nullTitle)),
                React__default.createElement(UnitYearAndOptionCount, { yearTitle: props.yearTitle, optionalityUnitsLength: optionalityUnits.length, unavailable: unavailable })),
            React__default.createElement(OakGrid, { "$rg": "spacing-12", "$cg": "spacing-12" }, optionalityUnits.map(function (unit, index) { return (React__default.createElement(OakGridArea, { key: "".concat(unit.title, "-").concat(index), "$colSpan": [12, 6] },
                React__default.createElement(OakUnitListOptionalityItemCard, __assign({}, unit, { firstItemRef: index === 0 ? firstItemRef : null, unavailable: unavailable, onSave: onSave !== null && onSave !== void 0 ? onSave : undefined, isSaved: getIsSaved ? getIsSaved(unit.slug) : undefined, isSaving: getIsSaving ? getIsSaving(unit.slug) : undefined })))); })))));
};
var templateObject_1;

export { OakUnitListOptionalityItem };
