import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  renderComponent = true;

  horse = true;  

  childItems = ['child 1', 'child 2', 'child 3'];
  constructor() { }

  ngOnInit(): void {
  }

  toggleHorse() {
    this.horse = !this.horse;
  }

  toggleComponent() {
    this.renderComponent = !this.renderComponent;
  }

  get cssModifiers() {
    return {
      'red-paragraph': this.horse
    }
  }
}
