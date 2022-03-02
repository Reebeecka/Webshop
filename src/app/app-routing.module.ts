import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"", component:ProductsComponent},
  {path:"details/:id", component: ProductDetailComponent},
  {path: "checkout", component: CheckoutComponent},
  {path:"checkoutForm", component: CheckoutFormComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
