
import { AdminUser } from 'src/app/model/AdminUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminProduct } from '../model/AdminProduct';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getAdminUser() {

    return this.httpClient.get<AdminUser[]>('http://localhost:8080/api/v1/get');

  }

  getProducts() {
    return this.httpClient.get<AdminProduct[]>(
      'http://localhost:8080/api/v1/get/product'
    );
  }

  addProducts(newProduct: AdminProduct) {
    return this.httpClient.post<AdminProduct>(
      'http://localhost:8080/api/v1/add/product',
      newProduct
    );
  }

  deleteProduct(product_id) {
    return this.httpClient.delete<AdminProduct>(
      'http://localhost:8080/api/v1/' + product_id
    );
  }
  updateProduct(updatedProduct: AdminProduct) {
    return this.httpClient.put<AdminProduct>(
      'http://localhost:8080/api/v1/update',
      updatedProduct
    );
  }
}
