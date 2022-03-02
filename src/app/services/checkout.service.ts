import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEESt } from '../models/IApi';
import { IProducts } from '../models/IProducts';
import { Custom } from '../models/TestClass';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  cartQty = new EventEmitter<number>();
  empList: Array<Custom> = [];
  id:number = 0;
  Test = {
    mylist: this.empList,
    length: this.empList.length
  }
  checkout: Array<TEESt> = [];
    productid:number = 0;
    amount:number = 1;
    companyID:number = 5791;
    created:Date = new Date();
    createdBy:string = "";
    paymentMethod:string = "paypal";
    totalPrice:number = 0;
    status:string = "0";
    orderRows:Custom[] = [];
  
  apiUrl: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }
  addToCheckout(product:any){

    // if(!this.empList.find(e => e.id === product.id)){
      let customObj = new Custom(this.id, this.amount, product.name, product.id, product.price, product.imageUrl);
      this.empList.push(customObj);
      this.cartQty.emit(this.empList.length)
      console.log(this.empList);
      this.Test.mylist = this.empList;
      this.Test.length = this.empList.length;

  }
  checkoutPage(){
    return this.Test;
  }
  // basketItems(): Observable<any>{
  //   return of(this.empList);
  // }
  basketItems(){
    return this.cartQty
  }
  removeInBasket(){
    this.cartQty.emit(this.empList.length)
  }
  recive(sum:number, orders:Custom[]){
    this.totalPrice = sum;
    this.orderRows = orders;
    console.log(this.orderRows)
  }
  send(userForm:string, payment:string){
    let order = new TEESt(this.productid, this.companyID, userForm, payment, this.totalPrice, this.status, this.orderRows);
    console.log(order);
    return this.http.post<TEESt>(this.apiUrl, order);
  }
}
