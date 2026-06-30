import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../OakBox/OakBox.js';
import { OakFlex } from '../OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { InternalAccordionButton, InternalAccordionContent } from '../../internal-components/InternalAccordion/InternalAccordion.js';
import useAccordionContext from '../../internal-components/InternalAccordion/useAccordionContext.js';
import { InternalAccordionProvider } from '../../internal-components/InternalAccordion/InternalAccordionProvider.js';

var StyledOakFlex = styled(InternalAccordionButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font: inherit;\n  color: inherit;\n  border: none;\n  background: none;\n  appearance: none;\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"], ["\n  font: inherit;\n  color: inherit;\n  border: none;\n  background: none;\n  appearance: none;\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
var Accordion = function (_a) {
    var header = _a.header, headerTag = _a.headerTag, headerAfterSlot = _a.headerAfterSlot, children = _a.children, id = _a.id, _b = _a.chevronPosition, chevronPosition = _b === void 0 ? "left" : _b, _c = _a.openBackground, openBackground = _c === void 0 ? "bg-neutral" : _c, $color = _a.$color, styleProps = __rest(_a, ["header", "headerTag", "headerAfterSlot", "children", "id", "chevronPosition", "openBackground", "$color"]);
    var isOpen = useAccordionContext().isOpen;
    var HeaderTag = headerTag || "h3";
    var chevron = (React__default.createElement(OakIcon, __assign({ iconName: "chevron-down", "$width": "spacing-24", "$height": "spacing-24", alt: "", "$colorFilter": $color, style: { transform: isOpen ? "rotate(180deg)" : "none" } }, (chevronPosition === "left"
        ? { $mr: "spacing-16" }
        : { $ml: "auto" }))));
    return (React__default.createElement(OakBox, __assign({ id: id, "$borderColor": "border-neutral-lighter", "$ba": "border-solid-s", "$pa": "spacing-16", "$background": isOpen ? openBackground : "bg-primary" }, styleProps),
        React__default.createElement(OakFlex, { as: HeaderTag, "$font": "heading-light-7", "$color": $color, "$textDecoration": isOpen ? "underline" : "none" },
            React__default.createElement(StyledOakFlex, { "$alignItems": "center", "$pa": "spacing-16", "$width": chevronPosition === "right" ? "100%" : undefined, id: id },
                chevronPosition === "left" && chevron,
                header,
                chevronPosition === "right" && chevron),
            headerAfterSlot && (React__default.createElement(OakFlex, { "$ml": "spacing-24" }, headerAfterSlot))),
        React__default.createElement(InternalAccordionContent, { "aria-labelledby": id, "$ml": chevronPosition === "right" ? "spacing-0" : "spacing-24", "$pl": chevronPosition === "right" ? "spacing-0" : "spacing-16", "$mt": "spacing-4", "$font": "body-3" }, children)));
};
/**
 * An accordion component that can be used to show/hide content
 */
var OakAccordion = function (props) {
    var _a = props.initialOpen, initialOpen = _a === void 0 ? false : _a, rest = __rest(props, ["initialOpen"]);
    return (React__default.createElement(InternalAccordionProvider, { isInitialOpen: initialOpen },
        React__default.createElement(Accordion, __assign({}, rest))));
};
var templateObject_1;

export { OakAccordion };
