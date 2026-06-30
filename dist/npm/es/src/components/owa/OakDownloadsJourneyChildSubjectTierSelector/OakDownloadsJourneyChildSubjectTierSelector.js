import { __makeTemplateObject, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import styled, { css } from 'styled-components';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakInlineBanner } from '../../messaging-and-feedback/OakInlineBanner/OakInlineBanner.js';
import { OakPrimaryButton } from '../../buttons/OakPrimaryButton/OakPrimaryButton.js';
import { OakRadioButton } from '../../form-elements/OakRadioButton/OakRadioButton.js';
import { OakRadioGroup } from '../../form-elements/OakRadioGroup/OakRadioGroup.js';

var OakDownloadsJourneyChildSubjectTierSelectorCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var UnstyledComponent = function (props) {
    var _a;
    var childSubjects = props.childSubjects, tiers = props.tiers, getTierSubjectValues = props.getTierSubjectValues;
    var _b = __read(useState((childSubjects === null || childSubjects === void 0 ? void 0 : childSubjects[0]) ? (_a = childSubjects[0]) === null || _a === void 0 ? void 0 : _a.subjectSlug : null), 2), childSubjectSelected = _b[0], setChildSubjectSelected = _b[1];
    var _c = __read(useState("foundation"), 2), tierSelected = _c[0], setTierSelected = _c[1];
    var tiersAvailable = tiers && tierSelected.length > 0;
    var childSubjectsAvailable = childSubjects && childSubjects.length > 0;
    function handleChildSubjectSelection(e) {
        var childSubjectSlug = e.currentTarget.value;
        setChildSubjectSelected(childSubjectSlug);
    }
    function handleTierSelection(e) {
        var tierSlug = e.currentTarget.value;
        setTierSelected(tierSlug);
    }
    function handleNextClick() {
        getTierSubjectValues(tierSelected, childSubjectSelected);
    }
    return (React__default.createElement(OakFlex, { "$flexDirection": "column", "$gap": "spacing-24" },
        React__default.createElement(OakInlineBanner, { isOpen: true, message: "Before downloading, choose ".concat(childSubjectsAvailable && tiersAvailable ? "options" : "an option", " for KS4. The document will still display both KS3 and KS4."), "$maxWidth": "spacing-640" }),
        childSubjectsAvailable && (React__default.createElement(OakRadioGroup, { label: "Choose subject for KS4 units", name: "childSubjectRadio", onChange: handleChildSubjectSelection, "$flexDirection": "column", "$gap": "spacing-16", defaultValue: childSubjectSelected || "combined-science", "data-testid": "child-subject-selector" }, childSubjects.map(function (_a) {
            var subject = _a.subject, subjectSlug = _a.subjectSlug;
            return (React__default.createElement(OakRadioButton, { id: subjectSlug, label: subject, value: subjectSlug, "data-testid": "child-subject-radio-button", key: subjectSlug }));
        }))),
        tiersAvailable && (React__default.createElement(OakRadioGroup, { "data-testid": "tier-selector", label: "Choose learning tier for KS4 units", name: "tierRadio", onChange: handleTierSelection, "$flexDirection": "column", "$gap": "spacing-16", defaultValue: tierSelected }, tiers.map(function (_a) {
            var tier = _a.tier, tierSlug = _a.tierSlug;
            return (React__default.createElement(OakRadioButton, { id: tierSlug, label: tier, value: tierSlug, "data-testid": "tier-radio-button", key: tierSlug }));
        }))),
        React__default.createElement(OakPrimaryButton, { iconName: "arrow-right", isTrailingIcon: true, onClick: handleNextClick }, "Next")));
};
/**
 *
 * The component is used in the Curriculum Downloads journey for KS4 Maths and Science, where a tier
 * must be selected before download (Maths) as well as a child subject (Science).
 *
 * ### Callbacks
 * `getTierSubjectValues(tier, childSubject)`: a callback function to retrieve the selected values
 * once the Next button is pressed to continue on the Downloads journey.
 *
 */
var OakDownloadsJourneyChildSubjectTierSelector = styled(UnstyledComponent)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), OakDownloadsJourneyChildSubjectTierSelectorCss);
var templateObject_1, templateObject_2;

export { OakDownloadsJourneyChildSubjectTierSelector };
