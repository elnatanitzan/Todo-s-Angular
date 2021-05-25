import { isNgTemplate } from '@angular/compiler';
import { createNgModule } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { CoreService } from './core.service';
import { TodoFromServer } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  getTodosFromServer: any;
  todoList: TodoFromServer[] = [];
  
  constructor(private coreService: CoreService) {}

  ngOnInit() { 
    this.subTodos();
  }

  subTodos() {  
    this.getTodosFromServer = this.coreService.getTodos().subscribe((data: TodoFromServer[]) => {
      this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))]   : [...this.todoList, ...data];
      this.saveToLocaleStorage();
    })
  }

  idNumber: number = 200;

  addNewTask(event) {
    this.todoList.push({
      userId: 1,
      id: this.idNumber++,
      title: event,
      completed: false
    })
    this.saveToLocaleStorage();
  }

  deleteItem($event) {
    console.log($event);
    this.idNumber = $event;
    this.todoList = this.todoList.filter((item: TodoFromServer) => item.id !== $event);
    this.saveToLocaleStorage();
  }

  saveToLocaleStorage() {
    localStorage.setItem('items', JSON.stringify(this.todoList));
  }
}
