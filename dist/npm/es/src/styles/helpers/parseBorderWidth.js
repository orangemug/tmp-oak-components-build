import pxToRem from './pxToRem.js';
import '../theme/color.js';
import { oakBorderWidthTokens } from '../theme/borders.js';
import '../theme/typography.js';

function parseBorderWidth(value) {
    if (!value) {
        return undefined;
    }
    if (value in oakBorderWidthTokens) {
        return "".concat(pxToRem(oakBorderWidthTokens[value]), "rem");
    }
}

export { parseBorderWidth };
