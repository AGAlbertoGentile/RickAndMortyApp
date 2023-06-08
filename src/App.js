import './App.css';
import React, { useState , useEffect } from 'react';
import Cards from './components/cards/Cards.jsx';
import Header from './components/header/Header';
import NavBar from './components/navBar/navBar';
import axios from 'axios';
import { Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Error from './components/Error/Error';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';
import Favorites from './components/Favorites/Favorites';



function App() {

   const [characters, setCharacters] = useState([])

   function searchHandler(id) {
      if (!characters.find((character) => character.id === Number(id))) // Pregunta si el objeto 'character' no se encuentra en el array de objetos 'characters'
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]); //Crea un array nuevo en el cual agrega "data" el nuevo elemento.
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const [access, setAccess] = useState(false);
   const email = "alberto.gentile1@gmail.com";
   const password = "123456";
   
   const dispatch = useDispatch();

   let navigate = useNavigate();

   function login(userData) {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function closeHandler(id){
      let deleted = characters.filter((character) => character.id !== Number(id));
      dispatch(removeFav(id));
      setCharacters(deleted);
   }

   function logout(){
      setAccess(false);
   }

   const location = useLocation();
   
   return (
      <div className='App'>
         <Header />
         {location.pathname !== '/' && location.pathname !== '/about' && (<NavBar onSearch={searchHandler} radom={searchHandler} logout={logout}/>)}
            <Routes>
               <Route path="/" element={<Form login={login}/>} />
               <Route path="/home" element={<Cards characters={characters} onClose={closeHandler}/>} />
               <Route path="/about" element={<About />} />
               <Route path="/detail/:id" element={<Detail />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/*" element={<Error />} />
            </Routes>
      </div>
   );
}

export default App;
