import { __makeTemplateObject, __rest, __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useRef } from 'react';
import styled from 'styled-components';
import { parseColor } from '../../../styles/helpers/parseColor.js';
import { getBreakpoint } from '../../../styles/utils/responsiveStyle.js';
import { spacingStyle } from '../../../styles/utils/spacingStyle.js';
import { sizeStyle } from '../../../styles/utils/sizeStyle.js';

/**
 * Using `appearance none !important;` here because many style resets will set this
 * value to textfield, causing some browsers to implement undesirable styles.
 * E.g. ios and rounded borders (which border-radius doesn't fix without
 * appearance: none)
 */
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none !important;\n  border: 0;\n  border-radius: 0;\n  border-color: transparent;\n  box-shadow: none;\n  font-family: inherit;\n  background: transparent;\n  outline: none;\n  color: inherit;\n\n  @media (max-width: ", "px) {\n    /* iOS zooms in on inputs with font sizes <16px on mobile */\n    font-size: 16px;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  ::-webkit-search-decoration,\n  ::-webkit-search-cancel-button,\n  ::-webkit-search-results-button,\n  ::-webkit-search-results-decoration {\n    appearance: none;\n  }\n\n  :disabled {\n    cursor: not-allowed;\n  }\n\n  ", "\n  ", "\n"], ["\n  appearance: none !important;\n  border: 0;\n  border-radius: 0;\n  border-color: transparent;\n  box-shadow: none;\n  font-family: inherit;\n  background: transparent;\n  outline: none;\n  color: inherit;\n\n  @media (max-width: ", "px) {\n    /* iOS zooms in on inputs with font sizes <16px on mobile */\n    font-size: 16px;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  ::-webkit-search-decoration,\n  ::-webkit-search-cancel-button,\n  ::-webkit-search-results-button,\n  ::-webkit-search-results-decoration {\n    appearance: none;\n  }\n\n  :disabled {\n    cursor: not-allowed;\n  }\n\n  ", "\n  ", "\n"])), getBreakpoint("small"), parseColor("text-subdued"), spacingStyle, sizeStyle);
/**
 *
 * An unstyled input to be used as a basis for UI input components.
 * Supports all the props of a regular `HTMLInputElement`
 *
 * 🚨 The CSS `outline` is disabled so a focus ring must be applied by the consuming component.
 *
 * The following callbacks are available for tracking focus events:
 *
 *  ### onFocus
 * `(e: FocusEvent<HTMLInputElement>) => void;`
 *  ### onBlur
 * `(e: FocusEvent<HTMLInputElement>) => void;`
 *  ### onInitialFocus
 * `(e: FocusEvent<HTMLInputElement>) => void;`<br>
 *  occurs only when the input is focused for the first time
 *
 */
var InternalTextInput = function (props) {
    props.onInitialFocus; props.onFocus; var rest = __rest(props, ["onInitialFocus", "onFocus"]);
    var hadInitialFocused = useRef(false);
    var handleOnFocus = function (e) {
        if (!hadInitialFocused.current && props.onInitialFocus) {
            props.onInitialFocus(e);
            hadInitialFocused.current = true;
        }
        if (props.onFocus) {
            props.onFocus(e);
        }
    };
    return React__default.createElement(StyledInput, __assign({}, rest, { onFocus: handleOnFocus }));
};
var templateObject_1;

export { InternalTextInput };
