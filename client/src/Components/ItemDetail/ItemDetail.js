import React from 'react';
import './ItemDetail.css';
import {useEffect,useState} from "react";
import {ApiUrl} from "../../const"
function ItemDetail({item}){
    const images = item.pictures.map((element) => ({
        src: `https://res.cloudinary.com/dttoyjaor/image/upload/${element.publicId}`
      }));
    console.log(images)
    const [highBid,setHighBid] = useState()
    const [allBids,setBids] = useState()
    useEffect(() => {
      let url = "http://"+ApiUrl+"/bids/max/"+item.id
      fetch(url)
          .then((response) => response.json())
            .then((data) => {
            console.log(data)
            setHighBid(data[0])
      });

      fetch("http://"+ApiUrl+"/bids/product/"+item.id)
          .then((response) => response.json())
            .then((data) => {
            console.log(data)
            setBids(data)
      });

    
  }, []);
    return(
        
            <div class='container'>
            {highBid && allBids &&
                <div>
                <div class="images">
                </div>
                <div class = "details">
                    <h1>{item.name}</h1>
                    <h2>Start from - ${item.startingPrice}</h2>
                    <form>
                        <input type="text" id="bid" name="enter"/> 
                        <button type="button">PLACE BID   &gt;</button>
                        
                        <p> Enter ${highBid.bid} or more</p>
                    </form>
                    <h3>Highest bid: <a>{highBid.bid}</a></h3>
                    <h3>No bids: {allBids.length}</h3>
                </div>
            </div>
            }
        
            </div>


    );

}

export default ItemDetail;