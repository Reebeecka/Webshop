import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IProducts } from 'src/app/models/IProducts';
import { ProductsFetchService } from 'src/app/services/products-fetch.service';
import { SendProductInformationService } from 'src/app/services/send-product-information.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private fetch: ProductsFetchService, private http: HttpClient, private IDsend: SendProductInformationService) { }

  ngOnInit(): void {
    this.fetch.products$.subscribe((productFromService) => {
      this.products = productFromService;
    });

    this.fetch.getProducts();
  }


}


