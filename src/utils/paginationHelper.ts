export const createTotalPages = ({ totalItems, take }: { totalItems: number; take: number }): number => {
    return Math.floor(totalItems / take) + (totalItems % take > 0 ? 1 : 0);
};
