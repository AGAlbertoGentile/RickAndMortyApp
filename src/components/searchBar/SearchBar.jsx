import React from 'react';
import { useState } from 'react';
// import style from './searchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;
 
   const [id, setId] = useState("");
 
   function changeHandler(e) {
     e.preventDefault();
     let input = e.target.value;
 
     setId(input);
   }
   return (
      <div>
         <input type="search" value={id} onChange={changeHandler} />
         <div>
            <button onClick={() => onSearch(id)}>Search</button>
         </div>
      </div>
   );
}
