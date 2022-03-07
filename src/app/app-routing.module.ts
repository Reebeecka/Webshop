import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"details/:id", component: ProductDetailComponent},
  {path: "cart", component: ShoppingCartComponent},
  {path:"checkoutForm", component: CheckoutComponent},
  {path: "admin", component: AdminComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
