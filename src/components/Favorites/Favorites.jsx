// import {connect} from "react-redux";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { orderFavorites, filterFavorites ,resetFavorites} from "../../redux/actions";
import React from "react";
// import styled from "styled-components";


export default function Favorites(){

  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites)

  function handleSort(event){
    dispatch(orderFavorites(event.target.value))};

  function handleFilter(event){
    dispatch(filterFavorites(event.target.value))};

  function handleReset(){
    dispatch(resetFavorites)};

  return (
    <div>
      <select placeholder='Gender' onChange={handleFilter}>
        {['Male','Female', 'unknown', 'Genderless'].map((gender) => 
        (<option value={gender}>{gender}</option>))};
      </select>
      <select placeholder='Order' onChange={handleSort}>
        {['Ascendente', 'Descendiente'].map((gender) => 
        (<option value={gender}>{gender}</option>))};
      </select>
      <button onClick={handleReset}>Reset</button>
      {myFavorites.map((character) => {
        return <Card key={character.id} character={character}/>
      })};
    </div>
  );	
};

// const mapStateToProps = (state) => {
//     return{
//        myFavorites: state.myFavorites, // aca estoy sacando solo el atributo que me interesa de mi 'inicialState'
//     }
//  };

// export default connect(mapStateToProps, null)(Favorites);