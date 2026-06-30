function getTimeText(timestamp) {
    var date = new Date(timestamp);
    if (isNaN(date.getTime())) {
        return "at an unknown time";
    }
    var now = Date.now();
    var diff = now - date.getTime();
    var seconds = Math.floor(diff / 1000);
    if (seconds < 1) {
        return "just now";
    }
    if (seconds < 60) {
        return "".concat(seconds, " secs ago");
    }
    if (seconds < 3600) {
        return "".concat(Math.floor(seconds / 60), " mins ago");
    }
    if (seconds < 86400) {
        return "".concat(Math.floor(seconds / 3600), " hrs ago");
    }
    if (seconds < 604800) {
        return "".concat(Math.floor(seconds / 86400), " days ago");
    }
    if (seconds < 2592000) {
        return "".concat(Math.floor(seconds / 604800), " weeks ago");
    }
    if (seconds < 31536000) {
        return "".concat(Math.floor(seconds / 2592000), " months ago");
    }
    return "".concat(Math.floor(seconds / 31536000), " years ago");
}

export { getTimeText };
