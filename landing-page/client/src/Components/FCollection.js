import './FCollection.css'
import Card from './Card';
import {useEffect,useState} from "react";
import {ApiUrl} from "../const"
function FCollection() {
  const categories = [{id:1,name:"Fashion"},{id:2,name:"Accesories"},{id:1,name:"Fashion"},{id:1,name:"Fashion"}]
  const [products,setProducts] = useState()
  useEffect(() => {
    let url = "http://"+ApiUrl+"/product"
    fetch(url)
        .then((response) => response.json())
          .then((data) => {
          const niz=[]
          //console.log(data)
          for(let i = 0; i < 3;i++){
            niz[i] = data[[Math.floor(Math.random()*data.length)]]
          }
          setProducts(niz)
    });
  
}, []);
  return(
  <div class = "naslov">
    <h3>Featured Collection</h3>
    <hr/>
    <ul class="collection">
    {products && products.map(p => (
       <Card name = {p.name} imageURL={`https://res.cloudinary.com/dttoyjaor/image/upload/${p.pictures[0].publicId}`} price={p.startingPrice}/>
    ))}
    </ul>
  </div>
  );
}

export default FCollection;