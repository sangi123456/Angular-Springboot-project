
import { Address } from "./Address";

import { OrderItem } from "./Orderitem";

import { User } from "./user";



export interface Orders{

    order_id?:number;

    date_created?:any;

    date_updated?:any;

    total_price?:number;

    user?:User;



    shippingAddress?:Address;

    orderItems?:OrderItem[];

}