import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const walk = new Todo('Walk');
const run = new Todo('Run');

walk.completed = true;

const initialState: Todo[] = [walk, run];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
    switch (action.type) {
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.text);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map((todoEdit) => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completed: !todoEdit.completed
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.EDIT_TODO:
            return state.map((todoEdit) => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            });

        default:
            return state;
    }
}
