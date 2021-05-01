import api from './API';
export const getMovieData = async (uri)=>{
    const movieData = await api.get(uri);
    return movieData;
}