import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute } from '@angular/router';

import { category } from '../../../model/category';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:string[]=[];
 id:any;
activeroute: ActivatedRoute;
 categoryDetails:any[]=[];

  
  _msgservice:ProductService
constructor( activeroute: ActivatedRoute,_msgservice: ProductService, private _cartService: CartService ) {
  this.activeroute = activeroute;
this._msgservice = _msgservice
    

   }
categoryList:category[]=[];
  ngOnInit() {
this._msgservice.getAllcategory()
.subscribe((response:any)=>{
this.categoryList=response;
console.log(response);

},(error)=>{
     console.log(error)
    })
      }
  addtocart(item: any){
    this._cartService.addtoCart(item);
    }
  }