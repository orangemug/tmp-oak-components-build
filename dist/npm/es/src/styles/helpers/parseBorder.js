import { oakBorderWidthTokens } from '../theme/borders.js';
import pxToRem from './pxToRem.js';

var parseBorder = function (value) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (value in oakBorderWidthTokens) {
        return "".concat(pxToRem(oakBorderWidthTokens[value]), "rem solid");
    }
};

export { parseBorder };
