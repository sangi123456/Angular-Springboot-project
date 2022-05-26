import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { AdminProduct } from 'src/app/model/AdminProduct';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent implements OnInit {
  @Input()
  product: AdminProduct;

  @Output()
  productDeletedEvent = new EventEmitter();
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit() {}
  deleteProduct() {
    this.httpClientService
      .deleteProduct(this.product.productid)
      .subscribe((AdminProduct) => {
        this.productDeletedEvent.emit();
        this.router.navigate(['admin', 'products']);
      });
  }
  editProduct() {
    this.router.navigate(['admin', 'products'], {
      queryParams: { action: 'edit', id: this.product.productid },
    });
  }
}
