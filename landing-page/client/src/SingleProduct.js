import LogInBar from "./Components/LogInBar";
import Navigation from "./Components/Navigation";
import FooterBar from "./Components/FooterBar";
import React, { Component } from "react";
import Card from "./Components/Card";
import { useLocation } from 'react-router-dom';
function ItemPage() {
    const location = useLocation ();
    var data = location.data;
    console.log(data)
  return(
    <div>
</div>
  );
}

export default ItemPage;