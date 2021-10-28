import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Movie({title,poster_path,overview,vote_average}) {
    const imageurl="https://image.tmdb.org/t/p/w1280";
    
    return (
        <>
            <div className="movie-info">
                <h3>{title}</h3>
                <div className="minfo">
                <img src={imageurl + poster_path}/>
                </div>
                <h6>Ratings - {vote_average}</h6>
                <div className="overview">
                    <h5>{overview}</h5>
                </div>
            </div>
        </>
        
    )
}
