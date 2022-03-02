import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TEESt } from 'src/app/models/IApi';
import { Custom } from 'src/app/models/TestClass';
import { ProductsFetchService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: TEESt[] = [];
  theOrder:boolean =false;

  constructor(private fetch: ProductsFetchService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetch.orders$.subscribe((productFromService) => {
      this.orders = productFromService;
    });
    this.fetch.getOrders();
  }
  delete(id:number){
    this.fetch.deleteOrder(id);
  }

}
