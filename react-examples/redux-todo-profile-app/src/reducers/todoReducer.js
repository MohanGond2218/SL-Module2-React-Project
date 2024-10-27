const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos : [...state.todos, action.paylod]
        };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos : [...state.todos.filter((todo, index)=>index!==action.index), action.paylod]
        };    
        default:
            return state;
    }
}

export default todoReducer;