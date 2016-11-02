import * as types from './actionTypes';

export function setVisibilityFilter(filter:string):Action {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
}
export function setStoryCategories(category):Action {
    return {
        type: types.SET_STORY_CATEGORY,
        category
    }
}
export function buyStory(id:number):Action {
    return {
        type: types.BUY_STORY,
        id
    }
}
export function addStory(name:string, id:number):Action {
    return {
        type: types.ADD_STORY,
        id,
        name
    }
}