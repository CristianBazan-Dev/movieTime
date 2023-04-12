import React, { useContext } from "react";
import GlobalState from "../../../GlobalState";

function Main(props) {
  const state = useContext(GlobalState);
  const [movies, setMovies] = state.moviesAPI.movies;
  console.log(movies);
  return (
    <main>
      <div className="wrapper">
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
    </main>
  );
}

export default Main;
