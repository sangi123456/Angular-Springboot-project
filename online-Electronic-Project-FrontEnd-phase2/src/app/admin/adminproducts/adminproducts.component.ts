import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { AdminProduct } from 'src/app/model/AdminProduct';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css'],
})
export class AdminproductsComponent implements OnInit {
  product: Array<AdminProduct>;
  action: string;
  selectedProduct: AdminProduct;

  constructor(
    private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService
      .getProducts()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    this.activedRoute.queryParams.subscribe((params) => {
      // get the url parameter named action. this can either be add or view.
      this.action = params['action'];
      // get the parameter id. this will be the id of the product whose details
      // are to be displayed when action is view.
      const selectedProductId = params['id'];
      // if id exists, convert it to integer and then retrive the product from
      // the produts array
      if (selectedProductId) {
        this.selectedProduct = this.product.find(
          (AdminProduct) => AdminProduct.productid === +selectedProductId
        );
      }
    });
  }

  handleSuccessfulResponse(response: AdminProduct[]) {
    this.product = response;
  }
  // when admin click on add button this funcation will be called
  addProduct() {
    this.selectedProduct = new AdminProduct();
    this.router.navigate(['admin', 'products'], {
      queryParams: { action: 'add' },
    }); // this is the route
  }
  //when admin click in on show delail this funcation will be called
  viewProduct(id: number) {
    this.router.navigate(['admin', 'products'], {
      queryParams: { id, action: 'view' },
    });
  }
}
