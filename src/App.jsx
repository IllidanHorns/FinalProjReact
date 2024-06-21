import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartItem from './components/CartItem';
import {Route, Routes} from 'react-router-dom';
import ComponentElem from './components'
import Header from './components/Header';
import Overlay from './components/Overlay';

export const AppContext = React.createContext({});

function App() {

  const [cart, setCart] = useState([])
  const[overlayItems, setoverlayItems] = useState([]);
  const [search, setSearch] = useState('');

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

  const isAdded = (myId) => {
    return overlayItems.some((objIsAdded) => objIsAdded.myId === myId);
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/overlays/${id}`)
    setoverlayItems((over) => overlayItems.filter(item => Number(item.id) !== Number(id)));
  }

  const total_price = overlayItems.reduce((total,obj) => total + parseFloat(obj.price), 0);


  //Routes воспринимает только модули
  return (

    <AppContext.Provider value={{cart, setCart, overlayItems, setoverlayItems, isAdded}}>
      
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
                <CartItem item={cart}
                overlayItems={overlayItems}
                setoverlayItems={setoverlayItems}
                setSearch={setSearch}
                search={search}/>
              }
              />

              <Route
              path='/overlay'
              element={
                <Overlay 
                overlayItems={overlayItems}
                deleteItem ={deleteItem}
                total_price={total_price}
                />
              }
              />
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;