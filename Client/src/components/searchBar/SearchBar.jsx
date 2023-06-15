import React from 'react';
import { useState } from 'react';
import style from './searchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;
 
   const [id, setId] = useState("");
 
   function changeHandler(e) {
     e.preventDefault();
     let input = e.target.value;
 
     setId(input);
   }
   return (
      <div className={style.SerchContainer}>
         <input type="search" value={id} onChange={changeHandler} className={style.inputContainer} />
         <button className={style.SearchButton} onClick={() => onSearch(id)}>Search</button>
      </div>
   );
}
