import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'fe-academy-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: string;
  @Input() index: number;
  
  @Output() startEdit: EventEmitter<number> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  editTodo() {
    this.startEdit.emit(this.index);
  }

}
