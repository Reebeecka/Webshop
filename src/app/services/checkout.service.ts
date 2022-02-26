import { Injectable } from '@angular/core';
import { Custom } from '../models/TestClass';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  empList: Array<Custom> = [];
  numberOfItems:number = 0;
  amout: number = 1;
  x:number = 0;

  constructor() { }
  addToCheckout(product:any){

    if(!this.empList.find(e => e.id === product.id)){
      let customObj = new Custom(product.name, product.id, product.price, product.imageUrl, this.amout);
      this.empList.push(customObj);
      console.log(this.empList);
      this.numberOfItems = this.empList.length;
    }
    else{
      //Find the object thats in the array and change the amout to +1 of the already existing amout

      //Number of Items +1
    }
  }
}
