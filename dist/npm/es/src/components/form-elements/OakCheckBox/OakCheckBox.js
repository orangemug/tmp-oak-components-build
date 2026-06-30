import { __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useRef } from 'react';
import { InternalCheckBoxHoverFocus } from '../../internal-components/InternalCheckBox/InternalCheckBox.js';
import { InternalCheckBoxLabel } from '../../internal-components/InternalCheckBoxLabel/InternalCheckBoxLabel.js';
import { InternalCheckBoxWrapper } from '../../internal-components/InternalCheckBoxWrapper/InternalCheckBoxWrapper.js';

/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
 * - if provided, displayValue is used to display a different value to the value prop.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */
var OakCheckBox = function (props) {
    var id = props.id, value = props.value, _a = props.displayValue, displayValue = _a === void 0 ? value : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, defaultChecked = props.defaultChecked, checked = props.checked, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onHovered = props.onHovered, _c = props.iconPadding, iconPadding = _c === void 0 ? "spacing-0" : _c, _d = props.hoverBorderRadius, hoverBorderRadius = _d === void 0 ? "border-radius-xs" : _d, _e = props.checkboxSize, checkboxSize = _e === void 0 ? "spacing-24" : _e, _f = props.checkboxBorder, checkboxBorder = _f === void 0 ? "border-solid-m" : _f, _g = props.checkboxBorderRadius, checkboxBorderRadius = _g === void 0 ? "border-radius-xs" : _g, _h = props.defaultColor, defaultColor = _h === void 0 ? "text-primary" : _h, 
    /**
     * The outer border color of the checkbox when unchecked.
     */
    _j = props.uncheckedBorderColor, 
    /**
     * The outer border color of the checkbox when unchecked.
     */
    uncheckedBorderColor = _j === void 0 ? "border-neutral" : _j, 
    /**
     * The outer border color of the checkbox when checked.
     */
    _k = props.checkedBorderColor, 
    /**
     * The outer border color of the checkbox when checked.
     */
    checkedBorderColor = _k === void 0 ? "border-primary" : _k, _l = props.disabledColor, disabledColor = _l === void 0 ? "text-disabled" : _l, _m = props.labelGap, labelGap = _m === void 0 ? "spacing-16" : _m, _o = props.labelAlignItems, labelAlignItems = _o === void 0 ? "center" : _o, _p = props.checkedBackgroundFill, checkedBackgroundFill = _p === void 0 ? true : _p, checkedIcon = props.checkedIcon, dataTestId = props["data-testid"], rest = __rest(props, ["id", "value", "displayValue", "disabled", "defaultChecked", "checked", "onChange", "onFocus", "onBlur", "onHovered", "iconPadding", "hoverBorderRadius", "checkboxSize", "checkboxBorder", "checkboxBorderRadius", "defaultColor", "uncheckedBorderColor", "checkedBorderColor", "disabledColor", "labelGap", "labelAlignItems", "checkedBackgroundFill", "checkedIcon", "data-testid"]);
    var hoverStart = useRef(Date.now());
    var handleMouseEnter = function () {
        hoverStart.current = Date.now();
    };
    var handleMouseLeave = function () {
        var delta = Date.now() - hoverStart.current;
        if (onHovered) {
            onHovered(value, id, delta);
        }
    };
    var currentColor = disabled ? disabledColor : defaultColor;
    var currentCheckedBackgroundFill = disabled
        ? disabledColor
        : checkedBorderColor;
    var currentCheckedBorderColor = disabled
        ? disabledColor
        : checkedBorderColor;
    return (React__default.createElement(InternalCheckBoxLabel, { htmlFor: id, labelGap: labelGap, labelAlignItems: labelAlignItems, "$color": currentColor, disabled: disabled, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        React__default.createElement(InternalCheckBoxWrapper, { size: checkboxSize, internalCheckbox: React__default.createElement(InternalCheckBoxHoverFocus, __assign({ id: id, value: value, "$width": checkboxSize, "$height": checkboxSize, "$ba": checkboxBorder, "$borderRadius": checkboxBorderRadius, "$borderColor": defaultColor, "$checkedBackground": checkedBackgroundFill ? currentCheckedBackgroundFill : null, "$checkedBorderColor": currentCheckedBorderColor, "$uncheckedBorderColor": uncheckedBorderColor, "$hoverBorderRadius": hoverBorderRadius, onChange: onChange, onFocus: onFocus, onBlur: onBlur, defaultChecked: defaultChecked, checked: checked, disabled: disabled, "data-testid": dataTestId }, rest)), checkedIcon: checkedIcon, iconPadding: iconPadding }),
        displayValue));
};

export { OakCheckBox };
