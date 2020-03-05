import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examples';
  textToBeShown = 'A cool text to be shown';

  testingTwoWay;

  alertThisInTheParent(text) {
    
    alert(text);
  }

  logInputValue() {
    console.log(this.testingTwoWay);
  }
}
