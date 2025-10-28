import { Component, Input } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-product-details',
  imports: [Counter],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  @Input() title: any = 'Gerbera';
  @Input() description: string = 'Wedding Flower';
  @Input() price: number = 30;
  @Input() likes: number = 100;
  @Input() imageUrl: string = "url('/images/rose.jpg')";

  handleLikesChange(dataFromChild: any) {
    this.likes = dataFromChild;
  }
}
