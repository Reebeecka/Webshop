import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProducts } from '../models/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchService {

  //private products: IProduct[] = []
  private products = new Subject<IProducts[]>();
  public products$ = this.products.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(){
    this.http.get<IProducts[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products").subscribe((data:IProducts[]) => {
      this.products.next(data);
    })
  }}