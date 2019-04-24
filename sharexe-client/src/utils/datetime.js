export const getDateTimeToNow = (datetime) => {
    if (!datetime) return "";

    const then = new Date(datetime).getTime();
    const now = new Date().getTime();

    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;

    const timeDiff = now - then;

    if (timeDiff < MINUTE) {
        return "Just now";
    } else if (timeDiff < 2 * MINUTE) {
        return "1 minute ago";
    } else if (timeDiff < HOUR) {
        return `${parseInt(timeDiff / MINUTE)} minutes ago`;
    } else if (timeDiff < 2 * HOUR) {
        return `1 hour ago`;
    } else if (timeDiff < DAY) {
        return `${parseInt(timeDiff / HOUR)} hours ago`;
    } else if (timeDiff < 2 * DAY) {
        return `1 day ago`;
    } else if (timeDiff < 7 * DAY) {
        return `${parseInt(timeDiff / DAY)} days ago`;
    } else {
        return new Date(datetime);
    }
}