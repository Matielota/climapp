import React, { useState } from 'react'
import "./Searchbar.css"

export default function Saerchbar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form className='search-bar' onSubmit={(e) => {
        e.preventDefault();
        onSearch(city)
    }}> 
         <div className='hover-input'>

        <input  className='input-search' type="text" name="search" required value={city} 
        onChange={e => setCity(e.target.value)} 
        />
        <span></span>
        </div>
        <button className='contact-button' type="submit" value="add">
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> buscar</span>
                </div>    
            </button>
            
    </form>
  )
}
