import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../model/Address';
import { OrderItem } from '../model/Orderitem';
import { Orders } from '../model/orders';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  http: HttpClient;
  baseURL = "http://localhost:8080/api/v1/orders";
  public cartItemList : any=[]
  public productList = new BehaviorSubject<any>([]);
  
  constructor(http: HttpClient){
         this.http = http;
  }

  getOrder() : Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.baseURL}`);
  }

  addOrder(order?:any): Observable<object>{
    return this.http.post<Object>(`${this.baseURL}`,order);
  }

  
addOrderitem(orderitem?: OrderItem): Observable<object>{
  return this.http.post<Object>(`${this.baseURL}`,orderitem);
}

// addAddress(address?: Address): Observable<object>{
//   return this.http.post<Object>(`${this.baseURL}`,address);
// }

addAddress(address?:Address):Observable<Object>

  {

    return this.http.post<Object>("http://localhost:8080/api/v1/address/add", address);

  }

removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}
  // addOrderItem: any;
  // addAddress: any;
  // addOrder(newOrder: { total_price: number; address: { street: any; city: any; state: any; country: any; zipcode: any; }; user: { userid: number; username: string; email: string; userpassword: string; }; items: any; }) {
  //   throw new Error('Method not implemented.');
  // }
  // sendAddress: any;

  // constructor() { }
}





