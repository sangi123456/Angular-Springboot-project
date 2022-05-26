import { NgModule } from '@angular/core';//is a property it binds value of input element with the component property
import { BrowserModule } from '@angular/platform-browser';//ngfor, pipeclasses, inif
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

import { HomeComponent } from './components/products/home/home.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//it is used for ngmodle
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductdetailComponent } from './components/products/productdetail/productdetail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { NgxPaginationModule } from 'ngx-pagination';

import { CategoryListComponent } from './components/products/category-list/category-list.component';



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import { AboutComponent } from './about/about.component';


import { ReviewComponent } from './components/products/review/review.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './admin/menu/menu.component';



import { OrdersComponent } from './component/orders/orders.component';
import { OrderitemComponent } from './component/orderitem/orderitem.component';
import { AddressComponent } from './component/address/address.component';
import { CartComponent } from './component/cart/cart.component';

import { ViewproductComponent } from './admin/adminproducts/viewproduct/viewproduct.component';
import { AddproductComponent } from './admin/adminproducts/addproduct/addproduct.component';


import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { ViewuserComponent } from './admin/users/users/viewuser/viewuser.component';
import { UsersComponent } from './admin/users/users/users.component';



@NgModule({//bind the view to the model
  declarations: [
    AppComponent,
  
    ProductsComponent,
       
       HomeComponent,
       ProductdetailComponent,
       CategoryListComponent,
      ViewproductComponent,
      AddproductComponent,
    ViewuserComponent,
    UsersComponent,
      AdminproductsComponent,
     
       
    MenuComponent,
  
    ProductsComponent,
   
      ProductsComponent,
      OrdersComponent,
      OrderitemComponent,
      AddressComponent,
      CartComponent,
      
       PlaceorderComponent,
       AboutComponent,
  
     
       ReviewComponent
       
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
     NgxPaginationModule,
     MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
   Ng2SearchPipeModule,
  
   
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, ProductService]
})
export class AppModule { }
