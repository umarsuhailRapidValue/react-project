import React,{useContext} from 'react'
import {MovieContext} from '../context/movieContext'
export default function Filter() {
   const handleChange=(e)=>{
        console.log(e.target.value);
        const genres= movies[0].genres;
        const filteredMovies = movies[0].movies.filter(items=>
            items.genres.includes(e.target.value)
            )
            console.log([{movies:filteredMovies}]);
            setMovies([{movies:filteredMovies,genres:genres}])
        }
    const [movies,setMovies]=useContext(MovieContext)
    return (
        
    <select id="selectGenre" onChange={e=>handleChange(e)}>
        <option>
        Select genre</option>{movies[0].genres.map((x,y) => <option key={y}>{x}</option>)}</select>
    )
}
