import React from 'react';
import './search-box.style.css';


export const Search=({placeholder,handleChange})=>(
    <input className='search' 
    placeholder={placeholder}
    onChange={handleChange}
     type='search'></input>
);