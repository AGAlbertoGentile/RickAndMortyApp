import React from 'react';
import SearchBar from "../searchBar/SearchBar";
import { Link } from 'react-router-dom';
import style from './navBar.module.css';
import headerImage from '../../assets/Rick-And-Morty-PNG-File.png';



export default function NavBar({onSearch, logout}) {

    function addRandom(){
        let random = (Math.random() * 826).toFixed();
        random = Number(random);
        onSearch(random)
    }
    return (
      <div className={style.Navcontainer}>
        
        <img className={style.img} src={headerImage} alt='Rick and Morty' />
        
        <Link to={`/home`}>
            <button className={style.NavButton}>Home</button>
        </Link>
        <Link to={`/about`}>
            <button className={style.NavButton}>About</button>
        </Link>
        <Link to={`/favorites`}>
            <button className={style.NavButton}>Favorites</button>
        </Link>
        <>
            <SearchBar onSearch={onSearch} />   
            <button className={style.LogOutButton} onClick={logout}>Logout</button>
        </>
        <button className={style.addRandomButton} onClick={addRandom}>Add Random</button>
      </div>
    );
}
