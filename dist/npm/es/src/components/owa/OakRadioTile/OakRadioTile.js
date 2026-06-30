import { __makeTemplateObject, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakLabel } from '../../form-elements/OakLabel/OakLabel.js';
import { parseColor } from '../../../styles/helpers/parseColor.js';

var isTileItem = function (u) {
    return (typeof u === "object" &&
        u !== null &&
        typeof u.id === "string" &&
        typeof u.label === "string");
};
var RadioTileLabel = styled(OakLabel)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  gap: ", ";\n"], ["\n  cursor: pointer;\n  display: flex;\n  gap: ", ";\n"])), parseSpacing("spacing-16"));
var HiddenRadioButtonInput = styled.input.attrs({
    type: "radio",
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n"])));
var RadioTileFocus = styled(OakBox)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-shadow: ", ";\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n  top: -6px;\n  left: -6px;\n"], ["\n  box-shadow: ", ";\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n  top: -6px;\n  left: -6px;\n"])), "inset 0 0 0 0.15rem ".concat(parseColor("icon-promo")));
var OakRadioTileCss = css(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var UnstyledComponent = function (props) {
    var tileItem = props.tileItem, isChecked = props.isChecked, id = props.id, onChange = props.onChange;
    var _a = __read(useState(false), 2), isFocussed = _a[0], setIsFocussed = _a[1];
    return (React__default.createElement(OakBox, { "$borderColor": "border-neutral", "$ba": "border-solid-m", "$borderRadius": "border-radius-s", "$pa": "spacing-12", "$position": "relative", "$background": isFocussed || isChecked ? "bg-inverted" : "transparent", "$color": isFocussed || isChecked ? "text-inverted" : "text-primary" },
        isFocussed && (React__default.createElement(RadioTileFocus, { "$background": "transparent", "$position": "absolute", "$ba": "border-solid-l", "$borderColor": "border-neutral-stronger", "$borderRadius": "border-radius-s", "data-testid": "radio-tile-focus" })),
        React__default.createElement(RadioTileLabel, { htmlFor: id },
            React__default.createElement(HiddenRadioButtonInput, { value: tileItem.id, id: id, checked: isChecked, onChange: function () { return onChange(tileItem); }, tabIndex: 0, onFocus: function () { return setIsFocussed(true); }, onBlur: function () { return setIsFocussed(false); }, onClick: function (e) {
                    // remove focus on mouse click events
                    if (e.clientX || e.clientY) {
                        setIsFocussed(false);
                    }
                } }),
            React__default.createElement(OakFlex, { "$height": "spacing-24", "$width": "spacing-24", "$borderColor": "border-neutral", "$flexGrow": 0, "$flexShrink": 0, "$alignItems": "center", "$justifyContent": "center", "$background": "bg-primary", "$ba": "border-solid-m", "$borderRadius": "border-radius-circle" }, isChecked && (React__default.createElement(OakBox, { "$height": "spacing-16", "$width": "spacing-16", "$background": "bg-inverted", "$position": "absolute", "$borderRadius": "border-radius-circle", "data-testid": "radio-tile-checked" }))),
            tileItem.label)));
};
var OakRadioTile = styled(UnstyledComponent)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), OakRadioTileCss);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { OakRadioTile, isTileItem };
