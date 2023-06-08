import React from 'react';
import style from './card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { useLocation } from 'react-router-dom';


export function Card({id, character, onClose, addFav, removeFav, myFavorites}) {
   
   const [closeBtn, setCloseBtn] = useState(true);

   const location = useLocation();

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = (data) => {
      if (isFav) {
        removeFav(data);
        setIsFav(false);
      } else {
        addFav(data);
        setIsFav(true);
      }
   };

   useEffect(() => {
      if(!onClose){
         setCloseBtn(false);
      }
   },[]);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={style.container}>
         {
            isFav ? (
               <button onClick={() => handleFavorite(character.id)}>❤️</button>
            ) : (
               <button onClick={() => handleFavorite(character)}>🤍</button>
            )
         }
         {closeBtn && (
            <button className={style.button} onClick={() => onClose(character.id)}>Delete</button>
         )};
         {/* {location.pathname === "/home" && (
            <button className={style.button} onClick={() => onClose(character.id)}>Delete</button>
         )}; */}

         <img src={character.image} alt={character.name} />
         <Link to={`/detail/${character.id}`}>
            <h3 className={style.title}>{character.name}</h3>
         </Link>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         
     </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites, // aca estoy sacando solo el atributo que me interesa de mi 'inicialState'
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);