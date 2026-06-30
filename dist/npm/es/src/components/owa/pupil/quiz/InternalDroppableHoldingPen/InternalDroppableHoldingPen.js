import { __makeTemplateObject, __rest, __read, __values, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { forwardRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakBox } from '../../../../layout-and-structure/OakBox/OakBox.js';
import { parseColor } from '../../../../../styles/helpers/parseColor.js';

var StyledOakBox = styled(OakBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  background-color: color-mix(\n    in lch,\n    ", " 5%,\n    transparent\n  );\n\n  &[data-over=\"true\"] {\n    background-color: ", ";\n    background-color: color-mix(\n      in lch,\n      ", " 60%,\n      transparent\n    );\n  }\n"], ["\n  background-color: ", ";\n  background-color: color-mix(\n    in lch,\n    ", " 5%,\n    transparent\n  );\n\n  &[data-over=\"true\"] {\n    background-color: ", ";\n    background-color: color-mix(\n      in lch,\n      ", " 60%,\n      transparent\n    );\n  }\n"])), parseColor("bg-neutral"), parseColor("bg-inverted"), parseColor("bg-primary"), parseColor("bg-primary"));
/**
 * An internal holding pen for multiple draggable items
 *
 * Has no intrinsic drop functionally.
 * It is intended to be used with `useDroppable` from `@dnd-kit/core`
 */
var InternalDroppableHoldingPen = forwardRef(function (_a, ref) {
    var isOver = _a.isOver, children = _a.children, props = __rest(_a, ["isOver", "children"]);
    var _b = __read(useState(null), 2), domContent = _b[0], setContentBox = _b[1];
    var _c = __read(useState(0), 2), minHeight = _c[0], setMinHeight = _c[1];
    useLayoutEffect(function () {
        if (!domContent) {
            return;
        }
        // Prevents the holding area from shrinking when an item is removed
        // avoiding layout shift
        var observer = new ResizeObserver(function (entries) {
            var e_1, _a;
            var _loop_1 = function (entry) {
                setMinHeight(function (currentHeight) { var _a, _b; return Math.max((_b = (_a = entry.borderBoxSize[0]) === null || _a === void 0 ? void 0 : _a.blockSize) !== null && _b !== void 0 ? _b : 0, currentHeight); });
            };
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    _loop_1(entry);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        observer.observe(domContent);
        // Reset min height when the window is resized so that the holding pen can shrink
        function resetMinHeight() {
            setMinHeight(0);
        }
        window.addEventListener("resize", resetMinHeight);
        return function () {
            observer.disconnect();
            window.removeEventListener("resize", resetMinHeight);
        };
    }, [domContent]);
    return (React__default.createElement(StyledOakBox, __assign({ ref: ref, "$mb": "spacing-32", "$borderRadius": "border-radius-l", "data-over": isOver, style: { minHeight: minHeight === 0 ? "auto" : minHeight } }, props),
        React__default.createElement(OakFlex, { "$alignItems": "flex-start", "$minHeight": "spacing-80", "$pa": "spacing-12", "$gap": "spacing-12", "$flexWrap": "wrap", ref: setContentBox }, children)));
});
var templateObject_1;

export { InternalDroppableHoldingPen };
