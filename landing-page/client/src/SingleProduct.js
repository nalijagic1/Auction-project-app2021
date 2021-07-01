import ItemHeader from "./Components/ItemHeader/ItemHeader";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import React, { Component } from "react";
import { useLocation } from 'react-router-dom';
function ItemPage() {
    const location = useLocation ();
    var data = location.data;
    console.log(data)
  return(
    <div>
      <ItemHeader/>
      <ItemDetail item = {data}/>
</div>
  );
}

export default ItemPage;