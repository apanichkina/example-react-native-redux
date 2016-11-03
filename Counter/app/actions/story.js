import * as types from './actionTypes';

export function seeStory(id:number):Action {
    return {
        type: types.STORY_IN_FOCUS,
        id
    }
}