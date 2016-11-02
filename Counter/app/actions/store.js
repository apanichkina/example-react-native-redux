import * as types from './actionTypes';


export function setCategoryFilter(categoryId:number):Action {
    return {
        type: types.SET_CATEGORY_FILTER,
        categoryId
    }
}
export function buyStory(id:number):Action {
    return {
        type: types.BUY_STORY,
        id
    }
}
export function addStory(name:string, id:number, categoryId:number):Action {
    return {
        type: types.ADD_STORY,
        id,
        name,
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