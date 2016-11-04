

const initialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

function posts(state = initialState, action={}) {
    switch (action.type) {
        case 'INVALIDATE_PURPOSE':
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case 'REQUEST_STORIES':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case 'RECEIVE_STORIES':
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

function addInnerState(state = initialState, action={}, newStory={}) {
    switch (action.type) {
        case 'BUY_STORY':
            return Object.assign({}, state, {
                items: [...state.items, newStory]
            });
        default:
            return state
    }
}

function postsByPurpose(state = {}, action={}) {
    switch (action.type) {
        case 'INVALIDATE_PURPOSE':
        case 'RECEIVE_STORIES':
        case 'REQUEST_STORIES':
            return Object.assign({}, state, {
                [action.purpose]: posts(state[action.purpose], action)
            });
        case 'BUY_STORY':
            let boughtStory= state.SHOP.items.filter(t => t.id == action.id)[0];
            return Object.assign({}, state, {
                ['USER']: addInnerState(state['USER'], action, boughtStory)
            });

        default:
            return state
    }
}



export default postsByPurpose