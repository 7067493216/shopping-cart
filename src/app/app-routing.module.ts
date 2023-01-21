import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'list',
    component: ProductsComponent     //ProductViewComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path: 'addProduct/:id',
    component: AddProductComponent,
  },
  {
    path: 'view',
    component: ProductViewComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
