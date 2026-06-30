import { __makeTemplateObject, __rest, __assign } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { oakBoxCss, OakBox } from '../../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../../images-and-icons/OakIcon/OakIcon.js';
import { OakHeading } from '../../../typography/OakHeading/OakHeading.js';
import { OakP } from '../../../typography/OakP/OakP.js';
import { InternalAccordionButton, InternalAccordionContent } from '../../../internal-components/InternalAccordion/InternalAccordion.js';
import useAccordionContext from '../../../internal-components/InternalAccordion/useAccordionContext.js';
import { InternalAccordionProvider } from '../../../internal-components/InternalAccordion/InternalAccordionProvider.js';
import { flexStyle } from '../../../../styles/utils/flexStyle.js';
import { parseDropShadow } from '../../../../styles/helpers/parseDropShadow.js';
import { parseColorFilter } from '../../../../styles/helpers/parseColorFilter.js';
import { OakCheckBox } from '../../../form-elements/OakCheckBox/OakCheckBox.js';

var StyledAccordionButton = styled(InternalAccordionButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  min-width: 0;\n  &:hover {\n    .chevron-icon {\n      filter: ", ";\n    }\n  }\n  &:focus-visible {\n    .focus-outline {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"], ["\n  ", "\n  ", "\n  min-width: 0;\n  &:hover {\n    .chevron-icon {\n      filter: ", ";\n    }\n  }\n  &:focus-visible {\n    .focus-outline {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"])), flexStyle, oakBoxCss, parseColorFilter("icon-subdued"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
/**
 * Internal accordion component that handles the accordion logic
 */
var Accordion = function (_a) {
    var children = _a.children, id = _a.id, selectAllChecked = _a.selectAllChecked, downloadsText = _a.downloadsText, handleToggleSelectAll = _a.handleToggleSelectAll, styleProps = __rest(_a, ["children", "id", "selectAllChecked", "downloadsText", "handleToggleSelectAll"]);
    var isOpen = useAccordionContext().isOpen;
    return (React__default.createElement(OakFlex, __assign({ "$bt": "border-solid-s", "$bb": isOpen ? "border-solid-none" : "border-solid-s", "$borderColor": "border-neutral-lighter", "$pv": "spacing-12", "$flexDirection": "column", "$width": "100%" }, styleProps),
        React__default.createElement(OakFlex, { "$alignItems": "center", "$width": "100%" },
            React__default.createElement(OakFlex, { "$alignItems": "center", "$width": "100%", "$gap": "spacing-16" },
                React__default.createElement(OakBox, { id: "select-all-wrapper", "$pa": "spacing-8", onClick: handleToggleSelectAll },
                    React__default.createElement(OakCheckBox, { onChange: function () { return undefined; }, checked: selectAllChecked, id: "select-all", name: "select-all", value: "", "aria-labelledby": "downloads-accordion-heading" })),
                React__default.createElement(StyledAccordionButton, { "$justifyContent": "space-between", "$flexGrow": 1, id: id, "$alignItems": "center", "$mr": "spacing-12" },
                    React__default.createElement(OakFlex, { "$justifyContent": "center", "$alignItems": "center", "$gap": "spacing-12" },
                        React__default.createElement(OakFlex, { "$flexDirection": "column", "$justifyContent": "center", "$alignItems": "start" },
                            React__default.createElement(OakHeading, { "$textAlign": "left", id: "downloads-accordion-heading", "$color": "text-primary", "$font": "heading-6", "$mr": "spacing-16", tag: "h2" }, selectAllChecked
                                ? "All resources selected"
                                : "Select all resources"),
                            React__default.createElement(OakBox, { "$pr": "spacing-12" },
                                React__default.createElement(OakP, { "$textAlign": "left" }, downloadsText)))),
                    React__default.createElement(OakBox, { className: "focus-outline", "$borderRadius": "border-radius-s", "$pa": "spacing-8" },
                        React__default.createElement(OakIcon, { className: "chevron-icon", iconName: "chevron-down", "$width": "spacing-32", "$height": "spacing-32", alt: "An arrow to indicate whether the item is open or closed", style: {
                                transform: isOpen ? "rotate(180deg)" : "none",
                                transition: "all 0.3s ease 0s",
                            } }))))),
        React__default.createElement(OakBox, { "$position": "relative", "$overflow": "auto" },
            React__default.createElement(InternalAccordionContent, { "$pt": "spacing-20", "aria-labelledby": id }, children))));
};
/**
 * OakDownloadsAccordion
 *
 */
var OakDownloadsAccordion = function (_a) {
    var _b = _a.initialOpen, initialOpen = _b === void 0 ? false : _b, props = __rest(_a, ["initialOpen"]);
    return (React__default.createElement(InternalAccordionProvider, { isInitialOpen: initialOpen },
        React__default.createElement(Accordion, __assign({}, props))));
};
var templateObject_1;

export { OakDownloadsAccordion };
