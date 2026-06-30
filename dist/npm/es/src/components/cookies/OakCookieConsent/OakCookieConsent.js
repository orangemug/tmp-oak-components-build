import React__default from 'react';
import { OakCookieSettingsModal } from '../OakCookieSettingsModal/OakCookieSettingsModal.js';
import { useInternalCookieConsent } from '../OakCookieConsentProvider/OakCookieConsentProvider.js';
import { OakCookieBanner } from '../OakCookieBanner/OakCookieBanner.js';

/**
 * Connects `OakCookieBanner` and `OakCookieSettingsModal` to `OakCookieConsentProvider`.
 */
var OakCookieConsent = function (_a) {
    var policyURL = _a.policyURL, isFixed = _a.isFixed, innerMaxWidth = _a.innerMaxWidth, zIndex = _a.zIndex;
    var _b = useInternalCookieConsent(), policyConsents = _b.policyConsents, acceptModalConsents = _b.acceptModalConsents, rejectModalConsents = _b.rejectModalConsents, confirmModalConsents = _b.confirmModalConsents, hideBanner = _b.hideBanner, openSettings = _b.openSettings, closeSettings = _b.closeSettings, isSettingsModalOpen = _b.isSettingsModalOpen, acceptBannerConsents = _b.acceptBannerConsents, rejectBannerConsents = _b.rejectBannerConsents, bannerState = _b.bannerState;
    return (React__default.createElement(React__default.Fragment, null,
        bannerState !== "hidden" && (React__default.createElement(OakCookieBanner, { onHide: hideBanner, onAccept: acceptBannerConsents, onReject: rejectBannerConsents, onOpenSettings: openSettings, state: bannerState, isFixed: isFixed, innerMaxWidth: innerMaxWidth, zIndex: zIndex })),
        React__default.createElement(OakCookieSettingsModal, { policyURL: policyURL, policyConsents: policyConsents, isOpen: isSettingsModalOpen, onClose: closeSettings, onReject: rejectModalConsents, onConfirm: confirmModalConsents, onAccept: acceptModalConsents, zIndex: zIndex })));
};

export { OakCookieConsent };
