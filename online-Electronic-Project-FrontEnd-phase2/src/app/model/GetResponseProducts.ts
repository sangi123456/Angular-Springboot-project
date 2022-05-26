import { Products } from "./Products";

export interface GetResponseProducts {
    _embedded: {
      products: Products[];
    }
}