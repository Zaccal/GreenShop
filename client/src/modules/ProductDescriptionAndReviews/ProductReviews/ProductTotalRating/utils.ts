export const getParseCountReviews = (countReviews: number) => {
    if (countReviews > 999 && countReviews < 9999) {
        console.log('1');
        return `${String(countReviews)[0]}.${String(countReviews)[1]}K`;
    }
    if (countReviews > 9999 && countReviews < 99_999) {
        return `${String(countReviews).slice(0, 2)}.${
            String(countReviews)[3]
        }K`;
    }
    if (countReviews > 99_999 && countReviews < 999_999) {
        console.log('3');
        return `${String(countReviews).slice(0, 3)}.${
            String(countReviews)[4]
        }K`;
    }
    if (countReviews > 999_999) {
        return `${String(countReviews)[0]}.${String(countReviews)[1]}M`;
    }

    return `${countReviews}`;
};

export const getParseRating = (rating: number) => {
    if (Number.isInteger(rating)) {
        return `${rating}.0`;
    }

    return rating + '';
};
