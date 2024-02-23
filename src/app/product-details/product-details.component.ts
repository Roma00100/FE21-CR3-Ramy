import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';
import { Iproduct } from '../iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product: Iproduct = {} as Iproduct;
   index: number = 0;
  
   constructor(private route: ActivatedRoute, private CS: CartService) {}
  
     addToCart() {    alert('This Product has been added');   this.CS.addToCart(this.product);  }
  
    ngOnInit(): void { this.index = this.route.snapshot.params['id']; this.product = products[this.index];
     }
   }


 