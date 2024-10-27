//create a redux store
//create it using a function - createStore() - available in redux library

import { createStore } from "redux";

//set the initial state of the app
const initialState = {count : 0};

//reducer function : listen to actions and update the state
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {...state, count:state.count+1};
        case 'DECREMENT' :
            return {...state, count:state.count-1};
        default :
        return state;
    }
};

//create a redux store to hold the state
const store = createStore(reducer);

export default store;