/**
* @file Provider-and-connect 事例中配置dispatch的action
* @author gaona
*/

const getTime = (dispatchType, delay) => {
    console.log(dispatchType);
    return function (dispatch) {
        setTimeout (() => {
            const d = new Date();
            const ms = ('000' + d.getMilliseconds()).slice(-3);
            dispatch({
                type: dispatchType,
                time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`,
                delay
            });
        }, 2000)
    }
}

export default getTime;