import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { oakBoxCss, OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { InternalAccordionButton, InternalAccordionContent } from '../../internal-components/InternalAccordion/InternalAccordion.js';
import useAccordionContext from '../../internal-components/InternalAccordion/useAccordionContext.js';
import { accordionContext, InternalAccordionProvider } from '../../internal-components/InternalAccordion/InternalAccordionProvider.js';
import { flexStyle } from '../../../styles/utils/flexStyle.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { parseColorFilter } from '../../../styles/helpers/parseColorFilter.js';

var StyledAccordionButton = styled(InternalAccordionButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  &:hover {\n    .chevron-icon {\n      filter: ", ";\n    }\n  }\n  &:focus-visible {\n    .focus-outline {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"], ["\n  ", "\n  ", "\n  &:hover {\n    .chevron-icon {\n      filter: ", ";\n    }\n  }\n  &:focus-visible {\n    .focus-outline {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"])), flexStyle, oakBoxCss, parseColorFilter("icon-subdued"), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
/**
 * An accordion component that can be used to show/hide content.
 */
var Accordion = function (_a) {
    var header = _a.header, content = _a.content, id = _a.id, subheader = _a.subheader, _b = _a.ariaLabelOpen, ariaLabelOpen = _b === void 0 ? "Close accordion" : _b, _c = _a.ariaLabelClose, ariaLabelClose = _c === void 0 ? "Open accordion" : _c, styleProps = __rest(_a, ["header", "content", "id", "subheader", "ariaLabelOpen", "ariaLabelClose"]);
    var isOpen = useAccordionContext().isOpen;
    return (React__default.createElement(OakFlex, __assign({ "$flexDirection": "column", "$pt": "spacing-40", "$pb": "spacing-40" }, styleProps),
        React__default.createElement(OakFlex, { "$justifyContent": "space-between", "$alignItems": "center" },
            header,
            React__default.createElement(OakBox, null,
                React__default.createElement(StyledAccordionButton, { id: id, "aria-label": isOpen ? ariaLabelOpen : ariaLabelClose },
                    React__default.createElement(OakBox, { className: "focus-outline", "$borderRadius": "border-radius-s", "$mr": "spacing-12" },
                        React__default.createElement(OakIcon, { className: "chevron-icon", iconName: "chevron-down", "$width": "spacing-32", "$height": "spacing-32", alt: "An arrow to indicate whether the item is open or closed", style: {
                                transform: isOpen ? "rotate(180deg)" : "none",
                                transition: "all 0.3s ease 0s",
                            } }))))),
        subheader,
        React__default.createElement(InternalAccordionContent, { "$position": "relative", "$overflow": "auto", "aria-labelledby": id }, content)));
};
/**
 * - UnstyledChevronAccordion has a chevron icon that rotates when the accordion is open.
 * - Unlike InternalChevronAccordion, it has no border effects for hover or focus states.
 * - Only the chevron is interactive so as to allow interactive elements to be placed in the header.
 * - The intention is for these to be added by consuming components as needed.
 * - Can be used as an uncontrolled component (via `isInitiallyOpen`) or as a
 *   controlled component (via `isOpen` + `onOpenChange`).
 */
var UnstyledChevronAccordion = function (props) {
    // Is the accordion being used as a controlled component?
    if (props.isOpen !== undefined) {
        var isOpen = props.isOpen, onOpenChange = props.onOpenChange, accordionProps_1 = __rest(props, ["isOpen", "onOpenChange"]);
        return (React__default.createElement(accordionContext.Provider, { value: { isOpen: isOpen, setOpen: onOpenChange } },
            React__default.createElement(Accordion, __assign({}, accordionProps_1))));
    }
    var _a = props.isInitiallyOpen, isInitiallyOpen = _a === void 0 ? false : _a, accordionProps = __rest(props, ["isInitiallyOpen"]);
    return (React__default.createElement(InternalAccordionProvider, { isInitialOpen: isInitiallyOpen },
        React__default.createElement(Accordion, __assign({}, accordionProps))));
};
var templateObject_1;

export { UnstyledChevronAccordion };
