import React from 'react';
import CardWidget from './CardWidget'; 

function Navbar() {
  return (
    <div className="nav-container">
    <nav className="navbar">
      <div className="navbar-logo">Mi Tienda</div>
      <CardWidget /> 
    </nav>
    </div>
  );
}

export default Navbar;
