import './FCollection.css'
import Card from './Card';
function FCollection() {
    const categories = [{id:1,name:"Fashion"},{id:2,name:"Accesories"},{id:1,name:"Fashion"}]
  return(
  <div class = "naslov">
    <h3>Featured Collection</h3>
    <hr/>
    <ul class="collection">
    {categories.map(cat => (
      <Card name ="test" imageURL="https://i.picsum.photos/id/266/200/300.jpg?hmac=nAZYC6vsnq4fuOzfge00Ylvi9ALRMbMA8wxBxIPTjs0" price="15"/>
    ))}
    </ul>
  </div>
  );
}

export default FCollection;