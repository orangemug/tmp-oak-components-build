// For help with defining z-index values, refer to this article:
// https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/#a-new-solution
var behind = -1;
var modalDialog = 300;
var banner = behind + modalDialog;
var oakZIndexTokens = {
    behind: behind,
    neutral: 0,
    "in-front": 1,
    "mobile-filters": 2,
    "fixed-header": 100,
    "modal-close-button": 150,
    "modal-dialog": modalDialog,
    banner: banner,
};

export { oakZIndexTokens };
