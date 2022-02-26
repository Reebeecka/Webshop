import { Injectable } from '@angular/core';
import { IProducts } from '../models/IProducts';
import { Custom } from '../models/TestClass';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  empList: Array<Custom> = [];
  numberOfItems:number = 0;
  Test = {
    mylist: this.empList,
    length: this.empList.length
  }

  constructor() { }
  addToCheckout(product:any){

    // if(!this.empList.find(e => e.id === product.id)){
      let customObj = new Custom(product.name, product.id, product.price, product.imageUrl);
      this.empList.push(customObj);
      console.log(this.empList);
      this.numberOfItems = this.empList.length;
      this.Test.mylist = this.empList;
      this.Test.length = this.empList.length;
          // }
    // else{
    //   //Find the object thats in the array and change the amout to +1 of the already existing amout
    //   //Number of Items +1
    // }
  }
  checkoutPage(){
    return this.Test;
  }
}
