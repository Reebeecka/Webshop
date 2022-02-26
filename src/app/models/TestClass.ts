export class Custom {
    id: number;
    name: string;
    price: number;
    ImageUrl: string;
    amout: number;
  
    constructor(name: string, id: number, price: number, imageUrl: string, amout:number) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.ImageUrl = imageUrl;
      this.amout = amout;
    }
  }