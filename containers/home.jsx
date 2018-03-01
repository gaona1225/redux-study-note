/**
 * @file react+redux 学习 Provider-and-connect
 * @author gaona
 * 点击第一次按钮触发GET_TIME_REQUEST，再次点击触发GET_TIME_SUCCESS，在GET_TIME_SUCCESS响应之后将按钮冻结
 * @desc https://github.com/react-guide/redux-tutorial-cn/blob/master/11_Provider-and-connect.js
 */

import React from 'react';
import {connect} from "react-redux";
import getTime from '../actions/setProvider';
import providerStore  from '../store/createStore';

let counter = 0;
const DELAY = 500;
class Home extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            alt: 'home',
            type: ''
        }
    }

    handleClick (e) {
        e.preventDefault();
        console.log('handleClick');
        console.log(this.refs.getTimeBtn);
        let btnType = '';
        switch (counter) {
            case 0:
                btnType = 'GET_TIME_REQUEST'; break;
            case 1:
                btnType = 'GET_TIME_SUCCESS'; break;
            default:
                return btnType = 'GET_TIME_FAILURE'
        }
        this.setState({
            type: btnType
        });
        counter ++ ;
        // 点击按钮每次触发不同type，触发不同action，分发不同数据，同步变更view层，
        this.props.dispatch(getTime(btnType, DELAY));
    }

    render() {
        let { frozen, time, reduxState } = this.props;
        let attrs = {
            type: this.state.type
        };
        if (frozen) {
            attrs.disabled = true;
        }
        return (
            <div>
                <h1>Provider and connect example</h1>
                <span>
                    <b>What time is it?</b>
                    {time ? `It is currently ${time}` : 'No idea yet...'}
                </span>
                <br /> <br />
                <button {...attrs} onClick = {this.handleClick} ref = "getTimeBtn" >Get time--{this.state.type}!</button>
                <pre>
                    redux state = { JSON.stringify(reduxState, null, 2)}
                </pre>
            </div>
        )
    }
}

// 这是我们的 select 函数, 它会把我们需要在属性 (prop) 中对我们的组件暴露的数据从 state 中抽离出来
const mapStateToProps = (state) => {
    console.log(state);
    return {
        frozen: state.time.frozen || '',
        time: state.time.time || '',
        reduxState: state || {}
    }
}
// Connect 我们能够通过 props 取到特定的数据,Connect 提供的分发函数,
const ConnectedHome = connect(mapStateToProps)(Home);

export default ConnectedHome;