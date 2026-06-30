import { __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { OakSmallSecondaryButton } from '../../buttons/OakSmallSecondaryButton/OakSmallSecondaryButton.js';
import { OakBox } from '../../layout-and-structure/OakBox/OakBox.js';

/**
 * Display copy link button
 */
var OakCopyLinkButton = function (_a) {
    var href = _a.href;
    var copyLinkMessage = "Copy link";
    var linkCopiedMessage = "Link copied";
    var _b = __read(useState(copyLinkMessage), 2), label = _b[0], setLabel = _b[1];
    var _c = __read(useState(true), 2), active = _c[0], setActive = _c[1];
    var _d = __read(useState(""), 2), announce = _d[0], setAnnounce = _d[1];
    var copyLink = function () {
        if (navigator.clipboard) {
            var urlToCopy = href || window.location.href;
            navigator.clipboard.writeText(urlToCopy);
            setLabel(linkCopiedMessage);
            setAnnounce(linkCopiedMessage);
            setActive(false);
            var resetCopyLinkButtonTimer = 4000;
            setTimeout(function () {
                setAnnounce(""); // used for aria-live announcement
                setActive(true);
                setLabel(copyLinkMessage);
            }, resetCopyLinkButtonTimer);
        }
        else {
            alert("Please update your browser to support this feature");
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakBox, { "$display": ["none", "block"] },
            React__default.createElement(OakSmallSecondaryButton, { iconName: active ? "copy" : "tick", iconAriaHidden: true, isTrailingIcon: true, onClick: copyLink, "data-testid": "copy-link-desktop-button" }, label)),
        React__default.createElement(OakBox, { "$display": ["block", "none"] },
            React__default.createElement(OakSmallSecondaryButton, { onClick: copyLink }, label)),
        announce && (React__default.createElement("div", { "aria-relevant": "all", "aria-live": "polite", style: { position: "absolute", left: "-9999px" }, "data-testid": "announce" }, announce))));
};

export { OakCopyLinkButton };
