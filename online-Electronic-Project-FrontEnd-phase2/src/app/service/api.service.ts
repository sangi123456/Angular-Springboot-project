import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'

})

export class ApiService {
http:HttpClient;

   url:any="http://localhost:3000/api/products";

  constructor(http:HttpClient) {

    console.log("Api services..");

    this.http=http;

  }

 public getProduct(){
    return this.http.get("http://localhost:3000/api/products");
  }

  public postOrder(order:any){
    console.log(typeof order)
    let x = new Observable<any>();
   x = this.http.post("http://localhost:3000/api/sangu/login",order);
   return x;
  }



}