import { __makeTemplateObject } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakQuizHint } from '../../quiz/OakQuizHint/OakQuizHint.js';
import { OakQuizFeedback } from '../../quiz/OakQuizFeedback/OakQuizFeedback.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';

/**
 * `content-box` ensures that the border is not subtracted from the height of the element
 */
var StyledOakFlex = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: content-box;\n"], ["\n  box-sizing: content-box;\n"])));
/**
 * Renders feedback for an answer and onward navigation buttons to continue the lesson
 */
var OakLessonBottomNav = function (_a) {
    var hint = _a.hint, hintToggled = _a.hintToggled, feedback = _a.feedback, answerFeedback = _a.answerFeedback, children = _a.children;
    var content;
    switch (true) {
        case !!feedback:
            content = (React__default.createElement(OakQuizFeedback, { feedback: feedback, answerFeedback: answerFeedback }));
            break;
        case !!hint:
            content = (React__default.createElement(OakQuizHint, { hint: hint, id: "quiz-hint", hintToggled: hintToggled }));
            break;
        default:
            content = null;
    }
    return (React__default.createElement(StyledOakFlex, { "$flexDirection": ["column", "row"], "$pa": "spacing-16", "$minHeight": "spacing-48", "$gap": "spacing-24" },
        React__default.createElement(OakFlex, { "$alignItems": "center" }, content),
        React__default.createElement(OakFlex, { "$flexGrow": "1", "$height": "fit-content", "$alignSelf": "flex-end", "$justifyContent": ["initial", "flex-end"], "$width": ["100%", "auto"] }, children)));
};
var templateObject_1;

export { OakLessonBottomNav };
