import React from 'react'
import Data from '../data.json'
export default function Filter() {
    return (
        
    <select id="selectGenre">
        <option>
        Select genre</option>{Data.genres.map((x,y) => <option key={y}>{x}</option>)}</select>
    )
}
