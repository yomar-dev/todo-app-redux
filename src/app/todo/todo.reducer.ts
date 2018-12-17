import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const initialState: Todo[] = [];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
    switch (action.type) {
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.text);
            return [...state, todo];

        default:
            return state;
    }
}
