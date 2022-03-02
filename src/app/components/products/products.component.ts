import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IProducts } from 'src/app/models/IProducts';
import { ProductsFetchService } from 'src/app/services/products-fetch.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  chosenCategory:number = 0;

  products: IProducts[] = [];
  searchResult: IProducts[] = [];

  categories: ICategory[] = [];


  constructor(private fetch: ProductsFetchService) { }

  ngOnInit(): void {
    this.fetch.products$.subscribe((productFromService) => {
      this.products = productFromService;
    });
    this.fetch.categories$.subscribe((categoriesFromService) => {
      this.categories = categoriesFromService;
    });

    this.fetch.getCategories();
    this.fetch.getProducts();

    
  }

  search(userSearch:string){
    if(userSearch.length < 2){
      return;
    }
    this.fetch.search(userSearch);
    this.fetch.searchRes$.subscribe((data) =>{
      this.searchResult = data;
    })
  }


  



}



