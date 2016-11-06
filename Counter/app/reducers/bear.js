

const initialState = {
    bearStories: []
};

export default function (state = initialState, action={}) {
    switch (action.type) {
        case 'SET_BEAR_STORIES':
            return {
                ...state,
                bearStories: action.stories
            };
        default:
            return state
    }
}