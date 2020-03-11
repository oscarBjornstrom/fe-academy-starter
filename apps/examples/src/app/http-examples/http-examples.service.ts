import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Todo } from './http-examples.component';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpExamplesService {







  constructor(private http: HttpClient) {

   }

  getAllTodos() {
    const myHeaders = {
      'auth': 'sometoken',
    }
    const header = new HttpHeaders(myHeaders)

    const queryParams = new HttpParams();
    queryParams.set('movie', 'the-ring')


    return this.http.get('/api', {headers: header, params: queryParams});
  }


  postToBackend(todo: Todo) {

    return this.http.post('/api', todo)
  }

  deleteItembyId(id: string) {
    return this.http.delete(`/api/${id}`).subscribe();
  }

  putItem() {

    const newItem: Todo = {
      name: 'Item',
      description: 'updated'
    }

    return this.http.put('/api/123123123', newItem)
  }


  iWillError() {
    return this.http.get('/ap')
  }

  iMightError() {
    return this.http.get('api/randomError')
  }


  getList(search){
    const query = new HttpParams();
    query.set('search', search)
    return this.http.get('api/findByFilter', {params: query})
  }
}
