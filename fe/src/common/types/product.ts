export interface IProduct {
    // _id?: number | string
    _id?: number;
    name: string;
    category?: string;
    price: number;
    quantity?: number;
    image?: string;
    gallery?: string[];
    description?: string;
    discount?: number;
    featured?: boolean;
    countInStock?: number;
    location?: string;
    status?: "available" | "sold out";
    discount_price: number;
}
