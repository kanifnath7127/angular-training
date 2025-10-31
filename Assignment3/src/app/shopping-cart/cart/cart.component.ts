import { Component } from '@angular/core';
import { Item as CartItem, Item } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from '../item/item.component';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ItemComponent, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: Item[] = [];
  totalPrice = 0;

  ngOnInit() {
    this.loadCart();
  }

  constructor(private cs: CartService) {}

  loadCart() {
    // Load cart items from a service or local storage
    this.cartItems = this.cs.getCartItems();
    this.calculateTotalPrice();
  }

  removeItem(id: number) {
    this.cs.removeFromCart(id);
    // refresh local view of cart items and totals
    this.cartItems = this.cs.getCartItems();
    this.calculateTotalPrice();
  }

  clearCart() {
    this.cs.clearCart();
    // clear local view and totals
    this.cartItems = [];
    this.calculateTotalPrice();
  }

  updateItemQuantity(data: any) {
    this.cs.updateQuantity(data.productId, data.quantity);
    // update local list and totals after changing quantity
    this.cartItems = this.cs.getCartItems();
    this.calculateTotalPrice();
  }

  deleteItem(id: number) {
    this.cs.removeFromCart(id);
    this.cartItems = this.cs.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cs.getTotalPrice();
  }
}
