import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  calcValue:number;

  @Input()
  btnClickValue:number;

  @Input()
  lastCountValue:number;

  @Output()
  countValueTotal = new EventEmitter<number>();

  btnCount = 0;
  totalValue = 0;

  checkTotal(){
    this.totalValue = this.lastCountValue + this.calcValue;
    this.btnClickValue = this.btnClickValue + 1;    
    this.countValueTotal.emit(this.totalValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
