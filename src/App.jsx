import './App.css'
import carrito from "./assets/carrito.svg"
import  Navbar  from "./Components/Navbar/Navbar.jsx";
import CartWidget from "./Components/CartWidget";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./Components/Cart"
import Data from "./data.json"
import ItemDettails from "./Components/ItemDetails";
import About from "./pages/About";
import HOME from "./pages/HOME.JSX"
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from "react";


function App() {
 return (
    <div>
      <img src="{carrito}" alt="" srcset="" />
    </div>
   <div className="App">
   <CardWidget />
 /
 </div>
     
  
  )
}

export default App
