import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

import { Products } from 'src/app/model/Products';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   name!:string;//for search data
productname:any;
posts:any;
p: number = 1;
selectedPrice:number=0;
  
  
//giving the component accesss to the service class
//service is registered to fetch data from the service 
_msgservice:ProductService;
constructor( _msgservice: ProductService, private _cartService: CartService, private router: Router ) {
this._msgservice = _msgservice

    }
 productList:Products[]=[];
 prices: number[] = [];
  ngOnInit() {
   
this._msgservice.getAllproducts()
.subscribe((response:any)=>{  //subscribe - arrangement to receive something
this.productList=response;

console.log(response);
this.productList.forEach(p => {

  if(!this.prices.includes(p.price)){

  this.prices.push(p.price);

  }

  });
},(error)=>{
console.log(error)

    })

    // this.searchData();
  

  }
 
addtocart(item: any){
this._cartService.addtoCart(item);
}
// doSearch(value: string) {
//   console.log(`key=${value}`);
//   this._msgservice.searchProducts(value);
// }
searchData(){



  this._msgservice.searchProducts(this.productname).subscribe((res: any) => {

    this.productList = res;

    console.log(res);

 });

}

onSelectedPrice(selectedPrice:any):void{

  this._msgservice.getproductsbyfilter(selectedPrice)

  .subscribe(data =>{

    this.productList = data;

    data = this.productList

          .filter(function (item, pos) {

          return data.indexOf(item) == pos;

      })

    console.log(data);

  })



 // console.log(this.selectedPrice);

}


}

