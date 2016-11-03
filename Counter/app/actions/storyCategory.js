import * as types from './actionTypes';


export function setCategoryFilter(categoryId:number):Action {
    return {
        type: types.SET_CATEGORY_FILTER,
        categoryId
    }
}

export function addCategory(name:string, id:number):Action {
    return {
        type: types.ADD_CATEGORY,
        id,
        name
    }
}
