import { __read, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { useSensors, useSensor, KeyboardSensor, closestCenter, TouchSensor, MouseSensor } from '../../../../../../node_modules/.pnpm/@dnd-kit_core@6.3.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@dnd-kit/core/dist/core.esm.js';
import { SortableContext, verticalListSortingStrategy, arrayMove, sortableKeyboardCoordinates, useSortable } from '../../../../../../node_modules/.pnpm/@dnd-kit_sortable@10.0.0_@dnd-kit_core@6.3.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__react@18.2.0/node_modules/@dnd-kit/sortable/dist/sortable.esm.js';
import { CSS } from '../../../../../../node_modules/.pnpm/@dnd-kit_utilities@3.2.2_react@18.2.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakDragAndDropInstructions } from '../../../OakDragAndDropInstructions/OakDragAndDropInstructions.js';
import { OakDraggable } from '../../../OakDraggable/OakDraggable.js';
import { OakDroppable } from '../../../OakDroppable/OakDroppable.js';
import { InternalDndContext } from '../../../../internal-components/InternalDndContext/InternalDndContext.js';
import { usePrefersReducedMotion } from '../../../../../animation/usePrefersReducedMotion.js';
import { OakCodeRenderer } from '../../../OakCodeRenderer/OakCodeRenderer.js';

var OakQuizOrderitemId = function (id) {
    return "oak-quiz-order-item-".concat(id);
};
var ConnectedDraggable = function (_a) {
    var id = _a.id, label = _a.label, isHighlighted = _a.isHighlighted;
    var _b = useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition, isOver = _b.isOver, isDragging = _b.isDragging;
    var style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
    };
    return (React__default.createElement(OakDroppable, { isOver: isOver, isHighlighted: isHighlighted },
        React__default.createElement(OakDraggable, __assign({ ref: setNodeRef, style: style }, attributes, listeners, { "aria-describedby": undefined, "aria-roledescription": "sortable item", "aria-pressed": undefined, "aria-selected": !!attributes["aria-pressed"], role: "option", id: OakQuizOrderitemId(id), isDragging: isDragging }),
            React__default.createElement(OakCodeRenderer, { string: label }))));
};
/**
 * A sortable list of items with drag and drop functionality. Items can be dragged over named slots to re-arrange them
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
var OakQuizOrder = function (_a) {
    var initialItems = _a.initialItems, announcements = _a.announcements, onChange = _a.onChange, isHighlighted = _a.isHighlighted;
    var _b = __read(useState(initialItems), 2), items = _b[0], setItems = _b[1];
    var sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
        scrollBehavior: usePrefersReducedMotion() ? "instant" : "smooth",
    }));
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakDragAndDropInstructions, { "$mb": "spacing-32" }),
        React__default.createElement(InternalDndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd, accessibility: {
                announcements: createAccouncements(announcements || items),
            } },
            React__default.createElement(SortableContext, { items: items, strategy: verticalListSortingStrategy },
                React__default.createElement(OakFlex, { "$gap": "spacing-16", "$flexDirection": "column", role: "listbox", "aria-label": "Sortable items" }, items.map(function (item) { return (React__default.createElement(ConnectedDraggable, __assign({ key: item.id }, item, { isHighlighted: isHighlighted }))); }))))));
    function handleDragEnd(event) {
        var active = event.active, over = event.over;
        if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
            setItems(function (items) {
                var oldIndex = items.findIndex(function (item) { return item.id === active.id; });
                var newIndex = items.findIndex(function (item) { return item.id === (over === null || over === void 0 ? void 0 : over.id); });
                var newItems = arrayMove(items, oldIndex, newIndex);
                onChange === null || onChange === void 0 ? void 0 : onChange(newItems);
                return newItems;
            });
        }
    }
};
function createAccouncements(items) {
    var getPosition = function (id) {
        return items.findIndex(function (item) { return item.id === id; }) + 1;
    };
    var getItemLabel = function (id) { var _a; return (_a = items.find(function (item) { return item.id === id; })) === null || _a === void 0 ? void 0 : _a.label; };
    return {
        onDragStart: function () {
            return undefined;
        },
        onDragOver: function (_a) {
            var active = _a.active, over = _a.over;
            if (over) {
                return "Sortable item ".concat(getItemLabel(active.id), " is in position ").concat(getPosition(over.id), " of ").concat(items.length);
            }
        },
        onDragEnd: function (_a) {
            var active = _a.active, over = _a.over;
            if (over) {
                return "Sortable item ".concat(getItemLabel(active.id), " was dropped into position ").concat(getPosition(over.id), " of ").concat(items.length);
            }
        },
        onDragCancel: function (_a) {
            var active = _a.active;
            return "Dragging was cancelled. Sortable item ".concat(getItemLabel(active.id), " was dropped.");
        },
    };
}

export { OakQuizOrder, OakQuizOrderitemId };
