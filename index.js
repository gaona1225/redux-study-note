import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
/*import './reducers/reducersTest';
import './reducers/reducersExample';
import './reducers/dispatchAsync';
import './reducers/subscriber';*/

import providerStore from './store/createStore';
import Home from './containers/home.jsx';

let name = 'zhangsan';
let storeTop = createStore(() => {}); // 空reducer情况下，Expected the reducer to be a function,createStore必须返回一个fn 所以在没有reducer情况下加入()=>{}

const store = providerStore;

render (
    <Provider store = { store }>
        <div>
            <p>redux study {name}</p>
            <p id = "newView">redux study newView {name}</p>
            <Home />
        </div>
    </Provider>,
    document.getElementById('root')
)