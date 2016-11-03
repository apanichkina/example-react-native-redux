import * as types from './actionTypes';


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
