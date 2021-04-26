import movieReducer from '../../reducers/movies';
import { movieList, sortOrder } from '../fixures/movies'

test('should set default state', () => {
    const state = movieReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set movie state',()=>{
    const stateObj = {}
    const action = {
        type: 'SET_MOVIES',
        movies: movieList
    };
    const state = movieReducer(stateObj,action);
    expect(state).toEqual({
        ...stateObj,
        movies: movieList
    })
})

test('should set sort order state',()=>{
    const stateObj = {}
    const action = {
        type: 'SET_SORT_ORDER',
        sortOrder
    };
    const state = movieReducer(stateObj,action);
    expect(state).toEqual({
        ...stateObj,
        sortOrder
    })
})
