import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.validFilters;
  countPendingTodos: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.countPendings(state.todos);
    });
  }

  changeFilter(filter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  countPendings(todos: Todo[]) {
    this.countPendingTodos = todos.filter((todo) => !todo.completed ).length;
  }

  clearCompleted() {
    const action = new fromTodo.DeleteAllCompleteTodoAction();
    this.store.dispatch(action);
  }

}
