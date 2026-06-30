import { __makeTemplateObject, __rest, __assign, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { OakHandDrawnFocusUnderline } from '../../messaging-and-feedback/OakHandDrawnFocusUnderline/OakHandDrawnFocusUnderline.js';
import { oakBoxCss, OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { InternalAccordionButton, InternalAccordionContent } from '../InternalAccordion/InternalAccordion.js';
import useAccordionContext from '../InternalAccordion/useAccordionContext.js';
import { InternalAccordionProvider } from '../InternalAccordion/InternalAccordionProvider.js';
import { flexStyle } from '../../../styles/utils/flexStyle.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { parseOpacity } from '../../../styles/helpers/parseOpacity.js';

var StyledAccordionUnderline = styled(OakHandDrawnFocusUnderline)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  bottom: -", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  bottom: -", ";\n"])), parseSpacing("spacing-4"));
var StyledAccordionButton = styled(InternalAccordionButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  position: relative;\n  &:hover {\n    text-decoration: underline;\n  }\n  &:focus-visible {\n    .shadow {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"], ["\n  ", "\n  ", "\n  position: relative;\n  &:hover {\n    text-decoration: underline;\n  }\n  &:focus-visible {\n    .shadow {\n      box-shadow:\n        ", ",\n        ", ";\n    }\n  }\n"])), flexStyle, oakBoxCss, parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
var StyledContainer = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", " {\n    visibility: hidden;\n  }\n  ", ":focus-visible ~ ", " {\n    visibility: visible;\n  }\n  ", "\n  ", "\n"], ["\n  ", " {\n    visibility: hidden;\n  }\n  ", ":focus-visible ~ ", " {\n    visibility: visible;\n  }\n  ", "\n  ", "\n"])), StyledAccordionUnderline, StyledAccordionButton, StyledAccordionUnderline, oakBoxCss, flexStyle);
var BottomBoxShadow = styled(OakBox)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  opacity: ", ";\n  z-index: 100;\n  -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);\n  -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);\n  box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);\n  padding: 2px;\n"], ["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  opacity: ", ";\n  z-index: 100;\n  -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);\n  -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);\n  box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);\n  padding: 2px;\n"])), function (props) {
    return props.shouldDisplayShadow
        ? parseOpacity("opaque")
        : parseOpacity("transparent");
});
/**
 * An accordion component that can be used to show/hide content
 */
var Accordion = function (_a) {
    var header = _a.header, children = _a.children, id = _a.id, subheading = _a.subheading, styleProps = __rest(_a, ["header", "children", "id", "subheading"]);
    var _b = __read(useState(false), 2), shouldDisplayShadow = _b[0], setShouldDisplayShadow = _b[1];
    var scrollBox = useRef(null);
    useEffect(function () {
        var _a, _b;
        var scrollHeight = (_a = scrollBox.current) === null || _a === void 0 ? void 0 : _a.scrollHeight;
        var clientHeight = (_b = scrollBox.current) === null || _b === void 0 ? void 0 : _b.clientHeight;
        if (scrollHeight && clientHeight && scrollHeight > clientHeight) {
            setShouldDisplayShadow(true);
        }
        else {
            setShouldDisplayShadow(false);
        }
    }, []);
    var handleScroll = function () {
        var _a, _b, _c;
        var scrollHeight = (_a = scrollBox.current) === null || _a === void 0 ? void 0 : _a.scrollHeight;
        var scrollTop = (_b = scrollBox.current) === null || _b === void 0 ? void 0 : _b.scrollTop;
        var clientHeight = (_c = scrollBox.current) === null || _c === void 0 ? void 0 : _c.clientHeight;
        if (scrollHeight && scrollTop) {
            var bottom = scrollHeight - scrollTop === clientHeight;
            if (bottom) {
                setShouldDisplayShadow(false);
            }
            else {
                setShouldDisplayShadow(true);
            }
        }
    };
    var isOpen = useAccordionContext().isOpen;
    return (React__default.createElement(StyledContainer, __assign({ "$position": "relative", "$pv": "spacing-12", "$flexDirection": "column", "$gap": "spacing-4" }, styleProps),
        React__default.createElement(StyledAccordionButton, { id: id, "$width": "100%", "$justifyContent": "space-between", "$alignItems": "center" },
            header,
            React__default.createElement(OakBox, { "$position": "relative", "$mr": "spacing-12" },
                React__default.createElement(OakBox, { className: "shadow", "$position": "absolute", "$borderRadius": "border-radius-s", "$width": "100%", "$height": "100%", "$top": "spacing-0" }),
                React__default.createElement(OakIcon, { iconName: "chevron-down", "$width": "spacing-32", "$height": "spacing-32", alt: "An arrow to indicate whether the item is open or closed", style: {
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "all 0.3s ease 0s",
                    } }))),
        !isOpen && subheading,
        React__default.createElement(OakBox, { ref: scrollBox, "$position": "relative", "$overflow": "auto", onScroll: handleScroll, "data-testid": "scrollable-content" },
            React__default.createElement(InternalAccordionContent, { "aria-labelledby": id }, children)),
        React__default.createElement(StyledAccordionUnderline, { "$fill": "border-decorative5-stronger" }),
        isOpen && (React__default.createElement(BottomBoxShadow, { shouldDisplayShadow: shouldDisplayShadow, "data-testid": "bottom-box-shadow", "$pointerEvents": "none" }))));
};
/**
 * InternalChevronAccordion has a chevron icon that rotates when the accordion is open
 */
var InternalChevronAccordion = function (_a) {
    var _b = _a.initialOpen, initialOpen = _b === void 0 ? false : _b, props = __rest(_a, ["initialOpen"]);
    return (React__default.createElement(InternalAccordionProvider, { isInitialOpen: initialOpen },
        React__default.createElement(Accordion, __assign({ initialOpen: true }, props))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { BottomBoxShadow, InternalChevronAccordion, StyledAccordionButton };
