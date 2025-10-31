import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/Item';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() item: Item | undefined;
  @Output() updateItemQuantity = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  itemTotal: number = 0;

  ngOnInit() {
    if (this.item) {
      this.itemTotal = this.item.price * this.item.quantity;
    }
  }

  onQuantityChange(event: any) {
    if (!this.item) return;

    const newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      this.item.quantity = newQuantity;
      this.itemTotal = this.item.price * newQuantity;

      this.updateItemQuantity.emit({
        productId: this.item.productId,
        quantity: newQuantity,
        price: this.item.price,
        total: this.itemTotal,
      });
    }
  }

  onRemoveItem() {
    console.log(this.item);
    if (!this.item) return;
    this.deleteItem.emit(this.item.productId);
  }
}
