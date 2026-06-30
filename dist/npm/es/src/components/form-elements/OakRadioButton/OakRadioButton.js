import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { RadioContext } from '../OakRadioGroup/OakRadioGroup.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakLabel } from '../OakLabel/OakLabel.js';
import { InternalRadioWrapper } from '../../internal-components/InternalRadioWrapper/InternalRadioWrapper.js';
import { InternalRadio } from '../../internal-components/InternalRadio/InternalRadio.js';

var RadioButtonLabel = styled(OakLabel)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  display: flex;\n  ", "\n  ", "\n"], ["\n  ", "\n\n  display: flex;\n  ", "\n  ", "\n"])), function (props) {
    return !props.disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
}, responsiveStyle("gap", function (props) { return props.$labelGap; }, parseSpacing), responsiveStyle("align-items", function (props) { return props.$labelAlignItems; }));
/**
 * A radio button component.
 *
 * Use within `OakRadioGroup` component.
 */
var OakRadioButton = forwardRef(function (props, ref) {
    var id = props.id, label = props.label, value = props.value; props.tabIndex; var disabled = props.disabled; props.required; var _a = props.$labelGap, $labelGap = _a === void 0 ? "spacing-8" : _a, _b = props.$labelAlignItems, $labelAlignItems = _b === void 0 ? "center" : _b, _c = props.$font, $font = _c === void 0 ? "body-1" : _c, dataTestId = props["data-testid"], _d = props.disableFocusRing, disableFocusRing = _d === void 0 ? false : _d, _e = props.radioInnerSize, radioInnerSize = _e === void 0 ? "spacing-16" : _e, _f = props.radioOuterSize, radioOuterSize = _f === void 0 ? "spacing-24" : _f, _g = props.radioBorderWidth, radioBorderWidth = _g === void 0 ? "border-solid-m" : _g, _h = props.radioBackground, radioBackground = _h === void 0 ? "bg-primary" : _h, _j = props.checkedRadioBorderWidth, checkedRadioBorderWidth = _j === void 0 ? "border-solid-m" : _j, rest = __rest(props, ["id", "label", "value", "tabIndex", "disabled", "required", "$labelGap", "$labelAlignItems", "$font", "data-testid", "disableFocusRing", "radioInnerSize", "radioOuterSize", "radioBorderWidth", "radioBackground", "checkedRadioBorderWidth"]);
    var radioContext = useContext(RadioContext);
    var anyDisabled = disabled || radioContext.disabled;
    return (React__default.createElement(OakBox, __assign({}, rest),
        React__default.createElement(RadioButtonLabel, { htmlFor: id, "$labelAlignItems": $labelAlignItems, "$labelGap": $labelGap, "$font": $font, "data-testid": dataTestId, disabled: anyDisabled },
            React__default.createElement(InternalRadioWrapper, { disabled: anyDisabled, checked: value === radioContext.currentValue, disableFocusRing: disableFocusRing, radioInnerSize: radioInnerSize, radioOuterSize: radioOuterSize, radioBorderWidth: radioBorderWidth, size: radioOuterSize, radioBackground: radioBackground, checkedRadioBorderWidth: checkedRadioBorderWidth, internalRadio: React__default.createElement(InternalRadio, __assign({ id: id, ref: ref, name: radioContext.name, disabled: anyDisabled, value: value, checked: value === radioContext.currentValue, onChange: radioContext.onValueUpdated, "$ba": "border-solid-none" }, rest)) }),
            label)));
});
var templateObject_1, templateObject_2;

export { OakRadioButton };
