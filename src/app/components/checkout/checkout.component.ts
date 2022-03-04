import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { apiClass } from 'src/app/models/apiClass';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  userForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(2)]],
    email: ['',[Validators.required,Validators.email]],
    paymentMethod: ['',[Validators.required]]
  });

  orders: apiClass[] = [];

  formSent:boolean = false;
  constructor(private fb: FormBuilder, private checkout: CheckoutService) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    let name = this.userForm.get("name")?.value;
    let email = this.userForm.get("email")?.value;
    let paymentMethod = this.userForm.get('paymentMethod')?.value;
    let formInString:string = "Name:" + name + "  Mail:" + email;

    this.formSent = true;

    this.checkout.send(formInString, paymentMethod)
    .subscribe(order => this.orders.push(order));
  }

}
