import { __makeTemplateObject, __rest, __read, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { getInternalPadding } from '../../../styles/helpers/getInternalPadding.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakTextArea } from '../OakTextArea/OakTextArea.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakLabel } from '../OakLabel/OakLabel.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakGrid } from '../../layout-and-structure/OakGrid/OakGrid.js';
import { OakGridArea } from '../../layout-and-structure/OakGridArea/OakGridArea.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery.js';
import '../../../styles/utils/responsiveStyle.js';

var StyledOakTextArea = styled(OakTextArea)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:focus-visible {\n    border-color: ", ";\n  }\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  &:focus-visible {\n    border-color: ", ";\n  }\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), parseColor("border-primary"), parseColor("bg-btn-secondary-hover"), function (props) {
    return props.disabled ? "" : parseColor("border-neutral");
}, parseColor("text-subdued"));
var UnstyledComponent = forwardRef(function (_a, ref) {
    var _b;
    var charLimit = _a.charLimit, placeholder = _a.placeholder, disabled = _a.disabled, errors = _a.errors, ariaLabel = _a.ariaLabel, value = _a.value, initialValue = _a.initialValue, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, label = _a.label, id = _a.id, name = _a.name, _c = _a.$height, $height = _c === void 0 ? ["spacing-240", "spacing-80", "spacing-56"] : _c, _d = _a.$overflowX, $overflowX = _d === void 0 ? [null, null, "auto"] : _d, _e = _a.$overflowY, $overflowY = _e === void 0 ? ["auto", "auto", null] : _e, _f = _a.$whiteSpace, $whiteSpace = _f === void 0 ? ["wrap", "wrap", "nowrap"] : _f, textAreaProps = __rest(_a, ["charLimit", "placeholder", "disabled", "errors", "ariaLabel", "value", "initialValue", "onChange", "onBlur", "onFocus", "label", "id", "name", "$height", "$overflowX", "$overflowY", "$whiteSpace"]);
    var _g = __read(useState(false), 2), showCharCount = _g[0], setShowCharCount = _g[1];
    var _h = __read(useState(initialValue), 2), internalValue = _h[0], setInternalValue = _h[1];
    var isControlled = value !== undefined;
    var charCountWidth = charLimit > 99 ? "spacing-56" : "spacing-48";
    var charCount = isControlled
        ? value === null || value === void 0 ? void 0 : value.toString().length
        : ((_b = internalValue === null || internalValue === void 0 ? void 0 : internalValue.length) !== null && _b !== void 0 ? _b : 0);
    var handleFocus = function (e) {
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
        setShowCharCount(true);
    };
    var handleBlur = function (e) {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
        setShowCharCount(false);
    };
    var handleChange = function (e) {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    var heightForDevice = useDevice($height);
    var textAreaPadding = getInternalPadding(heightForDevice);
    return (React__default.createElement(OakFlex, { "$flexDirection": ["column"], "$gap": ["spacing-8", null], "$width": "100%" },
        label && (React__default.createElement(OakLabel, { htmlFor: id, "$font": "body-2-bold" }, label)),
        React__default.createElement(StyledOakTextArea, __assign({ ref: ref, id: id, name: name, value: isControlled ? value : internalValue, onFocus: handleFocus, onChange: handleChange, onBlur: handleBlur, maxLength: charLimit, placeholder: placeholder, disabled: disabled, "aria-label": ariaLabel, "$background": disabled ? "bg-neutral" : "bg-primary", "$color": "text-primary", "$borderRadius": "border-radius-m", "$ba": "border-solid-m", style: { padding: textAreaPadding, overscrollBehavior: "none" }, "$borderColor": errors && (errors === null || errors === void 0 ? void 0 : errors.length) > 0
                ? "border-error"
                : "border-neutral-lighter", "$height": $height, "$overflowX": $overflowX, "$overflowY": $overflowY, "$whiteSpace": $whiteSpace, "$width": "100%", "aria-describedby": "".concat(name, "-invalid-error") }, textAreaProps)),
        React__default.createElement(OakGrid, { "$minWidth": [charCountWidth, null], "$pb": ["spacing-20"], "$position": ["relative", null] },
            errors && errors.length > 0 && (React__default.createElement(OakGridArea, { "$colSpan": 10, "$position": "relative" },
                React__default.createElement(OakFlex, { "$flexDirection": "row", "$position": "absolute", "$top": "spacing-0", "$left": "spacing-0" },
                    React__default.createElement(OakIcon, { iconName: "warning", "$colorFilter": "icon-error", "$width": "spacing-16", "$height": "spacing-16" }),
                    React__default.createElement(OakSpan, { "$overflowY": "auto", "$overflowX": "auto", "$font": "body-4", "$color": "text-error", id: "".concat(name, "-invalid-error"), "$pl": "spacing-4" }, errors.join(". "))))),
            React__default.createElement(OakGridArea, { "$colSpan": 2 }, showCharCount && (React__default.createElement(OakSpan, { "aria-label": "character count", "$font": "body-4", "$color": "text-subdued", "$position": ["absolute", null], "$top": ["spacing-0", null], "$right": ["spacing-0", null] },
                charCount,
                "/",
                charLimit))))));
});
/**
 *
 * This component wraps OakTextArea and provides the following functionality
 * - Displays errors passed in as a prop
 * - Displays and updates character count on focus only
 * - Passes stored text to onChange and onBlur callbacks
 * - Allows state to be controlled either internally or externally
 *
 * ### Callbacks
 *
 * onBlur
 * onChange
 * onFocus: display character count
 *
 * ### Notes
 *  - Current method of clearing the component is to reset its key in the parent component
 *  - useImperativeHandle could be used to expose a clear method
 */
var OakMultilineText = UnstyledComponent;
// TODO use common hook when implemented
function useDevice(values) {
    var isDesktop = useMediaQuery("desktop");
    var isTablet = useMediaQuery("tablet");
    if (Array.isArray(values)) {
        if (isDesktop) {
            return values[0];
        }
        if (isTablet) {
            return values[1] || values[0];
        }
        return values[2] || values[0];
    }
    return values;
}
var templateObject_1;

export { OakMultilineText, useDevice };
