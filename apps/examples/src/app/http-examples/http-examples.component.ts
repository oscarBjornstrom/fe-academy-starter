import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpExamplesService } from './http-examples.service';
import { tap, map, catchError, retry, switchMap } from 'rxjs/operators';
import { of, fromEvent } from 'rxjs';

export interface Todo {
  name: string;
  description: string;
  completed?: boolean;
  id?: string;
}

@Component({
  selector: 'app-http-examples',
  templateUrl: './http-examples.component.html',
  styleUrls: ['./http-examples.component.css']
})
export class HttpExamplesComponent implements OnInit, AfterViewInit {
// Dont do this
  // val = this.httpService.getAllTodos().pipe(map((val) => {
  //   console.log(val);
  //   return val;
  // }));


  @ViewChild('input') input; 
 


  name;
  description;
  
  val = this.httpService.getAllTodos().pipe(tap(console.log));


  constructor(public httpService: HttpExamplesService) { }


  ngOnInit(): void {

    this.httpService.getList('').subscribe(console.log);






    // this.httpService.iWillError().pipe(catchError(e => of('I errored'))).subscribe(console.log)
    // this.httpService.iWillError().pipe(
    //   retry(5),
    //   ).subscribe(
    //   () => {}
    // )
    // this.httpService.iMightError().subscribe(console.log);
  }

  addTodo() {
    const newTodo: Todo = {name: this.name, description: this.description }
    this.httpService.postToBackend(newTodo).subscribe();
  }


  deleteTodo(id) {
    this.httpService.deleteItembyId(id);
  }

  putItem() {
    this.httpService.putItem().subscribe();
  }



  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((e: Event) => {
        const target = (e.target as HTMLInputElement)
        return target.value;
       
      }),

    ).subscribe(console.log)
  }



}
