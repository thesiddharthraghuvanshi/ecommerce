export class Product {
    title!: string;
    imageUrl!: string;
    viewAll?: string;
    price?: string;
    cartButton?: boolean;
  
    constructor(title: string, imageUrl: string, viewAll: string, price: string, cartButton: boolean) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.viewAll = viewAll;
        this.price = price;
        this.cartButton = cartButton;
    }
  }