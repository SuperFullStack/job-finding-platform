import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Movie from './components/movie'

function App() {
  const featured_api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const imageurl="https://image.tmdb.org/t/p/w1280";
    const searchurl="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const [movies,setmovies]=useState([]);


    useEffect(()=>{
        fetch(featured_api)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setmovies(data.results)
        })
    },[]);


  return (
    <div className="entire">
      <header>
        <input type="text" className="search" placeholder="Search..."/>
      </header>
    <div className="movie-container">
      {movies.length>0 && movies.map((movie)=>
    
       <Movie key={movie.id} {...movie}/>
      )}
 
       </div>
    </div>
  );
}

export default App;
