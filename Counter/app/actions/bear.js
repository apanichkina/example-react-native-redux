import * as types from './actionTypes';

export function setBearStories(stories):Action {
    let arr = stories;
    let bearStories=[];
    arr.forEach(function(item,i,arr){
            item=item.replace(".raw","");
            bearStories[i] = parseInt(item,10);
        }
    );
    return {
        type: types.SET_BEAR_STORIES,
        stories: bearStories
    }
}
