import pxToRem from './pxToRem.js';
import { oakAllSpacingTokens, oakSpaceBetweenTokens } from '../theme/spacing.js';

/**
 * - takes any of OakInnerPadding, OakSpaceBetween, OakAllSpacing, and other accepted values,
 * - derives and returns the corresponding css value
 * - converting to rem where necessary
 */
function parseSpacing(value) {
    // if value is null or undefined, return undefined
    if (value === undefined || value === null) {
        return undefined;
    }
    // mapped values
    if (value in oakAllSpacingTokens) {
        return "".concat(pxToRem(oakAllSpacingTokens[value]), "rem"); // NB. type assertion is necessary because the OakAllSpacing type is dervied from oakAllSpacingPx
    }
    if (value in oakAllSpacingTokens) {
        return "".concat(pxToRem(oakAllSpacingTokens[value]), "rem");
    }
    if (value in oakSpaceBetweenTokens) {
        var v = oakSpaceBetweenTokens[value];
        return "".concat(pxToRem(oakAllSpacingTokens[v]), "rem");
    }
    // value is a number, percentage or css value
    return value;
}

export { parseSpacing };
