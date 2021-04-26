import React from 'react';

export const Poster = ({ movie, onClickEventHandler }) => {
    const onPosterClickEventHandler = (e,movie)=>{
        onClickEventHandler(movie)
    }
    return (
    <div className="poster">
        <img src={movie.imageUrl} loading="lazy" className="poster-img" alt={movie.synopsis} onClick={(e)=>onPosterClickEventHandler(e,movie)}/>
    </div>)
}

export default Poster;
