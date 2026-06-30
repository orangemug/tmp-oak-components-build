import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled, { css } from 'styled-components';

var screenReaderStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n"], ["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n"])));
/**
 * This component will visually hide its contents but will still be available
 * to screen readers, assitive technology, and scrapers.
 * ## Usage
 * Use this component in places where content shouldn't be visible, but should
 * be accessible to assistive technology.
 */
var OakScreenReader = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), screenReaderStyle);
var templateObject_1, templateObject_2;

export { OakScreenReader };
