import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { ProductDetails } from './product-details/product-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, ProductDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Assignment1');
}
