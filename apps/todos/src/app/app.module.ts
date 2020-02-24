import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { HighlightEvenDirective } from './directives/highlight-even.directive';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { TodosComponent } from './views/todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './views/auth/auth.component';
import { HeaderComponent } from './core/header/header.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    HighlightEvenDirective,
    NotFoundComponent,
    HomeComponent,
    TodosComponent,
    AuthComponent,
    HeaderComponent,
    TodoDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
