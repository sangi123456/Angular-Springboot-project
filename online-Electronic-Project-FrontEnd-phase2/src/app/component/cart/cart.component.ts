import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  [x: string]: any;

  public products : any = [];

  
  public grandTotal !: number;
  value:number=1;    //for declaring value


  constructor(private cartService : CartService, private api:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(this.products);
      this.grandTotal = this.cartService.getTotalPrice();
    })
   this.cartService.productList.subscribe(res =>{

     this.products=res;
   }
    )
   }

   addtoCart(product: any){
     let orderItem = {
       "price": product.currentPrice,
       "quanity":1,
       "product":this.products
     }
     this['cartItemList'].push(orderItem);
     this['productList'].next(this['cartitemList']);
     this['geTotalPrice']();
     console.log(this['cartItemList'])
   }



  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  showMessage(){
    alert("click on okay to fill the delivery address box...!!!");
  }

  //calculating grand total
getTotalPrice(data:any){
    let subTotal=0;
    for(const item of data)
{
    subTotal+=item.price*item.quantity;

}
    return subTotal;
}



inc(i:number){
    console.log("inc");
      if(this.products[i].quantity<=10)
    this.products[i].quantity+=1;
    //this.cartService.setProduct(this.products[i]);
    this.grandTotal=this.getTotalPrice(this.products);
}
dec(i:number){
    if(this.products[i].quantity !=1){
    this.products[i].quantity-=1;
    }
    this.grandTotal=this.getTotalPrice(this.products);

 }


 
  
  placeOrder(){
  console.log("OnCheckout")
    console.log(this.products)
  }


}


