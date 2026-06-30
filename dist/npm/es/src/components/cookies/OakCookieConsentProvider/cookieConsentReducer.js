import { __assign } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';

function cookieConsentReducer(currentState, action) {
    switch (action.type) {
        case "confirmModalConsents":
        case "acceptModalConsents":
        case "rejectModalConsents":
            return __assign(__assign({}, currentState), { isSettingsModalOpen: false, bannerState: "hidden" });
        case "acceptBannerConsents":
            return __assign(__assign({}, currentState), { bannerState: "accepted" });
        case "rejectBannerConsents":
            return __assign(__assign({}, currentState), { bannerState: "rejected" });
        case "openModal":
            return __assign(__assign({}, currentState), { isSettingsModalOpen: true });
        case "closeModal":
            return __assign(__assign({}, currentState), { isSettingsModalOpen: false });
        case "showBanner":
            return __assign(__assign({}, currentState), { bannerState: "initial" });
        case "hideBanner":
            return __assign(__assign({}, currentState), { bannerState: "hidden" });
        default:
            return currentState;
    }
}
function getInitialState() {
    return {
        isSettingsModalOpen: false,
        bannerState: "hidden",
    };
}

export { cookieConsentReducer, getInitialState };
