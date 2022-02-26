import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  numberOfProductsInCart: number = 0;
  test:number = 0;

  constructor(private fetch: ProductsFetchService, private http: HttpClient, private IDsend: SendProductInformationService) { }

  ngOnInit(): void {
    this.fetch.products$.subscribe((productFromService) => {
      this.products = productFromService;
    });

    this.fetch.getProducts();
  }

  addToCart(ProductID:number){
    this.numberOfProductsInCart = this.numberOfProductsInCart + 1; 
    console.log(this.numberOfProductsInCart);
  }
  



}



