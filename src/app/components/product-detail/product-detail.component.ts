import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/models/IProducts';
import { SendProductInformationService } from 'src/app/services/send-product-information.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  producttoshow:any;
  productId: number = 0;
  product:IProducts = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    year: 0,
    added: new Date(),
    productCategory: [{ categoryID: 0, catergory: "" }]
  }

  constructor(private route: ActivatedRoute, private IDrecive: SendProductInformationService) {
    // this.IDrecive.theproduct$.subscribe((data) =>{
    //   this.product=data;
    //   console.log(this.product)
    // })
  }

  ngOnInit(): void {

    //Finding the //ID parameter from Route
    this.route.params.subscribe((p) => {
      this.productId = +p["id"];})

      //Subscribing to observer
      this.IDrecive.theproduct$.subscribe((productFromService) => {
        this.producttoshow = productFromService;
        this.product = this.producttoshow;
      });
  
      //Calls the function in service and sending the productID
      this.IDrecive.findcorrects(this.productId);

  }
}
