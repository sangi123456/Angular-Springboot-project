import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { AdminProduct } from '../../../model/AdminProduct';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  @Input()

  AdminProduct: AdminProduct;
@Output()
productAddedEvent = new EventEmitter();
constructor(
      private httpClientService: HttpClientService,
      private activedRoute: ActivatedRoute,
      private router: Router,
      private httpClient: HttpClient
) {}
ngOnInit() {}
  saveProduct(productForm) {
    //   // this function will work for adding the new product
    // this.AdminProduct = productForm.value;
  productForm.value.price =
  productForm.value.price -
    (productForm.value.price * productForm.value.discount) / 100;
    if (productForm.value.productid == null) {
    this.httpClientService
    .addProducts(productForm.value)
    .subscribe((AdminProduct) => {
    this.productAddedEvent.emit();
    this.router.navigate(['admin', 'adminproducts']);
});

// this function will work for edit as ID is appear
 } else {

      this.httpClientService
      .updateProduct(productForm.value)
      .subscribe((AdminProduct) => {
      this.productAddedEvent.emit();
      this.router.navigate(['admin', 'products']);
});

    }

  }

}
