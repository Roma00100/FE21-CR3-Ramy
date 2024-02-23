import { Component } from '@angular/core';
import { products } from '../product';
import { Iproduct } from '../iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products : Iproduct[] = products
constructor(private CS: CartService) {}

addToCart(product: Iproduct): void {
  this.CS.addToCart(product);
  alert(`${product.name} has been added to the cart!`);
}
}
