import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/actionTypes'

const todoReducers = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {
                    id: action.id,
                    name: action.name,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return todos.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case DELETE_TODO:
            return todos.filter(todo => todo.id !== action.id)

        default:
            return todos;
    }
};
export default todoReducers;