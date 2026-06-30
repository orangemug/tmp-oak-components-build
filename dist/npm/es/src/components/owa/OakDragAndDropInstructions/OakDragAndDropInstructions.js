import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakIcon } from '../../images-and-icons/OakIcon/OakIcon.js';
import { OakKbd } from '../../messaging-and-feedback/OakKbd/OakKbd.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

/**
 * Adds additional leading between each line of text to make room for the
 * keyboard instructions wrapped in `<OakKbd>`
 *
 * This might be a useful atom to extract
 */
var StyledLeadingTrim = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-block: calc(-", " / 2);\n  line-height: calc(1.5rem + ", ");\n"], ["\n  margin-block: calc(-", " / 2);\n  line-height: calc(1.5rem + ", ");\n"])), parseSpacing("spacing-8"), parseSpacing("spacing-8"));
/**
 * Displays instructions for drag and drop functionality
 */
var OakDragAndDropInstructions = function (props) {
    return (React__default.createElement(OakFlex, __assign({ "$gap": "spacing-8" }, props),
        React__default.createElement(OakFlex, { "$flexGrow": 0 },
            React__default.createElement(OakIcon, { iconName: "move-arrows" })),
        React__default.createElement(StyledLeadingTrim, { "$font": "body-2" },
            "Click and drag answers to change the order, or select using",
            " ",
            React__default.createElement(OakKbd, null,
                React__default.createElement("span", { "aria-hidden": "true" }, "\u21B9"),
                " Tab"),
            " ",
            "then move by pressing ",
            React__default.createElement(OakKbd, null, "Space"),
            " and the ",
            React__default.createElement(OakKbd, null, "\u2191"),
            " ",
            React__default.createElement(OakKbd, null, "\u2193"),
            " arrows on your keyboard.")));
};
var templateObject_1;

export { OakDragAndDropInstructions };
