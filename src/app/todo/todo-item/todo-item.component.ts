import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtTodo') txtTodo: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;

  editing: boolean;

  constructor() { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtTodo.nativeElement.select();
    }, 1);
  }

  finishedEdition() {
    this.editing = false;
  }

}
