import React from "react";
import "./App.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useGlobleContext } from "./Context";
// import { BrowserRouter, Routes } from "react-router-dom";
import Favorites from "./Component/Favorites";
import Search from "./Component/Search";
import Meals from "./Component/Meals";
import Modal from "./Component/Modal";

function App() {
  const {showModal, favorites} = useGlobleContext()


  return (
    <>
    {/* // <BrowserRouter> */}
        {/* // <Routes> */}
          <Search/>
          {favorites.length > 0  && <Favorites/>}
          <Meals/>
          {showModal && <Modal/>}
        {/* // </Routes> */}
    {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
