export const appReducer = (state, action) => {
    let newState = { ...state };
    let {type, payload} = action;

    switch(type) {
        case 'logInUser':
            break;
        case 'logOutUser':
            break;
    }
    return newState;
}

export default appReducer;