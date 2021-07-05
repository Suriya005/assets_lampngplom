import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit {
  counter: number = 0;
  @Input() step: number = 1;
  @Output() changeNumber = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  decrease() {
    this.counter = this.counter - this.step;
    this.changeNumber.emit(this.counter);
  }
  increase() {
    this.counter = this.counter + this.step;
    this.changeNumber.emit(this.counter);
  }
}
