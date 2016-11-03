

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

function postsByPurpose(state = {}, action={}) {
    switch (action.type) {
        case 'INVALIDATE_PURPOSE':
        case 'RECEIVE_STORIES':
        case 'REQUEST_STORIES':
            return Object.assign({}, state, {
                [action.purpose]: posts(state[action.purpose], action)
            });
        default:
            return state
    }
}



export default postsByPurpose