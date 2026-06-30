import React__default from 'react';
import { OakFlex } from '../../layout-and-structure/OakFlex/OakFlex.js';
import { OakTertiaryInvertedButton } from '../../buttons/OakTertiaryInvertedButton/OakTertiaryInvertedButton.js';

var SubCarouselPositionControl = function (_a) {
    var onBack = _a.onBack, onFwd = _a.onFwd, disableBack = _a.disableBack, disableFwd = _a.disableFwd, backLabel = _a.backLabel, fwdLabel = _a.fwdLabel;
    return (React__default.createElement(OakFlex, { "$gap": "spacing-24" },
        React__default.createElement(OakTertiaryInvertedButton, { onClick: onBack, iconName: "chevron-left", disabled: disableBack, "aria-label": backLabel }),
        React__default.createElement(OakTertiaryInvertedButton, { onClick: onFwd, iconName: "chevron-right", disabled: disableFwd, "aria-label": fwdLabel })));
};

export { SubCarouselPositionControl };
