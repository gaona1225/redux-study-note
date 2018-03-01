/**
* @file dispatch-async 事例中配置dispatch的reducer
* @author gaona
*/

import { createStore, combineReducers } from "redux";
import { applyMiddleware } from 'redux';
import setDispatch from '../actions/dispatchAsync';

const thunkMiddleware = function ({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}

const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);


console.groupCollapsed('dispatch-async start');
const speaker = (state = {}, action) => {
    console.log('speaker was called with state', state, 'and action', action);
    switch (action.type) {
        case 'SAY': 
            return {
                ...state,
                message: action.message
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    speaker: speaker
});

// const store = createStore(reducer);
const store = finalCreateStore(reducer);

console.log("\n", 'Running our normal action creator:', "\n");
console.log(new Date());
store.dispatch(setDispatch('Hi'));
console.log(new Date());
console.log('store state after action SAY:', store.getState());
console.groupEnd();