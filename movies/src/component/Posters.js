import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from '../services/API';
import {history} from '../routers/AppRouter';
import { setMovies, setSortOrder } from '../actions/movies';
import Poster from './poster';
import DetailsCard from './DetailsCard';

export const Posters = (props) => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sortBy = urlParams.has('sortBy') && urlParams.get('sortBy');
        api.get(`http://localhost:3030/?sortBy=${sortBy}`).then((resp) => {
            props.setMoviesList(resp.movieList)
            props.setSortOrder(resp.sortOrder);
            if(props.isLoggedIn){
                const id = sortBy===false ? 'a-z': sortBy;
                console.log('id',id)
                let radiobtn = document.getElementById(id);
                radiobtn.checked = true;   
            }
        });
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
               props.isLoggedIn && (<div className="content-container__sort">
                    <ul className="filter-container longhand">
                        <li className="filter-item">
                            <input id='a-z' type="radio" name="radio" value='a-z' onChange={(e)=>onChangeFilterHandler(e)}/><label htmlFor='a-z'>A-Z</label>
                        </li>
                        {
                            props.sortOrder && props.sortOrder.map((sortOption)=>{
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
                    props.movieList && props.movieList.map((movie)=>{
                        return <Poster key={movie.id} movie={movie} onClickEventHandler={onClickEventHandler}/>
                    })
                }
                <DetailsCard movie={movie}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    movieList: state.movies.movies,
    sortOrder: state.movies.sortOrder,
    isLoggedIn: !!state.auth.uid

});

const mapDispatchToProps = (dispatch) => ({
    setMoviesList: (movies) => dispatch(setMovies(movies)),
    setSortOrder: (sortOrder)=>dispatch(setSortOrder(sortOrder))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posters);