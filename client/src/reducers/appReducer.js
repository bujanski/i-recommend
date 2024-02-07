export const appReducer = (state, action) => {
    let newState = { ...state };
    let {type, payload} = action;

    switch(type) {
        case 'logInUser':
            break;
        case 'logOutUser':
            break;
        case 'startAddItem':
            newState.selectingCategory = payload;
            newState.addingItem = true;
            return newState;
        case 'cancelAddItem':
            // newState.selectingCategory = null;
            newState.addingItem = false;
            return newState;
    }
    return newState;
}

export default appReducer;