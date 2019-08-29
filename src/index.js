import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { 
    addTodo,
    updateTodo,
    deleteTodo,
    completeTodo,
} from './action';

const logger = store => next => action => {
    console.log('dispatching: ', action);
    let result = next(action);
    console.log('next state: ', store.getState());
    return result;
}

const trycatch = store => next => action => {
    try {
        return next(action);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

const store = createStore(reducers, applyMiddleware(
    logger, 
    trycatch
));

// const next = store.dispatch;
// store.dispatch = (action) => {
//     console.log('dispatching: ', action);
//     next(action);
//     console.log('next state: ', store.getState());
// }

// function addLogToDispatch(store) {
//     const next = store.dispatch;

//     store.dispatch = function dispatchWithLog(action) {
//         console.log('dispatching: ', action);
//         let result = next(action);
//         console.log('next state', store.getState());
//         return result;
//     }
// }

// function addTryToDispatch(store) {
//     const next = store.dispatch;
//     store.dispatch = function dispatchWithTry(action) {
//         try {
//             return next(action);
//         } catch (e) {
//             console.log("捕获到一个异常");
//             throw e;
//         }
//     }
// }





// console.log(store.getState());
let unsubscribe = store.subscribe(() => {
    // console.log(store.getState());
})

store.dispatch(addTodo('some think.'));
store.dispatch(addTodo('second think.'));

store.dispatch(completeTodo(0));
store.dispatch(updateTodo(0, 'is change.'));
store.dispatch(deleteTodo(1));

unsubscribe();