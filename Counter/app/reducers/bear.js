

const initialState = {
    bearStories: [],
    connectedBearName: ''
};

export default function (state = initialState, action={}) {
    switch (action.type) {
        case 'SET_BEAR_STORIES':
            return {
                ...state,
                bearStories: action.stories
            };
        case 'SET_CONNECTED_BEAR_NAME':
            return {
                ...state,
                connectedBearName: action.name
            };
        case 'UPLOAD_STORY':
            return {
                bearStories: [...state.bearStories, action.id]
            };
        case 'DELETE_STORY':
            let bearStories = state.bearStories;
            let index = bearStories.indexOf(action.id);
            if (index >= 0) bearStories.splice(index,1);
            return {
                bearStories: bearStories
            };
        default:
            return state
    }
}