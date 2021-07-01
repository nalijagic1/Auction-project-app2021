import './Offers.css'
import Card from './Card';
import {useEffect,useState} from "react";
import {ApiUrl} from "../const"
function Offers() {
    const [products,setProducts] = useState()
    useEffect(() => {
      let url = "http://"+ApiUrl+"/product/new"
      document.getElementsByClassName("offers")[0].addEventListener('click',(event) =>{
          if(event.target.id=="new"){
            url = "http://"+ApiUrl+"/product/new"
          }else if(event.target.id=="last"){
            url="http://"+ApiUrl+"/product/old"
          }
          fetch(url)
          .then((response) => response.json())
            .then((data) => {
            //console.log(data)
            setProducts(data)
      });

      });
      fetch(url)
          .then((response) => response.json())
            .then((data) => {
            //console.log(data)
            setProducts(data)
      });
    
  }, []);
  return(
  <div class = "offers">
      <div class="options">
    <a href="#newA" id="new">New Arrivals</a>
    <a href="#topR" id="topR">Top Rated</a>
    <a href ="#lastC" id="last">Last Chance</a>
        </div>
    <hr/>
    <ul class="pro">
    {products && products.map(p => (
      <Card name = {p.name} imageURL={`https://res.cloudinary.com/dttoyjaor/image/upload/${p.pictures[0].publicId}`} price={p.startingPrice}/>
    ))}
    </ul>
  </div>
  );
}

export default Offers;