import { Injectable } from '@angular/core';
import { TodoFromServer, TodoItem } from './todo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  getTodos() {
    return this.httpClient.get(`${this.baseUrl}todos`)
  }

  postTodo(item: TodoFromServer) {
    return this.httpClient.post(`${this.baseUrl}posts`, item)
  }

  todosList: TodoItem[] = [];

}
