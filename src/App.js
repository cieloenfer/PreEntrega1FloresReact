import HOME from "./HOME";
import React from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import CategoryList from './CategoryList';
import CardWidget from './components/CardWidget';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRooter, Routes, Route } from "react-router-dom";

const categories = [
    { id: 1, name: 'Mediacion' },
    { id: 2, name: 'Asesorias' },
    { id: 3, name: 'Litigacion' },
  ];

function App() {
    const handleCategoryClick = (category) => {
        console.log(`Categoría seleccionada: ${category.name}`);
    
      };

return( 
    <div className="App">
            <Title />
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
            <CardWidget notificationNumber={3} />
            <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
          </div>
    <>
    <BrowserRooter/>
     < Navbar/>
    <h1>Home</h1>
    <route path="/" element={<HOME/>}/>
    <Routes/>
    </>
 <BrowserRouter>
   <Navbar/>
   <HOME/>
   <About/>
   <itemListContainer greeting={"Bienvenidos a Iuris Help"} />
<Routes>
   <Route exact path="/" element={<HOME />} />
   <Route exact path="/About" element={<itemDetailContainer />} />
   <Route exact path="/Components/Cart" element={<Cart />} />
 </Routes>
 <footer/>
</BrowserRouter>
    
  

        );
      }
       

export default App;