import './Offers.css'
import Card from './Card';
function FProducts() {
    const categories = [{id:1,name:"Fashion"},{id:2,name:"Accesories"},{id:1,name:"Fashion"},{id:1,name:"Fashion"},{id:1,name:"Fashion"},{id:2,name:"Accesories"},
    {id:1,name:"Fashion"},{id:1,name:"Fashion"}]
    console.log(document.getElementsByClassName("pro"))
  return(
  <div class = "offers">
      <div class="options">
    <a href="#new">New Arrivals</a>
    <a href="#topR">Top Rated</a>
    <a href ="#last">Last Chance</a>
        </div>
    <hr/>
    <ul class="pro">
    {categories.map(cat => (
      <Card name ="test" imageURL="https://i.picsum.photos/id/266/200/300.jpg?hmac=nAZYC6vsnq4fuOzfge00Ylvi9ALRMbMA8wxBxIPTjs0" price="15"/>
    ))}
    </ul>
  </div>
  );
}

export default FProducts;