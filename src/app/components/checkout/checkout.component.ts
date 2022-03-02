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
  sum:number = 0;
  Test = {
    mylist: this.productInCheckout,
    length: 0
  }
  buttonClicked: boolean = false;

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
    this.Test = this.checkout.checkoutPage();
  }

  removeItem(i:number){
    this.Test.mylist.splice(i,1);
    this.checkout.removeInBasket();
  }
  locationsSum() {
    this.sum = this.Test.mylist.map(product => product.price).reduce((a, b) => a + b, 0);
    return this.sum;
  }
  sendInformationToService(){
    this.checkout.recive(this.sum, this.Test.mylist)
  }

  // formDone(){
  //   this.buttonClicked = true;
  // }
}
