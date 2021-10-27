import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Movie() {
    
    const featured_api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const imageurl="https://image.tmdb.org/t/p/w1280";
    const searchurl="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    return (
        <>
        
                <div>
                <h1>Hai hello</h1>
            </div>
    
        
        </>
        
    )
}
