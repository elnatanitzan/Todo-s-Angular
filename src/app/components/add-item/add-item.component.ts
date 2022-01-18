import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoFromServer } from 'src/app/todo.interface';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  
  @Input() createIdFrom:number;
  @Output() taskTitle$ = new EventEmitter(null);
  @Output() createId$ = new EventEmitter(null);
  
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]]
    })
    
  }

  addTask() {
    this.form.valid ? this.taskTitle$.emit(this.form.value.task) : alert('add task first!');
    this.form.reset();
  }
  createId(createIdFrom) {
    this.createId$.emit(createIdFrom);
  }

}
