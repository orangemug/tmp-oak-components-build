import { __makeTemplateObject } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import styled from 'styled-components';
import { OakButtonAsRadioGroup } from '../../../../form-elements/OakButtonAsRadioGroup/OakButtonAsRadioGroup.js';
import { OakSecondaryButtonAsRadio } from '../../../../form-elements/OakSecondaryButtonAsRadio/OakSecondaryButtonAsRadio.js';
import { OakSecondaryButton } from '../../../../buttons/OakSecondaryButton/OakSecondaryButton.js';
import { OakOutlineAccordion } from '../../../OakOutlineAccordion/OakOutlineAccordion.js';
import { OakHeading } from '../../../../typography/OakHeading/OakHeading.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';

var StyledOakSecondaryButton = styled(OakSecondaryButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > button {\n    opacity: 0;\n    position: absolute;\n    &:focus-visible {\n      opacity: 1;\n      position: relative;\n    }\n  }\n"], ["\n  & > button {\n    opacity: 0;\n    position: absolute;\n    &:focus-visible {\n      opacity: 1;\n      position: relative;\n    }\n  }\n"])));
/**
 *
 * OakPupilJourneyUnitsFilter component is a radio group of buttons that can be used to filter pupil journey units
 * add the menu items as an array of objects with text and id properties and provide a selected item id, and a callback function to handle the selection event.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * onSelected: Callback when a menu item is selected, takes the selected item as an argument
 *
 */
var OakPupilJourneyUnitsFilter = function (props) {
    var menuItems = props.menuItems, selected = props.selected, onSelected = props.onSelected, onSkipCallback = props.onSkipCallback;
    var OakRadioGroup = (React__default.createElement(OakButtonAsRadioGroup, { name: "OakPupilJourneyUnitsFilter", ariaLabel: "OakPupilJourneyUnitsFilter", onChange: function (value) {
            var selectedItem = menuItems.find(function (item) { return item.value === value; });
            if (!selectedItem) {
                throw new Error("Selected item not found");
            }
            onSelected(selectedItem);
        }, defaultValue: selected, "$justifyContent": ["start", "start", "end"], "$flexWrap": "wrap" }, menuItems.map(function (item, i) {
        return (React__default.createElement(OakSecondaryButtonAsRadio, { key: item.value + "_" + i, value: item.value }, item.displayText));
    })));
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakFlex, { "$display": ["block", "none"], "$flexGrow": 1 },
            React__default.createElement(OakOutlineAccordion, { id: "mobile-unit-filter-accordion", header: React__default.createElement(OakHeading, { tag: "h2", "$font": "heading-5" }, "Categories"), "$pv": "spacing-24", "$gap": "spacing-24" }, OakRadioGroup)),
        React__default.createElement(OakFlex, { "$display": ["none", "flex"], "$gap": "spacing-24", "$flexDirection": "column", "$alignItems": "end" },
            menuItems.length > 3 && (React__default.createElement(StyledOakSecondaryButton, { onClick: onSkipCallback }, "Skip to results")),
            React__default.createElement(OakFlex, { "$display": "block", "$flexGrow": 1 }, OakRadioGroup))));
};
var templateObject_1;

export { OakPupilJourneyUnitsFilter };
