type TypeSlice = 'symbols' | 'words';

export const minLength = (
    text: string,
    length: number,
    type: TypeSlice = 'words'
) => {
    if (type === 'words') {
        const countWords = text.split(' ').length;
        if (countWords <= length) {
            return text.split(' ').slice(0, length).join(' ');
        }

        return text.split(' ').slice(0, length).join(' ') + '...';
    }

    const countSymbols = text.split('').length;

    if (countSymbols <= length) {
        return text.split('').slice(0, length).join(' ');
    }

    return text.split('').slice(0, length).join(' ') + '...';
};
