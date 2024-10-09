interface ProductData {
    productId: string;
    productName: string;
    imageSrc: string;
    imageAlt: string;
    productPrice: {
        listPrice: number;
        sellingPrice: number;
        installments: number;
    }
}