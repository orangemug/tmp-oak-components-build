import pxToRem from './pxToRem.js';
import { oakBorderRadiusTokens } from '../theme/borders.js';

var parseBorderRadius = function (value) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (value in oakBorderRadiusTokens) {
        return "".concat(pxToRem(oakBorderRadiusTokens[value]), "rem");
    }
};

export { parseBorderRadius };
