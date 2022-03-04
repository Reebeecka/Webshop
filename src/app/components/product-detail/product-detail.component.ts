import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/models/IProducts';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { FetchService } from 'src/app/services/fetch/fetch.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products:IProducts[] = [];
  productId: number = 0;

  constructor(private route: ActivatedRoute, private checkout: CheckoutService, private fetch: FetchService) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.productId = +p["id"];
    });
    this.fetch.products$.subscribe(data =>{
      this.products = data;
    });
    this.fetch.getProducts();
  };
  
  addToCart(theProduct:IProducts){
    this.checkout.addToCheckout(theProduct);
  };

}
