//DONT NEED

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { IProducts } from '../models/IProducts';
// import { ProductsFetchService } from './products-fetch.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class SendProductInformationService {

//   allproducts: IProducts[] = [];
//   producttowhow:any;

//   private theproduct = new Subject<IProducts[]>();
//   public theproduct$ = this.theproduct.asObservable();

//   constructor(private fetch: ProductsFetchService) { }


//   findcorrects(productId: number) {
//     //Här kommer ID till oss

//     //Fetching all of API
//     this.fetch.getProducts();

//     this.fetch.products$.subscribe((productFromService) => {
//       this.allproducts = productFromService;

//       //Finding correct id inside object inside array
//       this.producttowhow = this.allproducts.find(e => e.id === productId);

//       //Send to component
//       this.theproduct.next(this.producttowhow);
//     });
//   }
// }

