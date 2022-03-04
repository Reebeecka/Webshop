import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IProducts } from 'src/app/models/IProducts';
import { FetchService } from 'src/app/services/fetch/fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProducts[] = [];
  searchResult: IProducts[] = [];
  categories: ICategory[] = [];

  chosenCategory: number = 0;

  constructor(private fetch: FetchService) { }

  ngOnInit(): void {
    this.fetch.products$.subscribe((data) => {
      this.products = data;
    });
    this.fetch.categories$.subscribe((data) => {
      this.categories = data;
    });

    this.fetch.getCategories();
    this.fetch.getProducts();
  };
  search(userSearch: string) {
    if (userSearch.length < 2) {
      return;
    };
    this.fetch.search(userSearch);
    this.fetch.searchRes$.subscribe((data) => {
      this.searchResult = data;
    });
  };
}
