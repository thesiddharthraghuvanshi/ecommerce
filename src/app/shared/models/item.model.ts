export class Item {
    title!: string;
    imageUrl!: string;
    viewAll?: string;
    price?: string
  
    constructor(title: string, imageUrl: string, viewAll: string, price: string) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.viewAll = viewAll;
        this.price = price;
    }
  }