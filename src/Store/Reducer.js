const initialState = {
    message: 'Subscribe to sambros'
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === 'Message change') {
        newState.message = 'Danke schon'
    };
    return newState;
}

export default reducer;