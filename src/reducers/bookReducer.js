 const createBookReducer = (state=[],action) => {

    switch(action.type){
        case 'CREATE_BOOK':
            return [
                ...state,
                Object.assign({},action.payload)
            ]
        default:
            return state;
    }
}

export default createBookReducer;