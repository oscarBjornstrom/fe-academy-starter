import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent } from './examplecomp/examplecomp.component';
import { ParentComponentComponent } from './directive-examples/parent-component/parent-component.component';
import { ChildComponentComponent } from './directive-examples/child-component/child-component.component';
import { RainbowDirective } from './directive-examples/rainbow.directive';
import {FormsModule} from '@angular/forms';
import { DataPassingOneComponent } from './data-passing-one/data-passing-one.component';
import { DataPassingTwoComponent } from './data-passing-two/data-passing-two.component';
import { DatapassingService } from './datapassing.service';
import { HomeComponent } from './routing-examples/home/home.component';
import { NotFoundComponent } from './routing-examples/not-found/not-found.component';
import { TodosComponent } from './routing-examples/todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './routing-examples/todos/todo-list/todo-list.component';
import { TodoDetailComponent } from './routing-examples/todos/todo-detail/todo-detail.component';
import { AddTodoComponent } from './routing-examples/todos/add-todo/add-todo.component';





@NgModule({
  declarations: [AppComponent, ExampleComponent, ParentComponentComponent, ChildComponentComponent, RainbowDirective, DataPassingOneComponent, DataPassingTwoComponent, HomeComponent, NotFoundComponent, TodosComponent, TodoListComponent, TodoDetailComponent, AddTodoComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [DatapassingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
