export const isFullCost = (cost: number): string | number => {
    return cost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};
