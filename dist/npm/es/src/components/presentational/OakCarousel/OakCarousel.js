import { __makeTemplateObject, __read } from '../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import styled from 'styled-components';
import { SubCarouselPositionIndicator } from './SubCarouselPositionIndicator.js';
import { SubCarouselPositionControl } from './SubCarouselPositionControl.js';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';

var SlideContainer = styled(OakFlex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  transform: translateX(", "%);\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n"], ["\n  width: 100%;\n  transform: translateX(", "%);\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n"])), function (props) { return -props.activeIndex * 100; });
var OakCarousel = function (_a) {
    var content = _a.content, isLooping = _a.isLooping, backLabel = _a.backLabel, fwdLabel = _a.fwdLabel, containerLabel = _a.containerLabel;
    var _b = __read(useState(0), 2), activeIndex = _b[0], setActiveIndex = _b[1];
    var handleFwd = function () {
        if (isLooping) {
            setActiveIndex((activeIndex + 1) % content.length);
        }
        else if (activeIndex < content.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };
    var handleBack = function () {
        if (isLooping) {
            setActiveIndex((activeIndex - 1 + content.length) % content.length);
        }
        else if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };
    return (React__default.createElement(OakFlex, { "$pt": "spacing-56", "$pb": "spacing-32", "$ph": "spacing-32", "$background": "bg-decorative1-very-subdued", "$borderRadius": "border-radius-l", "$flexDirection": "column", "$gap": "spacing-56", role: "region", "aria-label": containerLabel, "$height": "100%", "$justifyContent": "space-between" },
        React__default.createElement(OakFlex, { "$overflow": "hidden" },
            React__default.createElement(SlideContainer, { activeIndex: activeIndex, "$transition": "standard-ease" }, content.map(function (item, index) {
                return (React__default.createElement(OakFlex, { key: index, "aria-live": index === activeIndex ? "polite" : "off", "$width": "100%", "$flexShrink": 0, "$overflow": "visible" }, item));
            }))),
        React__default.createElement(OakFlex, { "$justifyContent": "space-between" },
            React__default.createElement(SubCarouselPositionIndicator, { activeIndex: activeIndex, numberOfItems: content.length }),
            React__default.createElement(SubCarouselPositionControl, { onFwd: handleFwd, onBack: handleBack, disableFwd: !isLooping && activeIndex === content.length - 1, disableBack: !isLooping && activeIndex === 0, backLabel: backLabel, fwdLabel: fwdLabel }))));
};
var templateObject_1;

export { OakCarousel };
