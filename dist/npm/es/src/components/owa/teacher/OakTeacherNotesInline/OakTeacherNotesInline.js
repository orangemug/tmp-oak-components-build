import { __makeTemplateObject } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakBox } from '../../../layout-and-structure/OakBox/OakBox.js';
import { parseColor } from '../../../../styles/helpers/parseColor.js';

var LeftScrollBox = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  direction: rtl;\n\n  & > * {\n    direction: ltr;\n  }\n\n  scrollbar-color: ", " #fff;\n\n  a{\n    color: ", ";  \n    text-decoration: underline;\n  }\n\n  a::active {\n    color: ", ";\n  }\n\n  a::hover {\n    color: ", ";\n  }\n\n  a::visited {\n    color: ", ";\n  }\n\n  a::pressed {\n    color: ", ";\n  }\n\n}\n\n"], ["\n  direction: rtl;\n\n  & > * {\n    direction: ltr;\n  }\n\n  scrollbar-color: ", " #fff;\n\n  a{\n    color: ", ";  \n    text-decoration: underline;\n  }\n\n  a::active {\n    color: ", ";\n  }\n\n  a::hover {\n    color: ", ";\n  }\n\n  a::visited {\n    color: ", ";\n  }\n\n  a::pressed {\n    color: ", ";\n  }\n\n}\n\n"])), function () { return parseColor("bg-decorative2-main"); }, function () { return parseColor("icon-link-active"); }, function () { return parseColor("text-link-active"); }, function () { return parseColor("text-link-hover"); }, function () { return parseColor("text-link-visited"); }, function () { return parseColor("text-link-pressed"); });
var OakTeacherNotesInline = function (_a) {
    var sanitizedHtml = _a.sanitizedHtml;
    var innerHtml = sanitizedHtml !== null && sanitizedHtml !== void 0 ? sanitizedHtml : "";
    return (React__default.createElement(OakBox, { "$pv": "spacing-24", "$pr": "spacing-24", "$ba": "border-solid-m", "$borderColor": "bg-decorative2-main", "$borderRadius": "border-radius-l", "data-testid": "oak-teacher-notes-inline" },
        React__default.createElement(LeftScrollBox, { "$overflow": "scroll", "$pl": "spacing-24", "$height": "spacing-72", dangerouslySetInnerHTML: { __html: innerHtml } })));
};
var templateObject_1;

export { OakTeacherNotesInline };
