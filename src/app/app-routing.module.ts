import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path:'', component:MainPageComponent },
  { path:'products', component:ProductsComponent },
  { path:'product', component:ProductComponent },
  { path:'cart', component:CartComponent },
  { path:'contact', component:ContactComponent },
  { path:'about', component:AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
