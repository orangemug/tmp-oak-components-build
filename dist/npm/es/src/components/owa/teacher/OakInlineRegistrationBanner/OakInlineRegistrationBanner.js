import { __rest, __read, __assign, __awaiter, __generator } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { SurfingStudentSVG } from './SurfingStudentSVG.js';
import { OakFlex } from '../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../layout-and-structure/OakBox/OakBox.js';
import { OakP } from '../../../typography/OakP/OakP.js';
import { OakFieldError } from '../../../form-elements/OakFieldError/OakFieldError.js';
import { OakJauntyAngleLabel } from '../../../form-elements/OakJauntyAngleLabel/OakJauntyAngleLabel.js';
import { OakPrimaryButton } from '../../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakTextInput } from '../../../form-elements/OakTextInput/OakTextInput.js';

var OakInlineRegistrationBanner = function (props) {
    var onSubmit = props.onSubmit, bodyText = props.bodyText, headerText = props.headerText, style = __rest(props, ["onSubmit", "bodyText", "headerText"]);
    var _a = __read(useState(""), 2), email = _a[0], setEmail = _a[1];
    var _b = __read(useState(false), 2), formError = _b[0], setFormError = _b[1];
    var _c = __read(useState(false), 2), success = _c[0], setSuccess = _c[1];
    return (React__default.createElement(OakBox, __assign({ "$background": "bg-decorative1-main", "$pa": "spacing-32", "$mb": ["spacing-24", "spacing-16"], "$borderRadius": "border-radius-m" }, style),
        React__default.createElement(OakFlex, { "$gap": "spacing-24", "$alignItems": "center" },
            React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-24" },
                React__default.createElement(OakFlex, { "$alignItems": "center", "$gap": "spacing-24" },
                    headerText,
                    React__default.createElement(SurfingStudentSVG, { "$display": ["block", "none", "none"] })),
                bodyText,
                React__default.createElement(OakBox, { as: "form", noValidate: true, onSubmit: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    e.preventDefault();
                                    setSuccess(false);
                                    setFormError(false);
                                    if (email.length === 0) {
                                        setFormError(true);
                                        return [2 /*return*/];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, onSubmit(email)];
                                case 2:
                                    _a.sent();
                                    setSuccess(true);
                                    setEmail("");
                                    return [3 /*break*/, 4];
                                case 3:
                                    _a.sent();
                                    setFormError(true);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); } },
                    React__default.createElement(OakFieldError, null, formError && "Please enter a valid email address"),
                    React__default.createElement(OakFlex, { "$gap": "spacing-16", "$position": "relative", "$width": "100%", "$mt": "spacing-24" },
                        React__default.createElement(OakBox, { "$position": "relative", "$width": "100%" },
                            React__default.createElement(OakJauntyAngleLabel, { label: "Email", "$position": "absolute", "$zIndex": "in-front", "$background": formError ? "bg-error" : "bg-decorative5-main", "$color": formError ? "text-inverted" : "text-primary", "$width": "max-content", "$ph": "spacing-16", "$font": "heading-7", "$top": "-15px", "$left": "8px" }),
                            React__default.createElement(OakTextInput, { type: "email", autoComplete: "email", placeholder: "Enter email address", "$maxHeight": "spacing-56", value: email, onChange: function (event) { return setEmail(event.target.value); }, wrapperWidth: "100%" })),
                        React__default.createElement(OakPrimaryButton, { innerWidth: "max-content" }, "Sign up")),
                    success && (React__default.createElement(OakP, { "$font": "body-1-bold", "$mt": "spacing-16" }, "Thank you for signing up")))),
            React__default.createElement(SurfingStudentSVG, { "$display": ["none", "block", "block"] }))));
};

export { OakInlineRegistrationBanner };
