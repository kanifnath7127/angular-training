import { Injectable } from '@angular/core';
import { Item as CartItem } from './models/Item';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey = 'shoppingCart';

  constructor() {
    //Initialize sessionStorage with demo data if empty
    if (!sessionStorage.getItem(this.storageKey)) {
      sessionStorage.setItem(
        this.storageKey,
        JSON.stringify([
          new CartItem(1, 'Rose', 20, 1, '../../../assets/images/rose.jpg'),
          new CartItem(
            2,
            'Gerbera',
            25,
            1,
            '../../../assets/images/gerbera.jpg'
          ),
          new CartItem(3, 'Lily', 30, 1, '../../../assets/images/lily.jpg'),
          new CartItem(4, 'Lotus', 12, 1, '../../../assets/images/lotus.jpg'),
        ])
      );
    }
  }

  //Add Product to Cart
  addToCart(item: CartItem): void {
    let items = this.getCartItems();
    const existingItem = items.find((i) => i.productId === item.productId);

    if (existingItem) {
      // If item exists, increment quantity
      existingItem.quantity += 1;
    } else {
      // If item doesn't exist, add it to cart
      items.push(item);
    }

    this.saveCart(items);
  }

  //Get All Cart Items
  getCartItems(): CartItem[] {
    let items = sessionStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  //Update Quantity
  updateQuantity(productId: number, quantity: number): void {
    let items = this.getCartItems();
    const item = items.find((i) => i.productId === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart(items);
    }
  }

  //Remove Product from Cart
  removeFromCart(productId: number): void {
    let items = this.getCartItems();
    items = items.filter((item) => item.productId !== productId);
    this.saveCart(items);
  }

  //Clear Entire Cart
  clearCart(): void {
    this.saveCart([]);
  }

  //Calculate Total Items
  getTotalItems(): number {
    return 45;
  }

  //Calculate Total Amount
  getTotalPrice(): number {
    let items = this.getCartItems();
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    // Save cart to sessionStorage
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
