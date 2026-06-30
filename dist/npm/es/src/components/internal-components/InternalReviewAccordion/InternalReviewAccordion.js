import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled, { css } from 'styled-components';
import { oakBoxCss } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { InternalAccordionContent } from '../InternalAccordion/InternalAccordion.js';
import useAccordionContext from '../InternalAccordion/useAccordionContext.js';
import { InternalAccordionProvider } from '../InternalAccordion/InternalAccordionProvider.js';
import { flexStyle } from '../../../styles/utils/flexStyle.js';
import { InternalShadowRoundButton } from '../InternalShadowRoundButton/InternalShadowRoundButton.js';

var StyledAccordionContent = styled(InternalAccordionContent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var StyledAccordionButton = styled(InternalShadowRoundButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n  .icon-container img {\n    ", ";\n  }\n"], ["\n  ", "\n  ", "\n  .icon-container img {\n    ", ";\n  }\n"])), flexStyle, oakBoxCss, function (props) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      transform: ", ";\n      transition: all 0.3s ease 0s;\n    "], ["\n      transform: ", ";\n      transition: all 0.3s ease 0s;\n    "])), props.$isOpen ? "rotate(180deg)" : "none"); });
/**
 * An accordion component that can be used to show/hide content
 */
var Accordion = function (_a) {
    var children = _a.children, id = _a.id, toggleButtonAriaLabel = _a.toggleButtonAriaLabel;
    var _b = useAccordionContext(), isOpen = _b.isOpen, setOpen = _b.setOpen;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$alignItems": "flex-end", "$justifyContent": "center", "$pt": ["spacing-20", "spacing-0"] },
            React__default.createElement(StyledAccordionButton, { "$isOpen": isOpen, onClick: function () { return setOpen(!isOpen); }, "aria-expanded": isOpen, "aria-label": toggleButtonAriaLabel, id: id, iconName: "chevron-down", defaultTextColor: "text-primary", hoverTextColor: "text-primary", disabledTextColor: "text-disabled", defaultIconBackground: "icon-primary", hoverIconBackground: "icon-primary", disabledIconBackground: "transparent", iconBackgroundSize: "spacing-32", iconSize: "spacing-24", defaultIconColor: "icon-inverted", isTrailingIcon: true }, "Results")),
        React__default.createElement(StyledAccordionContent, { "aria-labelledby": id },
            React__default.createElement(OakFlex, { "$background": "bg-primary", "$borderRadius": "border-radius-l", "$pv": "spacing-40", "$ph": "spacing-24", "$minWidth": "100%", "$mt": "spacing-24" }, children))));
};
/**
 *
 * use this component in the expandableReviewItemSlot on the OakPupilLessonReviewItem component
 *
 * The children of this component is the is the results from the quiz.
 */
var InternalReviewAccordion = function (props) {
    return (React__default.createElement(InternalAccordionProvider, { isInitialOpen: props.initialOpen },
        React__default.createElement(Accordion, __assign({}, props))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { InternalReviewAccordion, StyledAccordionButton, StyledAccordionContent };
