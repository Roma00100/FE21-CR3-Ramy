import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Iproduct[] = [];
  total: number = 0;

  constructor(private CS: CartService) {}

  ngOnInit(): void {
    this.cart = this.CS.showCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, product) => acc + product.price, 0);
  }
}