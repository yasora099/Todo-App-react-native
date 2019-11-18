import React, {Component} from 'react';
import {T} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {allReducers} from '../reducers';
import AddTodo from './AddTodos';
import TodoList from './TodoList';

let store = createStore(allReducers);

export default class ToDoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <AddTodo/>
                <TodoList/>
            </Provider>
        );
    }

}

