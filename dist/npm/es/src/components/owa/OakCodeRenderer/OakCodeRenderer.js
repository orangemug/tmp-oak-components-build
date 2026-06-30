import { __makeTemplateObject, __rest, __assign, __values, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakUL } from '../../typography/OakUL/OakUL.js';
import { OakLI } from '../../typography/OakLI/OakLI.js';
import { OakInfo } from '../OakInfo/OakInfo.js';

var StyledCodeContainer = styled(OakSpan)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: \"Roboto Mono\", --font-roboto-mono, monospace;\n"], ["\n  font-family: \"Roboto Mono\", --font-roboto-mono, monospace;\n"])));
var OakCodeRenderer = function (_a) {
    var string = _a.string, rest = __rest(_a, ["string"]);
    var findAndStyleInlineCode = function (text) {
        var parts = text.split(/(`.*?`)/); // Matches text enclosed in backticks
        if (parts.length === 1 && !text.startsWith("`")) {
            return text;
        }
        return (React__default.createElement(OakSpan, null, parts.map(function (part, index) {
            if (part.startsWith("`") && part.endsWith("`")) {
                // Remove backticks and style the content
                return (React__default.createElement(StyledCodeContainer, __assign({ key: index, "$background": "bg-inverted", "$color": "text-inverted", "$pv": ["spacing-0", "spacing-4"], "$ph": ["spacing-8", "spacing-8"], "$borderRadius": "border-radius-m2", "$display": "inline-block", "$font": ["code-2", "code-1"] }, rest), part.slice(1, -1)));
            }
            return part; // Return the unstyled part
        })));
    };
    var syntaxHighlight = function (code) {
        // Define regex patterns for different code parts
        var patterns = [
            { regex: /"(.*?)"|'(.*?)'/g, color: "code-green" }, // Strings
            {
                regex: /\b(and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,
                color: "code-pink",
            }, // Keywords
            {
                regex: /\b(False|None|True)\b/g,
                color: "code-blue",
            }, // Keywords
            { regex: /\b\d+\b/g, color: "code-blue" }, // Numbers
            // { regex: /(#.*?$)/gm, color: "code-grey" }, // Comments
            //   { regex: /(=|==|!=|<=|>=|\+|-|\*|\/|:)/g, color: "red" }, // Operators
        ];
        // Apply syntax highlighting by replacing matches with styled spans
        var parts = [code];
        var isCheckingMatches = true;
        var _loop_1 = function () {
            var matchFound = false;
            parts.forEach(function (part, index) {
                var e_1, _a;
                try {
                    for (var patterns_1 = (e_1 = void 0, __values(patterns)), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
                        var _b = patterns_1_1.value, regex = _b.regex, color = _b.color;
                        if (typeof part === "string") {
                            var match = regex.exec(part);
                            if (match) {
                                matchFound = true;
                                var _c = __read(match, 1), matchedText = _c[0];
                                parts.splice(index, 1);
                                parts.splice(index, 0, part.slice(0, match.index));
                                parts.splice(index + 1, 0, React__default.createElement(OakSpan, { key: "".concat(part, "-").concat(index), "$color": color }, matchedText));
                                parts.splice(index + 2, 0, part.slice(match.index + matchedText.length));
                                break;
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
            if (!matchFound) {
                isCheckingMatches = false;
                return { value: parts };
            }
        };
        while (isCheckingMatches) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    var StyleCodeBlock = function (text, index) {
        var matches = text.match(/```([\s\S]*?)```/);
        if (!matches)
            return text;
        // Extract the content inside the backticks
        var codeContent = matches[1];
        if (!codeContent)
            return text;
        // Apply syntax highlighting
        var codeWithSyntaxHighlighting = syntaxHighlight(codeContent);
        return (React__default.createElement(StyledCodeContainer, __assign({ key: "".concat(text, "-").concat(index), "$background": "bg-inverted", "$color": "code-grey", "$pv": "spacing-8", "$ph": "spacing-12", "$borderRadius": "border-radius-m2", "$whiteSpace": "pre-wrap", "$mt": "spacing-56", "$font": "code-2" }, rest),
            React__default.createElement(OakFlex, { "$flexDirection": "row" },
                React__default.createElement(OakFlex, { "$flexDirection": "column", "$br": "border-solid-s", "$borderColor": "border-neutral", "$pr": "spacing-12" }, codeContent.split("\n").map(function (line, index) { return (React__default.createElement(OakSpan, { key: "".concat(line, "-").concat(index) }, index + 1)); })),
                React__default.createElement(OakSpan, { "$pl": "spacing-12" }, codeWithSyntaxHighlighting))));
    };
    var extractAndMap = function (text) {
        var parts = text.split(/(```[\s\S]*?```)/);
        if (parts.length === 1 && !text.startsWith("```")) {
            return findAndStyleInlineCode(text);
        }
        return (React__default.createElement(OakFlex, { "$flexDirection": "column" },
            parts.map(function (part, index) {
                if (part.startsWith("```") && part.endsWith("```")) {
                    return StyleCodeBlock(part, index);
                }
                return (React__default.createElement(OakSpan, { key: "".concat(part, "-").concat(index) }, findAndStyleInlineCode(part)));
            }),
            React__default.createElement(OakFlex, { "$alignSelf": "flex-end", "$width": "fit-content", "$alignItems": "center", "$gap": "spacing-12", "$mt": "spacing-16" },
                React__default.createElement(OakSpan, { "$font": "heading-light-7" }, "Code colour"),
                React__default.createElement(OakInfo, { hint: React__default.createElement(OakFlex, { "$flexDirection": "column" },
                        React__default.createElement(OakP, null, "When programmers write code, they use a special tool called an IDE (Integrated Development Environment). In an IDE, different colours are used to help programmers understand the code:"),
                        React__default.createElement("br", null),
                        React__default.createElement(OakUL, { "$reset": true, "$pl": "spacing-8" },
                            React__default.createElement(OakLI, null,
                                React__default.createElement(OakSpan, { "$font": "heading-7" }, "\u2022 Blue"),
                                React__default.createElement(OakSpan, { "$font": "heading-light-7" }, "\u00A0- numbers and boolean values")),
                            React__default.createElement(OakLI, null,
                                React__default.createElement(OakSpan, { "$font": "heading-7" }, "\u2022 Green"),
                                React__default.createElement(OakSpan, { "$font": "heading-light-7" }, "\u00A0- strings")),
                            React__default.createElement(OakLI, null,
                                React__default.createElement(OakSpan, { "$font": "heading-7" }, "\u2022 Purple"),
                                React__default.createElement(OakSpan, { "$font": "heading-light-7" }, "\u00A0- keywords")))), id: "oak-code-renderer-tooltip", tooltipPosition: "bottom-right", buttonProps: {
                        type: "button",
                    } }))));
    };
    return extractAndMap(string);
};
var templateObject_1;

export { OakCodeRenderer };
