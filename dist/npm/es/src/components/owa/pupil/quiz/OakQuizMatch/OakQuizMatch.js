import { __read, __assign } from '../../../../../../node_modules/.pnpm/@rollup_plugin-typescript@12.3.0_rollup@4.60.1_tslib@2.8.1_typescript@5.9.3/node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect } from 'react';
import { useSensors, useSensor, closestCenter, DragOverlay, KeyboardSensor, TouchSensor, MouseSensor, useDroppable, useDraggable } from '../../../../../../node_modules/.pnpm/@dnd-kit_core@6.3.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@dnd-kit/core/dist/core.esm.js';
import { sortableKeyboardCoordinates } from '../../../../../../node_modules/.pnpm/@dnd-kit_sortable@10.0.0_@dnd-kit_core@6.3.1_react-dom@18.2.0_react@18.2.0__react@18.2.0__react@18.2.0/node_modules/@dnd-kit/sortable/dist/sortable.esm.js';
import { InternalDroppableHoldingPen } from '../InternalDroppableHoldingPen/InternalDroppableHoldingPen.js';
import { OakFlex } from '../../../../layout-and-structure/OakFlex/OakFlex.js';
import { OakDragAndDropInstructions } from '../../../OakDragAndDropInstructions/OakDragAndDropInstructions.js';
import { OakDraggable } from '../../../OakDraggable/OakDraggable.js';
import { OakDroppable } from '../../../OakDroppable/OakDroppable.js';
import { usePrefersReducedMotion } from '../../../../../animation/usePrefersReducedMotion.js';
import { InternalDndContext } from '../../../../internal-components/InternalDndContext/InternalDndContext.js';
import { InternalClientPortal } from '../../../../internal-components/InternalClientPortal/InternalClientPortal.js';

var OakQuizMatchItemId = function (id) {
    return "oak-quiz-match-item-".concat(id);
};
var ConnectedDraggable = function (_a) {
    var id = _a.id, label = _a.label, announcement = _a.announcement, isOver = _a.isOver;
    var _b = useDraggable({
        id: id,
        data: { id: id, label: label, announcement: announcement },
    }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, isDragging = _b.isDragging;
    return (React__default.createElement(OakDraggable, __assign({ ref: setNodeRef, isDisabled: isOver, color: "text-inverted", background: "bg-btn-primary", iconColor: "icon-inverted" }, attributes, listeners, { role: "option", "aria-describedby": undefined, "aria-roledescription": "draggable item", "aria-pressed": undefined, "aria-selected": !!attributes["aria-pressed"], style: { opacity: isDragging ? 0 : 1 }, id: OakQuizMatchItemId(id) }), label));
};
var ConnectedDroppableHoldingPen = function (_a) {
    var children = _a.children;
    var _b = useDroppable({
        id: "holding-pen",
        data: { label: "holding pen", announcement: "holding pen" },
    }), setNodeRef = _b.setNodeRef, isOver = _b.isOver;
    return (React__default.createElement(InternalDroppableHoldingPen, { ref: setNodeRef, isOver: isOver, "aria-label": "Available items", "data-testid": "holding-pen", role: "listbox" }, children));
};
var ConnectedDroppable = function (_a) {
    var id = _a.id, label = _a.label, announcement = _a.announcement, match = _a.match, isHighlighted = _a.isHighlighted;
    var _b = useDroppable({
        id: id,
        data: { id: id, label: label, announcement: announcement },
    }), setNodeRef = _b.setNodeRef, isOver = _b.isOver, active = _b.active;
    return (React__default.createElement(OakDroppable, { isOver: isOver, isDisabled: !active, ref: setNodeRef, id: "droppable-".concat(id), labelSlot: label, "data-testid": "slot", isHighlighted: isHighlighted }, match && React__default.createElement(ConnectedDraggable, __assign({}, match, { isOver: isOver }))));
};
/**
 * A list of draggable items with matching slots to drop them into.
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
var OakQuizMatch = function (_a) {
    var initialOptions = _a.initialOptions, initialSlots = _a.initialSlots, isHighlighted = _a.isHighlighted, onChange = _a.onChange;
    var _b = __read(useState({}), 2), matches = _b[0], setMatches = _b[1];
    var _c = __read(useState(initialOptions), 2), shuffledDraggables = _c[0], setShuffledDraggables = _c[1];
    var _d = __read(useState(null), 2), activeId = _d[0], setActiveId = _d[1];
    var activeDraggable = initialOptions.find(function (item) { return item.id === activeId; });
    var prefersReducedMotion = usePrefersReducedMotion();
    var sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
        scrollBehavior: prefersReducedMotion ? "instant" : "smooth",
    }));
    useEffect(function () {
        var matchedDraggableIds = Object.values(matches).map(function (item) { return item.id; });
        var unmatchedDraggables = initialOptions.filter(function (draggable) { return !matchedDraggableIds.includes(draggable.id); });
        setShuffledDraggables(unmatchedDraggables.sort(function () { return Math.random() - 0.5; }));
    }, [initialOptions, matches]);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OakDragAndDropInstructions, { "$mb": "spacing-32" }),
        React__default.createElement(InternalDndContext, { sensors: sensors, collisionDetection: closestCenter, onDragEnd: handleDragEnd, onDragStart: handleDragStart, accessibility: { announcements: announcements } },
            React__default.createElement(ConnectedDroppableHoldingPen, null, shuffledDraggables.map(function (item) { return (React__default.createElement(ConnectedDraggable, __assign({ key: item.id }, item))); })),
            React__default.createElement(OakFlex, { "$gap": "spacing-16", "$flexDirection": "column", "aria-label": "Matched items", role: "listbox" }, initialSlots.map(function (droppable) { return (React__default.createElement(ConnectedDroppable, __assign({ key: droppable.id }, droppable, { isHighlighted: isHighlighted, match: matches[droppable.id] }))); })),
            React__default.createElement(InternalClientPortal, { show: true },
                React__default.createElement(DragOverlay, { dropAnimation: prefersReducedMotion ? null : undefined }, activeDraggable && (React__default.createElement(OakDraggable, { isDragging: true }, activeDraggable.label)))))));
    function handleDragStart(event) {
        var active = event.active;
        setActiveId(active.id.toString());
    }
    function handleDragEnd(event) {
        var active = event.active, over = event.over;
        if (over) {
            setMatches(function (matches) {
                // Remove the draggable from its current slot
                var entries = Object.entries(matches).filter(function (_a) {
                    var _b = __read(_a, 2), draggable = _b[1];
                    return (draggable === null || draggable === void 0 ? void 0 : draggable.id) !== active.id;
                });
                var newMatches = Object.fromEntries(entries);
                if (over.id !== "holding-pen") {
                    // We've dropped the draggable into a slot so add it to the new slot
                    newMatches[over.id] = active.data.current;
                }
                onChange === null || onChange === void 0 ? void 0 : onChange(newMatches);
                return newMatches;
            });
        }
        setActiveId(null);
    }
};
var announcements = {
    onDragStart: function () {
        return undefined;
    },
    onDragOver: function (_a) {
        var _b;
        var active = _a.active, over = _a.over;
        if ((over === null || over === void 0 ? void 0 : over.data.current) && ((_b = active.data) === null || _b === void 0 ? void 0 : _b.current)) {
            return "Item ".concat(active.data.current.announcement, " is over ").concat(over.data.current.announcement);
        }
    },
    onDragEnd: function (_a) {
        var _b;
        var active = _a.active, over = _a.over;
        if ((over === null || over === void 0 ? void 0 : over.data.current) && ((_b = active.data) === null || _b === void 0 ? void 0 : _b.current)) {
            return "Item ".concat(active.data.current.announcement, " was dropped onto ").concat(over.data.current.announcement);
        }
    },
    onDragCancel: function (_a) {
        var _b;
        var active = _a.active;
        if ((_b = active.data) === null || _b === void 0 ? void 0 : _b.current) {
            return "Dragging was cancelled. Item ".concat(active.data.current.announcement, " was dropped.");
        }
    },
};

export { OakQuizMatch, OakQuizMatchItemId, announcements };
