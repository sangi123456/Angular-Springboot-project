import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { OrderItem } from 'src/app/model/Orderitem';
import { Orders } from 'src/app/model/orders';

import { AddressService } from 'src/app/service/address.service';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  orders:Orders=<Orders>{};
  orderitems:OrderItem=<OrderItem>{};
  address:Address=<Address>{};
  
  constructor(private cartService : CartService,
  private router: Router,  private addressService: AddressService ) { }
  
  ngOnInit(): void {
  }
  
  
  
    addOrder(){
    console.log(this.address);
    let total_price = 0;
    let productItems: any = [];
    this.cartService.getProducts().subscribe(products=>{
    products.forEach((_products:any) => {
  });
  total_price = this.cartService.getTotalPrice();
  productItems = products;
  });
let newOrder={

      "total_price": 5600,
        "address": {
        "street": this.address.street,
        "city": this.address.city,
        "state": this.address.state,
        "country": this.address.country,
        "zipcode": this.address.zipcode
        },
        "user": {
        "userid": 1,
        "username": "user1",
        "email": "user1@gmail.com",
        "userpassword": "User12"
        },
        "items": productItems
        
          }
        
          console.log(newOrder);
          this.addressService.addOrder(newOrder).subscribe((_result)=>{
          this.router.navigate(['orders']);
        });
          }
    addOrderItem(){
          console.log(this.orderitems);
          this.addressService.addOrderitem(this.orderitems).subscribe((response: any)=>{
          console.log(response);
          });
          this.router.navigate(['/placeorder']);
          }
        addAddress(){
            console.log(this.address);
                this.addressService.addAddress(this.address).subscribe();
                  this.router.navigate(['address']);
          }
          async emptycart(){
          this.cartService.removeAllCart();
           }
        }

          