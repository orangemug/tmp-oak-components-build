/**
 * Installs a mock of ResizeObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
function installMockResizeObserver() {
    var _a;
    globalThis.ResizeObserver =
        (_a = globalThis.ResizeObserver) !== null && _a !== void 0 ? _a : /** @class */ (function () {
            function MockResizeObserver() {
            }
            MockResizeObserver.prototype.disconnect = function () {
                // Mock implementation of disconnect
            };
            MockResizeObserver.prototype.observe = function () {
                // Mock implementation of observe
            };
            MockResizeObserver.prototype.unobserve = function () {
                // Mock implementation of unobserve
            };
            return MockResizeObserver;
        }());
}

export { installMockResizeObserver };
