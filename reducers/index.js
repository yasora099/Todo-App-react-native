import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

export const allReducers = combineReducers({
    todoReducers,
});