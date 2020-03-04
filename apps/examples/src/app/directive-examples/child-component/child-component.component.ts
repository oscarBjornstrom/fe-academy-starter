import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnDestroy {

@Input() childText;
@Input() childIndex;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    alert('child was destroyed');
  }

}
