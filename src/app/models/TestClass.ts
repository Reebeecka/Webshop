export class Custom {
    id:number;
    amount: number;
    productId: number;
    name: string;
    price: number;
    imageUrl: string;
  
    constructor(id:number, amount:number, name: string, productId: number, price: number, imageUrl: string) {
      this.id = id;
      this.amount = amount;
      this.name = name;
      this.productId = productId;
      this.price = price;
      this.imageUrl = imageUrl;
    }
  }