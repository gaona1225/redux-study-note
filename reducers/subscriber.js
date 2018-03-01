/**
* @file subscriber 监视 Redux store 更新
* @author gaona
*/

import { createStore, combineReducers } from "redux";
import addItemActionCreator from '../actions/setSubscriber';

console.groupCollapsed('subscriber start');
const itemsReducer = (state = [], action) => {
    console.log('itemsReducer was called with state', state, 'and action', action);

    switch (action.type) {
        case 'ADD_ITEM' :
            return [
                ...state,
                action.item
            ]
        default:
            return state;
    }
}

const reducer = combineReducers({
    items: itemsReducer
});

const store = createStore(reducer);

store.subscribe(() => {
    console.log('store has been updated. Latest store state:', store.getState());
    // 在这里更新视图
    console.log(document.getElementById('root').innerHTML);
    // document.getElementById('root').innerHTML += '<p>newView</p>';
});

store.dispatch(addItemActionCreator({ id: 1234, description: 'anything' }));
console.groupEnd();