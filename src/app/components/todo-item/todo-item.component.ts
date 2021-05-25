import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoFromServer, TodoItem } from 'src/app/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() itemToDisplay: TodoFromServer;
  
  @Output() deleteThisItem$ = new EventEmitter(null);

  deleteItem(itemId) {
    this.deleteThisItem$.emit(itemId)
  }

  toggleDone() {
    this.itemToDisplay.completed = !this.itemToDisplay.completed;
  }
}
