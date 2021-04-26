import {setMovies,setSortOrder} from '../../actions/movies';
import {movieList,sortOrder} from '../../actions/movies';

test('should generate setMovie action object',()=>{
    const action = setMovies(movieList);
    expect(action).toEqual({
        type:'SET_MOVIES',
        movies:movieList
    });
});

test('shoould generate setSortorder action object',()=>{
    const action = setSortOrder(sortOrder);
    expect(action).toEqual({
        type:"SET_SORT_ORDER",
        sortOrder
    })
})
