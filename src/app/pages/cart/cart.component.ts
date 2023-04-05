import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [
  ]
})
export class CartComponent {
  cart: Cart = {items: [{
    product: 'https://via.placeholder.com/150',
    name: 'keyboard',
    price: 150,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'keyboard',
    price: 150,
    quantity: 2,
    id: 1,
  }]}
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>):number {
    return items.map(item =>item.price*item.quantity)
    .reduce((prev, cur) => prev + cur, 0)
  }
}
