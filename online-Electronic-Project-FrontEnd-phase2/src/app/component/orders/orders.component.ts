import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/model/orders';


import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  //[x: string]: any;
 // public products: any = [];
 orderService: OrderService


//   orders!: Orders[];
//  // orderitems: Orderitem[]=[];
//   addresses: Address[]= [];
 
  
  constructor( orderService:OrderService) {
    this.orderService= orderService
   }  
   
orders: Orders[]=[];

   ngOnInit(): void 
   {
    this.orderService.getAllOrders()
    .subscribe((response:any)=>{  //subscribe - arrangement to receive something
    this.orders=response;
    this.orders.forEach(order=>{
     let createdDate=order.date_created.slice(0,3);
     let updatedDate = order.date_updated.slice(0,3);
      order.date_created = createdDate.join(`-`);
     order.date_updated=updatedDate.join(`-`);
    });
    console.log(this.orders);
    },(error: any)=>{
    console.log(error)
    })
    }

}

