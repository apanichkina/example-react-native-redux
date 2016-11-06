

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
        default:
            return state
    }
}