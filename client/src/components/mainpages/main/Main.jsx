import React, { useContext, useState, useEffect } from "react";
import GlobalState from "../../../GlobalState";
import axios from "axios";

function Main(props) {
  const state = useContext(GlobalState);
  const [movies, setMovies] = state.moviesAPI.movies;
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [callback, setCallback] = useState(false);

const getMoreMovies = async () => {
  let counter = 0; 
  let add = counter++; 
  counter = add; 

}



  return (
    <main>
      <div className="wrapper" >
        {movies.map((movie) => {
          return (
            <div className="card" key={movie.id}>
              <div className="front">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />

                {/* <div className="back">
                  <h3>{movie.title}</h3>
                  <h4>{movie.release_date}</h4>
                  <h5>{movie.vote_average}</h5>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={getMoreMovies}>Get more movies</button>
    </main>
  );
}

export default Main;
