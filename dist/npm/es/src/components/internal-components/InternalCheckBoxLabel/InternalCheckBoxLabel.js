import { __makeTemplateObject } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import styled from 'styled-components';
import { OakLabel } from '../../form-elements/OakLabel/OakLabel.js';
import { responsiveStyle } from '../../../styles/utils/responsiveStyle.js';
import { parseSpacing } from '../../../styles/helpers/parseSpacing.js';

/**
 *
 * Specialised Label Component can be used and extended to create various different versions of CheckboxLabels
 *
 */
var InternalCheckBoxLabel = styled(OakLabel)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n"])), responsiveStyle("gap", function (props) { return props.labelGap; }, parseSpacing), responsiveStyle("align-items", function (props) { return props.labelAlignItems; }));
var InternalCheckBoxLabelHoverDecor = styled(InternalCheckBoxLabel)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  @media (hover: hover) {\n    &:hover {\n      text-decoration: ", ";\n    }\n  }\n"], ["\n  ", "\n  @media (hover: hover) {\n    &:hover {\n      text-decoration: ", ";\n    }\n  }\n"])), function (props) { return "\n    ".concat(props.pointerEvents ? "pointer-events: ".concat(props.pointerEvents, ";") : "", "\n    ").concat(props.disabled ? "pointer-events: none;" : "cursor: pointer;", "\n  "); }, function (props) { return (props.disabled ? "none" : "underline"); });
var templateObject_1, templateObject_2;

export { InternalCheckBoxLabel, InternalCheckBoxLabelHoverDecor };
