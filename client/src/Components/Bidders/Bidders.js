import React from 'react';
import './Bidders.css';
import {useEffect,useState} from "react";
import {ApiUrl} from "../../const"
import { format } from "date-fns";
function formatDate(dateBid){
    var date = new Date(dateBid);
    var formattedDate = format(date, "d MMMM yyyy");
    //console.log(formattedDate);
    return formattedDate
}
function Bidders({itemId}){
    const [bidders,setBidders] = useState()
    const[maximum,setMax] = useState([])
    const colorG = " #6CC0470";
  useEffect(() => {
    fetch("http://"+ApiUrl+"/bids/product/"+itemId)
      .then((response) => response.json())
        .then((data) => {
            //console.log(data)
          setMax(Math.max.apply(Math, data.map(function(o) { return o.bid; })))
          setBidders(data)
          //console.log(data[0].bid  == maximum)
      });
  }, []);
    return(
            <div class='table'>
                <table class="tbl">
                    <tr>
                        <th>Bidder</th>
                        <th>Date</th>
                        <th>Bid</th>
                </tr>
                {bidders && bidders.map(bid => (
                    <tr class="bidders">
                        <td>{bid.user.firstName+" "+bid.user.lastName}</td>
                        <td>{formatDate(bid.bidDate)}</td>
                        {bid.bid == maximum ? <td id = "highest">${bid.bid}</td> : <td>${bid.bid}</td>}
                        
                    </tr>
                ))}
            </table>        
        </div>
    );
}
export default Bidders;