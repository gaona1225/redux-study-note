import { createStore, combineReducers } from "redux";

let storeTop = createStore(() => {}); // 空reducer情况下，Expected the reducer to be a function,createStore必须返回一个fn 所以在没有reducer情况下加入()=>{}

console.groupCollapsed('top start');
let reducer = (...args) => {
    console.log('Reducer was called with args', args);
}
let store = createStore(reducer);
console.log(store);
console.groupEnd('top end');

console.groupCollapsed('reducer_0 start');
let reducer_0 = (state, action) => {
    console.log('Reducer_0 was called with state', state, 'and action', action);
    if (typeof state === 'undefined') {
        return {
            reducerName: 'reducer'
        }
    }
    return state;
}
let store_0 = createStore(reducer_0);
console.log(store_0);
// 通过调用getState读取redux保存的state
console.log('store_0 state after initialization:', store_0.getState());
console.groupEnd('store_0 end');

console.groupCollapsed('reducer_1 start');
let reducer_1 = (state = {}, action) => { // 配置state的初始值
    console.log('Reducer_1 was called with state', state, 'and action', action);
    return state;
}

let reducer_2 = (state = {}, action) => {
    console.log('Reducer_2 was called with state', state, 'and action', action);
    switch (action.type) {
        case 'SAY_SOMETHING':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
    }
}

const reducersTest = combineReducers({
    reducer_1: reducer_1,
    reducer_2: reducer_2
});

let store_1 = createStore(reducersTest);
console.log('store_1 state after initialization:', store_1.getState());
let store_2 = createStore(reducersTest);
console.log('store_2 state after initialization:', store_2.getState());
console.groupEnd('store_2 end');

console.groupCollapsed('reducersDemo start');
const userReducer = function (state = {stateName: 'userReducerName'}, action) {
    console.log('userReducer was called with state', state, 'and action', action);
    switch (action.type) {
        case 'SAY_SOMETHING':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
    }
}

const itemsReducer = function (state = {stateName: 'itemsReducerName'}, action) {
    console.log('itemsReducer was called with state', state, 'and action', action);
    switch (action.type) {
        case 'SAY_SOMETHING':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
    }
}

const reducersDemo = combineReducers({
    user: userReducer,
    items: itemsReducer
});

const storeDemo = createStore(reducersDemo);
console.log('storeDemo state after initialization:', storeDemo.getState());
console.groupEnd('storeDemo end');

export default {};