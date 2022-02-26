export class Custom {
    id: number;
    name: string;
    price: number;
    ImageUrl: string;
  
    constructor(name: string, id: number, price: number, imageUrl: string) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.ImageUrl = imageUrl;
    }
  }