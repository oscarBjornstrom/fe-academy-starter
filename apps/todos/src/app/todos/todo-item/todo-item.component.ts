import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fe-academy-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: string;
  @Input() index: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
