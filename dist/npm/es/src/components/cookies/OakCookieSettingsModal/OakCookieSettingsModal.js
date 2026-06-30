import { __values } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakAccordion } from '../../layout-and-structure/OakAccordion/OakAccordion.js';
import { OakCheckBox } from '../../form-elements/OakCheckBox/OakCheckBox.js';
import { OakInformativeModal } from '../../messaging-and-feedback/OakInformativeModal/OakInformativeModal.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';
import { OakInformativeModalFooter } from '../../messaging-and-feedback/OakInformativeModal/OakInformativeModalFooter.js';
import { OakLink } from '../../navigation/OakLink/OakLink.js';
import { OakPrimaryButton } from '../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakSecondaryButton } from '../../buttons/OakSecondaryButton/OakSecondaryButton.js';
import { OakHeading } from '../../typography/OakHeading/OakHeading.js';
import { OakP } from '../../typography/OakP/OakP.js';
import { OakSpan } from '../../typography/OakSpan/OakSpan.js';
import { OakUL } from '../../typography/OakUL/OakUL.js';

/**
 * Modal for managing cookie consent settings.
 */
var OakCookieSettingsModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onReject = _a.onReject, onConfirm = _a.onConfirm, onAccept = _a.onAccept, policyURL = _a.policyURL, policyConsents = _a.policyConsents, zIndex = _a.zIndex;
    var handleSubmit = function (event) {
        var e_1, _a, e_2, _b;
        event.preventDefault();
        var formData = new FormData(event.currentTarget);
        var newConsents = {};
        try {
            for (var policyConsents_1 = __values(policyConsents), policyConsents_1_1 = policyConsents_1.next(); !policyConsents_1_1.done; policyConsents_1_1 = policyConsents_1.next()) {
                var _c = policyConsents_1_1.value, policyId = _c.policyId, isStrictlyNecessary = _c.isStrictlyNecessary;
                newConsents[policyId] = {
                    policyId: policyId,
                    consentState: isStrictlyNecessary ? "granted" : "denied",
                };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (policyConsents_1_1 && !policyConsents_1_1.done && (_a = policyConsents_1.return)) _a.call(policyConsents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _d = __values(formData.getAll("consent")), _e = _d.next(); !_e.done; _e = _d.next()) {
                var policyId = _e.value;
                newConsents[policyId.toString()] = {
                    policyId: policyId.toString(),
                    consentState: "granted",
                };
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        onConfirm(Object.values(newConsents));
    };
    return (React__default.createElement(OakInformativeModal, { isOpen: isOpen, isLeftHandSide: true, onClose: onClose, zIndex: zIndex, footerSlot: React__default.createElement(OakInformativeModalFooter, null,
            React__default.createElement(OakSecondaryButton, { onClick: onReject, width: "100%" }, "Reject non-essential cookies"),
            React__default.createElement(OakPrimaryButton, { type: "submit", form: "cookie-settings-form", width: "100%" }, "Confirm my choices")) },
        React__default.createElement(OakBox, { "$pa": "spacing-20" },
            React__default.createElement(OakHeading, { tag: "h2", "$font": "heading-5", "$mb": "spacing-16" }, "This site uses cookies to store information on your computer."),
            React__default.createElement(OakP, { "$mb": "spacing-24" }, "Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used."),
            React__default.createElement(OakP, { "$mb": "spacing-48" },
                "For more information, view our",
                " ",
                React__default.createElement(OakLink, { href: policyURL, target: "_blank" }, "cookie policy"),
                "."),
            React__default.createElement(OakBox, { "$mb": "spacing-56" },
                React__default.createElement(OakPrimaryButton, { onClick: onAccept, width: "spacing-180" }, "Allow all")),
            React__default.createElement(OakBox, { "$ph": "spacing-8", as: "form", id: "cookie-settings-form", onSubmit: handleSubmit },
                React__default.createElement(OakHeading, { tag: "h3", "$font": "heading-6", "$mb": "spacing-24" }, "Manage consent preferences"),
                policyConsents.map(function (policy) {
                    return (React__default.createElement(OakAccordion, { key: policy.policyId, header: React__default.createElement(OakSpan, { id: "cookie-settings-".concat(policy.policyId, "-label") }, policy.policyLabel), headerTag: "h4", id: "cookies-settings-".concat(policy.policyId, "-accordion"), headerAfterSlot: React__default.createElement(OakCheckBox, { id: "cookies-settings-".concat(policy.policyId, "-checkbox"), name: "consent", displayValue: "", value: policy.policyId, defaultChecked: policy.isStrictlyNecessary ||
                                policy.consentState === "granted", disabled: policy.isStrictlyNecessary, "aria-labelledby": "cookie-settings-".concat(policy.policyId, "-label") }) },
                        React__default.createElement(OakP, { "$mb": "spacing-32" }, policy.policyDescription),
                        React__default.createElement(OakBox, { as: "dl", "$pl": "spacing-16" },
                            policy.policyParties.length > 0 && (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("dt", null, "Who do we share data with?"),
                                React__default.createElement(OakBox, { as: "dd", "$font": "body-3-bold", "$mb": "spacing-16" },
                                    React__default.createElement(OakUL, { "$reset": true }, policy.policyParties.map(function (party, index, all) { return (React__default.createElement(OakBox, { as: "li", key: index, "$display": "inline" },
                                        React__default.createElement(OakLink, { variant: "secondary", href: party.url, target: "_blank", rel: "external nofollow" }, party.name),
                                        index < all.length - 1 && ", ")); }))))),
                            React__default.createElement("dt", null, "Does this policy need cookies to work?"),
                            React__default.createElement(OakBox, { as: "dd", "$font": "body-3-bold" }, "Yes."))));
                })))));
};

export { OakCookieSettingsModal };
