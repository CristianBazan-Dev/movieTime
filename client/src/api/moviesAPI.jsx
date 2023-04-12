import React, { useState, useEffect } from "react";
import axios from "axios";

function MoviesAPI(props) {
  const [movies, setMovies] = useState([]);
  const [callback, setCallback] = useState(false);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    const getMovies = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=02c4d81fefece2be12b10769a9e9751c&language=es-ES&page=${page}`)
            setMovies(res.data.results)
    }
    getMovies()
  }, [callback])

  return {
    movies: [movies, setMovies],
  };
}

export default MoviesAPI;
