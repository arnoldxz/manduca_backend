export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isRecomended: boolean;
    isAvailable: boolean;
    isOnSale: boolean;
}

// export class Product implements IProduct {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     image: string;
//     category: string;
//     isRecomended: boolean;
//     isAvailable: boolean;
//     isOnSale: boolean;
// }