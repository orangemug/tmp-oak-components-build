import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import Link from '../../../../_virtual/link.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseBorderRadius } from '../../../styles/helpers/parseBorderRadius.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import { InternalButton } from '../../internal-components/InternalButton/InternalButton.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import '../../layout-and-structure/OakBox/OakBox.js';
import '../../layout-and-structure/OakGrid/OakGrid.js';
import '../../layout-and-structure/OakGridArea/OakGridArea.js';
import '../../layout-and-structure/OakMaxWidth/OakMaxWidth.js';
import '../../layout-and-structure/OakAccordion/OakAccordion.js';
import '../../internal-components/InternalChevronAccordion/InternalChevronAccordion.js';
import '../../layout-and-structure/OakCollapsibleContent/OakCollapsibleContent.js';
import '../../typography/OakHeading/OakHeading.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import '../../typography/OakOL/OakOL.js';
import '../../typography/OakP/OakP.js';
import '../../typography/OakSpan/OakSpan.js';
import '../../typography/OakTypography/OakTypography.js';
import { OakUL } from '../../typography/OakUL/OakUL.js';

var StyledFocusOutline = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledTabButton = styled(InternalButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  border-radius: ", ";\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n  &:focus-visible:not(&:active) {\n    box-shadow: ", ";\n    ", " {\n      box-shadow: ", ";\n    }\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  border-radius: ", ";\n  &:hover {\n    color: ", ";\n    background: ", ";\n  }\n  &:focus-visible:not(&:active) {\n    box-shadow: ", ";\n    ", " {\n      box-shadow: ", ";\n    }\n  }\n"])), parseBorderRadius("border-radius-circle"), function (props) { return parseColor(props.$hoverColor); }, function (props) { return parseColor(props.$hoverBackground); }, parseDropShadow("drop-shadow-centered-grey"), StyledFocusOutline, parseDropShadow("drop-shadow-centered-lemon"));
function OakTabs(props) {
    var colorVariant = props.colorVariant, sizeVariant = props.sizeVariant, tabs = props.tabs, activeTab = props.activeTab, onTabClick = props.onTabClick;
    var backgroundColor = colorVariant === "black" ? "bg-inverted" : "bg-primary";
    var textColor = colorVariant === "black" ? "text-inverted" : "text-primary";
    var hoverBackground = colorVariant === "black" ? "bg-btn-primary-hover" : "bg-neutral-stronger";
    var hoverText = colorVariant === "black" ? "text-inverted" : "text-primary";
    return (React__default.createElement(OakUL, { "$display": "flex", "$justifyContent": "space-around", "$height": sizeVariant === "compact" ? "spacing-40" : "spacing-56", "$background": backgroundColor, "$borderRadius": "border-radius-circle", "$gap": "spacing-8", "$pa": "spacing-8", "$alignItems": "center", "$font": sizeVariant === "compact" ? "body-3" : "heading-light-7", "$ba": "border-solid-s", "$borderColor": colorVariant === "white" ? "border-neutral-lighter" : backgroundColor }, tabs.map(function (tab) {
        var label = tab.label, type = tab.type;
        var isSelected = activeTab === label;
        return (React__default.createElement(OakLI, { "$listStyle": "none", "$width": "100%", "$height": "100%", "$display": "flex", key: label },
            React__default.createElement(StyledTabButton, { element: type === "link" ? Link : undefined, href: type === "link" ? tab.href : undefined, "aria-current": type === "link" && isSelected ? "page" : undefined, "$background": isSelected ? "bg-decorative1-main" : backgroundColor, "$color": isSelected ? "text-primary" : textColor, "$hoverColor": isSelected ? "text-primary" : hoverText, "$hoverBackground": isSelected ? "bg-decorative1-main" : hoverBackground, "$ba": "border-solid-s", "$borderColor": isSelected ? "border-decorative1-stronger" : backgroundColor, onClick: function (event) {
                    if (onTabClick) {
                        onTabClick(label, event);
                    }
                } },
                React__default.createElement(StyledFocusOutline, { "$width": "100%", "$height": "100%", "$borderRadius": "border-radius-circle", "$pa": "spacing-4", "$alignItems": "center", "$justifyContent": "center", "$whiteSpace": "nowrap" }, label))));
    })));
}
var templateObject_1, templateObject_2;

export { OakTabs };
