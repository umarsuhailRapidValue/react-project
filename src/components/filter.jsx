import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import data from "../data.json";
export default function Filter() {
  const [movies, setMovies] = useContext(MovieContext);

  const handleChange = (e) => {
      console.log(e.target.value);
        const genres = movies[0].genres;
        if(e.target.value === 'Select genre'){
            const filteredMovies = movies[0].movies.filter((items) =>
            items.genres.includes(e.target.value)
          );
          setMovies([{movies:data.movies,genres:genres,moviesChanged:true,filteredMovies:data.movies}])
     
        }else{
            const filteredMovies = movies[0].movies.filter((items) =>
            items.genres.includes(e.target.value)
          );
          setMovies([{movies:data.movies,genres:genres,moviesChanged:true,filteredMovies:filteredMovies}])
     
        }
        
  };

  return (
    <select id="selectGenre" onChange={(e) => handleChange(e)}>
      <option>Select genre</option>
      {movies[0].genres.map((x, y) => (
        <option key={y}>{x}</option>
      ))}
    </select>
  );
}
