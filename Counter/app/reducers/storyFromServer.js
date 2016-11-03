

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
        case 'BUY_STORY':
            console.log('I am buy story reducer');
            let boughtStory= state.SHOP.items.filter(t => t.id == action.id)[0];
            console.log('boughtStory: ');
            console.log(boughtStory);
            let nextState = {};
            return Object.assign({}, state,{items: [...state.USER.items, boughtStory]});

        default:
            return state
    }
}



export default postsByPurpose