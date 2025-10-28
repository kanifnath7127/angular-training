import { Component, signal } from '@angular/core';
import { ProductDetails } from './product-details/product-details';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductDetails, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  productList = [
    {
      id: 12,
      title: 'Rose',
      description: 'Valentine Flower',
      price: 20,
      likes: 100,
      imageUrl: 'images/rose.jpg',
    },
    {
      id: 13,
      title: 'Gerbera',
      description: 'Wedding Flower',
      price: 40,
      likes: 230,
      imageUrl: 'images/gerbera.jpg',
    },
  ];

  //protected readonly title = signal('Assignment2');
}
