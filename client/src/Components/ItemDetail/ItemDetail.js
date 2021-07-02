import React, { isValidElement } from 'react';
import './ItemDetail.css';
import {useEffect,useState} from "react";
import {ApiUrl} from "../../const"
import Gallery from '../Gallery/Gallery';
import Countdown from 'react-countdown';
function ItemDetail({item}){
    const images = item.pictures.map((element) => ({
        src: `https://res.cloudinary.com/dttoyjaor/image/upload/${element.publicId}`
      }));
      const date = new Date(item.endingDate)
      const curdate = Date.now()
      console.log(curdate)

    const [highBid,setHighBid] = useState([])
    const [allBids,setBids] = useState([])
    useEffect(() => {
      let url = "http://"+ApiUrl+"/bids/max/"+item.id
      fetch(url)
          .then((response) => response.json())
            .then((data) => {
            console.log(data)
            if(data.length==0){
              const obj = {"bid":item.startingPrice}
              setHighBid(obj)
            }else{
              setHighBid(data[0])
            }
            
      });

      fetch("http://"+ApiUrl+"/bids/product/"+item.id)
          .then((response) => response.json())
            .then((data) => {
            console.log(data)
            setBids(data)
      });

    
  }, []);
    return(
        
            <div class='container-detail'>
                <div class ="info">
                  <Gallery images = {images}/>
                <div class = "details">
                    <h1 class ="name">{item.name}</h1>
                    <h2>Start from - ${item.startingPrice}</h2>
                    <form class="forma">
                        <input type="text" id="bid" name="enter"/> 
                        <button type="button" id ="place">PLACE BID   &gt;</button>
                        
                        <p> Enter ${highBid.bid} or more</p>
                    </form>
                    <h3>Highest bid: <a>${highBid.bid}</a></h3>
                    <h3>No bids: {allBids.length}</h3>
                    <h3><Countdown date={Date.now() + (date.getTime()-curdate)}/></h3> 
                    <br/>
                    <button type="button" id="watchlist">Watchlist</button>
                    <div class ="det">
                      <h2>Details</h2>
                      <hr/>
                      <p>{item.description}</p>
                    </div>
                </div>
            </div>
        
            </div>


    );

}

export default ItemDetail;