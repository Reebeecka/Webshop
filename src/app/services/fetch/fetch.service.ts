import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { apiClass } from 'src/app/models/apiClass';
import { ICategory } from 'src/app/models/ICategory';
import { IProducts } from 'src/app/models/IProducts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private products = new Subject<IProducts[]>();
  public products$ = this.products.asObservable();

  private orders = new Subject<apiClass[]>();
  public orders$ = this.orders.asObservable();

  private categories = new Subject<ICategory[]>();
  public categories$ = this.categories.asObservable();

  private searchRes = new Subject<IProducts[]>();
  public searchRes$ = this.searchRes.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(){
    this.http.get<IProducts[]>(environment.url +"products").subscribe((data:IProducts[]) => {
      this.products.next(data);
    });
  };

  getOrders(){
    this.http.get<apiClass[]>(environment.url +"orders?companyid=5791").subscribe((data => {
      this.orders.next(data);
    }));
  };

  getCategories(){
    this.http.get<ICategory[]>(environment.url +"categories").subscribe((data) => {
      this.categories.next(data);
    });
  };

  search(userSearch:string){
    this.http.get<IProducts[]>(environment.url + "search?searchText=" + userSearch).subscribe((data) =>{
      this.searchRes.next(data);
    });
  };

  deleteOrder(id:number){
    this.http.delete(environment.url + "orders/" + id + "?companyid=5791")
        .subscribe(() => this.getOrders());
  };
}
