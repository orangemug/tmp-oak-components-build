import { __makeTemplateObject, __rest } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { NativeSelect } from './NativeSelect.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';

var IconUp = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n"], ["\n  user-select: none;\n"])));
var IconDown = styled(OakFlex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  user-select: none;\n"], ["\n  user-select: none;\n"])));
var StyledWrapper = styled(OakFlex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  select ~ ", " {\n    display: block;\n  }\n\n  select:open ~ ", " {\n    display: none;\n  }\n\n  select ~ ", " {\n    display: none;\n  }\n\n  select:open ~ ", " {\n    display: block;\n  }\n"], ["\n  select ~ ", " {\n    display: block;\n  }\n\n  select:open ~ ", " {\n    display: none;\n  }\n\n  select ~ ", " {\n    display: none;\n  }\n\n  select:open ~ ", " {\n    display: block;\n  }\n"])), IconDown, IconDown, IconUp, IconUp);
function OakSelect(_a) {
    var id = _a.id, _b = _a.borderColor, borderColor = _b === void 0 ? "border-primary" : _b, _c = _a.readOnlyBorderColor, readOnlyBorderColor = _c === void 0 ? "border-neutral" : _c, _d = _a.focusRingDropShadows, focusRingDropShadows = _d === void 0 ? [
        "drop-shadow-centered-lemon",
        "drop-shadow-centered-grey",
    ] : _d, _e = _a.background, background = _e === void 0 ? "bg-primary" : _e, _f = _a.hoverBackground, hoverBackground = _f === void 0 ? "bg-neutral" : _f, _g = _a.disabledBackgroundColor, disabledBackgroundColor = _g === void 0 ? "bg-neutral" : _g, _h = _a.highlightBackgroundColor, highlightBackgroundColor = _h === void 0 ? "bg-decorative5-main" : _h, _j = _a.color, color = _j === void 0 ? "text-primary" : _j, _k = _a.disabledColor, disabledColor = _k === void 0 ? "text-disabled" : _k, _l = _a.readOnlyColor, readOnlyColor = _l === void 0 ? "text-subdued" : _l, validity = _a.validity, _m = _a.validBorderColor, validBorderColor = _m === void 0 ? "border-success" : _m, _o = _a.invalidBorderColor, invalidBorderColor = _o === void 0 ? "border-error" : _o, _p = _a.isHighlighted, isHighlighted = _p === void 0 ? false : _p, _q = _a.$display, $display = _q === void 0 ? "inline-block" : _q, children = _a.children, name = _a.name, onChange = _a.onChange, props = __rest(_a, ["id", "borderColor", "readOnlyBorderColor", "focusRingDropShadows", "background", "hoverBackground", "disabledBackgroundColor", "highlightBackgroundColor", "color", "disabledColor", "readOnlyColor", "validity", "validBorderColor", "invalidBorderColor", "isHighlighted", "$display", "children", "name", "onChange"]);
    var finalBackgroundColor = background;
    var finalBorderColor = borderColor;
    var finalReadOnlyBorderColor = readOnlyBorderColor;
    switch (true) {
        case validity === "valid":
            finalBorderColor = validBorderColor;
            finalReadOnlyBorderColor = validBorderColor;
            break;
        case validity === "invalid":
            finalBorderColor = invalidBorderColor;
            finalReadOnlyBorderColor = invalidBorderColor;
            break;
        case isHighlighted:
            finalBackgroundColor = highlightBackgroundColor;
            break;
    }
    return (React__default.createElement(StyledWrapper, { "$display": $display, "$position": "relative", "$alignItems": "center", "$gap": "spacing-16" },
        React__default.createElement(NativeSelect, { key: props.value, "$pa": "spacing-16", "$background": finalBackgroundColor, "$borderColor": finalBorderColor, "$pr": "spacing-56", "$focusRingDropShadows": focusRingDropShadows, "$ba": "border-solid-m", disabled: !!props.disabled, "$borderRadius": "border-radius-s", "$hoverBackground": hoverBackground, "$disabledBackgroundColor": disabledBackgroundColor, "$readOnlyBorderColor": finalReadOnlyBorderColor, "$disabledColor": disabledColor, "$readOnlyColor": readOnlyColor, "$color": color, "$disabled": !!props.disabled, "$readOnly": !!props.readOnly, id: id, name: name, onChange: onChange, value: props.value },
            React__default.createElement("button", null,
                React__default.createElement("selectedcontent", null)),
            children),
        React__default.createElement(IconUp, { "$position": "absolute", "$top": "spacing-0", "$bottom": "spacing-0", "$right": "spacing-12", "$pointerEvents": "none", "$alignContent": "center" },
            React__default.createElement(OakIcon, { iconName: "chevron-up" })),
        React__default.createElement(IconDown, { "$position": "absolute", "$top": "spacing-0", "$bottom": "spacing-0", "$right": "spacing-12", "$pointerEvents": "none", "$alignContent": "center" },
            React__default.createElement(OakIcon, { iconName: "chevron-down" }))));
}
var templateObject_1, templateObject_2, templateObject_3;

export { IconDown, IconUp, OakSelect };
