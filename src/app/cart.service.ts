import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Iproduct[] = [];

  constructor() {}

  addToCart(productParam: Iproduct) {
    this.cart.push(productParam);
  }

  showCart() {
    return this.cart;
  }
}
