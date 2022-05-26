
import { CategoryListComponent } from './components/products/category-list/category-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/products/home/home.component';

import { ProductsComponent } from './components/products/products.component';
import { ProductdetailComponent } from './components/products/productdetail/productdetail.component';


import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './components/products/review/review.component';
import { MenuComponent } from './admin/menu/menu.component';



import { CartComponent } from './component/cart/cart.component';
import { AddressComponent } from './component/address/address.component';
import { OrdersComponent } from './component/orders/orders.component';

import { AdminProduct } from './model/AdminProduct';

import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { UsersComponent } from './admin/users/users/users.component';
// import { AdminProductsComponent } from './admin/AdminProducts/AdminProducts.component';


const routes: Routes = [
  {
     path: '', redirectTo: '/home', pathMatch: 'full',
  },
 
 

 
 {path: 'menu', component: MenuComponent},
  {path: 'address', component: AddressComponent},
{path: 'orders', component: OrdersComponent},


  {path: 'home' , component: HomeComponent},
 
  {path : 'products', component: ProductsComponent},
  {path : 'productdetail/:id', component: ProductdetailComponent},
  {path : 'category/:id', component : CategoryListComponent},

 {path: 'cart', component: CartComponent},
  {path: 'placeorder', component: PlaceorderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'review', component: ReviewComponent},
 
  {

    path: 'admin/users',

    component: UsersComponent,

  },

  {

    path: 'admin/products',

    component: AdminproductsComponent,

  },
   

 



    // component: AdminProductsComponent,

    





  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
