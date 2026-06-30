import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { parseDropShadow } from '../../../styles/helpers/parseDropShadow.js';
import '../../form-elements/OakFieldset/OakFieldset.js';
import '../../form-elements/OakForm/OakForm.js';
import '../../form-elements/OakLabel/OakLabel.js';
import '../../form-elements/OakTextArea/OakTextArea.js';
import '../../form-elements/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js';
import '../../internal-components/InternalCheckBox/InternalCheckBox.js';
import '../../internal-components/InternalCheckBoxLabel/InternalCheckBoxLabel.js';
import '../../internal-components/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js';
import '../../images-and-icons/OakImage/OakImage.js';
import '../../form-elements/OakFormInput/OakFormInput.js';
import '../../form-elements/OakMultilineText/OakMultilineText.js';
import '../../form-elements/OakRadioButton/OakRadioButton.js';
import { RadioContext } from '../../form-elements/OakRadioGroup/OakRadioGroup.js';
import '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';
import '../../form-elements/OakSelect/OakSelect.js';
import '../../form-elements/OakSelect/NativeOption.js';
import '../../form-elements/OakSelect/NativeOptGroup.js';
import '../../form-elements/OakSelect/NativeLegend.js';
import '../../form-elements/OakTextInput/OakTextInput.js';
import '../../form-elements/OakRadioAsButton/OakRadioAsButton.js';
import '../../form-elements/OakSearchFilterCheckBox/OakSearchFilterCheckBox.js';
import { InternalRadioWrapper } from '../../internal-components/InternalRadioWrapper/InternalRadioWrapper.js';
import { InternalRadio } from '../../internal-components/InternalRadio/InternalRadio.js';

var FlexWithFocus = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  outline: none;\n\n  &:hover .hover-text {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"], ["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  outline: none;\n\n  &:hover .hover-text {\n    text-decoration: underline;\n  }\n\n  &:focus-visible {\n    box-shadow:\n      ", ",\n      ", ";\n  }\n"])), parseDropShadow("drop-shadow-centered-lemon"), parseDropShadow("drop-shadow-centered-grey"));
var StyledListItem = styled(OakFlex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: initial;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n\n  ", "\n\n  ", "\n"], ["\n  text-align: initial;\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n\n  ", "\n\n  ", "\n"])), function (props) {
    return !props.$disabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n    &:hover {\n      ", " {\n        background: ", ";\n      }\n      background: ", ";\n    }\n  }\n      }\n    "], ["\n      /* Don't apply hover styles on touch devices */\n      @media (hover: hover) {\n    &:hover {\n      ", " {\n        background: ", ";\n      }\n      background: ", ";\n    }\n  }\n      }\n    "])), StyledOakIndexBox, parseColor(props.$indexHoverBgColour), parseColor(props.$hoverBgColour));
}, function (props) {
    return props.$disabled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      cursor: not-allowed;\n      background: ", ";\n    "], ["\n      cursor: not-allowed;\n      background: ", ";\n    "])), parseColor("bg-neutral"));
});
var StyledOakIndexBox = styled(OakFlex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  @media (hover: hover) {\n    &:hover {\n      ", "\n    }\n  }\n"], ["\n  animation-timing-function: ease-out;\n  transition-duration: 300ms;\n  @media (hover: hover) {\n    &:hover {\n      ", "\n    }\n  }\n"])), function (props) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background: ", ";\n      "], ["\n        background: ", ";\n      "])), parseColor(props.$indexHoverBgColour)); });
/**
 * * OakListItem component used as links for unit cards
 * * adding asRadio and radioValue props to allow OakListItem to be used as radio buttons within OakUnitsContainer if the OakUnitsContainer is passed a radioGroupName prop. This allows for better accessibility when OakListItem is used in OakUnitsContainer, as the user can select a unit by clicking anywhere on the card, rather than having to click on a specific radio button.
 */
var OakListItem = function (props) {
    var title = props.title, unavailable = props.unavailable, onClick = props.onClick, index = props.index, isLegacy = props.isLegacy, firstItemRef = props.firstItemRef, middleSlot = props.middleSlot, endSlot = props.endSlot, _a = props.hoverBgColour, hoverBgColour = _a === void 0 ? "bg-decorative4-subdued" : _a, _b = props.indexBgColour, indexBgColour = _b === void 0 ? "bg-decorative4-main" : _b, _c = props.indexHoverBgColour, indexHoverBgColour = _c === void 0 ? "bg-decorative4-main" : _c, _d = props.indexLegacyBgColour, indexLegacyBgColour = _d === void 0 ? "bg-decorative4-subdued" : _d, expandedContent = props.expandedContent, isExpanded = props.isExpanded, asRadio = props.asRadio, radioValue = props.radioValue;
    var radioContext = useContext(RadioContext);
    var onClickLocal = unavailable ? undefined : onClick;
    var textColor = unavailable ? "text-disabled" : "text-primary";
    var background;
    if (unavailable) {
        background = "bg-neutral-stronger";
    }
    else if (isLegacy) {
        background = indexLegacyBgColour;
    }
    else {
        background = indexBgColour;
    }
    var checkboxSize = "spacing-24";
    var checkedBorderColor = "border-primary";
    var isExpandedBorderRadius = "border-radius-square";
    var unavailableBgColor = "bg-neutral";
    return (React__default.createElement(OakLI, { "$listStyle": "none", "$width": "100%", "$display": "flex", "$flexDirection": "column" },
        React__default.createElement("label", { htmlFor: asRadio ? radioValue : undefined, onClick: onClickLocal !== null && onClickLocal !== void 0 ? onClickLocal : undefined, style: asRadio ? { cursor: "pointer" } : undefined },
            React__default.createElement(OakFlex, { "$flexGrow": 1, "$alignItems": "center", "$columnGap": "spacing-16" },
                asRadio && radioValue && (React__default.createElement(InternalRadioWrapper, { checked: radioValue === radioContext.currentValue, size: checkboxSize, disabled: unavailable, radioBorderColor: checkedBorderColor, internalRadio: React__default.createElement(InternalRadio, { id: radioValue, name: radioContext.name, value: radioValue, disabled: unavailable, onChange: radioContext.onValueUpdated, checked: radioValue === radioContext.currentValue, "aria-label": asRadio ? title : undefined }) })),
                React__default.createElement(StyledListItem, { "data-testid": "OakListItem-id", "$alignItems": "center", "$background": unavailable ? unavailableBgColor : "bg-primary", "$borderRadius": "border-radius-m", "$bbrr": isExpanded ? isExpandedBorderRadius : "border-radius-m", "$bblr": isExpanded ? isExpandedBorderRadius : "border-radius-m", "$disabled": unavailable, "$pr": "spacing-16", "$width": "100%", "$display": ["none", "flex"], "$indexHoverBgColour": indexHoverBgColour, "$hoverBgColour": hoverBgColour, "aria-hidden": asRadio },
                    React__default.createElement(FlexWithFocus, { "$borderRadius": "border-radius-m", "$gap": "spacing-16", "$alignItems": "center", "$width": "100%", "$height": "100%", ref: firstItemRef, "aria-hidden": asRadio },
                        React__default.createElement(StyledOakIndexBox, { "$background": background, "$btlr": "border-radius-m", "$bblr": isExpanded ? isExpandedBorderRadius : "border-radius-m", "$justifyContent": "center", "$alignItems": "center", "$minWidth": "spacing-64", "$alignSelf": "stretch", "$indexHoverBgColour": indexHoverBgColour, "aria-hidden": "true" },
                            React__default.createElement(OakSpan, { "$font": "heading-5", "$color": textColor }, index)),
                        React__default.createElement(OakFlex, { "$pv": "spacing-20", "$pr": "spacing-16", "$flexGrow": 1 },
                            React__default.createElement(OakP, { "$font": "heading-7", "$color": textColor, className: "hover-text" }, title)),
                        React__default.createElement(OakFlex, { "$minWidth": "spacing-80", "$alignItems": "center", "$justifyContent": "end", "$color": textColor }, middleSlot),
                        React__default.createElement(OakFlex, { "$font": "heading-light-7", "$color": textColor, "$alignItems": "center", "$justifyContent": "end", "$minWidth": "spacing-160" }, endSlot))),
                React__default.createElement(StyledListItem, { "data-testid": "OakListItem-id", "$background": unavailable ? unavailableBgColor : "bg-primary", "$borderRadius": "border-radius-m", "$bbrr": isExpanded ? isExpandedBorderRadius : "border-radius-m", "$bblr": isExpanded ? isExpandedBorderRadius : "border-radius-m", "$disabled": unavailable, "$display": ["flex", "none"], "$width": "100%", "$pa": "spacing-16", "$indexHoverBgColour": indexHoverBgColour, "$hoverBgColour": hoverBgColour, "aria-hidden": asRadio },
                    React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-16", "$width": "100%" },
                        React__default.createElement(OakFlex, { "$gap": "spacing-16" },
                            React__default.createElement(OakFlex, { "$background": background, "$justifyContent": "center", "$alignItems": "center", "$borderRadius": "border-radius-m", "$width": "spacing-40", "$height": "spacing-40", "$minWidth": "spacing-40" },
                                React__default.createElement(OakHeading, { tag: "h3", "$font": "heading-5", "$color": textColor }, index)),
                            React__default.createElement(OakBox, { "$width": "100%" },
                                React__default.createElement(OakP, { "$font": "heading-7", "$color": textColor }, title))),
                        React__default.createElement(OakFlex, { "$justifyContent": "space-between", "$alignItems": "center", "$color": textColor },
                            middleSlot,
                            endSlot)))),
            expandedContent && isExpanded && (React__default.createElement(OakFlex, { "$ml": "spacing-24", "$flexGrow": 1 },
                React__default.createElement(OakFlex, { "$background": "bg-primary", "$pa": "spacing-24", "$borderColor": indexBgColour, "$bt": "border-solid-s", "$bbrr": "border-radius-m", "$bblr": "border-radius-m", "$ml": "spacing-16", "$flexGrow": 1 }, expandedContent))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { OakListItem };
