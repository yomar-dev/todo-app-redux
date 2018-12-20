import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFilter from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
    });
  }

  changeFilter(filter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action);
  }

}
