import { Component} from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electronics';
  

  id:any;
activeroute: ActivatedRoute;
api:ProductService;
categorydetail:any[]=[];
public totalItem : number = 0;

  constructor(activeroute: ActivatedRoute,api:ProductService, private cartService : CartService) {
this.activeroute = activeroute;
this.api=api
}
ngOnInit(): void {
// this.name = this.activeroute.snapshot.paramMap.get('title');
this.id = this.activeroute.snapshot.paramMap.get('id');
this.api.getdata(this.id)
.subscribe((response:any)=>{
  
this.categorydetail=response;
console.log(response);
},(error)=>{
console.log(error)
})


this.cartService.getProducts()
.subscribe(res=>{
this.totalItem = res.length;

})

}
}






 


  
