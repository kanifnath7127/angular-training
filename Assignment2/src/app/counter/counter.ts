import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  @Input() count: number = 100;

  @Output() updateLikesByChild = new EventEmitter<number>();

  increment() {
    this.count++;
    this.updateLikesByChild.emit(this.count);
  }
  decrement() {
    this.count--;
    this.updateLikesByChild.emit(this.count);
  }

  inputChange(event: any) {
    this.count = event.target.value;
    this.updateLikesByChild.emit(this.count);
  }
}
