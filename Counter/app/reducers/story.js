

const initialState = {
    storyId: 0
};

export default function (state = initialState, action={}) {
    switch (action.type) {
        case 'STORY_IN_FOCUS':
            return {
                storyId: action.id
                
            };
        default:
            return state
    }
}