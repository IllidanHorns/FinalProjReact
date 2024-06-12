import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartItem from './components/CartItem';
import {Route, Routes} from 'react-router-dom';
import ComponentElem from './components'
import Header from './components/Header';
import Overlay from './components/Overlay';

function App() {

  const [cart, setCart] = useState([])
  const[overlayItems, setoverlayItems] = useState([]);
  const [search, setsearch] = useState([]);

  useEffect(() => {
    async function axiosData(){
      const cartData = await axios.get("http://localhost:3001/boardgames") //Мы сделали запрос к API через Axios. Await ждет пока придет от API
      const overlayData = await axios.get("http://localhost:3001/overlays") //Мы сделали запрос к API через Axios. Await ждет пока придет от API
      
      setCart(cartData.data) // Устанавливает значение для переменной cart. Carddata - переменная ответа от API.,
      setoverlayItems(overlayData.data);
    }
    axiosData();
  }, [])
  //UseState - переменные, которые мы можем на странице без перезагрузки (подменять). useEffect - эффект, который рабатывает при определенных условиях.


  //Routes воспринимает только модули
  return (
    <div>
      <Header/>
        <Routes>
          <Route
            path='/home'
            element={
              <ComponentElem/> //Тут компонент ничего не принимает!
            }
            />
            <Route
            path='/boardgame'
            element={
              <CartItem item={cart}/>
            }
            />

            <Route
            path='/overlay'
            element={
              <Overlay overlayItems={overlayItems}/>
            }
            />
        </Routes>
    </div>
  );
}

export default App;

