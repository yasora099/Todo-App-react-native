import { ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './actionTypes';
let newTodoID = 0;

export const addNewTodo = (newTodo) => {
    return{
        type: ADD_TODO,
        id: newTodoID++,
        name: newTodo

    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
};

