import { Component, OnInit } from '@angular/core';
import { Custom } from 'src/app/models/TestClass';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  productInCheckout: Array<Custom> = [];
  sum: number = 0;
  Test = {
    mylist: this.productInCheckout,
    length: 0
  }

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
    this.Test = this.checkout.checkoutPage();

    this.sumCart(this.Test.mylist)

    // for(let i = 0; i < this.Test.length; i++){
    //   this.sum += this.Test.mylist[i].price;
    //   console.log(this.sum);
    // }
  }
  removeItem(i:number){
    this.Test.mylist.splice(i,1);
    this.sum -= this.Test.mylist[i].price; 
  }

  sumCart(productsincart:any){
    console.log(productsincart)
    for(let i = 0; i < this.Test.length; i++){
      this.sum += productsincart[i].price;
      console.log(this.sum);
    }
  }

}
