import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductsFetchService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories: ICategory[] = [];

  itemsInBasket:number = 0;

  constructor(private fetch: ProductsFetchService, private checkout: CheckoutService) { }

  ngOnInit(): void {

    this.fetch.categories$.subscribe((categoriesFromService) => {
      this.categories = categoriesFromService;
    });

    this.fetch.getCategories();
    this.checkout.basketItems().subscribe((data) =>{
      this.itemsInBasket = data;
    })
  }

}
