import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoFromServer } from 'src/app/todo.interface';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  isSticky: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(500)]]
    }) 
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.isSticky = window.pageYOffset >= 70;
    }

  addTask() {
    this.taskTitle$.emit(this.form.value.task);
    this.simpleAlert();
    this.form.reset();
  }
  createId(createIdFrom) {
    this.createId$.emit(createIdFrom);
  }
  
  simpleAlert(){  
    Swal.fire({
      title: 'Task added!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }) 
  }

}
