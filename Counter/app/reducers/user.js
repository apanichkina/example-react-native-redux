const initialState = {
    userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFubiIsInR5cGUiOiJ1c2VyIn0.hAxAvPxOJCm73rVwR54MwP7P3SKDmFG0Prsn_JGGzcQ'
};


export default function (state = initialState, action={}) {
    switch (action.type) {
        case 'SET_USER_TOKEN':
            return {
                userToken: action.token

            };
        default:
            return state
    }
}