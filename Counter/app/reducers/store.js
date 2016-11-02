

const initialState = {
    stories: []
};

export default function (state = initialState, action={}) {
    switch (action.type) {
        case 'ADD_STORY':
            return {
                stories: [
                    ...state.stories,
                    {
                        name: action.name,
                        categoryId: action.categoryId,
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