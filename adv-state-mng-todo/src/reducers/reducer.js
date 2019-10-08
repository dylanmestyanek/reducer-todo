export const initialState = [{
    item: 'Learn about reducers',
    completed: 'false',
    id: 38929648292
}]

export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            console.log(state)
            return [...state, action.payload]
        default:
            return state;
    }
}