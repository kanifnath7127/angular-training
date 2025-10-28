import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  public product = {
    id: 1,
    title: 'Rose',
    price: 100,
    image: '/images/rose.jpg',
    description: 'Roses are red, violets are blue.',
    likes: 0,
  };

  increaseLikes = () => {
    this.product.likes += 1;
  };
}
