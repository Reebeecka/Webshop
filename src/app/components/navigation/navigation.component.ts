import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { FetchService } from 'src/app/services/fetch/fetch.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  itemsInBasket: number = 0;

  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {
    this.checkout.basketItems().subscribe((data) =>{
      this.itemsInBasket = data;
    });
  }

}
