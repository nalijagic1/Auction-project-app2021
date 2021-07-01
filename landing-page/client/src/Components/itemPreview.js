import "./itemPrewiew.css"
import {useEffect,useState} from "react";
import {ApiUrl} from "../const"
function ItemPreview() {
  const [p,setProduct] = useState([])
    useEffect(() => {
      let url = "http://"+ApiUrl+"/product"
      fetch(url)
          .then((response) => response.json())
            .then((data) => {
            console.log(Math.floor(Math.random()*data.length))
            setProduct(data[Math.floor(Math.random()*data.length)])
      });
    
  }, []);
  return(
    
    <div class="item">
      <div class ="detail">
        <h1 class ="name">{p.name}</h1>
        <h2>Start from ${p.startingPrice}</h2>
        <h3>{p.description}</h3>
        <button type="button" id="bidButton">BID NOW   &gt;</button>
      </div>
      {p.pictures &&
      <img src={`https://res.cloudinary.com/dttoyjaor/image/upload/${p.pictures[0].publicId}`}></img>}
     
</div>
  );
}

export default ItemPreview;