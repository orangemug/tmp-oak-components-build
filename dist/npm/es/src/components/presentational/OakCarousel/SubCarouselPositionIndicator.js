import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var PositionIcon = function (_a) {
    var isActive = _a.isActive, numItems = _a.numItems, index = _a.index;
    var fill = isActive ? "#222222" : "#FFFFFF";
    var ariaLabel = "Position indicator: ".concat(index + 1, " of ").concat(numItems, ": ").concat(isActive ? "Selected item" : "Not selected");
    return (React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", role: "img", "aria-label": ariaLabel },
        React__default.createElement("circle", { cx: "8", cy: "8.67798", r: "7", fill: fill, stroke: "#222222", strokeWidth: "2" })));
};
var SubCarouselPositionIndicator = function (_a) {
    var numberOfItems = _a.numberOfItems, activeIndex = _a.activeIndex;
    var positionIndicators = Array.from({ length: numberOfItems }, function (_, i) { return (React__default.createElement(PositionIcon, { key: i, isActive: activeIndex === i, index: i, numItems: numberOfItems })); });
    return (React__default.createElement(OakFlex, { "$gap": "spacing-24", "$alignItems": "end" }, positionIndicators));
};

export { SubCarouselPositionIndicator };
