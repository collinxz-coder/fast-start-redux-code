const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        
        case 'UPDATE_TODO':
            return state.map(todo => 
                todo.id === action.id ?
                    { ...todo, text: action.text} :
                    todo
            )
        
        case 'DELETE_TODO':
            return state.filter(todo => 
                todo.id !== action.id
            )
        
        case 'COMPLETE_TODO':
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, completed: !todo.completed } :
                    todo
            )
        
        default:
            return state;
    }
}

export default todos;