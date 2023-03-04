import { Get, Injectable } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductsProviderService {
    @Get()
    async getProducts(): Promise<Product[]> {
        const products: Product[] = [
            { id: '1', name: 'Entrante 1', description: 'Description 1', price: 100, image: 'https://picsum.photos/200/300?random=1', category: 'Entrantes', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '2', name: 'Entrante 2', description: 'Description 2', price: 200, image: 'https://picsum.photos/200/300?random=2', category: 'Entrantes', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '3', name: 'Entrante 3', description: 'Description 3', price: 300, image: 'https://picsum.photos/200/300?random=3', category: 'Entrantes', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '4', name: 'Primero 1', description: 'Description 4', price: 400, image: 'https://picsum.photos/200/300?random=4', category: 'Primeros', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '5', name: 'Primero 2', description: 'Description 5', price: 500, image: 'https://picsum.photos/200/300?random=5', category: 'Primeros', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '6', name: 'Primero 3', description: 'Description 6', price: 600, image: 'https://picsum.photos/200/300?random=6', category: 'Primeros', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '7', name: 'Segundo 1', description: 'Description 7', price: 700, image: 'https://picsum.photos/200/300?random=7', category: 'Segundos', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '8', name: 'Segundo 2', description: 'Description 8', price: 800, image: 'https://picsum.photos/200/300?random=8', category: 'Segundos', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '9', name: 'Segundo 3', description: 'Description 9', price: 900, image: 'https://picsum.photos/200/300?random=9', category: 'Segundos', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '10', name: 'Postre 1', description: 'Description 10', price: 1000, image: 'https://picsum.photos/200/300?random=10', category: 'Postres', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '11', name: 'Postre 2', description: 'Description 11', price: 1100, image: 'https://picsum.photos/200/300?random=11', category: 'Postres', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '12', name: 'Postre 3', description: 'Description 12', price: 1200, image: 'https://picsum.photos/200/300?random=12', category: 'Postres', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '13', name: 'Bebida 1', description: 'Description 13', price: 1300, image: 'https://picsum.photos/200/300?random=13', category: 'Bebidas', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '14', name: 'Bebida 2', description: 'Description 14', price: 1400, image: 'https://picsum.photos/200/300?random=14', category: 'Bebidas', isRecomended: false, isAvailable: true, isOnSale: false },
            { id: '15', name: 'Xavi perro 1', description: 'Description 15', price: 1500, image: 'https://picsum.photos/200/300?random=15', category: 'Bebidas', isRecomended: false, isAvailable: true, isOnSale: false },
        ];
        return products;
    }
}
