

const initialState = {
    visibilityFilter: 'all',
    stories: [],
    categories: []
};

export default function (state = initialState, action={}) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                visibilityFilter: action.filter
            };
        case 'SET_STORY_CATEGORY':
            return {
                ...state,
                categories: action.category
            };
        case 'ADD_STORY':
            return {
                stories: [
                    ...state.stories,
                    {
                        name: action.name,
                        id: action.id,
                        bought: false
                    }
                ]
            };
        case 'BUY_STORY':
            return  {
                stories: state.stories.map((story) => {
                    if (story.id === action.id) {
                        return Object.assign({}, story, {
                            bought: !story.bought
                        })
                    }
                    return story
                })
            };
        default:
            return state
    }
}