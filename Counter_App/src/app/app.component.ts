import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterApp';
  btnClick = 0;
  btn10 = 10;
  btn20 = 20;
  btnM5 = -5;
  btnM10 = -10;
  countFromChild:number = 0;
  assignValue(count){    
    this.countFromChild = count;    
  }
}
