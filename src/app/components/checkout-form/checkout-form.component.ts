import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TEESt } from 'src/app/models/IApi';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  formSent:boolean = false;

  userForm = this.fb.group({
    name: [''],
    adress: [''],
    paymentMethod: ['']
  });

  Orders: TEESt[] = [];

  constructor(private fb: FormBuilder, private checkout: CheckoutService) { }

  ngOnInit(): void {
  }
  handleSubmit(){

    let name = this.userForm.get("name")?.value;
    let adress = this.userForm.get("adress")?.value;
    let payment = this.userForm.get('paymentMethod')?.value
    let formInString:string = "Name:" + name + " Adress:" + adress;

    this.formSent = true;


    this.checkout.send(formInString, payment)
    .subscribe(order => this.Orders.push(order));
  }

  // orderform{
  //   id //Vet ej vad detta är
  //   companyID //Alltid samma siffra
  //   created //Använd date
  //   createdBy //Från formulär userForm.value
  //   paymentmethod //Alltid Paypal
  //   TotalPrice //Ta reda på från orders
  //   status //Alltid 0?

  //   orderRows{ //Kommer från Custom
  //     {productid:, productname},
  //     {}
  //     {}
  //   }


  }


