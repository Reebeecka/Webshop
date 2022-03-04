import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { apiClass } from 'src/app/models/apiClass';
import { Cart } from 'src/app/models/CartClass';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  productsInCart: Array<Cart> = [];
  checkout: Array<apiClass> = [];
  cartListApi = {
    cartlist: this.productsInCart,
    cartLength: this.productsInCart.length
  }
  numberOfItemsInCart = new EventEmitter<number>();


  apiUrl: string = environment.url + "/orders"

  //Behövs dessa??
  id: number = 0;
  productid: number = 0;
  amount: number = 1;
  companyID: number = 5791;
  created: Date = new Date();
  createdBy: string = "";
  paymentMethod: string = "";
  totalPrice: number = 0;
  status: string = "0";
  orderRows: Cart[] = [];

  constructor(private http: HttpClient) { }

  //When button in product is pressed to add product to Cart
  addToCheckout(product:any){
    let addedProduct = new Cart(this.id, this.amount, product.name, product.id, product.price, product.imageUrl);
    this.productsInCart.push(addedProduct);
    this.numberOfItemsInCart.emit(this.productsInCart.length);

    this.cartListApi.cartlist = this.productsInCart;
    this.cartListApi.cartLength = this.productsInCart.length;
  }
  //When you press checkout everything is stored in cartListApi
  //sending this to the shoppingCart
  checkoutPage(){
    return this.cartListApi;
  }

  //To uppdate number of items in cart in navbar when product is added
  basketItems(){
    return this.numberOfItemsInCart;
  }
  //To uppdate number of items in cart in navbar when product is removed
  removeInBasket(){
    this.numberOfItemsInCart.emit(this.productsInCart.length);
  }

  //Behövs denna?
  recive(sum:number, orders:Cart[]){
    this.totalPrice = sum;
    this.orderRows = orders;
  }

  //Sending order to Api after checking out
  send(userForm:string, payment:string){
    let order = new apiClass(this.productid, this.companyID, userForm, payment, this.totalPrice, this.status, this.orderRows);
    return this.http.post<apiClass>(this.apiUrl, order);
  }
}
