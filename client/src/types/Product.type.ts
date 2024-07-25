export interface IReview {
    id: number;
    username: string;
    userId: number;
    comment: string;
    avatar: string;
    rating: number;
}

export interface IProduct {
    title: string;
    id: number;
    shortDescription: string;
    fullDescription: string;
    cost: number;
    oldCost: number;
    discount: number;
    previews: string[];
    mainPreview: string;
    rating: number;
    sku: string;
    categoriesId: number;
    tags: string[];
}
