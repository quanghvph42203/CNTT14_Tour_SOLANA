export interface IProduct {
    // _id?: number | string
    _id?: number | string;
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
    status?: "Còn chỗ" | "Hết chỗ";
    discount_price: number;
}
