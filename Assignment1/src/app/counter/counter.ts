import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  public count: number = 0;

  increaseCounter = () => {
    //alert('Increase Counter');
    this.count = this.count + 1;
  };
  decreaseCounter = () => {
    //alert('Decrease Counter');
    this.count = this.count - 1;
  };
}
