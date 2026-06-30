import React__default from 'react';
import { InternalShadowRectButton } from '../../internal-components/InternalShadowRectButton/InternalShadowRectButton.js';

/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callback is available for tracking focus events:
 *
 * ### onImageScaleCallback
 * `onImageScaleCallback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *ą
 */
var OakScaleImageButton = function (_a) {
    var onImageScaleCallback = _a.onImageScaleCallback, isExpanded = _a.isExpanded;
    return (React__default.createElement(InternalShadowRectButton, { type: "button", onClick: onImageScaleCallback, iconName: !isExpanded ? "expand" : "minimise", defaultTextColor: "text-primary", hoverTextColor: "text-primary", disabledTextColor: "text-primary", defaultBackground: "bg-neutral", defaultBorderColor: "bg-neutral", hoverBackground: "bg-neutral-stronger", hoverBorderColor: "bg-neutral-stronger", disabledBackground: "bg-btn-primary-disabled", disabledBorderColor: "bg-btn-primary-disabled", iconGap: "spacing-0", pv: "spacing-0", ph: "spacing-0", "$bblr": "border-radius-square", "$btlr": "border-radius-square", width: "100%", "aria-label": !isExpanded ? "Expand Image" : "Minimise image", "data-testid": "expand-image-button" }));
};

export { OakScaleImageButton };
