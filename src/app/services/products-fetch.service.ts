import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TEESt } from '../models/IApi';
import { ICategory } from '../models/ICategory';
import { IProducts } from '../models/IProducts';
import { Custom } from '../models/TestClass';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchService {
  chosenCategory:number = 0;

  //private products: IProduct[] = []
  private products = new Subject<IProducts[]>();
  public products$ = this.products.asObservable();

  private orders = new Subject<TEESt[]>();
  public orders$ = this.orders.asObservable();

  private categories = new Subject<ICategory[]>();
  public categories$ = this.categories.asObservable();

  private searchRes = new Subject<IProducts[]>();
  public searchRes$ = this.searchRes.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(){
    this.http.get<IProducts[]>(environment.productsUrl).subscribe((data:IProducts[]) => {
      this.products.next(data);
    })
  }

  getOrders(){
    this.http.get<TEESt[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyid=5791").subscribe((data => {
      this.orders.next(data);
    }))
  }

  getCategories(){
    this.http.get<ICategory[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/categories").subscribe((data => {
      this.categories.next(data);
    }))
  }

  search(userSearch:string){
    this.http.get<IProducts[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=" + userSearch).subscribe((data) =>{
      this.searchRes.next(data);
    })
  }

  deleteOrder(id:number){
    this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id + '?companyid=5791')
        .subscribe(() => this.getOrders());
  }
}