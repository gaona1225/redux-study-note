/**
* @file dispatch-async 事例中配置dispatch的action
* @author gaona
*/

const setDispatch = (message) => {
    /*return {
        type: 'SAY',
        message
    }*/
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: 'SAY',
                message
            })
        }, 2000)
    }
}

export default setDispatch;