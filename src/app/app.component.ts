import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  currentvalue=1;
  mayvar=[1];
  expand(){
    this.currentvalue++;
    this.mayvar.push(this.currentvalue);
  }
}
