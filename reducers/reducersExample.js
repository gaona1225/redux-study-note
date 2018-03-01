import { createStore, combineReducers } from "redux";

console.groupCollapsed('reducerExample start');
const userReducer = function (state = {stateName: 'userReducerName'}, action) {
    console.log('userReducer was called with state', state, 'and action', action);
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}

const itemsReducer = function (state = {stateName: 'itemsReducerName'}, action) {
    console.log('itemsReducer was called with state', state, 'and action', action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                item: action.item
            }
        default:
            return state;
    }
}

const setNameActionCreator = (name) => {
    return {
        type: 'SET_NAME',
        name: name
    }
}

const reducers = combineReducers({
    user: userReducer,
    items: itemsReducer
});

const storeExample = createStore(reducers);
console.log('storeDemo state after initialization:', storeExample.getState());
storeExample.dispatch({
    type: 'AN_ACTION'
});
console.log('storeDemo state after dispatch:', storeExample.getState());

storeExample.dispatch(setNameActionCreator('bob'));
console.log('storeDemo state after dispatch setNameActionCreator:', storeExample.getState());
console.groupEnd('reducerExample end');

export default {reducers, setNameActionCreator};