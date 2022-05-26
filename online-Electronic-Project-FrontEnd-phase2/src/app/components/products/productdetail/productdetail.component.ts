import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';


import { ActivatedRoute } from '@angular/router';//provides access to information about a 
import { Products } from '../../../model/Products';
import { CartService } from 'src/app/service/cart.service';
//route associated with a
//component that is loaded in an outlet
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
id:any;
activeroute: ActivatedRoute;
api:ProductService;
productDetail:any;
reviewDetails:any;
//name:any;
  constructor(activeroute: ActivatedRoute,api:ProductService, private _cartService: CartService) {
this.activeroute = activeroute;
this.api=api
}
ngOnInit(): void {
//this.name = this.activeroute.snapshot.paramMap.get('title');
this.id = this.activeroute.snapshot.paramMap.get('id');
this.api.getdata(this.id)
.subscribe((response:any)=>{
  
this.productDetail=response;
console.log(response);
},(error)=>{
console.log(error)
})
this.api.getReviewById(this.id)

.subscribe((response:any)=>{

    this.reviewDetails=response;

    console.log(response);

   

},(error)=>{

  console.log(error)

})


}

addtocart(item: any){
  this._cartService.addtoCart(item);
  }
}