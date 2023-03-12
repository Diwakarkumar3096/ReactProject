import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

function App() {
  const Products = [
    {
      Price: 99999,
      name: "Iphone 10s Max",
      Quantity: 0,
    },
    {
      Price: 9999,
      name: "redmi 10s Max",
      Quantity: 0,
    },
  ]
  let [ProductList, setProductList]=useState(Products)
  incrementQuantity(index){
    let newProductList=[...ProductList]
  }
  return (
    <>
      <Navbar />
      <ProductList ProductArray={Products} />
    </>
  );
}

export default App;
