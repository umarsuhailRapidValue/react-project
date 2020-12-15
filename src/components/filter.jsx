import React from 'react'
import Data from '../data.json'
export default function Filter() {
   const handleChange=(e)=>{
        console.log(e.target.value);
    }
    return (
        
    <select id="selectGenre" onChange={e=>handleChange(e)}>
        <option>
        Select genre</option>{Data.genres.map((x,y) => <option key={y}>{x}</option>)}</select>
    )
}
