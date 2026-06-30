import { __makeTemplateObject, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { oakBoxCss } from '../../layout-and-structure/OakBox/OakBox.js';
import { Underline } from '../../../svgs/underline.js';
import { HorizontalRule } from '../../../svgs/horizontal-rule.js';
import { HeaderUnderline } from '../../../svgs/header-underline.js';
import { Underline3 } from '../../../svgs/underline-3.js';
import { ButtonBorderTop } from '../../../svgs/button-border-top.js';
import { ButtonBorderBottom } from '../../../svgs/button-border-bottom.js';
import { ButtonBorderLeft } from '../../../svgs/button-border-left.js';
import { ButtonBorderRight } from '../../../svgs/button-border-right.js';
import { IconBackground } from '../../../svgs/icon-background.js';
import { Scribble } from '../../../svgs/scribble.js';

/**
 * Map of the svg names to the actual svg components
 * Only components that are used in the OakSvg component should be added here
 * Should be used only in cases where OakIcon can't be used and if this list grows much bigger in the future we should consider refactoring
 */
var svgMap = {
    "header-underline": HeaderUnderline,
    underline: Underline,
    "horizontal-rule": HorizontalRule,
    "underline-3": Underline3,
    "button-border-top": ButtonBorderTop,
    "button-border-bottom": ButtonBorderBottom,
    "button-border-left": ButtonBorderLeft,
    "button-border-right": ButtonBorderRight,
    "icon-background": IconBackground,
    scribble: Scribble,
};
var StyledSvg = styled.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  transition: all 0.3s ease;\n"], ["\n  ", ";\n  transition: all 0.3s ease;\n"])), oakBoxCss);
/**
 * This is component used for rendering SVGs that don't belong to be rendered with OakIcon component
 * ie. UI elements that are not icons/illustratons but are part of the design system (underline, etc)
 */
var OakSvg = function (props) {
    var getSvgByName = function (name) {
        var SvgComponent = svgMap[name];
        return React__default.createElement(SvgComponent, null);
    };
    return (React__default.createElement(StyledSvg, __assign({ "aria-hidden": true, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%" }, props), getSvgByName(props.name)));
};
var templateObject_1;

export { OakSvg };
