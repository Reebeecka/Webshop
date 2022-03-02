import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/models/IProducts';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductsFetchService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products:IProducts[] = [];
  productId: number = 0;


  constructor(private route: ActivatedRoute, private checkout: CheckoutService, private Fetch: ProductsFetchService) {
    // this.IDrecive.theproduct$.subscribe((data) =>{
    //   this.product=data;
    //   console.log(this.product)
    // })
  }

  ngOnInit(): void {

    //Finding the //ID parameter from Route
    this.route.params.subscribe((p) => {
      this.productId = +p["id"];});

      this.Fetch.products$.subscribe(ProductFromService => {
        this.products = ProductFromService;
      });

      this.Fetch.getProducts();

      // //Subscribing to observer
      // this.IDrecive.theproduct$.subscribe((productFromService) => {
      //   this.producttoshow = productFromService;
      //   console.log(this.producttoshow);
      // });
  
      // //Calls the function in service and sending the productID
      // this.IDrecive.findcorrects(this.productId);

  }
  addToCart(theProduct:IProducts){
    this.checkout.addToCheckout(theProduct);
  }
}


