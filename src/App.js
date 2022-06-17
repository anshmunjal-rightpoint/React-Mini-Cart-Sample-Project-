import { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';

export const cartData = createContext()
function App() {
  const [cartProducts, setCartProducts] = useState([])

  return (
    <div className="">
      <cartData.Provider value={[cartProducts, setCartProducts]} >
        <Header/>
        <ItemList />
      </cartData.Provider>
    </div>
  );
}

export default App;
