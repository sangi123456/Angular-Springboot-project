import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';

import { ActivatedRoute } from '@angular/router';
import { Products } from '../../../model/Products';
import { category } from '../../../model/category';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  id:any;
  activeroute: ActivatedRoute;
  api:ProductService;
// productdetail:Products[]=[];
  
    constructor(activeroute: ActivatedRoute,api:ProductService, private _cartService: CartService ) {
  this.activeroute = activeroute;
  this.api=api
  }
  categorydetail:any;

  //categorydetail:category[]=[];
  ngOnInit(): void {
    this.id = this.activeroute.snapshot.paramMap.get('id');
    this.api.getcategory(this.id)
    .subscribe((response:any)=>{
    
      
    this.categorydetail=response;

    console.log(response);

    },(error)=>{
    console.log(error)
    })
    
    }
    addtocart(item: any){
      this._cartService.addtoCart(item);
      }
    }


