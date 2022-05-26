import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';//ready service class in angular it is used to 
import { Products } from '../model/Products';
import { category } from '../model/category';
import { GetResponseProducts } from '../model/GetResponseProducts';
import { Review } from '../model/Review';
//perform api call from angular to backend application

//service -typescript classes with @injectible decorator. this decorator tells angular that 
//the class is a  service and can be injected into components that need that service

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http:HttpClient;
  httpClient: any;

  constructor(http: HttpClient) {

    this.http = http;

//methods with logic 
  }
  public getAllproducts(){
return this.http.get<Products[]>("http://localhost:8080/api/v1/products");



  }  
  public getdata(id:number){
    return this.http.get<Products[]>(`http://localhost:8080/api/v1/products/${id}`);
  }

   public getAllcategory(){
return this.http.get<category[]>("http://localhost:8080/api/v2/category");
   }

   public getcategory(id:number){
    return this.http.get<category[]>(`http://localhost:8080/api/v2/category/${id}`);
  }


//  public getPagination(page:number){
//    return this.http.get("http://localhost:8080/api/v1/page/products?pgnum=0&size=3")
//  }

 //private baseUrl = 'http://localhost:8080/api/v1/';
 searchProducts(value : string){

  return this.http.get(`http://localhost:8080/api/v1/search?key=${value}`);

}

private baseUrl = "http://localhost:8080/api/v1";
getPagination(page:number){
  return this.http.get(this.baseUrl+'/search?key='+page);
}

public getReviewById(id:number){
  return this.http.get(`http://localhost:8080/api/v3/reviews/${id}`);
}

// public getproductsbyfilter(price:number){
//   return this.http.get<Products[]>("http://localhost:8080/api/v1/filter/products"+price);
  
  
  
//     }  

getproductsbyfilter(price: number): Observable<any>{

      let param1 = new HttpParams().set('price', price);

      return this.http.get("http://localhost:8080/api/v1/filter/products", {params:param1});

    }

}



