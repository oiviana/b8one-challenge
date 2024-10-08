interface ProductData {
    productId: string;
    productName: string;
    productImage: string;
    productPrice: {
        listPrice: number;
        sellingPrice: number;
        installments: number;
    }
}