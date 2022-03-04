import { Component, OnInit } from '@angular/core';
import { apiClass } from 'src/app/models/apiClass';
import { FetchService } from 'src/app/services/fetch/fetch.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: apiClass[] = [];

  constructor(private fetch: FetchService) { }

  ngOnInit(): void {
    this.fetch.orders$.subscribe((data) => {
      this.orders = data;
    });
    this.fetch.getOrders();
  }
  delete(id:number){
    this.fetch.deleteOrder(id);
  }
}
