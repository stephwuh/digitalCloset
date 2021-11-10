const initialState = {
    signInStatus : false,
    userId : ""
}

const signInStatusReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'signInStatus/toggleSignInStatus':
            return {...state, signInStatus: !(state.signInStatus), userId: action.payload};
        default:
            return state;
    }
}

export default signInStatusReducer;