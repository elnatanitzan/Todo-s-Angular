import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoFromServer, TodoItem } from 'src/app/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() listToDisplay: TodoFromServer[];

  @Output() deleteThisItem$ = new EventEmitter(null);

  deleteItem(itemId) {
    this.deleteThisItem$.emit(itemId);
  }

}
