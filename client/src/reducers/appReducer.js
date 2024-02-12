export const appReducer = (state, action) => {
    let newState = { ...state };
    let {type, payload} = action;

    switch(type) {
        case 'logInUser':
            newState.userLoggedIn = true;
            return newState;
        case 'logOutUser':
            newState.userLoggedIn = false;
            return newState;
        case 'startCreateAccount':
            newState.modalOpen = true;
            return newState;
        case 'cancelCreateAccount':
            newState.modalOpen = false;
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