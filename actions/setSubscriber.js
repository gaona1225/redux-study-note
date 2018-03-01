/**
* @file subscriber 事例中配置dispatch的action
* @author gaona
*/

const addItemActionCreator = (item) => {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

export default addItemActionCreator;