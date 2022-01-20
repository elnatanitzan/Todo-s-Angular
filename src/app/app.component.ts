import { isNgTemplate } from '@angular/compiler';
import { createNgModule } from '@angular/compiler/src/core';
import { Component, HostListener, OnInit } from '@angular/core';
import { CoreService } from './core.service';
import { TodoFromServer } from './todo.interface';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  getTodosFromServer: any;
  todoList: TodoFromServer[] = [];
  isSticky: boolean = false;

  constructor(private coreService: CoreService) {}

  ngOnInit() { 
    this.subTodos();
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.isSticky = window.pageYOffset >= 70;
  }

  subTodos() {  
    this.getTodosFromServer = this.coreService.getTodos().subscribe((data: TodoFromServer[]) => {
      this.todoList = localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [...this.todoList, ...data];
      this.saveToLocaleStorage();
    })
  }

  idNumber: string;

  addNewTask(event) {
    this.todoList.push({
      userId: 1,
      id: Math.random().toString(36),
      title: event,
      completed: false
    })
    this.saveToLocaleStorage();
  }

  deleteItem($event) {
    Swal.fire({  
      title: 'Are you sure want to remove Task?',  
      text: 'You will not be able to recover this!',  
      icon: 'warning',  
      showCancelButton: true,  
      cancelButtonText: 'No'  
    }).then((result) => {  
      if (result.value) {  
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',    
          showConfirmButton: false,
          timer: 1500 
        })
        this.idNumber = $event;
        this.todoList = this.todoList.filter((item: TodoFromServer) => item.id !== $event);
        this.saveToLocaleStorage();
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire({
          title: 'Cancelled',  
          icon: 'error',
          showConfirmButton: false,
          timer: 1500 
        })  
      }  
    })  
  }

  saveToLocaleStorage() {
    localStorage.setItem('items', JSON.stringify(this.todoList));
  }
}
