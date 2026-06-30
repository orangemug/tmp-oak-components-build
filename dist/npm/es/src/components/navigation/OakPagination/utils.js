var generatePageNumbers = function (activePage, totalPages) {
    var pageNumbers = [];
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, function (_, i) { return i; });
    }
    pageNumbers.push(0);
    if (activePage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages - 1);
    }
    else if (activePage >= 4 && activePage < totalPages - 3) {
        pageNumbers.push("...", activePage - 1, activePage, "...", totalPages - 1);
    }
    else {
        pageNumbers.push("...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1);
    }
    return pageNumbers;
};

export { generatePageNumbers };
