import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { HighlightEvenDirective } from './directives/highlight-even.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    HighlightEvenDirective
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
