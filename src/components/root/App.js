import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Routes, Route} from "react-router-dom"
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Navi/>
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/product" element={ <Dashboard/> } />
        <Route path="/cart" element={ <CartDetail/> } />
      </Routes>
    </div>
  );
}

export default App;
