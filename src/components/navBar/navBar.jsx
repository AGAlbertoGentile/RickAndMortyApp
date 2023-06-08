import React from 'react';
import SearchBar from "../searchBar/SearchBar";
import { Link } from 'react-router-dom';
// import "./navBar.css";

export default function NavBar({onSearch, logout}) {

    function addRandom(){
        let random = (Math.random() * 826).toFixed();
        random = Number(random);
        onSearch(random)
    }
    return (
      <div className="nav-container">
        <SearchBar onSearch={onSearch} />   
        <button className="random" onClick={addRandom}>Add Random</button>
        <Link to={`/home`}>
            <button>Home</button>
        </Link>
        <Link to={`/about`}>
            <button>About</button>
        </Link>
        <Link to={`/favorites`}>
            <button>Favorites</button>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    );
}
