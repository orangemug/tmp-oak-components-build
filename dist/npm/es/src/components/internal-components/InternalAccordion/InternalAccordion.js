import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import useAccordionContext from './useAccordionContext.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

var FlexWithReset = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font: inherit;\n  color: inherit;\n  border: none;\n  background: none;\n  appearance: none;\n  outline: none;\n  padding: 0;\n"], ["\n  font: inherit;\n  color: inherit;\n  border: none;\n  background: none;\n  appearance: none;\n  outline: none;\n  padding: 0;\n"])));
/**
 *
 * Content which will appear and disappear
 *
 * Must appear as a sibling of InternalAccordionButton
 *
 */
var InternalAccordionContent = function (_a) {
    var children = _a.children, onScroll = _a.onScroll, ref = _a.ref, rest = __rest(_a, ["children", "onScroll", "ref"]);
    var isOpen = useAccordionContext().isOpen;
    return (React__default.createElement(OakBox, __assign({ hidden: !isOpen, role: "region" }, rest, { onScroll: onScroll, ref: ref }), children));
};
/**
 *
 * User interface to toggle visibility of InternalAccordionContent
 *
 * Must appear as a sibling of InternalAccordionContent
 *
 */
var AccordionButton = function (props) {
    var children = props.children, id = props.id, rest = __rest(props, ["children", "id"]);
    var _a = useAccordionContext(), isOpen = _a.isOpen, setOpen = _a.setOpen;
    return (React__default.createElement(FlexWithReset, __assign({ as: "button", type: "button", onClick: function () { return setOpen(!isOpen); }, "$flexGrow": 1, "aria-expanded": isOpen, id: id }, rest), children));
};
var InternalAccordionButton = styled(AccordionButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2;

export { InternalAccordionButton, InternalAccordionContent };
