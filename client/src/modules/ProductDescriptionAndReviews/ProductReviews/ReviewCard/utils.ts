export const gotShortText = (
    text: string,
    words: number,
    disabled?: boolean
) => {
    const slicedText = text
        .split(' ')
        .slice(0, words + 1)
        .join(' ');

    return disabled ? text : `${slicedText}...`;
};
