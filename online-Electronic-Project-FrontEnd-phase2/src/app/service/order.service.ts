import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../model/orders';


@Injectable({
  providedIn: 'root'
})

export class OrderService {
// orderToBePlaced: Orders=<Orders>{};

http:HttpClient;

constructor( http:HttpClient) { 


this.http = http;
}

   public getAllOrders()
{
  return this.http.get<Orders[]>("http://localhost:8080/api/v1/orders");
}
// getAllOrdersOfUser(id:number){
//   return this.http.get<Orders[]>('http://localhost:8080/api/v1/orders');
// }

// postOrders(order:Orders){
// return this.http.post('http://localhost:8080/api/v1/orders');

// }


}
