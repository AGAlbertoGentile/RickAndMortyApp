import { ADD_FAV, REMOVE_FAV } from "./typeActions";
import { ORDER, FILTER } from "./typeActions";

export const addFav = (character) => {
    return{
        type: ADD_FAV,
        payload: character
    };
};

export const removeFav = (id) =>{
    return{
        type: REMOVE_FAV,
        payload: id
    };
};


export function orderFavorites (order){
    return {    
        type: ORDER,
        payload: order
    };
}; 

export function filterFavorites(gender){
    return{
        type: FILTER,
        payload: gender
    };
};

export function resetFavorites(){
    return{
        type:RESET
    }
}