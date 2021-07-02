import ItemHeader from "./Components/ItemHeader/ItemHeader";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Bidders from "./Components/Bidders/Bidders";
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
      <Bidders itemId= {data.id}/>
</div>
  );
}

export default ItemPage;