import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/CartClass';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productsInCart: Array<Cart> = [];
  cartListApi = {
    cartlist: this.productsInCart,
    cartLength: this.productsInCart.length
  }

  sum:number = 0;

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
    this.cartListApi = this.checkout.checkoutPage();
  }
  removeItem(i:number){
    this.cartListApi.cartlist.splice(i,1);
    this.checkout.removeInBasket();
  };
  basketSum(){
    this.sum = this.cartListApi.cartlist.map(product => product.price).reduce((a, b) => a + b, 0);
    return this.sum;
  }
  sendInformationToService(){
    this.checkout.recive(this.sum, this.cartListApi.cartlist);
  }
}
