import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {history} from '../routers/AppRouter';
import {getMovieData} from '../services/movies';
import { setMovies, setSortOrder } from '../actions/movies';
import Poster from './poster';
import DetailsCard from './DetailsCard';

export const Posters = (props) => {
    const [movie, setMovie] = useState({})
    const movies = useSelector((state)=>state.movies.moviesList)
    const isLoggedIn = useSelector((state)=>!!state.auth.uid)
    const sortOrder = useSelector((state)=>state.movies.sortOrder);
    const dispatchMovieData = useDispatch();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sortBy = urlParams.has('sortBy') && urlParams.get('sortBy');
        const getMovies =  async ()=>{
            const resp = await getMovieData(`?sortBy=${sortBy}`);
            dispatchMovieData(setMovies(resp.movieList))
            dispatchMovieData(setSortOrder(resp.sortOrder));
            if(isLoggedIn){
                const id = sortBy===false ? 'a-z': sortBy;
                let radiobtn = document.getElementById(id);
                radiobtn.checked = true;   
            }
        }
        getMovies();
    },[])
    const onClickEventHandler = (movie)=>{
        setMovie(movie);
        const detailsCard = document.getElementById("detailsCard");
        detailsCard.style.display = "block";
    }
    const onChangeFilterHandler = (e)=>{
        if(e.target.value==='a-z'){
            history.push('/');
        }else{
            history.push(`/?sortBy=${e.target.value}`);
        }
    }
    return (
        <div className='content-container'>
            {
               isLoggedIn && (<div className="content-container__sort">
                    <ul className="filter-container longhand">
                        <li className="filter-item">
                            <input id='a-z' type="radio" name="radio" value='a-z' onChange={(e)=>onChangeFilterHandler(e)}/><label htmlFor='a-z'>A-Z</label>
                        </li>
                        {
                            sortOrder && sortOrder.map((sortOption)=>{
                            return  (
                                <li className="filter-item" key={sortOption.label}>
                                    <input id={sortOption.valueToOrderBy} type="radio" name="radio" value={sortOption.valueToOrderBy} onChange={(e)=>onChangeFilterHandler(e)}/><label htmlFor={sortOption.valueToOrderBy}>{sortOption.label}</label>
                                </li>)
                            })
                        }
                    </ul>
                </div>)
            }    
            <div className='content-container__poster'>
                {
                    movies && movies.map((movie)=>{
                        return <Poster key={movie.id} movie={movie} onClickEventHandler={onClickEventHandler}/>
                    })
                }
                <DetailsCard movie={movie}/>
            </div>
        </div>
    )
}

export default Posters;
