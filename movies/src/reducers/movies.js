export default (state = {}, action)=>{
    switch (action.type){
        case 'SET_MOVIES':
            return {
                ...state,
                moviesList: action.movies
            };
        case 'SET_SORT_ORDER':
            return {
                ...state,
                sortOrder: action.sortOrder
            }
        default:
            return state
    }
}