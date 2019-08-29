import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;