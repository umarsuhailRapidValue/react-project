import React from 'react'
import Data from '../data.json'
export default function Filter() {
    return (
        
        <select>
        {Data.map(values=>{
                <option value={values.genre}>{values.genre}</option>
        })}    
            </select>
    )
}
