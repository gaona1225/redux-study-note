import { createStore, combineReducers } from "redux";

// console.groupCollapsed('providerReducer start');
const timeReducer = (state = {}, action) => {
    console.log('_time reducer called with state ', state , ' and action ', action);

    switch (action.type) {
        case 'GET_TIME_REQUEST':
            return {
                ...state,
                frozen: false,
                time: action.time,
                type: action.type
            }
        case 'GET_TIME_SUCCESS':
            return {
                ...state,
                frozen: true,
                time: action.time,
                type: action.type
            }
        case 'GET_TIME_FAILURE':
            return {
                ...state,
                frozen: false,
                time: action.time,
                type: action.type
            }
        default:
            return state
    }
}

const providerReducer = combineReducers({
    time: timeReducer
});
export default providerReducer;