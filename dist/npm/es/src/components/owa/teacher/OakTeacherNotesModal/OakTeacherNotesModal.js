import { __rest, __assign } from '../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { OakInlineBanner } from '../../../messaging-and-feedback/OakInlineBanner/OakInlineBanner.js';
import { OakLink } from '../../../navigation/OakLink/OakLink.js';
import { OakModalCenter } from '../../../messaging-and-feedback/OakModalCenter/OakModalCenter.js';
import { OakFlex } from '../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakHeading } from '../../../typography/OakHeading/OakHeading.js';
import { OakIcon } from '../../../images-and-icons/OakIcon/OakIcon.js';
import { OakSmallPrimaryButton } from '../../../buttons/OakSmallPrimaryButton/OakSmallPrimaryButton.js';
import { OakGrid } from '../../../layout-and-structure/OakGrid/OakGrid.js';
import { OakGridArea } from '../../../layout-and-structure/OakGridArea/OakGridArea.js';
import { OakP } from '../../../typography/OakP/OakP.js';
import { OakSmallSecondaryToggleButton } from '../../../buttons/OakSmallSecondaryToggleButton/OakSmallSecondaryToggleButton.js';

var EditorContainer = function (_a) {
    var editorNode = _a.editorNode, remainingCharacters = _a.remainingCharacters, isBold = _a.isBold, isBulletList = _a.isBulletList, onBoldClick = _a.onBoldClick, onBulletListClick = _a.onBulletListClick;
    return (React__default.createElement(OakFlex, { "$pa": "spacing-12", "$background": "bg-neutral", "$flexDirection": "column", "$alignItems": "flex-start", "$borderRadius": "border-radius-m2", "$alignSelf": "stretch", "$gap": "spacing-12" },
        React__default.createElement(OakFlex, { "$pa": "spacing-12", "$background": "bg-primary", "$height": "spacing-240", "$minHeight": "spacing-72", "$borderRadius": "border-radius-s", "$borderColor": "border-primary", "$ba": "border-solid-m", "$alignSelf": "stretch", "$overflowY": "scroll" }, editorNode),
        React__default.createElement(OakGrid, null,
            React__default.createElement(OakGridArea, { "$colSpan": [5, 6] },
                React__default.createElement(OakP, { "$font": "body-3" },
                    "You have ",
                    React__default.createElement("b", null, remainingCharacters),
                    " characters remaining")),
            React__default.createElement(OakGridArea, { "$colSpan": [7, 6] },
                React__default.createElement(OakFlex, { "$gap": "spacing-8", "$justifyContent": "flex-end" },
                    React__default.createElement(OakSmallSecondaryToggleButton, { onClick: onBoldClick, toggleOn: isBold }, "Bold"),
                    React__default.createElement(OakSmallSecondaryToggleButton, { onClick: onBulletListClick, toggleOn: isBulletList }, "Bullet List"))))));
};
var OakTeacherNotesModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onShareClicked = _a.onShareClicked, progressSaved = _a.progressSaved, noteShared = _a.noteShared, error = _a.error; _a.termsAndConditionsHref; var shareLinkDisabled = _a.shareLinkDisabled, footer = _a.footer, rest = __rest(_a, ["isOpen", "onClose", "onShareClicked", "progressSaved", "noteShared", "error", "termsAndConditionsHref", "shareLinkDisabled", "footer"]);
    var message = undefined;
    if (error) {
        message = "An error occurred";
    }
    else if (progressSaved) {
        message = "Progress saved";
    }
    else if (noteShared) {
        message = "Link copied to clipboard";
    }
    var messageColor = error ? "text-error" : "text-success";
    var messageIcon = error ? "error" : "tick";
    var messageRender = message && (React__default.createElement(OakFlex, { "$gap": "spacing-4", "$alignItems": "center" },
        React__default.createElement(OakIcon, { iconName: messageIcon, "$colorFilter": messageColor, "$width": "spacing-20", "$height": "spacing-20" }),
        React__default.createElement(OakHeading, { tag: "h2", "$font": "body-3-bold", "$color": messageColor }, message)));
    return (React__default.createElement(OakModalCenter, { isOpen: isOpen, onClose: onClose, modalInnerFlexProps: {
            $ph: ["spacing-16", "spacing-32"],
        }, modalFlexProps: {
            "aria-label": "teacher notes dialog",
            "aria-describedby": "use this dialog enter and to store teacher notes about a lesson",
        } },
        React__default.createElement(OakFlex, { "$flexDirection": "column", "$alignItems": "center", "$pb": "spacing-24", "$gap": "spacing-24" },
            React__default.createElement(OakHeading, { tag: "h1", "$font": "body-3-bold" }, "Add a teacher note to the page and share the link with your colleague."),
            React__default.createElement(EditorContainer, __assign({}, rest)),
            React__default.createElement(OakGrid, null,
                React__default.createElement(OakGridArea, { "$colSpan": [0, 6], "$display": ["none", "block"] }, messageRender),
                React__default.createElement(OakGridArea, { "$colSpan": 12 },
                    React__default.createElement(OakFlex, { "$gap": "spacing-16", "$width": "100%", "$justifyContent": ["center", "flex-end"], "$alignItems": "center", "$flexDirection": ["column", "row"] },
                        footer && (React__default.createElement(OakFlex, { "$flexGrow": 1, "$alignSelf": "flex-start" }, footer)),
                        React__default.createElement(OakSmallPrimaryButton, { onClick: onShareClicked, iconName: "copy", isTrailingIcon: true, disabled: shareLinkDisabled }, "Share link")))),
            React__default.createElement(OakFlex, { "$alignSelf": "stretch", "$justifyContent": "center", "$display": ["flex", "none"] }, messageRender),
            React__default.createElement(OakInlineBanner, { isOpen: true, type: "alert", message: React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(OakP, { "$font": "heading-light-7" }, "Please do not include any personal or sensitive information that could be used to identify, locate, or contact an individual, either directly or indirectly."),
                    React__default.createElement(OakP, { "$font": "body-2", "$mt": "spacing-4" },
                        "Names, email addresses, or other personal information will be redacted from your note to help keep everyone safe. For more guidance, see our",
                        " ",
                        React__default.createElement(OakLink, { target: "_blank", href: "https://www.thenational.academy/legal/terms-and-conditions", "aria-label": "Oak's terms and conditions(opens in a new tab)" }, "Terms & conditions"),
                        ".")) }))));
};

export { OakTeacherNotesModal };
