import { __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useReducer, useCallback, useContext } from 'react';
import { cookieConsentReducer, getInitialState } from './cookieConsentReducer.js';

function getDefaultContextState() {
    return {
        isSettingsModalOpen: false,
        policyConsents: [],
        showBanner: function () { },
        hideBanner: function () { },
        openSettings: function () { },
        closeSettings: function () { },
        rejectModalConsents: function () { },
        confirmModalConsents: function () { },
        acceptModalConsents: function () { },
        rejectBannerConsents: function () { },
        acceptBannerConsents: function () { },
        bannerState: "initial",
    };
}
var OakCookieConsentContext = createContext(getDefaultContextState());
/**
 * Internal hook for consuming the OakCookieConsentContext.
 *
 * This should not be exported from the package.
 */
function useInternalCookieConsent() {
    return useContext(OakCookieConsentContext);
}
/**
 * Enables opening of the cookie settings modal and showing the cookie consent banner.
 */
function useCookieConsent() {
    var _a = useContext(OakCookieConsentContext), showBanner = _a.showBanner, openSettings = _a.openSettings;
    return { showBanner: showBanner, openSettings: openSettings };
}
/**
 * Provides a context through which the cookie consent UI can be configured and controlled
 *
 * Intended to be used with `OakCookieConsent`
 */
var OakCookieConsentProvider = function (_a) {
    var children = _a.children, policyConsents = _a.policyConsents, onConsentChange = _a.onConsentChange;
    var _b = __read(useReducer(cookieConsentReducer, null, getInitialState), 2), cookieConsentState = _b[0], dispatch = _b[1];
    var closeSettings = useCallback(function () { return dispatch({ type: "closeModal" }); }, []);
    var acceptConsents = useCallback(function () {
        onConsentChange(policyConsents.map(function (_a) {
            var policyId = _a.policyId;
            return ({
                policyId: policyId,
                consentState: "granted",
            });
        }));
    }, [onConsentChange, policyConsents]);
    var rejectConsents = useCallback(function () {
        onConsentChange(policyConsents.map(function (_a) {
            var policyId = _a.policyId, isStrictlyNecessary = _a.isStrictlyNecessary;
            return ({
                policyId: policyId,
                consentState: isStrictlyNecessary ? "granted" : "denied",
            });
        }));
    }, [onConsentChange, policyConsents]);
    var hideBanner = useCallback(function () { return dispatch({ type: "hideBanner" }); }, []);
    var showBanner = useCallback(function () { return dispatch({ type: "showBanner" }); }, []);
    var openSettings = useCallback(function () { return dispatch({ type: "openModal" }); }, []);
    var acceptBannerConsents = useCallback(function () {
        acceptConsents();
        dispatch({ type: "acceptBannerConsents" });
    }, [acceptConsents]);
    var rejectBannerConsents = useCallback(function () {
        rejectConsents();
        dispatch({ type: "rejectBannerConsents" });
    }, [rejectConsents]);
    var acceptModalConsents = useCallback(function () {
        acceptConsents();
        dispatch({ type: "acceptModalConsents" });
    }, [acceptConsents, hideBanner]);
    var rejectModalConsents = useCallback(function () {
        rejectConsents();
        dispatch({ type: "rejectModalConsents" });
    }, [rejectConsents, hideBanner]);
    var confirmModalConsents = useCallback(function (consents) {
        onConsentChange(consents);
        dispatch({ type: "confirmModalConsents" });
    }, [onConsentChange, hideBanner]);
    return (React__default.createElement(OakCookieConsentContext.Provider, { value: {
            isSettingsModalOpen: cookieConsentState.isSettingsModalOpen,
            bannerState: cookieConsentState.bannerState,
            policyConsents: policyConsents,
            showBanner: showBanner,
            hideBanner: hideBanner,
            openSettings: openSettings,
            closeSettings: closeSettings,
            confirmModalConsents: confirmModalConsents,
            acceptBannerConsents: acceptBannerConsents,
            rejectBannerConsents: rejectBannerConsents,
            acceptModalConsents: acceptModalConsents,
            rejectModalConsents: rejectModalConsents,
        } }, children));
};

export { OakCookieConsentContext, OakCookieConsentProvider, getDefaultContextState, useCookieConsent, useInternalCookieConsent };
