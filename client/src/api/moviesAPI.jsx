import React, { useState, useEffect } from "react";
import axios from "axios";

function MoviesAPI(props) {
  const [movies, setMovies] = useState([]);
  const [callback, setCallback] = useState(false);


  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=02c4d81fefece2be12b10769a9e9751c&language=es-ES`
      );
      setMovies(res.data.results);
      setPagesCount(res.data.total_pages);
    };
    getMovies();
  }, [callback]);






 

  return {
    movies: [movies, setMovies],
  };
}

export default MoviesAPI;
