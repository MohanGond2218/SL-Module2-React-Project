

const initialState = {
    name: "mohan gond",
    email: 'msg@gmail.com'
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME' :
            return {
                ...state,
                name: action.payload
            };
        case 'SET_EMAIL' : 
            return {
                ...state,
                email: action.payload
            };
        default :
            return state;
    }
}

export default userReducer;