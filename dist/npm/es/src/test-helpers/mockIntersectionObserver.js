/**
 * Installs a mock of IntersectionObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
function installMockIntersectionObserver() {
    var _a;
    globalThis.IntersectionObserver =
        (_a = globalThis.IntersectionObserver) !== null && _a !== void 0 ? _a : /** @class */ (function () {
            function MockIntersectionObserver() {
                this.elements = new Set();
            }
            Object.defineProperty(MockIntersectionObserver.prototype, "root", {
                get: function () {
                    throw new Error("Attribute not implemented.");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MockIntersectionObserver.prototype, "rootMargin", {
                get: function () {
                    throw new Error("Attribute not implemented.");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MockIntersectionObserver.prototype, "thresholds", {
                get: function () {
                    throw new Error("Attribute not implemented.");
                },
                enumerable: false,
                configurable: true
            });
            MockIntersectionObserver.prototype.takeRecords = function () {
                throw new Error("Method not implemented.");
            };
            MockIntersectionObserver.prototype.observe = function (element) {
                this.elements.add(element);
            };
            MockIntersectionObserver.prototype.unobserve = function (element) {
                this.elements.delete(element);
            };
            MockIntersectionObserver.prototype.disconnect = function () {
                this.elements.clear();
            };
            return MockIntersectionObserver;
        }());
}

export { installMockIntersectionObserver };
