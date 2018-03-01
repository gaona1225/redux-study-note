/**
 * @file react+redux 学习 Provider-and-connect -- store创建
 * @author gaona
 * @desc https://github.com/react-guide/redux-tutorial-cn/blob/master/11_Provider-and-connect.js
 */

 import { createStore } from "redux";
 import { applyMiddleware } from 'redux';
 import providerReducer from '../reducers/providerReducer';
 import getTime from '../actions/setProvider';

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

 // const providerStore = createStore(providerReducer);
 const providerStore = finalCreateStore(providerReducer);

 console.log('providerStore has been updated. Latest store state:', providerStore.getState());

// providerStore.dispatch(getTime(50));

 export default providerStore;